import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Settings, ShieldCheck, Headphones, MapPin, Landmark, Users, Leaf, Award, Home as HomeIcon } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

const homeSlides = [
  { image: '/images/hero/home-hero-slide-1.webp', alt: 'Large SSPR industrial valve being positioned at a project site' },
  { image: '/images/hero/home-hero-slide-2.webp', alt: 'Three large SSPR gate valves inside the manufacturing facility' },
  { image: '/images/hero/home-hero-slide-3.webp', alt: 'SSPR butterfly valves displayed inside the manufacturing facility' },
]


const copy = {
  home: { eyebrow: 'INDUSTRIAL VALVES  |  FLOW CONTROL SOLUTIONS  |  A STRONGER TOMORROW', title: <><span className="home-title-line"><em>SSPR Valve</em> Manufacturing</span><span className="home-title-line">Private Limited</span></>, description: 'SSPR Valve Manufacturing Private Limited manufactures high-quality industrial valves, penstocks and flow-control solutions for critical applications across water, infrastructure, irrigation, desalination and industrial projects.' },
  products: { crumb: 'Products', title: <>Our Product <em>Range</em></>, subtitle: 'Rugged. Reliable. Engineered for a Better Tomorrow.', description: 'Explore metal and resilient seated sluice valves, flanged and wafer butterfly valves, single-door, multi-door and dual-plate non-return valves, plus S1, S2, DS1, DS2, DK and tamper-proof air valves.', image: 'valve-range-wide.webp' },
  about: { crumb: 'About Us', title: <>About SSPR Valve<br /><span className="ink">Manufacturing Private Limited</span></>, eyebrow: 'ENGINEERING RELIABILITY FOR A BETTER TOMORROW', description: 'More than 15 years of valve and penstock design and manufacturing experience from our Howrah, West Bengal facility.', image: 'factory-hero-wide.webp' },
  infrastructure: { crumb: 'Infrastructure', eyebrow: 'PROJECT INSTALLATIONS  |  WATER INFRASTRUCTURE  |  RELIABLE SOLUTIONS', title: <>Infrastructure &<br />Project <em>Experience</em></>, description: 'Client-supplied views of treatment plants, clarifiers, control rooms, pumping systems and installed SSPR valves across operating sites.', image: 'factory-hero-wide.webp' },
  contact: { crumb: 'Contact Us', eyebrow: 'LET’S BUILD A STRONGER TOMORROW TOGETHER', title: <>Contact <em>Us</em></>, description: 'We are here to assist you with your project enquiries, product requirements and technical discussions.', image: 'contact-wide.webp' },
  certifications: { crumb: 'Certifications', eyebrow: 'QUALITY & CERTIFICATIONS', title: <>Committed to<br /><em>Global Standards</em></>, description: 'ISO 9001 certification through June 2027, with ISO 14001:2015 and ISO 45001:2018 certifications valid through April 2028.', image: 'factory-hero-wide.webp' },
  whyUs: { crumb: 'Why Us', eyebrow: 'WHY CHOOSE SSPR VALVE', title: <>Why <em>Us</em></>, description: 'Committed to engineering excellence, rigorous quality standards, and customer-centric industrial solutions.', image: 'factory-hero-wide.webp' },
  inHouseManufacturing: { parent: { name: 'Why Us', path: '/why-us' }, crumb: 'In-House Manufacturing', eyebrow: 'MODERN FOUNDRY & MACHINING', title: <>In-House <em>Manufacturing</em></>, description: 'Precision CNC machining, advanced foundry tooling, and heavy valve fabrication at our Howrah facility.', image: 'factory-hero-wide.webp' },
  inHouseTestingFacility: { parent: { name: 'Why Us', path: '/why-us' }, crumb: 'In-House Testing Facility', eyebrow: 'COMPREHENSIVE TESTING & INSPECTION', title: <>In-House <em>Testing Facility</em></>, description: 'High-pressure hydrostatic, pneumatic, shell, and seat testing benches ensuring 100% zero-leakage performance.', image: 'factory-hero-wide.webp' },
  customerSupport: { parent: { name: 'Why Us', path: '/why-us' }, crumb: 'Customer Support', eyebrow: 'TECHNICAL SUPPORT & SERVICE', title: <>Customer <em>Support</em></>, description: 'Dedicated engineering support, technical documentation, tender assistance, and after-sales field service.', image: 'factory-hero-wide.webp' },
  onTimeDelivery: { parent: { name: 'Why Us', path: '/why-us' }, crumb: 'On-Time Delivery', eyebrow: 'RELIABLE SUPPLY CHAIN & LOGISTICS', title: <>On-Time <em>Delivery</em></>, description: 'Disciplined project scheduling, robust inventory planning, and dependable nationwide dispatch.', image: 'factory-hero-wide.webp' },
  experience: { crumb: 'Experience', eyebrow: 'EXPERIENCE & CAPABILITIES', title: <>Our <em>Experience</em></>, description: 'Proven track record of engineering precision, reliability, and excellence across mission-critical projects.', image: 'factory-hero-wide.webp' },
  waterSupplyProject: { parent: { name: 'Experience', path: '/experience' }, crumb: 'Water Supply Projects', eyebrow: 'DRINKING WATER & MUNICIPAL INFRASTRUCTURE', title: <>Water Supply <em>Projects</em></>, description: 'Supplying heavy-duty sluice, butterfly, and air valves for major urban and rural water supply schemes across India.', image: 'factory-hero-wide.webp' },
  wasteWaterProject: { parent: { name: 'Experience', path: '/experience' }, crumb: 'Waste Water Projects', eyebrow: 'SEWAGE & EFFLUENT TREATMENT INFRASTRUCTURE', title: <>Waste Water <em>Projects</em></>, description: 'Corrosion-resistant valves and penstocks engineered for sewage treatment plants and effluent processing networks.', image: 'factory-hero-wide.webp' },
  irrigationProjects: { parent: { name: 'Experience', path: '/experience' }, crumb: 'Irrigation Projects', eyebrow: 'CANAL & IRRIGATION WATER MANAGEMENT', title: <>Irrigation <em>Projects</em></>, description: 'High-capacity flow-control valves for lift irrigation schemes, dams, barrages, and distribution canals.', image: 'factory-hero-wide.webp' },
  automation: { parent: { name: 'Experience', path: '/experience' }, crumb: 'Automation', eyebrow: 'INTELLIGENT FLOW CONTROL & SCADA SYSTEMS', title: <>Valve <em>Automation</em></>, description: 'Electric, pneumatic, and electro-hydraulic valve actuation with PLC/SCADA integration for smart water grids, treatment automation, and remote flow management.', image: 'factory-hero-wide.webp' },
  clients: { crumb: 'Clients', eyebrow: 'OUR VALUED PARTNERS', title: <>Our <em>Clients</em></>, description: 'Trusted by government authorities, municipal corporations, and major industrial enterprises nationwide.', image: 'factory-hero-wide.webp' },
  notFound: { crumb: 'Page Not Found', eyebrow: 'ERROR 404  |  PAGE NOT FOUND', title: <>Page <em>Not Found</em></>, subtitle: '404 Error — We could not find the page you are looking for.', description: 'The page you requested may have been moved, renamed, or is temporarily unavailable. Browse our industrial valve products or return to the home page.', image: 'valve-range-wide.webp' },
}
export function TrustBar({ expanded = false }) {
  const items = expanded ? [[Settings, '15+', 'Years of Manufacturing Experience'], [Landmark, 'Trusted by', 'Government & Private Organizations'], [Award, 'High-Quality', 'Industrial Valves'], [Leaf, 'Committed to', 'a Sustainable Future']] : [[Settings, '15+', 'Years Experience'], [Award, 'ISO 9001:2015', '14001:2015 · 45001:2018'], [Landmark, 'Government &', 'Private Project Supply'], [MapPin, 'Based in Howrah,', 'West Bengal']]
  return <div className={`trust-bar ${expanded ? 'expanded' : ''}`}>{items.map(([Icon, title, desc]) => <div key={title}><span className="round-icon"><Icon /></span><p><strong>{title}</strong><small>{desc}</small></p></div>)}</div>
}
export default function PageHero({ type }) {
  const data = copy[type]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (type !== 'home' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeSlides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [type])

  return <>
    <section className={`page-hero hero-${type}`} style={data.image ? { '--hero-image': `url('/images/hero/${data.image}')` } : undefined}>
      {type === 'home' && <div className="hero-slider">
        {homeSlides.map((slide, index) => <ResponsiveImage
          key={slide.image}
          src={slide.image}
          sizes="100vw"
          alt={slide.alt}
          className={index === activeSlide ? 'hero-slide active' : 'hero-slide'}
        />)}
      </div>}
      <div className="hero-inner"><div className="hero-copy">
        {data.crumb && <div className="breadcrumb"><Link to="/">Home</Link><span>›</span>{data.parent && <><Link to={data.parent.path}>{data.parent.name}</Link><span>›</span></>}{data.crumb}</div>}
        {type === 'home' && <span className="mobile-hero-eyebrow">Precision. Performance. Trust.</span>}
        {type !== 'home' && data.eyebrow && <span className="mobile-page-eyebrow">{data.eyebrow}</span>}
        <h1>{data.title}</h1>
        {data.subtitle && <h2>{data.subtitle}</h2>}
        <p className="hero-description">{data.description}</p>
        {type === 'home' && <div className="hero-actions"><Link className="button-primary" to="/products">Explore Products <ArrowRight /></Link><Link className="button-outline" to="/contact">Contact Us</Link></div>}
        {type === 'notFound' && <div className="hero-actions"><Link className="button-primary" to="/"><HomeIcon /> Return to Home</Link><Link className="button-outline" to="/products">Explore Products <ArrowRight /></Link></div>}
        {type === 'products' && <div className="hero-features">{[[ShieldCheck,'Proven Reliability','Built for tough conditions'],[Settings,'Wide Range','For diverse applications'],[Award,'Superior Quality','Tested. Trusted. Global.'],[Headphones,'Technical Support','From selection to service']].map(([Icon,title,desc]) => <div key={title}><Icon/><strong>{title}</strong><small>{desc}</small></div>)}</div>}
        {type === 'contact' && <div className="contact-hero-features">{[[Settings,'Valves for critical applications'],[ShieldCheck,'Expert support at every step'],[Users,'A stronger tomorrow together']].map(([Icon,title]) => <div key={title}><span className="round-icon"><Icon/></span><strong>{title}</strong></div>)}</div>}
        {type === 'home' && <TrustBar />}
      </div></div>
      {type === 'home' && <div className="hero-slider-controls" aria-label="Hero images">
        {homeSlides.map((slide, index) => <button
          key={slide.image}
          type="button"
          className={index === activeSlide ? 'active' : ''}
          aria-label={`Show hero image ${index + 1}`}
          aria-current={index === activeSlide ? 'true' : undefined}
          onClick={() => setActiveSlide(index)}
        />)}
      </div>}
    </section>
    {type === 'about' && <div className="about-trust"><TrustBar expanded /></div>}
  </>
}

