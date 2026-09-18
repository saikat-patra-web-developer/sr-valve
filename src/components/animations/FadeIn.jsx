import { motion, useReducedMotion } from 'motion/react'

const easeCurve = [0.22, 1, 0.36, 1]

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  distance = 30,
  className = '',
  once = true,
  amount = 0.15,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 }
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 }
      case 'down':
        return { y: -distance, x: 0 }
      case 'left':
        return { x: distance, y: 0 }
      case 'right':
        return { x: -distance, y: 0 }
      case 'none':
      default:
        return { x: 0, y: 0 }
    }
  }

  const MotionComponent = motion[as] || motion.div

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <MotionComponent
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: easeCurve,
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
