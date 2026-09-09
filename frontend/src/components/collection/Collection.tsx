import { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { usePortfolio, type CardDescriptor } from "../../context/PortfolioContext"

import { TradingCard } from "../cards/TradingCard"
import { PlayerCard, PlayerCardBack } from "../cards/PlayerCard"
import { ProjectCard, ProjectCardBack } from "../cards/ProjectCard"
import { AwardsCard, AwardsCardBack } from "../cards/AwardsCard"

function renderFace(card: CardDescriptor) {
  switch (card.type) {
    case "player":
      return {
        front: <PlayerCard />,
        back: <PlayerCardBack />,
      }

    case "project":
      return {
        front: <ProjectCard projectId={card.id} />,
        back: <ProjectCardBack projectId={card.id} />,
      }

    case "awards":
      return {
        front: <AwardsCard />,
        back: <AwardsCardBack />,
      }

    default:
      return {
        front: null,
        back: null,
      }
  }
}

function computeTransform(
  index: number,
  activeIndex: number,
  totalCards: number,
  layoutMode: "focus" | "fanned"
): React.CSSProperties {
  if (layoutMode === "fanned") {
    const offset = index - (totalCards - 1) / 2
    const translateX = offset * 20
    const translateY = Math.abs(offset) * 16
    const rotateZ = offset * 6

    return {
      transform: `
        translateX(${translateX}px)
        translateY(${translateY}px)
        rotateZ(${rotateZ}deg)
        scale(0.9)
      `,
      zIndex: 20 + index,
      opacity: 1,
    }
  }

  const offset = index - activeIndex

  if (index === activeIndex) {
    return {
      transform: "translateX(0) translateY(-10px) rotateZ(0deg) scale(1.08)",
      zIndex: 40,
      opacity: 1,
    }
  }

  const translateX = offset * 2
  const translateY = Math.abs(offset) * 12 + 10
  const rotateZ = offset * 4
  const scale = Math.max(0.6, 0.88 - Math.abs(offset) * 0.05)

  const zIndex = Math.max(1, 30 - Math.abs(offset))

  const opacity = Math.abs(offset) > 2 ? 0 : 0.85

  return {
    transform: `
      translateX(${translateX}px)
      translateY(${translateY}px)
      rotateZ(${rotateZ}deg)
      scale(${scale})
    `,
    zIndex,
    opacity,
  }
}

export function Collection() {
  const {
    cards,
    activeIndex,
    layoutMode,
    setActiveCard,
    cycleCard,
    flipActiveCard,
    isFlipped,
    collectionState,
  } = usePortfolio()

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "free-snap",

    slides: {
      perView: 3,
      spacing: 3,
      origin: "center",
    },

    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 2,
          origin: "center",
        },
      },

      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 2,
          origin: "center",
        },
      },
    },

    created(instance) {
      instance.moveToIdx(activeIndex, true)
    },

    slideChanged(instance) {
      const index = instance.track.details.rel
      const card = cards[index]

      if (card && card.id !== collectionState.activeCardId) {
        setActiveCard(card.id)
      }
    },
  })

  /*
   * Keep Keen Slider synchronized with your existing
   * activeIndex state.
   */
  useEffect(() => {
    if (!slider.current) return

    const currentIndex = slider.current.track.details.rel

    if (currentIndex !== activeIndex) {
      slider.current.moveToIdx(activeIndex)
    }
  }, [activeIndex, slider])

  /*
   * Keyboard controls remain unchanged.
   */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName

      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        return
      }

      if (e.code === "Space") {
        e.preventDefault()
        flipActiveCard()
      } else if (e.code === "ArrowRight") {
        e.preventDefault()
        cycleCard(1)
      } else if (e.code === "ArrowLeft") {
        e.preventDefault()
        cycleCard(-1)
      }
    }

    window.addEventListener("keydown", handleKey)

    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  }, [cycleCard, flipActiveCard])

  return (
    <div
      className="relative w-full max-w-6xl h-140 flex items-center justify-center perspective-container"
      role="list"
      aria-label="Trading cards"
    >
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {cards.map((card, index) => {
          const isActive = card.id === collectionState.activeCardId

          const style = computeTransform(index, activeIndex, cards.length, layoutMode)

          const { front, back } = renderFace(card)

          return (
            <div
              key={card.id}
              className="keen-slider__slide flex items-center justify-center h-full"
              role="listitem"
            >
              {/*
               * IMPORTANT:
               * Keen Slider transforms this outer element.
               * computeTransform transforms this inner element.
               */}
              <div className="flex items-center justify-center h-full w-full transition-all duration-300 ease-out" style={style}>
                <TradingCard
                  id={card.id}
                  front={front}
                  back={back}
                  isActive={isActive}
                  isFlipped={isFlipped(card.id)}
                  onSelect={() => {
                    if (isActive) {
                      flipActiveCard()
                    } else {
                      setActiveCard(card.id)
                    }
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
