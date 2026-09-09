import portfolioData from '../../portfolio_data.json';

interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
  outcome: string;
  liveUrl: string;
  sourceUrl: string;
}

export const projects: Project[] = portfolioData.projects.map((p: any) => ({
  id: p.id,
  name: p.name,
  category: p.category,
  year: p.year,
  description: p.description,
  image: p.image,
  technologies: p.technologies,
  role: p.role,
  outcome: p.outcome,
  liveUrl: p.liveUrl,
  sourceUrl: p.sourceUrl,
}));