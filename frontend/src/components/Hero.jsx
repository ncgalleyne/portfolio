import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center bg-surface px-gutter pt-32 pb-16"
    >
      <div className="flex flex-col items-center gap-8 max-w-prose">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-surface-bright/10 text-primary-container font-label-caps border border-surface-bright/20 px-4 py-2 rounded-full"
        >
          AVAILABLE FOR STRATEGIC COLLABORATION
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-headline-lg text-on-surface">
            Nathaniel
          </h1>
          <h1 className="font-headline-lg text-primary-container">
            Alleyne
          </h1>
        </motion.div>

        {/* Subheadline/Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-on-surface-variant font-body-lg leading-relaxed text-center"
        >
          Software Engineer building scalable web applications, AI-powered tools, and products that solve real-world problems. Currently @ <span className="text-on-surface font-semibold">JPMorgan Chase</span>.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-4 mt-8 w-full"
        >
          <a
            href="#projects"
            className="w-full bg-primary-container text-surface font-label-bold py-4 rounded-sm active:scale-95 hover:brightness-110 transition-all duration-200 text-center"
          >
            VIEW PROJECTS
          </a>
          <a
            href="/Nathaniel_Alleyne_Resume_07242026.pdf"
            download
            className="w-full bg-transparent text-on-surface border border-surface-bright font-label-bold py-4 rounded-sm active:scale-95 hover:brightness-110 transition-all duration-200 text-center"
          >
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </div>
    </section>
  )
}
