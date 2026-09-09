import { usePortfolio } from '../../context/PortfolioContext';
import { TradingCard } from '../cards/TradingCard';
import { PlayerCard, PlayerCardBack } from '../cards/PlayerCard';
import { ProjectCard, ProjectCardBack } from '../cards/ProjectCard';
import { AwardsCard, AwardsCardBack } from '../cards/AwardsCard';
import { CollectionControls } from './CollectionControls';
import { useState, useEffect } from 'react';

export function Collection() {
  const { collectionState, projects, setActiveCard } = usePortfolio();
  const { activeCardId } = collectionState;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const allCards: Array<{ id: string; type: 'player' | 'project' | 'awards' }> = [
    { id: '01', type: 'player' },
    ...projects.map(p => ({ id: p.id, type: 'project' as const })),
    { id: String(projects.length + 2).padStart(2, '0'), type: 'awards' },
  ];

  const activeIndex = allCards.findIndex(card => card.id === activeCardId);

  const handleCardFocus = (cardId: string) => {
    setActiveCard(cardId);
  };

  const getCardContent = (card: { id: string; type: 'player' | 'project' | 'awards' }) => {
    switch (card.type) {
      case 'player':
        return {
          front: <PlayerCard />,
          back: <PlayerCardBack />,
        };
      case 'project':
        return {
          front: <ProjectCard projectId={card.id} />,
          back: <ProjectCardBack projectId={card.id} />,
        };
      case 'awards':
        return {
          front: <AwardsCard />,
          back: <AwardsCardBack />,
        };
      default:
        return {
          front: <div>Unknown card type</div>,
          back: <div>Unknown card type</div>,
        };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-8 md:py-12">
      <div className="relative mb-6 md:mb-8" style={{ width: 'fit-content' }}>
        {allCards.map((card, index) => {
          const isActive = card.id === activeCardId;
          const offset = index - activeIndex;
          const content = getCardContent(card);

          // Responsive card positioning
          const cardOffset = isMobile ? offset * 20 : offset * 180;
          const cardYOffset = isMobile ? Math.abs(offset) * 8 : Math.abs(offset) * 20;

          return (
            <div
              key={card.id}
              className="absolute transition-all duration-500"
              style={{
                left: isMobile ? '0' : `${cardOffset}px`,
                top: isMobile ? `${cardYOffset}px` : '0',
                zIndex: isActive ? 10 : Math.max(1, 10 - Math.abs(offset)),
                transform: isMobile ? `scale(${isActive ? 1.1 : 1 - Math.abs(offset) * 0.1})` : `translateY(${cardYOffset}px)`,
              }}
            >
              <TradingCard
                id={card.id}
                front={content.front}
                back={content.back}
                isActive={isActive}
                onFocus={() => handleCardFocus(card.id)}
              />
            </div>
          );
        })}
      </div>

      <CollectionControls />
    </div>
  );
}