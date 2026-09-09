import { usePortfolio } from '../../context/PortfolioContext';
import { Stat } from '../ui/Stat';

const PLAYER_PORTRAIT_URL =
  'https://res.cloudinary.com/dkdloke4m/image/upload/v1788978271/unnamed_hizqzw.jpg';

export function PlayerCard() {
  const { profile, stats } = usePortfolio();
  if (!profile || !stats) return null;

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between pb-1.5 border-b border-pitch/30">
        <span className="font-header text-lg text-pitch tracking-wider leading-none">
          SOFTWARE ALL-STARS
        </span>
        <span className="text-[10px] font-bold bg-pitch text-vintage-gold px-1.5 py-0.5 rounded">
          CARD #01
        </span>
      </div>

      <div className="relative my-2 rounded border-2 border-pitch-dark overflow-hidden bg-parchment-dark shadow-inner">
        <img
          alt={`${profile.name} vintage sports card portrait`}
          className="w-full h-56 object-contain"
          src={PLAYER_PORTRAIT_URL}
        />
        <div className="absolute top-2 right-2 bg-pitch/90 text-vintage-gold border border-vintage-gold/40 text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">
          2021 ROOKIE
        </div>
      </div>

      <div className="bg-pitch text-parchment-light px-3 py-1.5 rounded flex items-center justify-between shadow-sm">
        <div>
          <h3 className="font-header text-xl tracking-wider text-vintage-gold leading-none">
            {profile.name.toUpperCase()}
          </h3>
          <p className="text-[9px] font-mono uppercase tracking-widest text-parchment-dark">
            {profile.location}
          </p>
        </div>
        <span className="text-xs font-bold text-parchment-light font-mono">
          5+ YRS
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 py-2">
        <Stat label="Frontend" value={stats.frontend} />
        <Stat label="Backend" value={stats.backend} />
        <Stat label="Design" value={stats.design} />
        <Stat label="Speed" value={stats.problemSolving} accent="red" />
      </div>

      <div className="text-center pt-1 border-t border-pitch/20 flex justify-between items-center text-[9px] text-pitch/70">
        <span>{profile.title.toUpperCase()}</span>
        <span className="underline font-bold text-pitch">FLIP FOR SCOUTING REPORT &#8635;</span>
      </div>
    </div>
  );
}

export function PlayerCardBack() {
  const { profile } = usePortfolio();
  if (!profile) return null;

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="border-b-2 border-pitch pb-2">
        <div className="flex justify-between items-center">
          <span className="font-header text-xl text-pitch">OFFICIAL SCOUTING REPORT</span>
          <span className="bg-vintage-gold text-pitch font-mono font-bold text-[10px] px-1.5 rounded">
            VERIFIED
          </span>
        </div>
        <p className="text-[10px] text-pitch/70 font-mono mt-0.5">
          PLAYER: {profile.name.toUpperCase()} &bull; POSITION: FULL-STACK PLAYMAKER
        </p>
      </div>

      <div className="my-2 space-y-2 text-xs leading-relaxed text-pitch-dark">
        <p className="font-editorial text-[13px] italic border-l-2 border-vintage-gold pl-2 py-0.5 text-pitch">
          &ldquo;An elite playmaker who dictates the tempo of web products. Masterful at
          converting ambiguity into scalable systems.&rdquo;
        </p>
        <p className="text-[11px]">{profile.about}</p>
      </div>

      <div className="bg-parchment-dark p-2.5 rounded border border-pitch/30">
        <h4 className="text-[10px] font-bold text-pitch font-mono uppercase tracking-wider mb-1.5">
          TACTICAL TOOLKIT
        </h4>
        <div className="flex flex-wrap gap-1">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="text-[10px] bg-parchment-light text-pitch border border-pitch/40 px-1.5 py-0.5 rounded font-mono"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-pitch/20 space-y-1.5">
        <div className="grid grid-cols-3 gap-1 text-center">
          <a
            href={`mailto:${profile.links.email}`}
            className="bg-pitch hover:bg-pitch-light text-vintage-gold text-[11px] font-bold py-1.5 rounded transition"
          >
            HIRE / EMAIL
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-parchment-dark hover:bg-parchment text-pitch border border-pitch text-[11px] font-bold py-1.5 rounded transition"
          >
            GITHUB &#8599;
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-parchment-dark hover:bg-parchment text-pitch border border-pitch text-[11px] font-bold py-1.5 rounded transition"
          >
            LINKEDIN &#8599;
          </a>
        </div>
        <div className="text-[9px] text-center text-pitch/60 font-mono">
          PRESS SPACEBAR OR CLICK CARD TO FLIP
        </div>
      </div>
    </div>
  );
}