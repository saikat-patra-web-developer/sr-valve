import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react'

export default function ScrollProgressBar() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  if (shouldReduceMotion) return null

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left bg-gradient-to-r from-[#f37021] via-[#ff8a24] to-[#0d2857] shadow-[0_1px_8px_rgba(243,112,33,0.5)] pointer-events-none"
      aria-hidden="true"
    />
  )
}
