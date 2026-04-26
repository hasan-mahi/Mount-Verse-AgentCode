import { motion } from "framer-motion"

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-accent/40 text-accent bg-accent/10 ${className}`}
    >
      {children}
    </span>
  )
}

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "outline"
  className?: string
}

export function Button({ children, href = "#", variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold uppercase tracking-[0.18em] text-sm px-8 py-4 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(252,211,77,0.35)] active:scale-95",
    outline:
      "border border-foreground/30 text-foreground hover:border-accent hover:text-accent active:scale-95",
  }

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-4 mb-4 ${centered ? "justify-center" : ""}`}>
          {!centered && <span className="block h-px w-10 bg-accent" />}
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">{eyebrow}</span>
          {centered && <span className="block h-px w-10 bg-accent" />}
          {centered && <span className="block h-px w-10 bg-accent" style={{ transform: "scaleX(-1)" }} />}
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-foreground/60 text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}
