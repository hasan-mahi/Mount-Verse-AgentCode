import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserCircle2, Menu, X } from "lucide-react"
import { navLinks } from "../lib/data"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-foreground/10 shadow-lg shadow-black/20"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-foreground hover:text-accent transition-colors"
          >
            Mount Verse
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="group hidden md:flex items-center gap-2 text-sm font-medium text-foreground/90 hover:text-accent transition-colors"
            >
              <UserCircle2 className="size-5 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span>Account</span>
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-1 text-foreground/80 hover:text-accent transition-colors"
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl font-bold tracking-wide text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1 }}
              className="mt-6 flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors"
            >
              <UserCircle2 className="size-5" />
              Account
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
