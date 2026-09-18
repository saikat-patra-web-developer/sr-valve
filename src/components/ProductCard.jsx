import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import ResponsiveImage from './ResponsiveImage'

const MotionLink = motion.create(Link)
const easeCurve = [0.22, 1, 0.36, 1]

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeCurve,
    },
  },
}

export default function ProductCard({ product, compact = false }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <Link to={`/products/${product.id}`} className={`product-card ${compact ? 'compact' : ''}`}>
        <div className="product-image">
          <ResponsiveImage src={product.image} alt={product.name} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" loading="lazy" />
        </div>
        <div className="product-copy">
          <h3>{product.name}</h3>
          <p className="line-clamp-2">{product.shortDesc}</p>
          <span className="product-action">{!compact && 'View Product'}<ArrowRight size={14}/></span>
        </div>
      </Link>
    )
  }

  return (
    <MotionLink
      to={`/products/${product.id}`}
      className={`product-card ${compact ? 'compact' : ''}`}
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: easeCurve }}
    >
      <div className="product-image">
        <ResponsiveImage src={product.image} alt={product.name} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" loading="lazy" />
      </div>
      <div className="product-copy">
        <h3>{product.name}</h3>
        <p className="line-clamp-2">{product.shortDesc}</p>
        <span className="product-action">{!compact && 'View Product'}<ArrowRight size={14}/></span>
      </div>
    </MotionLink>
  )
}
