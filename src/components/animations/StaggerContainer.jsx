import { motion, useReducedMotion } from 'motion/react'

const easeCurve = [0.22, 1, 0.36, 1]

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  initialDelay = 0,
  className = '',
  amount = 0.1,
  once = true,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  const MotionComponent = motion[as] || motion.div

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  }

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

export function StaggerItem({
  children,
  className = '',
  yOffset = 25,
  duration = 0.5,
  hoverEffect = false,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  const MotionComponent = motion[as] || motion.div

  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: easeCurve,
      },
    },
  }

  return (
    <MotionComponent
      variants={itemVariants}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              scale: 1.01,
              transition: { duration: 0.25, ease: easeCurve },
            }
          : undefined
      }
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

export default StaggerContainer
