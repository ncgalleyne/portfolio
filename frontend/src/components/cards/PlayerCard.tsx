import { usePortfolio } from '../../context/PortfolioContext';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { Stat } from '../ui/Stat';

export function PlayerCard() {
  const { profile, stats } = usePortfolio();
  if (!profile || !stats) return null;

  return (
    <div className="h-full flex flex-col p-6 font-display text-ink">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-forest text-sm font-mono mb-1">HOMEBASE / 01</div>
          <h2 className="text-3xl font-bold leading-tight">{profile.name}</h2>
          <p className="text-ink-soft text-lg font-body">{profile.title}</p>
        </div>
        <div className="text-right">
          <div className="text-6xl font-bold text-forest">01</div>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-ink-soft text-sm font-mono mb-6">
        <MapPin size={16} />
        <span>{profile.location}</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Stat label="FRONTEND" value={stats.frontend} />
        <Stat label="BACKEND" value={stats.backend} />
        <Stat label="DESIGN" value={stats.design} />
        <Stat label="PROBLEM SOLVING" value={stats.problemSolving} />
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="text-xs text-ink-soft font-mono mb-2">SKILLS</div>
        <div className="flex flex-wrap gap-2">
          {profile.skills.slice(0, 6).map((skill, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-forest/10 text-forest rounded font-mono"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex justify-between text-xs text-ink-soft font-mono">
          <span>PROJECTS: {profile.projects?.length || 0}</span>
          <span>EXPERIENCE: {profile.experience?.length || 0}</span>
        </div>
      </div>
    </div>
  );
}

export function PlayerCardBack() {
  const { profile } = usePortfolio();
  if (!profile) return null;

  return (
    <div className="h-full flex flex-col p-6 font-body text-ink">
      {/* Header */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-2">ABOUT</div>
        <p className="text-sm leading-relaxed">{profile.about}</p>
      </div>

      {/* All Skills */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-2">SKILLS</div>
        <div className="grid grid-cols-2 gap-2">
          {profile.skills.map((skill, index) => (
            <div key={index} className="text-xs text-ink-soft flex items-center gap-2">
              <div className="w-1 h-1 bg-forest rounded-full" />
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-auto pt-4 border-t border-border">
        <div className="text-forest text-sm font-mono mb-3">CONTACT</div>
        <div className="space-y-2">
          <a
            href={`mailto:${profile.links.email}`}
            className="flex items-center gap-2 text-sm text-ink hover:text-forest transition-colors"
          >
            <Mail size={16} />
            {profile.links.email}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-ink hover:text-forest transition-colors"
          >
            {/* <Github size={16} /> */}
            GitHub
            <ExternalLink size={12} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-ink hover:text-forest transition-colors"
          >
            {/* <Linkedin size={16} /> */}
            LinkedIn
            <ExternalLink size={12} />
          </a>
        </div>
        
        {/* Resume Download */}
        <a
          href={profile.links.resume}
          download
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-forest text-white text-sm font-display rounded hover:bg-green transition-colors"
        >
          <ExternalLink size={16} />
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}