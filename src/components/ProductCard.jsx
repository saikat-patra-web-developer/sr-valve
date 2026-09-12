import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'
export default function ProductCard({ product, compact = false }) {
  return <Link to={`/products/${product.id}`} className={`product-card ${compact ? 'compact' : ''}`}>
    <div className="product-image"><ResponsiveImage src={product.image} alt={product.name} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" loading="lazy" /></div>
    <div className="product-copy"><h3>{product.name}</h3><p>{product.shortDesc}</p><span className="product-action">{!compact && 'View Product'}<ArrowRight size={14}/></span></div>
  </Link>
}
