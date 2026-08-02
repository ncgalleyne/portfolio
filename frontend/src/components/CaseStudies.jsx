import { motion } from "framer-motion";
import { LuArrowRight, LuExternalLink } from "react-icons/lu";

const projects = [
  {
    title: "AI Concierge Bot",
    description: "Enterprise knowledge retrieval system that transforms how teams access internal documentation.",
    impact: "Reduced information retrieval time from minutes to seconds using RAG architecture.",
    tags: ["RAG", "AI", "ENTERPRISE"],
    actionLabel: "EXPLORE ARCHITECTURE",
    actionIcon: LuArrowRight,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    title: "Hustle 2 Elevate",
    description: "Direct-to-consumer platform connecting aspiring entrepreneurs with business resources.",
    impact: "Built production-grade payment infrastructure handling real transactions via Stripe.",
    tags: ["DTC", "STRIPE", "FULL-STACK"],
    actionLabel: "VIEW LIVE PROJECT",
    actionIcon: LuExternalLink,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Pie Budgeting",
    description: "Consumer financial tool with predictive insights and automated expense tracking.",
    impact: "Delivered AI-powered financial recommendations improving user budget adherence by 40%.",
    tags: ["FINTECH", "AI", "CONSUMER"],
    actionLabel: "VIEW LIVE PROJECT",
    actionIcon: LuExternalLink,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-surface px-gutter py-16">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary-container font-label-caps tracking-widest mb-2">
            CASE STUDIES
          </p>
          <h2 className="text-on-surface font-headline-md">
            Selected Work
          </h2>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => {
            const ActionIcon = project.actionIcon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-surface-container-low overflow-hidden border border-surface-bright/10 rounded-sm shadow-sm"
              >
                {/* Visual Reference */}
                <div className="aspect-video overflow-hidden rounded-t-sm border-b border-surface-bright/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 pb-8">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-bright/20 text-on-surface-variant text-[10px] px-2 py-0.5 rounded-xs uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-on-surface font-headline-sm mt-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-on-surface-variant font-body-md mt-2">
                    {project.description}
                  </p>

                  {/* Impact Statement */}
                  <p className="text-on-surface font-body-md mt-4 font-semibold">
                    {project.impact}
                  </p>

                  {/* Action Link */}
                  <a
                    href="#"
                    className="text-primary-container font-label-bold text-sm mt-6 flex items-center gap-2 uppercase tracking-wider hover:gap-3 transition-all duration-200"
                  >
                    {project.actionLabel}
                    <ActionIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
