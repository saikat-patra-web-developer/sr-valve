import { motion, useReducedMotion } from 'motion/react'

const easeCurve = [0.22, 1, 0.36, 1]

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  distance = 25,
  className = '',
  once = true,
  amount = 0.06,
  margin,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  const getInitialState = () => {
    if (shouldReduceMotion) return { opacity: 1, x: 0, y: 0, scale: 1 }
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, x: 0, scale: 1 }
      case 'down':
        return { opacity: 0, y: -distance, x: 0, scale: 1 }
      case 'left':
        return { opacity: 0, x: distance, y: 0, scale: 1 }
      case 'right':
        return { opacity: 0, x: -distance, y: 0, scale: 1 }
      case 'scale':
      case 'zoom':
        return { opacity: 0, scale: 0.94, x: 0, y: 0 }
      case 'none':
      default:
        return { opacity: 0, x: 0, y: 0, scale: 1 }
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
      initial={getInitialState()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
        margin: margin || '0px 0px -30px 0px',
      }}
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
