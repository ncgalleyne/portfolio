import { usePortfolio } from '../context/PortfolioContext';

export default function AboutMe() {
  const { data, isLoading } = usePortfolio();

  if (isLoading) return null;

  const currentRole = data.experience[0];

  return (
    <section id="about" className="px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          About Me
        </h2>
        <div className="flex flex-col gap-4 text-sm md:text-base text-outline leading-relaxed">
          <p>
            I'm {data.name.split(' ')[0]} — a mid-to-senior level software engineer with experience building scalable, user-focused products across the frontend and full stack. While my strongest expertise lies in frontend engineering, I've spent my career delivering end-to-end solutions spanning modern web applications, backend services, and cloud infrastructure.
          </p>
          <p>
            At <span className="text-primary font-medium">{currentRole.company}</span>, I build internal platforms and scalable applications using React, Node.js, and cloud technologies, focusing on performance, maintainability, and developer experience. I enjoy solving complex problems across the stack—from designing reusable React component systems and Module Federation architectures to building Java microservices and AI-powered developer tools.
          </p>
          <p>
            Beyond my professional experience, I've built and launched a complete e-commerce platform for a clothing brand using Next.js, helping establish its online presence and drive product sales. Delivering a product from concept to production reinforced my passion for building software that creates measurable business impact, not just technical solutions.
          </p>
        </div>
      </div>
    </section>
  );
}