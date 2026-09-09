import { CSSProperties, useEffect } from 'react';
import { usePortfolio, type CardDescriptor } from '../../context/PortfolioContext';
import { TradingCard } from '../cards/TradingCard';
import { PlayerCard, PlayerCardBack } from '../cards/PlayerCard';
import { ProjectCard, ProjectCardBack } from '../cards/ProjectCard';
import { AwardsCard, AwardsCardBack } from '../cards/AwardsCard';

function renderFace(card: CardDescriptor) {
  switch (card.type) {
    case 'player':
      return { front: <PlayerCard />, back: <PlayerCardBack /> };
    case 'project':
      return {
        front: <ProjectCard projectId={card.id} />,
        back: <ProjectCardBack projectId={card.id} />,
      };
    case 'awards':
      return { front: <AwardsCard />, back: <AwardsCardBack /> };
    default:
      return { front: null, back: null };
  }
}

function computeTransform(
  index: number,
  activeIndex: number,
  totalCards: number,
  layoutMode: 'focus' | 'fanned',
): CSSProperties {
  if (layoutMode === 'fanned') {
    const offset = index - (totalCards - 1) / 2;
    const translateX = offset * 140;
    const translateY = Math.abs(offset) * 16;
    const rotateZ = offset * 6;
    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(0.9)`,
      zIndex: 20 + index,
      opacity: 1,
    };
  }

  const offset = index - activeIndex;
  if (index === activeIndex) {
    return {
      transform: 'translateX(0) translateY(-10px) rotateZ(0deg) scale(1.08)',
      zIndex: 40,
      opacity: 1,
    };
  }

  const translateX = offset * 110;
  const translateY = Math.abs(offset) * 12 + 10;
  const rotateZ = offset * 4;
  const scale = Math.max(0.6, 0.88 - Math.abs(offset) * 0.05);
  const zIndex = Math.max(1, 30 - Math.abs(offset));
  const opacity = Math.abs(offset) > 2 ? 0 : 0.85;

  return {
    transform: `translateX(${translateX}px) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
    zIndex,
    opacity,
  };
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
  } = usePortfolio();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        flipActiveCard();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        cycleCard(1);
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        cycleCard(-1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [cycleCard, flipActiveCard]);

  return (
    <div
      className="relative w-full max-w-6xl h-140 flex items-center justify-center perspective-container"
      role="list"
      aria-label="Trading cards"
    >
      {cards.map((card, index) => {
        const isActive = card.id === collectionState.activeCardId;
        const style = computeTransform(index, activeIndex, cards.length, layoutMode);
        const { front, back } = renderFace(card);

        return (
          <TradingCard
            key={card.id}
            id={card.id}
            front={front}
            back={back}
            isActive={isActive}
            isFlipped={isFlipped(card.id)}
            style={style}
            onSelect={() => (isActive ? flipActiveCard() : setActiveCard(card.id))}
          />
        );
      })}
    </div>
  );
}