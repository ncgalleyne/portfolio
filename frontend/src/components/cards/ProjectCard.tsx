import { usePortfolio } from '../../context/PortfolioContext';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  projectId: string;
}

export function ProjectCard({ projectId }: ProjectCardProps) {
  const { projects } = usePortfolio();
  const project = projects.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <div className="h-full flex flex-col p-6 font-display text-ink">
      {/* Header */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-1">PROJECT {project.id}</div>
        <h2 className="text-2xl font-bold leading-tight mb-2">{project.name}</h2>
        <p className="text-ink-soft text-sm font-body">{project.category}</p>
      </div>

      {/* Year */}
      <div className="text-forest text-lg font-mono mb-4">{project.year}</div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-sm text-ink-soft leading-relaxed">{project.description}</p>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <div className="text-xs text-ink-soft font-mono mb-2">BUILT WITH</div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-forest/10 text-forest rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex justify-between text-xs text-ink-soft font-mono">
          <span>ROLE: {project.role}</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectCardBack({ projectId }: ProjectCardProps) {
  const { projects } = usePortfolio();
  const project = projects.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <div className="h-full flex flex-col p-6 font-body text-ink">
      {/* Project Overview */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-2">PROJECT OVERVIEW</div>
        <p className="text-sm text-ink-soft leading-relaxed">{project.description}</p>
      </div>

      {/* Role */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-2">MY ROLE</div>
        <p className="text-sm text-ink-soft">{project.role}</p>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-2">BUILT WITH</div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-forest/10 text-forest rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Outcome */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-2">OUTCOME</div>
        <p className="text-sm text-ink-soft leading-relaxed">{project.outcome}</p>
      </div>

      {/* Actions */}
      <div className="mt-auto pt-4 border-t border-border space-y-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-forest text-white text-sm font-display rounded hover:bg-green transition-colors"
          >
            <ExternalLink size={16} />
            VIEW PROJECT
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-paper-dark text-ink text-sm font-display rounded hover:bg-paper transition-colors border border-border"
          >
            <ExternalLink size={16} />
            VIEW SOURCE
          </a>
        )}
      </div>
    </div>
  );
}