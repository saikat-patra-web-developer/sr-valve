import { Link } from 'react-router-dom'
import { ArrowRight, Settings, ShieldCheck, Headphones, MapPin, Landmark, Users, Leaf, Award } from 'lucide-react'

const copy = {
  home: { eyebrow: 'INDUSTRIAL VALVES  |  FLOW CONTROL SOLUTIONS  |  A STRONGER TOMORROW', title: <><span className="home-title-line"><em>SSPR Valve</em> Manufacturing</span><span className="home-title-line">Private Limited</span></>, description: 'SSPR Valve Manufacturing Private Limited manufactures high-quality industrial valves, penstocks and flow-control solutions for critical applications across water, infrastructure, irrigation, desalination and industrial projects.', image: 'valve-range-wide.webp' },
  products: { crumb: 'Products', title: <>Our Product <em>Range</em></>, subtitle: 'Rugged. Reliable. Engineered for a Better Tomorrow.', description: 'Explore metal and resilient seated sluice valves, flanged and wafer butterfly valves, single-door, multi-door and dual-plate non-return valves, plus S1, S2, DS1, DS2, DK and tamper-proof air valves.', image: 'valve-range-wide.webp' },
  about: { crumb: 'About Us', title: <>About SSPR Valve<br /><span className="ink">Manufacturing Private Limited</span></>, eyebrow: 'ENGINEERING RELIABILITY FOR A BETTER TOMORROW', description: 'More than 15 years of valve and penstock design and manufacturing experience from our Howrah, West Bengal facility.', image: 'factory-hero-wide.webp' },
  infrastructure: { crumb: 'Infrastructure', eyebrow: 'PROJECT INSTALLATIONS  |  WATER INFRASTRUCTURE  |  RELIABLE SOLUTIONS', title: <>Infrastructure &<br />Project <em>Experience</em></>, description: 'Client-supplied views of treatment plants, clarifiers, control rooms, pumping systems and installed SSPR valves across operating sites.', image: 'factory-hero-wide.webp' },
  contact: { crumb: 'Contact Us', eyebrow: 'LET’S BUILD A STRONGER TOMORROW TOGETHER', title: <>Contact <em>Us</em></>, description: 'We are here to assist you with your project enquiries, product requirements and technical discussions.', image: 'contact-wide.webp' },
  certifications: { crumb: 'Certifications', eyebrow: 'QUALITY & CERTIFICATIONS', title: <>Committed to<br /><em>Global Standards</em></>, description: 'ISO 9001 certification through June 2027, with ISO 14001:2015 and ISO 45001:2018 certifications valid through April 2028.', image: 'factory-hero-wide.webp' },
}
export function TrustBar({ expanded = false }) {
  const items = expanded ? [[Settings, '15+', 'Years of Manufacturing Experience'], [Landmark, 'Trusted by', 'Government & Private Organizations'], [MapPin, 'Based in Howrah, West Bengal', 'Serving Pan India'], [Award, 'High-Quality', 'Industrial Valves'], [Leaf, 'Committed to', 'a Sustainable Future']] : [[Settings, '15+', 'Years Experience'], [Award, 'ISO 9001:2015', '14001:2015 · 45001:2018'], [Landmark, 'Government &', 'Private Project Supply'], [MapPin, 'Based in Howrah,', 'West Bengal']]
  return <div className={`trust-bar ${expanded ? 'expanded' : ''}`}>{items.map(([Icon, title, desc]) => <div key={title}><span className="round-icon"><Icon /></span><p><strong>{title}</strong><small>{desc}</small></p></div>)}</div>
}
export default function PageHero({ type }) {
  const data = copy[type]
  return <>
    <section className={`page-hero hero-${type}`} style={{ '--hero-image': `url('/images/hero/${data.image}')` }}>
      <div className="hero-inner"><div className="hero-copy">
        {data.crumb && <div className="breadcrumb"><Link to="/">Home</Link><span>›</span>{data.crumb}</div>}
        {type === 'home' && <span className="mobile-hero-eyebrow">Precision. Performance. Trust.</span>}
        {type !== 'home' && data.eyebrow && <span className="mobile-page-eyebrow">{data.eyebrow}</span>}
        <h1>{data.title}</h1>
        {data.subtitle && <h2>{data.subtitle}</h2>}
        <p className="hero-description">{data.description}</p>
        {type === 'home' && <div className="hero-actions"><Link className="button-primary" to="/products">Explore Products <ArrowRight /></Link><Link className="button-outline" to="/contact">Contact Us</Link></div>}
        {type === 'products' && <div className="hero-features">{[[ShieldCheck,'Proven Reliability','Built for tough conditions'],[Settings,'Wide Range','For diverse applications'],[Award,'Superior Quality','Tested. Trusted. Global.'],[Headphones,'Technical Support','From selection to service']].map(([Icon,title,desc]) => <div key={title}><Icon/><strong>{title}</strong><small>{desc}</small></div>)}</div>}
        {type === 'contact' && <div className="contact-hero-features">{[[Settings,'Valves for critical applications'],[ShieldCheck,'Expert support at every step'],[Users,'A stronger tomorrow together']].map(([Icon,title]) => <div key={title}><span className="round-icon"><Icon/></span><strong>{title}</strong></div>)}</div>}
        {type === 'home' && <TrustBar />}
      </div></div>
    </section>
    {type === 'about' && <div className="about-trust"><TrustBar expanded /></div>}
  </>
}

