import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { stats } from '../data/stats';

type AppState = 'sealed' | 'opening' | 'collection';
type LayoutMode = 'focus' | 'fanned';

export type CardType = 'player' | 'project' | 'awards';

export interface CardDescriptor {
  id: string;
  type: CardType;
}

interface CollectionState {
  activeCardId: string;
  flippedIds: Set<string>;
}

interface PortfolioContextValue {
  appState: AppState;
  layoutMode: LayoutMode;
  collectionState: CollectionState;
  cards: CardDescriptor[];
  activeIndex: number;
  profile: typeof profile;
  projects: typeof projects;
  stats: typeof stats;
  isLoading: boolean;
  openPack: () => void;
  revealCollection: () => void;
  resetToPack: () => void;
  setActiveCard: (cardId: string) => void;
  cycleCard: (direction: 1 | -1) => void;
  flipActiveCard: () => void;
  isFlipped: (cardId: string) => boolean;
  toggleLayoutMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [appState, setAppState] = useState<AppState>('sealed');
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('focus');
  const [collectionState, setCollectionState] = useState<CollectionState>({
    activeCardId: '01',
    flippedIds: new Set(),
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const cards = useMemo<CardDescriptor[]>(() => [
    { id: '01', type: 'player' },
    ...projects.map(p => ({ id: p.id, type: 'project' as const })),
    { id: 'awards', type: 'awards' },
  ], []);

  const activeIndex = cards.findIndex(card => card.id === collectionState.activeCardId);

  const openPack = useCallback(() => setAppState('opening'), []);
  const revealCollection = useCallback(() => setAppState('collection'), []);
  const resetToPack = useCallback(() => {
    setAppState('sealed');
    setCollectionState({ activeCardId: cards[0]?.id ?? '01', flippedIds: new Set() });
    setLayoutMode('focus');
  }, [cards]);

  const setActiveCard = useCallback((cardId: string) => {
    setCollectionState(prev => ({ ...prev, activeCardId: cardId }));
  }, []);

  const cycleCard = useCallback((direction: 1 | -1) => {
    setCollectionState(prev => {
      const idx = cards.findIndex(c => c.id === prev.activeCardId);
      const nextIdx = (idx + direction + cards.length) % cards.length;
      return { ...prev, activeCardId: cards[nextIdx].id };
    });
  }, [cards]);

  const flipActiveCard = useCallback(() => {
    setCollectionState(prev => {
      const next = new Set(prev.flippedIds);
      if (next.has(prev.activeCardId)) next.delete(prev.activeCardId);
      else next.add(prev.activeCardId);
      return { ...prev, flippedIds: next };
    });
  }, []);

  const isFlipped = useCallback(
    (cardId: string) => collectionState.flippedIds.has(cardId),
    [collectionState.flippedIds],
  );

  const toggleLayoutMode = useCallback(() => {
    setLayoutMode(prev => (prev === 'focus' ? 'fanned' : 'focus'));
  }, []);

  return (
    <PortfolioContext.Provider value={{
      appState,
      layoutMode,
      collectionState,
      cards,
      activeIndex,
      profile,
      projects,
      stats,
      isLoading,
      openPack,
      revealCollection,
      resetToPack,
      setActiveCard,
      cycleCard,
      flipActiveCard,
      isFlipped,
      toggleLayoutMode,
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

