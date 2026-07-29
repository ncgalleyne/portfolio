import { usePortfolio } from "../context/PortfolioContext"

function TechItem({ label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-container-lowest rounded-full border border-border">
      <span className="text-primary text-sm font-medium">{label}</span>
    </div>
  )
}

function Divider() {
  return <span className="w-px h-4 bg-outline-variant" />
}

export default function TechStackMarquee() {
  const { data, isLoading } = usePortfolio()

  if (isLoading) return null

  // Flatten all skill categories into a single list
  const techItems = Object.values(data.skills).flat()

  const items = techItems.flatMap((tech, i) => [
    <TechItem key={i} label={tech} />,
    <Divider key={`div-${i}`} />
  ])

  return (
    <section className="relative py-4 overflow-hidden bg-container-lowest">
      {/* Gradient overlys for fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-container-lowest to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-container-lowest to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee w-max gap-6">
        {/* duplicate for seamless loop */}
        {items}
        {items}
      </div>
    </section>
  )
}
