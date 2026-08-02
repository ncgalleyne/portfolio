import { motion } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";

const experiences = [
  {
    date: "CURRENT — 2022",
    title: "Senior Software Engineer",
    company: "JPMorgan Chase",
    summary: "Architecting enterprise financial systems and internal tools.",
    impacts: [
      "Architected reusable React systems used across internal apps, reducing dev time and improving UI consistency.",
      "Led technical decisions for high-stakes financial operations, ensuring reliability and security.",
      "Mentored junior engineers and established coding standards for the frontend team."
    ]
  },
  {
    date: "2021 — 2022",
    title: "Software Engineer",
    company: "Previous Company",
    summary: "Building scalable web applications and API integrations.",
    impacts: [
      "Developed full-stack features using React, Node.js, and PostgreSQL for production systems.",
      "Implemented CI/CD pipelines that reduced deployment time by 40%.",
      "Collaborated with cross-functional teams to deliver customer-facing features on schedule."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-surface px-gutter py-16">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary-container font-label-caps tracking-widest mb-2">
            EXPERIENCE
          </p>
          <h2 className="text-on-surface font-headline-md">
            Career Progress
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-surface-bright/20" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.date}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative ml-8"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-primary-container ring-4 ring-surface" />

                {/* Content Block */}
                <div>
                  {/* Date/Status Label */}
                  <p className="text-on-surface-variant font-label-caps text-sm mb-1">
                    {exp.date}
                  </p>

                  {/* Title & Company */}
                  <h3 className="text-on-surface font-headline-sm mb-1">
                    {exp.title} @ <span className="text-primary-container">{exp.company}</span>
                  </h3>

                  {/* Executive Summary */}
                  <p className="text-on-surface-variant font-body-md mb-4">
                    {exp.summary}
                  </p>

                  {/* Impact Bullets */}
                  <div className="flex flex-col gap-4">
                    {exp.impacts.map((impact, impactIndex) => (
                      <div key={impactIndex} className="flex items-start gap-3">
                        <LuCircleCheck className="text-primary-container w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="text-on-surface-variant font-body-md leading-relaxed">
                          {impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
