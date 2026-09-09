import { usePortfolio } from '../../context/PortfolioContext';

function formatSeason(startDate?: string, endDate?: string) {
  if (!startDate && !endDate) return '—';
  const start = startDate?.match(/\d{4}/)?.[0] ?? '';
  const end = endDate?.toLowerCase().includes('present')
    ? 'Now'
    : endDate?.match(/\d{4}/)?.[0] ?? '';
  return end ? `${start}-${end.slice(-2)}` : start;
}

export function AwardsCard() {
  const { profile, projects } = usePortfolio();

  if (!profile) return null;

  const experience = profile.experience || [];

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between pb-1.5 border-b border-pitch/30">
        <span className="font-header text-lg text-pitch tracking-wider leading-none">
          ALL-TIME SEASON RECORDS
        </span>
        <span className="text-[10px] font-bold bg-pitch text-vintage-gold px-1.5 py-0.5 rounded">
          RECORD
        </span>
      </div>

      <div className="my-1 flex-1 flex flex-col justify-start">
        <div className="bg-parchment-dark border border-pitch/30 rounded overflow-hidden">
          <table className="w-full text-left border-collapse text-[10px] font-mono">
            <thead>
              <tr className="bg-pitch text-parchment-light border-b border-pitch">
                <th className="p-1">SEASON</th>
                <th className="p-1">CLUB / TEAM</th>
                <th className="p-1 text-right">ROLE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pitch/15">
              {experience.map((exp, i) => (
                <tr key={`${exp.company}-${i}`}>
                  <td className="p-1 font-bold">{formatSeason(exp.startDate, exp.endDate)}</td>
                  <td className="p-1 truncate max-w-35">{exp.company}</td>
                  <td className="p-1 text-right text-pitch font-bold truncate max-w-28">
                    {exp.title.replace('Software Engineer', 'SE')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 space-y-1">
          <span className="text-[10px] font-bold text-pitch font-mono uppercase tracking-wider block">
            Career Ledger
          </span>
          <div className="space-y-1 text-[10px]">
            <div className="flex items-center justify-between bg-parchment-dark/60 p-1 rounded border border-pitch/20">
              <span className="font-bold">&#127942; Projects Shipped</span>
              <span className="text-pitch-light">{projects.length}</span>
            </div>
            <div className="flex items-center justify-between bg-parchment-dark/60 p-1 rounded border border-pitch/20">
              <span className="font-bold">&#127941; Career Roles</span>
              <span className="text-pitch-light">{experience.length}</span>
            </div>
            <div className="flex items-center justify-between bg-parchment-dark/60 p-1 rounded border border-pitch/20">
              <span className="font-bold">&#127891; Verified Skills</span>
              <span className="text-pitch-light">{profile.skills.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pitch text-parchment-light px-3 py-1.5 rounded flex items-center justify-between shadow-sm">
        <div>
          <h3 className="font-header text-xl tracking-wider text-vintage-gold leading-none">
            CAREER LEDGER
          </h3>
          <p className="text-[9px] font-mono uppercase tracking-widest text-parchment-dark">
            Total Career Impact
          </p>
        </div>
        <span className="text-xs font-bold text-vintage-gold font-mono">
          {experience.length}+ ROLES
        </span>
      </div>

      <div className="text-center pt-1 border-t border-pitch/20 flex justify-between items-center text-[9px] text-pitch/70">
        <span>OFFICIAL LEAGUE RECORD</span>
        <span className="underline font-bold text-pitch">FLIP FOR RESUME CTA &#8635;</span>
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
          STATUS: PRINCIPAL / LEAD ROLES
        </p>
      </div>

      <div className="my-2 space-y-2 text-xs leading-relaxed text-pitch-dark">
        <p className="font-bold text-pitch">
          Currently open to select Advisory, Principal Engineering, or Technical Lead opportunities.
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