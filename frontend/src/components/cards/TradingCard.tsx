import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CardFrame } from './CardFrame';
import { CardFront } from './CardFront';
import { CardBack } from './CardBack';

interface TradingCardProps {
  id: string;
  front: React.ReactNode;
  back: React.ReactNode;
  isActive?: boolean;
  onFocus?: () => void;
}

export function TradingCard({ id, front, back, isActive = false, onFocus }: TradingCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleClick = () => {
    if (onFocus) {
      onFocus();
    }
  };

  // Responsive card sizes
  const getCardWidth = () => {
    if (isMobile) {
      return isActive ? '280px' : '240px';
    }
    return isActive ? '400px' : '310px';
  };

  return (
    <motion.div
      className="card"
      id={id}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      whileHover={{
        y: isMobile ? -8 : -12,
        rotate: 0,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        width: getCardWidth(),
        zIndex: isActive ? 10 : 1,
      }}
      animate={{
        scale: isActive ? 1.1 : 1,
        y: isActive ? -20 : 0,
      }}
      role="button"
      tabIndex={0}
      aria-label={`Card ${id}${isActive ? ', focused' : ''}`}
      aria-pressed={isActive}
    >
      <CardFrame />
      <div className={`card-inner ${flipped ? 'is-flipped' : ''}`}>
        <CardFront>{front}</CardFront>
        <CardBack>{back}</CardBack>
      </div>
      
      {/* Flip indicator */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleFlip();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            handleFlip();
          }
        }}
        className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-forest/80 hover:bg-forest text-white flex items-center justify-center transition-colors z-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest"
        aria-label="Flip card"
        aria-pressed={flipped}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 21h5v-5" />
        </svg>
      </button>
    </motion.div>
  );
}