import { usePortfolio } from '../../context/PortfolioContext';

export function CardCounter() {
  const { cards, activeIndex } = usePortfolio();
  const current = String(Math.max(0, activeIndex) + 1).padStart(2, '0');
  const total = String(cards.length).padStart(2, '0');

  return (
    <span className="text-xs font-mono font-bold tracking-widest text-pitch bg-pitch/10 px-2.5 py-1 rounded">
      CARD [ {current} / {total} ]
    </span>
  );
}