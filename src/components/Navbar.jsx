import { useState, useEffect, useRef, useCallback } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const productNavHierarchy = [
  {
    id: 'sluice-valve',
    name: 'Sluice Valve',
    path: '/products/metal-seated-sluice-valve',
    children: [
      {
        id: 'metal-seated',
        name: 'Metal Seated',
        path: '/products/metal-seated-sluice-valve',
      },
      {
        id: 'resilient-seated',
        name: 'Resilient Seated',
        path: '/products/resilient-seated-sluice-valve',
      },
    ],
  },
  {
    id: 'butterfly-valve',
    name: 'Butterfly Valve',
    path: '/products/flange-end-butterfly-valve',
    children: [
      {
        id: 'flange-end',
        name: 'Flange End',
        path: '/products/flange-end-butterfly-valve',
      },
      {
        id: 'wafer-end',
        name: 'Wafer Type',
        path: '/products/wafer-type-butterfly-valve',
      },
    ],
  },
  {
    id: 'check-valve',
    name: 'Non Return Valve',
    path: '/products/single-door-check-valve',
    children: [
      {
        id: 'single-door',
        name: 'Single Door',
        path: '/products/single-door-check-valve',
      },
      {
        id: 'multi-door',
        name: 'Multi Door',
        path: '/products/multi-door-check-valve',
      },
      {
        id: 'dual-plate',
        name: 'Dual Plate',
        path: '/products/dual-plate-check-valve',
      },
    ],
  },
  {
    id: 'air-valve',
    name: 'Air Valve',
    path: '/products/single-air-valve',
    children: [
      {
        id: 'single-air-valve',
        name: 'Single Air Valve',
        path: '/products/single-air-valve',
      },
      {
        id: 'double-acting',
        name: 'Double Acting',
        path: '/products/double-acting-air-valve',
      },
      {
        id: 'tamper-proof',
        name: 'Tamper Proof',
        path: '/products/tamper-proof-air-valve',
      },
      {
        id: 'kinetic-double-acting',
        name: 'Kinetic Double Acting',
        path: '/products/kinetic-double-acting-air-valve',
      },
    ],
  },
]

const whyUsNavLinks = [
  { name: 'In-House Manufacturing', path: '/why-us/in-house-manufacturing' },
  { name: 'In-House Testing Facility', path: '/why-us/in-house-testing-facility' },
  { name: 'Certifications', path: '/why-us/certifications' },
  { name: 'Customer Support', path: '/why-us/customer-support' },
  { name: 'On-Time Delivery', path: '/why-us/on-time-delivery' },
]

