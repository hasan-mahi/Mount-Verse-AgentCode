import { motion } from "framer-motion"
import { Instagram, Twitter, Youtube } from "lucide-react"
import { footerLinks } from "../lib/data"

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-foreground/10 overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"
        >
          {/* Brand column */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="font-serif text-3xl font-bold tracking-wider hover:text-accent transition-colors"
            >
              Mount Verse
            </a>
            <p className="mt-5 text-foreground/60 max-w-xs leading-relaxed text-sm">
              Get out there &amp; discover your next slope, mountain &amp; destination. Your adventure starts here.
            </p>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group p-2.5 rounded-full border border-foreground/15 text-foreground/50 hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-[0_0_14px_rgba(252,211,77,0.2)]"
                >
                  <Icon className="size-4 transition-transform group-hover:scale-110" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2" />

          {/* Links column */}
          <div className="md:col-span-5">
            <h3 className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-6">
              More on The Blog
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-foreground/65 hover:text-accent transition-colors"
                  >
                    <span className="block size-1 rounded-full bg-foreground/25 group-hover:bg-accent transition-colors" />
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/35">
          <p>© 2026 Mount Verse, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
