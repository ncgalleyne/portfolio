import { usePortfolio } from '../../context/PortfolioContext';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Pack() {
  const { profile, projects, openPack } = usePortfolio();
  const [isMobile, setIsMobile] = useState(false);
  const cardCount = projects.length + 2; // player card + projects + awards card

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div
        className="pack"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: isMobile ? 1.02 : 1.05, rotate: 0 }}
        whileTap={{ scale: 0.98 }}
        style={{
          width: isMobile ? '280px' : '320px',
          height: isMobile ? '392px' : '448px',
        }}
      >
        <div className="pack-content">
          <h1 className="pack-title" style={{ fontSize: isMobile ? '24px' : '32px' }}>
            {profile?.name?.toUpperCase() || 'DEVELOPER'}
          </h1>
          <p className="pack-subtitle" style={{ fontSize: isMobile ? '12px' : '14px' }}>
            DEVELOPER COLLECTION
          </p>
          
          <div className="pack-card-count" style={{ fontSize: isMobile ? '36px' : '48px' }}>
            {cardCount}
          </div>
          <div className="pack-card-label" style={{ fontSize: isMobile ? '10px' : '12px' }}>
            CARDS INSIDE
          </div>
          
          <div className="text-xs font-mono opacity-70 mb-4" style={{ fontSize: isMobile ? '10px' : '12px' }}>
            PROJECTS · EXPERIENCE · SKILLS
          </div>
        </div>

        <div className="pack-seal" style={{ width: isMobile ? '60px' : '80px', height: isMobile ? '60px' : '80px' }}>
          <div className="pack-seal-text" style={{ fontSize: isMobile ? '8px' : '10px' }}>
            2026<br/>EDITION
          </div>
        </div>

        <button
          onClick={openPack}
          className="pack-open-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow"
          style={{
            padding: isMobile ? '12px 24px' : '16px 32px',
            fontSize: isMobile ? '14px' : '18px',
          }}
          aria-label="Open card pack"
        >
          OPEN PACK
        </button>
      </motion.div>
    </div>
  );
}