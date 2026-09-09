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
    location?: string;
    startDate?: string;
    endDate?: string;
  }>;
  projects: Array<{
    name: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    issueDate: string;
    expirationDate: string;
    credentialId: string;
    credentialUrl: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
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
    location: e.location,
    startDate: e.startDate,
    endDate: e.endDate,
  })),

  certifications: data.certifications.map((c) => ({
    name: c.name,
    issuer: c.issuer,
    issueDate: c.issueDate,
    expirationDate: c.expirationDate,
    credentialId: c.credentialId,
    credentialUrl: c.credentialUrl,
  })),

  education: data.education.map((e) => ({
    institution: e.institution,
    degree: e.degree,
    fieldOfStudy: e.fieldOfStudy,
    startDate: e.startDate,
    endDate: e.endDate,
  })),
};