import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <div className="nav-inner" ref={navRef}>
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo/logo.webp" alt="SSPR Valve" />
        </Link>
        <nav id="main-navigation" className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {[
            ['/', 'Home'],
            ['/about', 'About Us'],
            ['/products', 'Products'],
            ['/infrastructure', 'Infrastructure'],
            ['/certifications', 'Certifications'],
            ['/contact', 'Contact'],
          ].map(([path, label]) => (
            <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
