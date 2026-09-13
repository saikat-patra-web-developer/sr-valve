import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="nav-inner">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><img src="/images/logo/logo.webp" alt="SSPR Valve"/></Link>
    <nav id="main-navigation" className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">{[['/','Home'],['/about','About Us'],['/products','Products'],['/infrastructure','Infrastructure'],['/certifications','Certifications'],['/contact','Contact']].map(([path,label]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </div></header>
}
