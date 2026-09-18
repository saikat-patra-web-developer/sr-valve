import { Link } from 'react-router-dom'
import { ArrowUpRight, BadgeCheck, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
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

const easeCurve = [0.22, 1, 0.36, 1]

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeCurve,
    },
  },
}

const bottomVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
      ease: easeCurve,
    },
  },
}

export default function Footer() {
  const contact = companyData.contact
  const shouldReduceMotion = useReducedMotion()

  return (
    <footer className="site-footer overflow-hidden">
      <motion.div
        className="footer-grid"
        variants={shouldReduceMotion ? undefined : gridContainerVariants}
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.08 }}
      >
        {/* Column 1: Brand */}
        <motion.div
          className="footer-brand"
          variants={shouldReduceMotion ? undefined : columnVariants}
        >
          <Link to="/" className="footer-logo" aria-label="SSPR Valve home">
            <motion.img
              src="/images/logo/logo.webp"
              alt="SSPR Valve"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          <strong>SSPR Valve Manufacturing Private Limited</strong>
          <p>Reliable industrial valves and flow-control solutions engineered for critical applications.</p>
          <span className="footer-certification">
            <BadgeCheck /> ISO-Certified Quality Systems
          </span>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.nav
          className="footer-links"
          aria-label="Footer navigation"
          variants={shouldReduceMotion ? undefined : columnVariants}
        >
          <span className="footer-kicker">Explore</span>
          <h4>Quick Links</h4>
          <div className="footer-link-list">
            {footerLinks.map(([path, label]) => (
              <Link key={path} to={path}>
                {label}
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </motion.nav>

        {/* Column 3: Contact Info */}
        <motion.div
          className="footer-contact"
          variants={shouldReduceMotion ? undefined : columnVariants}
        >
          <span className="footer-kicker">Reach Us</span>
          <h4>Contact Information</h4>
          <div><MapPin /><p>{contact.address}</p></div>
          <a href={`mailto:${contact.email}`}><Mail /><span>{contact.email}</span></a>
          <a href={`tel:${contact.phone}`}><Phone /><span>{contact.phone}</span></a>
          <div><Clock /><p>{contact.hours}</p></div>
        </motion.div>

        {/* Column 4: Made in India */}
        <motion.div
          className="footer-india"
          variants={shouldReduceMotion ? undefined : columnVariants}
          whileHover={shouldReduceMotion ? undefined : { y: -3, borderColor: 'rgba(255,155,61,0.35)' }}
          transition={{ duration: 0.25 }}
        >
          <motion.img
            src="/images/footer/india-made-premium.png"
            alt="India map with the national tricolor"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
            transition={{ duration: 0.25 }}
          />
          <div>
            <span className="footer-kicker">Proudly Made in India</span>
            <strong>Engineered in Howrah. Built for India’s critical infrastructure.</strong>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom Bar */}
      <motion.div
        className="footer-bottom"
        variants={shouldReduceMotion ? undefined : bottomVariants}
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.1 }}
      >
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
      </motion.div>
    </footer>
  )
}
