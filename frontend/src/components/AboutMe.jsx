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
            I'm {data.name.split(' ')[0]} — a software engineer currently at{' '}
            <span className="text-primary font-medium">{currentRole.company}</span>{' '}
            where I build internal platforms, micro-frontends, and developer tooling.
          </p>
          <p>
            I enjoy working across the stack — from React component systems and
            Module Federation architectures to Java microservices and AI-powered
            developer tools. I care about shipping clean, maintainable software
            that solves real problems.
          </p>
          <p>
            Previously at{' '}
            <span className="text-primary font-medium">
              {data.experience[1]?.company}
            </span>
            , where I built consumer lending products and led agile ceremonies
            for a team of engineers.
          </p>
        </div>
      </div>
    </section>
  );
}