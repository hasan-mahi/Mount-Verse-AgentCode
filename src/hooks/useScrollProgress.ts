import { useRef } from "react"
import { useScroll, useTransform, type MotionValue } from "framer-motion"

interface UseScrollProgressOptions {
  inputRange?: [number, number]
  outputRange?: [string, string] | [number, number]
  offset?: ["start end" | "end start" | "start start" | "end end", "start end" | "end start" | "start start" | "end end"]
}

export function useScrollProgress<T extends HTMLElement = HTMLElement>(
  options: UseScrollProgressOptions = {}
) {
  const ref = useRef<T>(null)
  const {
    inputRange = [0, 1],
    outputRange = ["0%", "20%"],
    offset = ["start end", "end start"],
  } = options

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const value = useTransform(
    scrollYProgress,
    inputRange,
    outputRange as [string, string]
  ) as MotionValue<string>

  return { ref, scrollYProgress, value }
}
