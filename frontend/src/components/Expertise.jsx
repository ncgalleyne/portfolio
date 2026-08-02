import { motion } from "framer-motion";
import { LuLayers, LuBrain, LuDatabase, LuBriefcase } from "react-icons/lu";

const expertiseAreas = [
  {
    icon: LuLayers,
    title: "Scalable Frontend Systems",
    description: "Building robust, maintainable React applications with TypeScript and comprehensive design systems.",
    tags: ["React", "TypeScript", "Design Systems", "State Management"]
  },
  {
    icon: LuBrain,
    title: "AI-Powered Products",
    description: "Implementing RAG workflows and LLM integrations to deliver intelligent, context-aware solutions.",
    tags: ["RAG", "LLMs", "Vector DBs", "AI Agents"]
  },
  {
    icon: LuDatabase,
    title: "Full-Stack Applications",
    description: "End-to-end development with Node.js, Java, and cloud platforms for production-grade systems.",
    tags: ["Node.js", "Java", "PostgreSQL", "AWS"]
  },
  {
    icon: LuBriefcase,
    title: "Business Applications",
    description: "Connecting technical solutions to real business value in FinTech, E-commerce, and Security.",
    tags: ["FinTech", "E-commerce", "Security", "API Design"]
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-surface px-gutter py-16">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary-container font-label-caps tracking-widest mb-2">
            EXPERTISE
          </p>
          <h2 className="text-on-surface font-headline-md">
            Technical Core
          </h2>
        </div>

        {/* Expertise Grid */}
        <div className="flex flex-col gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-container-low p-6 border border-surface-bright/10 rounded-sm hover:border-primary/40 active:scale-[0.98] transition-all duration-200"
              >
                <div className="flex flex-col">
                  {/* Icon */}
                  <Icon className="text-primary-container w-8 h-8 mb-4" />

                  {/* Title */}
                  <h3 className="text-on-surface font-headline-sm mb-2">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-on-surface-variant font-body-md leading-relaxed mb-4">
                    {area.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-bright/20 text-on-surface-variant text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
