import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { stats } from '../data/stats';

type AppState = 'sealed' | 'opening' | 'collection';

interface CollectionState {
  activeCardId: string;
  flipped: boolean;
}

interface PortfolioContextValue {
  appState: AppState;
  collectionState: CollectionState;
  profile: typeof profile;
  projects: typeof projects;
  stats: typeof stats;
  isLoading: boolean;
  openPack: () => void;
  revealCollection: () => void;
  setActiveCard: (cardId: string) => void;
  toggleFlip: () => void;
  resetFlip: () => void;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [appState, setAppState] = useState<AppState>('sealed');
  const [collectionState, setCollectionState] = useState<CollectionState>({
    activeCardId: '01',
    flipped: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate async fetch -> API call to be used later
    setIsLoading(false);
  }, []);

  const openPack = () => {
    setAppState('opening');
  };

  const revealCollection = () => {
    setAppState('collection');
  };

  const setActiveCard = (cardId: string) => {
    setCollectionState(prev => ({ ...prev, activeCardId: cardId, flipped: false }));
  };

  const toggleFlip = () => {
    setCollectionState(prev => ({ ...prev, flipped: !prev.flipped }));
  };

  const resetFlip = () => {
    setCollectionState(prev => ({ ...prev, flipped: false }));
  };

  return (
    <PortfolioContext.Provider value={{
      appState,
      collectionState,
      profile,
      projects,
      stats,
      isLoading,
      openPack,
      revealCollection,
      setActiveCard,
      toggleFlip,
      resetFlip,
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio(): PortfolioContextValue {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
}

