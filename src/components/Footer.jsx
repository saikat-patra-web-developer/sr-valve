import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { companyData } from '../data/companyData'
export default function Footer() {
 const c=companyData.contact
 return <footer className="site-footer"><div className="footer-grid">
  <div className="footer-brand"><Link to="/"><img src="/images/logo/logo.webp" alt="SSPR Valve"/></Link><strong>SSPR Valve Manufacturing Private Limited</strong><small>FLOWING A STRONGER TOMORROW</small></div>
  <div className="footer-links"><h4>Quick Links</h4>{[['/','Home'],['/about','About Us'],['/products','Products'],['/infrastructure','Infrastructure'],['/certifications','Certifications'],['/contact','Contact']].map(([path,label])=><Link key={path} to={path}>{label}</Link>)}</div>
  <div className="footer-contact"><h4>Contact Information</h4><div><MapPin/><p>{c.address}</p></div><a href={`mailto:${c.email}`}><Mail/>{c.email}</a><a href={`tel:${c.phone}`}><Phone/>{c.phone}</a><div><Clock/><p>{c.hours}</p></div></div>
  <div className="footer-india"><img src="/images/footer/india_map.png" alt="Proudly manufacturing in India for a stronger tomorrow"/></div>
 </div><div className="footer-bottom"><p>© {new Date().getFullYear()} SSPR Valve Manufacturing Private Limited. All Rights Reserved.</p><p>Reliable Valves. Stronger India.</p></div></footer>
}
