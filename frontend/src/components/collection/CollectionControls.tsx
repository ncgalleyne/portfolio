import { usePortfolio } from '../../context/PortfolioContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CardCounter } from './CardCounter';
import { useState, useEffect } from 'react';

export function CollectionControls() {
  const { collectionState, projects, setActiveCard } = usePortfolio();
  const { activeCardId } = collectionState;
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

  const activeIndex = allCards.findIndex(card => card.id === activeCardId);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveCard(allCards[activeIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (activeIndex < allCards.length - 1) {
      setActiveCard(allCards[activeIndex + 1].id);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 py-6 md:py-8" role="navigation" aria-label="Card collection navigation">
      <button
        onClick={handlePrevious}
        disabled={activeIndex === 0}
        className={`rounded-full bg-forest text-white flex items-center justify-center hover:bg-green transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest ${isMobile ? 'w-10 h-10' : 'w-12 h-12'}`}
        aria-label="Previous card"
        tabIndex={0}
      >
        <ChevronLeft size={isMobile ? 20 : 24} />
      </button>

      <CardCounter />

      <button
        onClick={handleNext}
        disabled={activeIndex === allCards.length - 1}
        className={`rounded-full bg-forest text-white flex items-center justify-center hover:bg-green transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest ${isMobile ? 'w-10 h-10' : 'w-12 h-12'}`}
        aria-label="Next card"
        tabIndex={0}
      >
        <ChevronRight size={isMobile ? 20 : 24} />
      </button>
    </div>
  );
}