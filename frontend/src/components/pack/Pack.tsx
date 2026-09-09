import { useState } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../../context/PortfolioContext';

export function Pack() {
  const { profile, cards, openPack } = usePortfolio();
  const [isTearing, setIsTearing] = useState(false);

  const handleTear = () => {
    if (isTearing) return;
    setIsTearing(true);
    window.setTimeout(() => openPack(), 420);
  };

  const displayName = profile?.name?.toUpperCase() || 'DEVELOPER';
  const displayTitle = profile?.title || 'Full-Stack Developer';

  return (
    <motion.div
      className={`wax-pack z-40 w-80 sm:w-96 ${isTearing ? 'is-tearing' : ''}`}
      initial={{ scale: 0.85, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="wax-pack-crimp crimp-edge" />

      <div className="wax-pack-body">
        <div className="wax-pack-shimmer foil-shimmer" />

        <div className="relative z-10 space-y-1 text-center">
          <div className="inline-block bg-vintage-red text-parchment-light text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded shadow">
            1st Edition &bull; Special Issue
          </div>
          <p className="text-[11px] font-mono text-vintage-gold tracking-widest uppercase">
            All-Star Developer Series
          </p>
        </div>

        <div className="relative z-10 my-6 flex flex-col items-center">
          <div className="wax-pack-badge">
            <span className="wax-pack-badge-number">94</span>
            <span className="wax-pack-badge-label">KICKOFF</span>
            <div className="wax-pack-badge-chip">TECH DEVS</div>
          </div>

          <h2 className="font-header text-3xl sm:text-4xl text-parchment-light mt-5 tracking-wider leading-none">
            {displayName}
          </h2>
          <p className="font-editorial italic text-xs text-vintage-gold tracking-wide mt-1">
            {displayTitle} &bull; Silicon Valley United
          </p>
          <div className="w-44 h-0.5 bg-vintage-gold/40 my-3" />
          <p className="text-[10px] font-mono text-parchment-dark max-w-60 text-center leading-relaxed">
            CONTAINS {cards.length} PREMIUM ENCRYPTED CARDS: PROFILE, PROJECTS &amp; CAREER RECORD.
          </p>
        </div>

        <div className="relative z-10 w-full mt-2">
          <button
            type="button"
            onClick={handleTear}
            className="wax-pack-tear-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vintage-gold"
            aria-label="Tear and open pack"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <span>&#9986;</span>
              <span>TEAR &amp; OPEN PACK</span>
            </span>
          </button>
          <span className="text-[9px] text-parchment-dark/70 uppercase tracking-widest mt-2 block text-center">
            Rip along perforation to reveal collection
          </span>
        </div>
      </div>

      <div className="wax-pack-crimp wax-pack-crimp-bottom crimp-edge" />
    </motion.div>
  );
}