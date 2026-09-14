import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const productSubmenu = [
  {
    id: 'sluice-valve',
    name: 'Sluice Valve',
    desc: 'Metal & Resilient Seated Gate Valves',
    path: '/products/sluice-valve',
  },
  {
    id: 'butterfly-valve',
    name: 'Butterfly Valve',
    desc: 'Wafer & Flanged End Butterfly Valves',
    path: '/products/butterfly-valve',
  },
  {
    id: 'check-valve',
    name: 'Non Return / Check Valve',
    desc: 'Single Door, Multi-Door & Dual Plate',
    path: '/products/check-valve',
  },
  {
    id: 'air-valve',
    name: 'Air Valve',
    desc: 'Kinetic & Tamper-Proof Air Valves',
    path: '/products/air-valve',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)
  const navRef = useRef(null)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const isProductActive = location.pathname.startsWith('/product')

  // Close menu or dropdown on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setDropdownOpen(false)
      }
    }
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="nav-inner" ref={navRef}>
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo/logo.webp" alt="SSPR Valve" />
        </Link>
        <nav id="main-navigation" className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About Us
          </NavLink>

          {/* Products Dropdown with 4 Sub-menus */}
          <div
            className={`nav-item-dropdown ${mobileSubOpen ? 'mobile-open' : ''}`}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="nav-dropdown-trigger-row">
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive || isProductActive ? 'active' : '')}
                onClick={() => {
                  setDropdownOpen(false)
                  setOpen(false)
                }}
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`nav-dropdown-chevron ${dropdownOpen ? 'rotate' : ''}`}
                  aria-hidden="true"
                />
              </NavLink>

              {/* Mobile toggle button */}
              <button
                type="button"
                className="mobile-sub-toggle"
                aria-label={mobileSubOpen ? 'Hide Products submenu' : 'Show Products submenu'}
                aria-expanded={mobileSubOpen}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setMobileSubOpen(!mobileSubOpen)
                }}
              >
                <ChevronDown
                  size={16}
                  className={`mobile-sub-chevron ${mobileSubOpen ? 'rotate' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Desktop Dropdown Menu */}
            <div
              className={`nav-dropdown-menu ${dropdownOpen ? 'open' : ''}`}
              role="menu"
              aria-label="Products Submenu"
            >
              <div className="nav-dropdown-header">
                <span className="nav-dropdown-eyebrow">OUR VALVE RANGE</span>
              </div>
              <div className="nav-dropdown-items">
                {productSubmenu.map((sub) => (
                  <NavLink
                    key={sub.id}
                    to={sub.path}
                    role="menuitem"
                    className={({ isActive }) =>
                      `nav-dropdown-item ${isActive ? 'active' : ''}`
                    }
                    onClick={() => {
                      setDropdownOpen(false)
                      setOpen(false)
                    }}
                  >
                    <span className="nav-dropdown-title">{sub.name}</span>
                    <span className="nav-dropdown-desc">{sub.desc}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile / Tablet Accordion Submenu */}
            {mobileSubOpen && (
              <div className="mobile-submenu-panel">
                {productSubmenu.map((sub) => (
                  <NavLink
                    key={sub.id}
                    to={sub.path}
                    className={({ isActive }) =>
                      `mobile-submenu-item ${isActive ? 'active' : ''}`
                    }
                    onClick={() => {
                      setMobileSubOpen(false)
                      setOpen(false)
                    }}
                  >
                    <span className="mobile-submenu-title">{sub.name}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/infrastructure" onClick={() => setOpen(false)}>
            Infrastructure
          </NavLink>
          <NavLink to="/certifications" onClick={() => setOpen(false)}>
            Certifications
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
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
