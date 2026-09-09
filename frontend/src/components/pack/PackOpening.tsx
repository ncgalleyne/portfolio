import { useEffect } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../../context/PortfolioContext';

export function PackOpening() {
  const { cards, revealCollection } = usePortfolio();
  const midpoint = (cards.length - 1) / 2;

  useEffect(() => {
    const timer = window.setTimeout(() => revealCollection(), 1400);
    return () => window.clearTimeout(timer);
  }, [revealCollection]);

  return (
    <div className="relative w-full max-w-6xl h-130 flex items-center justify-center perspective-container">
      {cards.map((card, index) => {
        const offset = index - midpoint;
        return (
          <motion.div
            key={card.id}
            className="absolute w-60 sm:w-70 h-100 rounded-xl paper-texture vintage-card-border shadow-card"
            initial={{ scale: 0.2, y: 40, x: 0, rotateZ: 0, opacity: 0 }}
            animate={{
              scale: 0.9,
              y: Math.abs(offset) * 14,
              x: offset * 110,
              rotateZ: offset * 5,
              opacity: 1,
            }}
            transition={{
              delay: 0.08 * index,
              duration: 0.55,
              ease: [0.34, 1.3, 0.64, 1],
            }}
            style={{ zIndex: 20 + index }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-pitch">
              <span className="font-header text-lg tracking-widest">CARD</span>
              <span className="font-header text-4xl">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-pitch-light">
                {card.type}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}