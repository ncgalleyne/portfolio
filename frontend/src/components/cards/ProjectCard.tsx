import { usePortfolio } from '../../context/PortfolioContext';

interface ProjectCardProps {
  projectId: string;
}

const FALLBACK_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1W6KG8aZ4095KQPf8GKbdNh8nRXjy5kc2aUerk-o_DXtXdTf92ATQjrpq2JiYWho--Cu9iE8ES1oXRY4kh5gVcqYQBbtJE38ev3NAqRz3hNknV8p3a_E9N0L5bNmsF-knrDvYGVADC_d9DMH23-vBcGRACLKZv0to6oLUZ1yS8dAvtzXByr5B3MIiD46THTZxW9Gre6JBUtcS48S70Mgsc2WUSsoeiWnQsNfHBBBpeyjM80vegQkhduzkI';

function isVideo(url: string) {
  return /\.(mp4|webm|mov)(?:\?|$)/i.test(url) || url.includes('/video/upload/');
}

export function ProjectCard({ projectId }: ProjectCardProps) {
  const { projects } = usePortfolio();
  const project = projects.find(p => p.id === projectId);

  if (!project) return null;

  const media = project.image || FALLBACK_IMAGE;
  const category = project.category?.toUpperCase() || 'PROJECT';

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between pb-1.5 border-b border-pitch/30">
        <span className="font-header text-lg text-pitch tracking-wider leading-none">
          PROJECT HIGHLIGHT &bull; {project.id}
        </span>
        <span className="text-[10px] font-bold bg-pitch text-vintage-gold px-1.5 py-0.5 rounded">
          {category.slice(0, 12)}
        </span>
      </div>

      <div className="relative my-2 rounded border-2 border-pitch-dark overflow-hidden bg-black shadow-inner h-56">
        {isVideo(media) ? (
          <video
            className="w-full h-full object-cover"
            src={media}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            alt={`${project.name} preview`}
            className="w-full h-full object-cover"
            src={media}
          />
        )}
        <div className="absolute bottom-1 right-2 bg-pitch/90 text-vintage-gold text-[9px] font-mono px-2 py-0.5 rounded border border-vintage-gold/40">
          {project.technologies.slice(0, 2).join(' / ')}
        </div>
      </div>

      <div className="bg-pitch text-parchment-light px-3 py-1.5 rounded flex items-center justify-between shadow-sm">
        <div>
          <h3 className="font-header text-xl tracking-wider text-vintage-gold leading-none">
            {project.name.toUpperCase()}
          </h3>
          <p className="text-[9px] font-mono uppercase tracking-widest text-parchment-dark">
            {project.category}
          </p>
        </div>
        <span className="text-xs font-bold text-vintage-gold font-mono">{project.year}</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 py-2 text-center">
        <div className="bg-parchment-dark/70 rounded p-1 border border-pitch/20">
          <span className="text-[9px] block text-pitch-light font-mono font-bold">ROLE</span>
          <span className="font-header text-sm text-pitch leading-none block mt-0.5">
            {project.role.split(' ')[0]}
          </span>
        </div>
        <div className="bg-parchment-dark/70 rounded p-1 border border-pitch/20">
          <span className="text-[9px] block text-pitch-light font-mono font-bold">STACK</span>
          <span className="font-header text-sm text-pitch leading-none block mt-0.5">
            {project.technologies.length} TECH
          </span>
        </div>
        <div className="bg-parchment-dark/70 rounded p-1 border border-pitch/20">
          <span className="text-[9px] block text-pitch-light font-mono font-bold">STATUS</span>
          <span className="font-header text-sm text-vintage-gold leading-none block mt-0.5">
            {project.liveUrl ? 'LIVE' : 'ARCHIVE'}
          </span>
        </div>
      </div>

      <div className="text-center pt-1 border-t border-pitch/20 flex justify-between items-center text-[9px] text-pitch/70">
        <span className="truncate max-w-[60%]">
          STACK: {project.technologies.slice(0, 3).join(', ').toUpperCase()}
        </span>
        <span className="underline font-bold text-pitch">FLIP FOR DETAILS &#8635;</span>
      </div>
    </div>
  );
}

export function ProjectCardBack({ projectId }: ProjectCardProps) {
  const { projects } = usePortfolio();
  const project = projects.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="border-b-2 border-pitch pb-2">
        <div className="flex justify-between items-center">
          <span className="font-header text-xl text-pitch">{project.name.toUpperCase()}</span>
          <span className="bg-vintage-gold text-pitch font-mono font-bold text-[10px] px-1.5 rounded">
            v{project.year}
          </span>
        </div>
        <p className="text-[10px] text-pitch/70 font-mono mt-0.5">
          DOMAIN: {project.category.toUpperCase()}
        </p>
      </div>

      <div className="my-2 space-y-2 text-xs leading-relaxed text-pitch-dark">
        <div>
          <span className="font-bold text-[11px] text-pitch block uppercase">The Objective:</span>
          <p className="text-[11px]">{project.description}</p>
        </div>
        <div>
          <span className="font-bold text-[11px] text-pitch block uppercase">Built With:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] bg-parchment-light text-pitch border border-pitch/40 px-1.5 py-0.5 rounded font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-parchment-dark p-2 rounded border border-pitch/30 text-[11px] font-mono">
        <span className="text-pitch-dark font-bold">IMPACT:</span> {project.outcome}
      </div>

      <div className="pt-2 border-t border-pitch/20">
        <div className="grid grid-cols-2 gap-2 text-center">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pitch hover:bg-pitch-light text-vintage-gold text-[11px] font-bold py-1.5 rounded transition"
            >
              LAUNCH DEMO &#8599;
            </a>
          ) : (
            <span className="bg-pitch/30 text-parchment-light text-[11px] font-bold py-1.5 rounded cursor-not-allowed">
              DEMO N/A
            </span>
          )}
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-parchment-dark hover:bg-parchment text-pitch border border-pitch text-[11px] font-bold py-1.5 rounded transition"
            >
              SOURCE CODE &#8599;
            </a>
          ) : (
            <span className="bg-parchment-dark/60 text-pitch/50 border border-pitch/30 text-[11px] font-bold py-1.5 rounded cursor-not-allowed">
              SOURCE PRIVATE
            </span>
          )}
        </div>
      </div>
    </div>
  );
}