const experienceNavLinks = [
  { name: 'Water Supply Project', path: '/experience/water-supply-project' },
  { name: 'Waste Water Project', path: '/experience/waste-water-project' },
  { name: 'Irrigation Projects', path: '/experience/irrigation-projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [flyoutSide, setFlyoutSide] = useState({})

  const [mobileSubOpen, setMobileSubOpen] = useState(false)
  const [mobileOpenCats, setMobileOpenCats] = useState({})

  const [whyUsDropdownOpen, setWhyUsDropdownOpen] = useState(false)
  const [mobileWhyUsOpen, setMobileWhyUsOpen] = useState(false)
  const whyUsRef = useRef(null)

  const [expDropdownOpen, setExpDropdownOpen] = useState(false)
  const [mobileExpOpen, setMobileExpOpen] = useState(false)
  const expRef = useRef(null)

  const navRef = useRef(null)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const isProductActive = location.pathname.startsWith('/product')
  const isWhyUsActive = location.pathname.startsWith('/why-us')
  const isExpActive = location.pathname.startsWith('/experience')

  const closeAll = () => {
    setOpen(false)
    setDropdownOpen(false)
    setWhyUsDropdownOpen(false)
    setExpDropdownOpen(false)
    setActiveCategory(null)
    setMobileSubOpen(false)
    setMobileWhyUsOpen(false)
    setMobileExpOpen(false)
  }

  const toggleMobileCat = (catId, e) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileOpenCats((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }))
  }

  const updateFlyoutDirections = useCallback(() => {
    if (!dropdownRef.current) return
    const rect = dropdownRef.current.getBoundingClientRect()
    const level1Right = rect.left + 225
    const newFlyoutSide = {}
    productNavHierarchy.forEach((cat) => {
      const wouldOverflowRight = level1Right + 230 > window.innerWidth - 12
      newFlyoutSide[cat.id] = wouldOverflowRight ? 'left' : 'right'
    })
    setFlyoutSide(newFlyoutSide)
  }, [])

  const handleCatMouseEnter = (cat, e) => {
    setActiveCategory(cat.id)
    if (e?.currentTarget) {
      const catRect = e.currentTarget.getBoundingClientRect()
      const opensLeft = catRect.right + 230 > window.innerWidth - 12
      setFlyoutSide((prev) => ({
        ...prev,
        [cat.id]: opensLeft ? 'left' : 'right',
      }))
    }
  }

  const handleParentNavClick = (e, menu) => {
    if (!window.matchMedia('(max-width: 1100px)').matches) {
      closeAll()
      return
    }

    e.preventDefault()
    e.stopPropagation()
    if (menu === 'products') {
      setMobileSubOpen((current) => !current)
      setMobileWhyUsOpen(false)
      setMobileExpOpen(false)
    } else if (menu === 'why-us') {
      setMobileWhyUsOpen((current) => !current)
      setMobileSubOpen(false)
      setMobileExpOpen(false)
    } else {
      setMobileExpOpen((current) => !current)
      setMobileSubOpen(false)
      setMobileWhyUsOpen(false)
    }
  }

  const handleMenuToggle = () => {
    const nextOpen = !open
    setOpen(nextOpen)
    if (nextOpen) {
      setMobileSubOpen(isProductActive)
      setMobileWhyUsOpen(isWhyUsActive)
      setMobileExpOpen(isExpActive)
      if (isProductActive) {
        const activeProductCategory = productNavHierarchy.find((cat) =>
          cat.path === location.pathname || cat.children?.some((item) => item.path === location.pathname)
        )
        setMobileOpenCats(activeProductCategory ? { [activeProductCategory.id]: true } : {})
      }
    }
  }

  // Close menu or dropdown on Escape key or outside click, and handle resize
  useEffect(() => {
    updateFlyoutDirections()
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeAll()
      }
    }
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
        setActiveCategory(null)
      }
      if (whyUsRef.current && !whyUsRef.current.contains(e.target)) {
        setWhyUsDropdownOpen(false)
      }
      if (expRef.current && !expRef.current.contains(e.target)) {
        setExpDropdownOpen(false)
      }
    }
    const handleResize = () => {
      updateFlyoutDirections()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', handleResize)
    }
  }, [updateFlyoutDirections])

  return (
    <header className="site-header">
      <div className="nav-inner" ref={navRef}>
        <Link to="/" className="brand" onClick={closeAll}>
          <img src="/images/logo/logo.webp" alt="SSPR Valve" />
        </Link>
        <nav id="main-navigation" className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            onClick={closeAll}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            onClick={closeAll}
          >
            About Us
          </NavLink>

          {/* Products Dropdown with Multi-Level Submenus */}
          <div
            className={`nav-item-dropdown ${mobileSubOpen ? 'mobile-open' : ''}`}
            ref={dropdownRef}
            onMouseEnter={() => {
              setDropdownOpen(true)
              updateFlyoutDirections()
            }}
            onMouseLeave={() => {
              setDropdownOpen(false)
              setActiveCategory(null)
            }}
          >
            <div className="nav-dropdown-trigger-row">
              <NavLink
                to="/products"
                className={({ isActive }) => `nav-btn ${isActive || isProductActive ? 'active' : ''}`}
                onClick={(e) => handleParentNavClick(e, 'products')}
                aria-expanded={mobileSubOpen}
              >
                <span>Our Products</span>
                <ChevronDown
                  size={14}
                  className={`nav-dropdown-chevron ${dropdownOpen || mobileSubOpen ? 'rotate' : ''}`}
                  aria-hidden="true"
                />
              </NavLink>

            </div>

            {/* Desktop Dropdown Menu (Multi-Level Cascading Flyout) */}
            <div
              className={`nav-dropdown-menu ${dropdownOpen ? 'open' : ''}`}
              role="menu"
              aria-label="Products Submenu"
            >
              <div className="nav-dropdown-header">
                <span className="nav-dropdown-eyebrow">OUR VALVE RANGE</span>
              </div>
              <div className="nav-dropdown-items">
                {productNavHierarchy.map((cat) => {
                  const isCatHovered = activeCategory === cat.id
                  const isFlyoutLeft = flyoutSide[cat.id] === 'left'
                  return (
                    <div
                      key={cat.id}
                      className={`nav-dropdown-l2-wrapper ${isCatHovered ? 'active-hover' : ''}`}
                      onMouseEnter={(e) => handleCatMouseEnter(cat, e)}
                    >
                      <NavLink
                        to={cat.path}
                        className={({ isActive }) =>
                          `nav-dropdown-l2-row ${isActive ? 'active' : ''}`
                        }
                        onClick={closeAll}
                      >
                        <span className="nav-l2-name">{cat.name}</span>
                      </NavLink>

                      {/* Level 2 Submenu Flyout (e.g. Metal Seated, Resilient Seated) */}
                      {cat.children && (
                        <div
                          className={`nav-flyout-level2 ${isFlyoutLeft ? 'open-left' : ''}`}
                          role="menu"
                        >
                          {cat.children.map((subItem) => (
                            <div
                              key={subItem.id}
                              className="nav-dropdown-l3-wrapper"
                            >
                              <NavLink
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `nav-dropdown-l3-row ${isActive ? 'active' : ''}`
                                }
                                onClick={closeAll}
                              >
                                <span>{subItem.name}</span>
                              </NavLink>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile / Tablet Accordion Submenu */}
            {mobileSubOpen && (
              <div className="mobile-submenu-panel">
                {productNavHierarchy.map((cat) => {
                  const isCatOpen = !!mobileOpenCats[cat.id]
                  const isCatRouteActive = cat.path === location.pathname || cat.children?.some((item) => item.path === location.pathname)
                  return (
                    <div key={cat.id} className="mobile-l1-item">
                      <div className="mobile-l1-header">
                        <NavLink
                          to={cat.path}
                          className={() => `mobile-l1-link ${isCatRouteActive ? 'active' : ''}`}
                          onClick={(e) => toggleMobileCat(cat.id, e)}
                          aria-expanded={isCatOpen}
                        >
                          <span>{cat.name}</span>
                          <ChevronDown size={15} className={`mobile-category-chevron ${isCatOpen ? 'rotate' : ''}`} aria-hidden="true" />
                        </NavLink>
                      </div>

                      {/* Level 2 Submenu Mobile Panel */}
                      {cat.children && isCatOpen && (
                        <div className="mobile-l2-panel">
                          {cat.children.map((subItem) => (
                            <div key={subItem.id} className="mobile-l2-item">
                              <div className="mobile-l2-header">
                                <NavLink
                                  to={subItem.path}
                                  className={({ isActive }) =>
                                    `mobile-l2-link ${isActive ? 'active' : ''}`
                                  }
                                  onClick={closeAll}
                                >
                                  {subItem.name}
                                </NavLink>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Why Us Dropdown with Submenu */}
          <div
            className={`nav-item-dropdown ${mobileWhyUsOpen ? 'mobile-open' : ''}`}
            ref={whyUsRef}
            onMouseEnter={() => setWhyUsDropdownOpen(true)}
            onMouseLeave={() => setWhyUsDropdownOpen(false)}
          >
            <div className="nav-dropdown-trigger-row">
              <NavLink
                to="/why-us"
                className={({ isActive }) => `nav-btn ${isActive || isWhyUsActive ? 'active' : ''}`}
                onClick={(e) => handleParentNavClick(e, 'why-us')}
                aria-expanded={mobileWhyUsOpen}
              >
                <span>Why Us</span>
                <ChevronDown
                  size={14}
                  className={`nav-dropdown-chevron ${whyUsDropdownOpen || mobileWhyUsOpen ? 'rotate' : ''}`}
                  aria-hidden="true"
                />
              </NavLink>

            </div>

            {/* Desktop Dropdown Menu */}
            <div
              className={`nav-dropdown-menu ${whyUsDropdownOpen ? 'open' : ''}`}
              role="menu"
              aria-label="Why Us Submenu"
            >
              <div className="nav-dropdown-header">
                <span className="nav-dropdown-eyebrow">WHY CHOOSE US</span>
              </div>
              <div className="nav-dropdown-items">
                {whyUsNavLinks.map((item) => (
                  <div key={item.path} className="nav-dropdown-l2-wrapper">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `nav-dropdown-l2-row ${isActive ? 'active' : ''}`
                      }
                      onClick={closeAll}
                    >
                      <span className="nav-l2-name">{item.name}</span>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile / Tablet Accordion Submenu */}
            {mobileWhyUsOpen && (
              <div className="mobile-submenu-panel">
                {whyUsNavLinks.map((item) => (
                  <div key={item.path} className="mobile-l1-item">
                    <div className="mobile-l1-header">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `mobile-l1-link ${isActive ? 'active' : ''}`
                        }
                        onClick={closeAll}
                      >
                        {item.name}
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Experience Dropdown with Submenu */}
          <div
            className={`nav-item-dropdown ${mobileExpOpen ? 'mobile-open' : ''}`}
            ref={expRef}
            onMouseEnter={() => setExpDropdownOpen(true)}
            onMouseLeave={() => setExpDropdownOpen(false)}
          >
            <div className="nav-dropdown-trigger-row">
              <NavLink
                to="/experience"
                className={({ isActive }) => `nav-btn ${isActive || isExpActive ? 'active' : ''}`}
                onClick={(e) => handleParentNavClick(e, 'experience')}
                aria-expanded={mobileExpOpen}
              >
                <span>Experience</span>
                <ChevronDown
                  size={14}
                  className={`nav-dropdown-chevron ${expDropdownOpen || mobileExpOpen ? 'rotate' : ''}`}
                  aria-hidden="true"
                />
              </NavLink>

            </div>

            {/* Desktop Dropdown Menu */}
            <div
              className={`nav-dropdown-menu ${expDropdownOpen ? 'open' : ''}`}
              role="menu"
              aria-label="Experience Submenu"
            >
              <div className="nav-dropdown-header">
                <span className="nav-dropdown-eyebrow">OUR EXPERIENCE</span>
              </div>
              <div className="nav-dropdown-items">
                {experienceNavLinks.map((item) => (
                  <div key={item.path} className="nav-dropdown-l2-wrapper">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `nav-dropdown-l2-row ${isActive ? 'active' : ''}`
                      }
                      onClick={closeAll}
                    >
                      <span className="nav-l2-name">{item.name}</span>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile / Tablet Accordion Submenu */}
            {mobileExpOpen && (
              <div className="mobile-submenu-panel">
                {experienceNavLinks.map((item) => (
                  <div key={item.path} className="mobile-l1-item">
                    <div className="mobile-l1-header">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `mobile-l1-link ${isActive ? 'active' : ''}`
                        }
                        onClick={closeAll}
                      >
                        {item.name}
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <NavLink
            to="/clients"
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            onClick={closeAll}
          >
            Clients
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            onClick={closeAll}
          >
            <span>Contact</span>
          </NavLink>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={handleMenuToggle}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div
          className="nav-backdrop"
          onClick={closeAll}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
