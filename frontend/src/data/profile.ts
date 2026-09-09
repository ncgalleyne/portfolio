import portfolioData from '../../portfolio_data.json';

interface PortfolioData {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  about: string;
  skills: string[];
  stats: {
    frontend: number;
    backend: number;
    design: number;
    problemSolving: number;
  };
  experience: Array<{
    title: string;
    company: string;
  }>;
  projects: Array<{
    name: string;
  }>;
}

const data = portfolioData as PortfolioData;

export const profile = {
  name: data.name,
  title: data.title,
  location: data.location,
  number: "01",

  skills: data.skills,

  links: {
    email: data.email,
    github: data.github,
    linkedin: data.linkedin,
    resume: data.resume,
  },

  about: data.about,

  projects: data.projects.map((p) => ({ name: p.name })),

  experience: data.experience.map((e) => ({
    title: e.title,
    company: e.company,
  })),
};