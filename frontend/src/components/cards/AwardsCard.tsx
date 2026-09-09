import { usePortfolio } from '../../context/PortfolioContext';

function formatYearRange(startDate?: string, endDate?: string) {
  if (!startDate && !endDate) return '—';
  const start = startDate?.match(/\d{4}/)?.[0] ?? '';
  const end = endDate?.toLowerCase().includes('present')
    ? 'Present'
    : endDate?.match(/\d{4}/)?.[0] ?? '';
  return end ? `${start} — ${end}` : start;
}

export function AwardsCard() {
  const { profile } = usePortfolio();

  if (!profile) return null;

  const experience = profile.experience || [];
  const education = profile.education?.[0];
  const certifications = profile.certifications || [];

  return (
    <div className="h-full flex flex-col gap-5">
      {/* Header Badge & Card Metadata */}
      <div className="flex items-start justify-between border-b-2 border-pitch/30 pb-2">
        <span className="font-header text-lg text-pitch tracking-wider leading-none">
          CAREER MILESTONES
        </span>
        <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider bg-pitch text-vintage-gold rounded uppercase">ALL-TIME</span>
      </div>

      {/* Vertical Career Timeline */}
      <div className="py-2">
        <div className="relative pl-6 border-l-2 border-pitch/40 space-y-5">
          {experience.map((exp, i) => (
            <div key={`${exp.company}-${i}`} className="relative">
              <div className={`absolute -left-7.75 top-1 w-3.5 h-3.5 rounded-full border-2 border-[#fbf8ee] ring-2 ${
                i === 0 ? 'bg-pitch ring-pitch' :
                i === 1 ? 'bg-[#3d7059] ring-[#3d7059]' :
                'bg-[#6a8779] ring-[#6a8779]'
              }`}></div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono font-bold text-pitch">{formatYearRange(exp.startDate, exp.endDate)}</span>
                <span className="text-[9px] font-mono uppercase text-[#5a6e63]">
                  {i === 0 ? 'Current Role' : i === 1 ? 'Full-Stack' : 'First Job'}
                </span>
              </div>
              <p className="text-sm font-bold text-[#11241b]">{exp.title}</p>
              <p className="text-xs text-[#2d4b3c]">{exp.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards and Trophies Section */}
      <div className="py-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold font-mono tracking-wider text-pitch uppercase">★ AWARDS & TROPHIES</span>
          <div className="h-px bg-pitch/30 grow"></div>
        </div>

        <ul className="space-y-1.5 text-xs font-sans text-[#1c2e24]">
          {education && (
            <li className="flex items-start gap-2">
              <span className="text-[#b28228] font-bold leading-none">★</span>
              <div>
                <span className="font-bold">{education.degree} in {education.fieldOfStudy}</span>
                <span className="text-[#4f6458] block text-[11px]">{education.institution} · Class Honors · Washington, D.C.</span>
              </div>
            </li>
          )}
          {certifications.map((cert, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#b28228] font-bold leading-none">★</span>
              <div>
                <span className="font-bold">{cert.name}</span>
                <span className="text-[#4f6458] block text-[11px]">{cert.issuer} · {cert.issueDate}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AwardsCardBack() {
  const { profile } = usePortfolio();

  if (!profile) return null;

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="border-b-2 border-pitch pb-2">
        <div className="flex justify-between items-center">
          <span className="font-header text-xl text-pitch">ROSTER AVAILABILITY</span>
          <span className="bg-vintage-red text-parchment-light font-mono font-bold text-[10px] px-1.5 rounded">
            OPEN FOR 2026
          </span>
        </div>
        <p className="text-[10px] text-pitch/70 font-mono mt-0.5">
          STATUS: MID / SENIOR LEVEL ROLES
        </p>
      </div>

      <div className="my-2 space-y-2 text-xs leading-relaxed text-pitch-dark">
        <p className="font-bold text-pitch">
          Currently open to select Full-Stack, Senior Software Engineer, or Frontend Developer opportunities.
        </p>
        <p className="text-[11px]">
          Seeking high-impact teams tackling ambitious distributed interfaces, next-generation AI
          developer tools, and creative technology.
        </p>
        <div className="bg-parchment-dark p-2.5 rounded border border-pitch/30">
          <div className="text-[10px] font-bold text-pitch font-mono">
            DIRECT SCOUTING HOTLINE:
          </div>
          <div className="text-xs font-mono select-all text-vintage-red mt-0.5">
            {profile.links.email}
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-pitch/20">
        <a
          href={profile.links.resume}
          download
          className="w-full block text-center bg-vintage-gold hover:bg-amber-400 text-pitch-dark font-header text-xl py-2 px-3 rounded shadow border border-pitch transition active:scale-95"
        >
          &#128229; DOWNLOAD OFFICIAL RESUME (PDF)
        </a>
        <div className="text-[9px] text-center text-pitch/60 font-mono">
          INCLUDES REFERENCES &amp; VERIFIED PRODUCTION METRICS
        </div>
      </div>
    </div>
  );
}