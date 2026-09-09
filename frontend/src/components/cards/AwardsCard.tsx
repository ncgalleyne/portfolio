import { usePortfolio } from '../../context/PortfolioContext';

export function AwardsCard() {
  const { profile } = usePortfolio();

  if (!profile) return null;

  return (
    <div className="h-full flex flex-col p-6 font-display text-ink">
      {/* Header */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-1">AWARDS & TROPHIES</div>
        <h2 className="text-2xl font-bold leading-tight">ACHIEVEMENTS</h2>
      </div>

      {/* Stats Table */}
      <div className="mb-4">
        <div className="text-xs text-ink-soft font-mono mb-2">CAREER STATS</div>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-sm">Projects Completed</span>
            <span className="text-lg font-bold text-forest">{profile.projects?.length || 0}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-sm">Years Experience</span>
            <span className="text-lg font-bold text-forest">{profile.experience?.length || 0}+</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-sm">Skills</span>
            <span className="text-lg font-bold text-forest">{profile.skills?.length || 0}</span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-4">
        <div className="text-xs text-ink-soft font-mono mb-2">CERTIFICATIONS</div>
        <div className="text-sm text-ink-soft">
          <p>Professional certifications and achievements coming soon.</p>
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-auto pt-4 border-t border-border">
        <div className="text-xs text-ink-soft font-mono">
          ROSTER AVAILABILITY →
        </div>
      </div>
    </div>
  );
}

export function AwardsCardBack() {
  const { profile } = usePortfolio();

  if (!profile) return null;

  return (
    <div className="h-full flex flex-col p-6 font-body text-ink">
      {/* Header */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-2">ROSTER AVAILABILITY</div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green text-white text-sm font-display rounded mb-4">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          OPEN FOR WORK
        </div>
      </div>

      {/* Availability Text */}
      <div className="mb-4">
        <p className="text-sm text-ink-soft leading-relaxed">
          Currently open to new opportunities and exciting projects. Looking for roles that challenge me to grow and make meaningful impact.
        </p>
      </div>

      {/* Contact */}
      <div className="mb-4">
        <div className="text-forest text-sm font-mono mb-2">GET IN TOUCH</div>
        <a
          href={`mailto:${profile.links.email}`}
          className="text-sm text-ink hover:text-forest transition-colors"
        >
          {profile.links.email}
        </a>
      </div>

      {/* Resume Download */}
      <div className="mt-auto pt-4 border-t border-border">
        <a
          href={profile.links.resume}
          download
          className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-white text-sm font-display rounded hover:bg-green transition-colors w-full justify-center"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}