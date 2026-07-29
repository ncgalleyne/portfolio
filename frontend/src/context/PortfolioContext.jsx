import { createContext, useContext, useState, useEffect } from 'react';
import portfolioData from '../../portfolio_data.json';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate async fetch -> API call to be used later
    setData(portfolioData);
    setIsLoading(false);
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, isLoading }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
}

