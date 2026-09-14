import { Link } from 'react-router-dom'
import { ArrowUpRight, BadgeCheck, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { companyData } from '../data/companyData'

const footerLinks = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Our Products'],
  ['/why-us', 'Why Us'],
  ['/experience', 'Experience'],
  ['/clients', 'Clients'],
  ['/contact', 'Contact'],
]

export default function Footer() {
  const contact = companyData.contact

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="SSPR Valve home">
            <img src="/images/logo/logo.webp" alt="SSPR Valve" />
          </Link>
          <strong>SSPR Valve Manufacturing Private Limited</strong>
          <p>Reliable industrial valves and flow-control solutions engineered for critical applications.</p>
          <span className="footer-certification"><BadgeCheck /> ISO-Certified Quality Systems</span>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <span className="footer-kicker">Explore</span>
          <h4>Quick Links</h4>
          <div className="footer-link-list">
            {footerLinks.map(([path, label]) => (
              <Link key={path} to={path}>{label}<ArrowUpRight /></Link>
            ))}
          </div>
        </nav>

        <div className="footer-contact">
          <span className="footer-kicker">Reach Us</span>
          <h4>Contact Information</h4>
          <div><MapPin /><p>{contact.address}</p></div>
          <a href={`mailto:${contact.email}`}><Mail /><span>{contact.email}</span></a>
          <a href={`tel:${contact.phone}`}><Phone /><span>{contact.phone}</span></a>
          <div><Clock /><p>{contact.hours}</p></div>
        </div>

        <div className="footer-india">
          <img src="/images/footer/india-made-premium.png" alt="India map with the national tricolor" />
          <div>
            <span className="footer-kicker">Proudly Made in India</span>
            <strong>Engineered in Howrah. Built for India’s critical infrastructure.</strong>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}{' '}
          <strong className="footer-copyright-company">SSPR Valve Manufacturing Private Limited</strong>. All Rights Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>
            <a href="https://share.google/3RIP1HbmLjJKAnwpN" target="_blank" rel="noreferrer">
              Design by Saikat Patra
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
