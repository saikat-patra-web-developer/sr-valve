import { motion, useReducedMotion } from 'motion/react'

const easeCurve = [0.22, 1, 0.36, 1]

export default function AnimatedImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  hoverScale = true,
  hoverScaleAmount = 1.03,
  duration = 0.65,
  delay = 0,
  children,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    if (children) {
      return <div className={wrapperClassName}>{children}</div>
    }
    return <img src={src} alt={alt} className={className} {...props} />
  }

  if (children) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        whileHover={hoverScale ? { scale: hoverScaleAmount } : undefined}
        transition={{ duration, delay, ease: easeCurve }}
        className={wrapperClassName}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={hoverScale ? { scale: hoverScaleAmount } : undefined}
      transition={{ duration, delay, ease: easeCurve }}
      className={className}
      {...props}
    />
  )
}
