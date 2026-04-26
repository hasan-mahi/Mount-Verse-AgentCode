import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Badge } from "./ui"
import type { Article as ArticleType } from "../types"

type ArticleProps = ArticleType & {
  reverse?: boolean
}

export default function Article({
  number,
  eyebrow,
  title,
  body,
  image,
  alt,
  tags = [],
  reverse = false,
}: ArticleProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  const numY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <article ref={ref} className="relative py-24 md:py-36">
      {/* Subtle horizontal rule between articles */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative overflow-hidden rounded-lg shadow-2xl shadow-black/50 group"
          >
            {/* Overlay on hover */}
            <div className="absolute inset-0 z-10 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 z-10 overflow-hidden">
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent rotate-45 origin-bottom-right" />
            </div>

            <motion.div style={{ y: imgY }} className="will-change-transform">
              <img
                src={image}
                alt={alt}
                className="w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-5 relative">
            {/* Big floating number */}
            <motion.span
              aria-hidden="true"
              style={{ y: numY }}
              className="pointer-events-none absolute -top-24 -left-6 md:-top-32 md:-left-10 select-none font-serif font-bold text-[10rem] md:text-[14rem] leading-none text-foreground/[0.04]"
            >
              {number}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-5">
                <span className="block h-px w-10 bg-accent shrink-0" />
                <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-accent">
                  {eyebrow}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] text-balance mb-5">
                {title}
              </h2>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              )}

              {/* Body */}
              <p className="text-base md:text-lg leading-relaxed text-foreground/65 mb-8">
                {body}
              </p>

              {/* Read more */}
              <a
                href="#"
                className="group inline-flex items-center gap-3 text-accent font-semibold uppercase tracking-[0.2em] text-sm"
              >
                <span className="relative">
                  Read more
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  )
}
