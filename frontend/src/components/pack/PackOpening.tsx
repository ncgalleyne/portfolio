import { motion, AnimatePresence } from 'motion/react';
import { usePortfolio } from '../../context/PortfolioContext';
import { TradingCard } from '../cards/TradingCard';
import { PlayerCard, PlayerCardBack } from '../cards/PlayerCard';
import { ProjectCard, ProjectCardBack } from '../cards/ProjectCard';
import { AwardsCard, AwardsCardBack } from '../cards/AwardsCard';
import { useEffect, useState } from 'react';

export function PackOpening() {
  const { projects, revealCollection } = usePortfolio();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const allCards = [
    { id: '01', type: 'player' },
    ...projects.map(p => ({ id: p.id, type: 'project' as const })),
    { id: String(projects.length + 2).padStart(2, '0'), type: 'awards' },
  ];

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

  // Animation completes and transitions to collection
  useEffect(() => {
    const timer = setTimeout(() => {
      revealCollection();
    }, 2000);
    return () => clearTimeout(timer);
  }, [revealCollection]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="relative" style={{ width: 'fit-content' }}>
        <AnimatePresence>
          {allCards.map((card, index) => {
            const content = getCardContent(card);
            const cardOffset = isMobile ? (index - Math.floor(allCards.length / 2)) * 20 : (index - Math.floor(allCards.length / 2)) * 40;
            
            return (
              <motion.div
                key={card.id}
                className="absolute"
                initial={{ 
                  scale: 0, 
                  rotate: Math.random() * 30 - 15,
                  y: 100,
                  opacity: 0
                }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  y: 0,
                  opacity: 1,
                  x: cardOffset
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: 'easeOut'
                }}
                style={{
                  zIndex: index,
                }}
              >
                <TradingCard
                  id={card.id}
                  front={content.front}
                  back={content.back}
                  isActive={false}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}