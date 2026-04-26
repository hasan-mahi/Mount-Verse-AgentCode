import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2 } from "lucide-react"

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      id="newsletter"
      aria-label="Newsletter sign-up"
      className="relative py-28 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full border border-accent/10" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 rounded-full border border-foreground/5" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-10 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-accent">
              Stay Informed
            </span>
            <span className="block h-px w-10 bg-accent" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] text-balance mb-5">
            Trail Updates, Delivered Weekly
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed mb-10">
            Get curated trail reports, gear reviews, and insider tips from our community of hikers — straight to your inbox.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-foreground/5 border border-foreground/15 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 rounded-sm px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/30 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 bg-accent text-background font-semibold text-sm uppercase tracking-[0.15em] px-7 py-3.5 rounded-sm hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(252,211,77,0.3)] transition-all duration-300 whitespace-nowrap"
              >
                <Send className="size-4" />
                Subscribe
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3 text-accent"
            >
              <CheckCircle2 className="size-10" />
              <p className="font-semibold text-lg">You're in! Welcome to the Mount Verse family.</p>
            </motion.div>
          )}

          <p className="mt-5 text-xs text-foreground/30">
            No spam, ever. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
