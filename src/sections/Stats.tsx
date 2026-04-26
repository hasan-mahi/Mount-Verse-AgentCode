import { motion } from "framer-motion"
import { stats } from "../lib/data"

export default function Stats() {
  return (
    <section
      id="community"
      aria-label="Community statistics"
      className="relative py-20 border-y border-foreground/10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center group"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2 tabular-nums group-hover:scale-105 transition-transform duration-300 origin-bottom">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-[0.2em] text-foreground/50 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
