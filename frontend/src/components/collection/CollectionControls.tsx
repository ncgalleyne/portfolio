import { usePortfolio } from '../../context/PortfolioContext';
import { CardCounter } from './CardCounter';

export function CollectionControls() {
  const { cycleCard, flipActiveCard, layoutMode, toggleLayoutMode, profile } = usePortfolio();

  return (
    <footer
      className="w-full bg-parchment-light border-t-2 border-pitch-dark px-4 py-3 z-30 shadow-md"
      role="navigation"
      aria-label="Card collection navigation"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => cycleCard(-1)}
            className="px-3 py-1 bg-parchment-dark hover:bg-parchment border border-pitch-dark text-pitch font-header text-lg rounded shadow-sm transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
            aria-label="Previous card"
          >
            &larr; PREV CARD
          </button>

          <CardCounter />

          <button
            type="button"
            onClick={() => cycleCard(1)}
            className="px-3 py-1 bg-parchment-dark hover:bg-parchment border border-pitch-dark text-pitch font-header text-lg rounded shadow-sm transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
            aria-label="Next card"
          >
            NEXT CARD &rarr;
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={flipActiveCard}
            className="flex items-center space-x-1.5 bg-pitch text-vintage-gold hover:bg-pitch-light px-4 py-1.5 rounded text-xs font-bold shadow transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
            aria-label="Flip active card (spacebar)"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>FLIP CARD (SPACEBAR)</span>
          </button>

          <button
            type="button"
            onClick={toggleLayoutMode}
            className="px-3 py-1.5 bg-parchment-dark hover:bg-parchment text-pitch border border-pitch/40 text-xs font-mono font-bold rounded shadow-sm transition focus:outline-none focus:ring-2 focus:ring-vintage-gold"
            aria-pressed={layoutMode === 'fanned'}
          >
            {layoutMode === 'fanned' ? 'FOCUS CARD' : 'SPREAD DECK'}
          </button>
        </div>

        <div className="text-[11px] font-mono text-pitch-light flex items-center space-x-3">
          <a className="hover:text-pitch underline" href={profile?.links.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <span>&bull;</span>
          <a className="hover:text-pitch underline" href={profile?.links.linkedin} target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <span>&bull;</span>
          <a
            className="hover:text-pitch font-bold text-vintage-red underline"
            href={`mailto:${profile?.links.email}`}
          >
            CONTACT &#8599;
          </a>
        </div>
      </div>
    </footer>
  );
}