import portfolioData from '../../portfolio_data.json';

interface Stats {
  frontend: number;
  backend: number;
  design: number;
  problemSolving: number;
}

export const stats: Stats = portfolioData.stats;