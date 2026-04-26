import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ChevronDown, Map } from "lucide-react"
import { Button } from "./ui"

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0.7])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden"
      aria-label="Hero — Mount Verse Hiking Journal"
    >
      {/* Parallax background image */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 will-change-transform">
        <motion.img
          src="/images/hero-mountain.jpg"
          alt="A lone hiker on a green grassy cliff overlooking dramatic snow-capped mountains"
          className="h-full w-full object-cover"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlays */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 h-full flex items-center will-change-transform"
      >
        <div className="mx-auto max-w-7xl w-full px-6 md:px-10 pt-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-4 mb-6">
              <span className="block h-px w-10 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.35em] uppercase text-accent">
                A Hiking Journal
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.02] text-balance mb-6"
            >
              Find Your
              <br />
              <span className="relative inline-block">
                Next Peak
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 h-1 w-full bg-accent origin-left rounded-full"
                />
              </span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-lg"
            >
              Plan smarter hikes, discover hidden trails, and level up your outdoor adventure with expert guides from the Mount Verse community.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <Button href="#journal" variant="primary">
                <Map className="size-4" />
                Read the Journal
              </Button>
              <Button href="#community" variant="outline">
                Join the Community
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Jagged edge SVG */}
      <svg
        className="absolute -bottom-px left-0 right-0 w-full z-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          d="M0,80 L0,55 L60,40 L120,58 L210,30 L300,52 L380,28 L470,48 L560,22 L640,46 L730,30 L820,55 L900,32 L990,52 L1080,28 L1170,50 L1260,26 L1340,52 L1440,36 L1440,80 Z"
          fill="#0B1D26"
        />
      </svg>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-16 right-8 md:right-12 z-20 flex flex-col items-center gap-2 text-foreground/50"
      >
        <ChevronDown
          className="size-5 animate-bounce"
          aria-hidden="true"
        />
        <span className="text-[10px] uppercase tracking-[0.35em] [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
