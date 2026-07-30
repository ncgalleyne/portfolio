import { usePortfolio } from "../context/PortfolioContext"

function ProjectCard({ project }) {
  return (
    <div className="group relative w-full rounded overflow-hidden bg-container-low">
      {/* Media placeholder */}
      <div className="w-full aspect-[16/10] bg-container-high flex items-center justify-center">
        {project.mediaUrl ? (
          project.mediaUrl.match(/\.(mp4|webm|ogg|mov)$/i) ? (
            <video
              src={project.mediaUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={project.mediaUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )
        ) : (
          <span className="text-gray-500">No media</span>
        )}
      </div>

      {/* Overlay on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-container-lowest via-container-lowest/80 to-transparent
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
      >
        <h3 className="text-primary text-xl font-semibold">{project.name}</h3>
        <p className="text-outline text-sm mt-1">{project.description}</p>
        {project?.bullets && (
          <ul className="mt-2 text-outline text-xs list-disc list-inside">
            {project.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Always visible on mobile */}
      <div className="p-4 md:hidden">
        <h3 className="text-primary text-xl font-semibold">{project.name}</h3>
        <p className="text-outline text-sm mt-1">{project.description}</p>
      </div>
    </div>
  )
}

export default function ProjectsPreview() {
  const { data, isLoading } = usePortfolio()

  if (isLoading) return null

  return (
    <section id="projects" className="px-margin-mobile md:px-margin-desktop py-stack-xl">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="w-px h-10 bg-outline-variant" />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-stack-lg max-w-3xl mx-auto">
        {data.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
