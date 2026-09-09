import { ReactNode } from 'react';
import { CardFront } from './CardFront';
import { CardBack } from './CardBack';

interface TradingCardProps {
  id: string;
  front: ReactNode;
  back: ReactNode;
  isActive: boolean;
  isFlipped: boolean;
  onSelect: () => void;
}

export function TradingCard({ id, front, back, isActive, isFlipped, onSelect }: TradingCardProps) {
  return (
    <div
      className="card-item w-75 sm:w-85 h-125 rounded-xl"
      id={`card-${id}`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Card ${id}${isActive ? ', focused' : ''}${isFlipped ? ', showing back' : ''}`}
      aria-pressed={isActive}
    >
      <div className={`card-flipper ${isFlipped ? 'is-flipped' : ''}`}>
        <CardFront>{front}</CardFront>
        <CardBack>{back}</CardBack>
      </div>
    </div>
  )
}