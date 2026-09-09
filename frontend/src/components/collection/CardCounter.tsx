import { usePortfolio } from '../../context/PortfolioContext';

export function CardCounter() {
  const { collectionState, projects } = usePortfolio();
  const { activeCardId } = collectionState;

  const allCards = [
    { id: '01', type: 'player' },
    ...projects.map(p => ({ id: p.id, type: 'project' as const })),
    { id: String(projects.length + 2).padStart(2, '0'), type: 'awards' },
  ];

  const activeIndex = allCards.findIndex(card => card.id === activeCardId);

  return (
    <div className="text-ink-soft font-mono text-sm">
      {activeIndex + 1} / {allCards.length}
    </div>
  );
}