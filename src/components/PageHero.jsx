import { Link } from 'react-router-dom'
import { ArrowRight, Download, Settings, ShieldCheck, Headphones, MapPin, Landmark, Users, Leaf, Award } from 'lucide-react'

const copy = {
  home: { eyebrow: 'INDUSTRIAL VALVES  |  FLOW CONTROL SOLUTIONS  |  A STRONGER TOMORROW', title: <>Engineered Valves<br /><span className="ink">Built for <em>Reliability</em></span></>, description: 'SSPR Valve Manufacturing Private Limited manufactures high-quality industrial valves, penstocks and flow-control solutions for critical applications across water, infrastructure, irrigation, desalination and industrial projects.', image: 'valve-range-wide.png' },
  products: { crumb: 'Products', title: <>Our Product <em>Range</em></>, subtitle: 'Rugged. Reliable. Engineered for a Better Tomorrow.', description: 'Explore our comprehensive range of high-quality industrial valves, penstocks and flow control solutions designed for critical applications across water supply, irrigation, infrastructure and industrial systems.', image: 'valve-range-wide.png' },
  about: { crumb: 'About Us', title: <>About SSPR Valve<br /><span className="ink">Manufacturing Private Limited</span></>, eyebrow: 'ENGINEERING RELIABILITY FOR A BETTER TOMORROW', description: 'An experienced manufacturer of industrial valves, delivering high-quality, durable and innovative flow control solutions for a sustainable world.', image: 'factory-wide.png' },
  infrastructure: { eyebrow: 'WORLD-CLASS INFRASTRUCTURE  |  PRECISION MANUFACTURING  |  RELIABLE SOLUTIONS', title: <>Infrastructure &<br />Manufacturing <em>Excellence</em></>, description: 'State-of-the-art facilities. Advanced technology. Skilled people. Building high-quality industrial valves for a safer, stronger tomorrow.', image: 'factory-wide.png' },
  contact: { eyebrow: 'LET’S BUILD A STRONGER TOMORROW TOGETHER', title: <>Contact <em>Us</em></>, description: 'We are here to assist you with your project inquiries, product requirements and technical discussions. Get in touch with our team for reliable solutions.', image: 'contact-wide.png' },
  certifications: { eyebrow: 'QUALITY & CERTIFICATIONS', title: <>Committed to<br /><em>Global Standards</em></>, description: 'Quality, safety and sustainability guide every stage of our manufacturing process. Built on trusted standards. Engineered for lasting performance.', image: 'factory-wide.png' },
}
export function TrustBar({ expanded = false }) {
  const items = expanded ? [[Settings, '15+', 'Years of Manufacturing Experience'], [Landmark, 'Trusted by', 'Government & Private Organizations'], [MapPin, 'Based in Howrah, West Bengal', 'Serving Pan India'], [Award, 'High-Quality', 'Industrial Valves'], [Leaf, 'Committed to', 'a Sustainable Future']] : [[Settings, '15+', 'Years Experience'], [Award, 'ISO 9001:2015', '14001:2015 · 45001:2018'], [Landmark, 'Government &', 'Private Project Supply'], [MapPin, 'Based in Howrah,', 'West Bengal']]
  return <div className={`trust-bar ${expanded ? 'expanded' : ''}`}>{items.map(([Icon, title, desc]) => <div key={title}><span className="round-icon"><Icon /></span><p><strong>{title}</strong><small>{desc}</small></p></div>)}</div>
}
export default function PageHero({ type, onDownload }) {
  const data = copy[type]
  return <>
    <section className={`page-hero hero-${type}`} style={{ '--hero-image': `url('/images/hero/${data.image}')` }}>
      <div className="hero-inner"><div className="hero-copy">
        {data.crumb && <div className="breadcrumb"><Link to="/">Home</Link><span>›</span>{data.crumb}</div>}
        {data.eyebrow && type !== 'about' && <p className="eyebrow">{data.eyebrow}</p>}
        <h1>{data.title}</h1>
        {type === 'about' && <p className="eyebrow">{data.eyebrow}</p>}
        {data.subtitle && <h2>{data.subtitle}</h2>}
        <p className="hero-description">{data.description}</p>
        {type === 'home' && <div className="hero-actions"><Link className="button-primary" to="/products">Explore Products <ArrowRight /></Link><Link className="button-outline" to="/contact">Contact Us</Link></div>}
        {type === 'infrastructure' && <div className="hero-actions"><a className="button-primary" href="#facilities">Our Facilities <ArrowRight /></a><button className="button-outline" onClick={onDownload}><Download /> Download Brochure</button></div>}
        {type === 'products' && <div className="hero-features">{[[ShieldCheck,'Proven Reliability','Built for tough conditions'],[Settings,'Wide Range','For diverse applications'],[Award,'Superior Quality','Tested. Trusted. Global.'],[Headphones,'Technical Support','From selection to service']].map(([Icon,title,desc]) => <div key={title}><Icon/><strong>{title}</strong><small>{desc}</small></div>)}</div>}
        {type === 'contact' && <div className="contact-hero-features">{[[Settings,'Valves for critical applications'],[ShieldCheck,'Expert support at every step'],[Users,'A stronger tomorrow together']].map(([Icon,title]) => <div key={title}><span className="round-icon"><Icon/></span><strong>{title}</strong></div>)}</div>}
        {type === 'home' && <TrustBar />}
      </div></div>
    </section>
    {type === 'about' && <div className="about-trust"><TrustBar expanded /></div>}
    {type === 'contact' && <div className="breadcrumb content-breadcrumb"><Link to="/">Home</Link><span>›</span>Contact Us</div>}
  </>
}

