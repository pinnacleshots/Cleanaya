import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services as serviceLinks } from '../data/services'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navClass = [
    'cy-nav',
    scrolled || !isHome ? 'scrolled' : '',
    isHome ? 'cy-nav--transparent' : 'cy-nav--solid',
  ]
    .filter(Boolean)
    .join(' ')

  const hashLink = (id) => `/#${id.replace(/^#/, '')}`

  const goHome = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cy-white)]">
      <header>
        <nav className={navClass}>
          <Link to="/" className="cy-nav-logo" onClick={goHome} aria-label="Cleanaya — Home">
            <div className="cy-nav-logo-main">
              <span className="clean">CLEAN</span>
              <span className="aya">AYA</span>
            </div>
            <div className="cy-nav-logo-sub">Cleaning Services</div>
          </Link>

          <ul className="cy-nav-links">
            <li>
              <div
                className="cy-nav-dropdown-wrap"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button type="button" className="flex items-center gap-1">
                  Services
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="cy-nav-dropdown-panel">
                    <div className="cy-nav-dropdown-inner">
                      {serviceLinks.map(({ slug, label }) => (
                        <Link key={slug || 'all'} to={slug ? `/services/${slug}` : '/services'}>
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link to={hashLink('why')}>Why Us</Link>
            </li>
            <li>
              <Link to={hashLink('work')}>Our Work</Link>
            </li>
            <li>
              <Link to={hashLink('reviews')}>Reviews</Link>
            </li>
            <li>
              <Link to={hashLink('pricing')}>Pricing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to={hashLink('booking')} className="cy-nav-cta">
                Get a Quote
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="cy-nav-hamburger"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        <div className={`cy-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <button type="button" className="cy-mobile-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close">
            ✕
          </button>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
            All Services
          </Link>
          <Link to={hashLink('why')} onClick={() => setMobileMenuOpen(false)}>
            Why Us
          </Link>
          <Link to={hashLink('work')} onClick={() => setMobileMenuOpen(false)}>
            Our Work
          </Link>
          <Link to={hashLink('reviews')} onClick={() => setMobileMenuOpen(false)}>
            Reviews
          </Link>
          <Link to={hashLink('pricing')} onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
            Pricing Page
          </Link>
          <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            Login
          </Link>
          <a href="tel:9522066429" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--cy-sky)' }}>
            (952) 206-6429
          </a>
          <Link to={hashLink('booking')} onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--cy-sky)' }}>
            Get a Quote
          </Link>
        </div>
      </header>

      <main className={isHome ? '' : 'pt-[88px] min-h-[60vh] bg-[var(--cy-off-white)]'}>{children}</main>

      <footer className="cy-footer">
        <div className="cy-footer-grid">
          <div className="cy-footer-brand">
            <Link
              to="/"
              className="cy-footer-logo-link"
              onClick={goHome}
              aria-label="Cleanaya — Home"
            >
              <div className="cy-logo-main">
                <span className="clean">CLEAN</span>
                <span className="aya">AYA</span>
              </div>
              <div className="cy-logo-sub">Cleaning Services</div>
            </Link>
            <p>
              Professional residential and commercial cleaning for the Twin Cities area. We clean like it&apos;s our own home.
            </p>
            <div className="cy-footer-socials">
              <span className="cy-social-btn" aria-hidden>
                f
              </span>
              <span className="cy-social-btn" aria-hidden>
                in
              </span>
              <span className="cy-social-btn" aria-hidden>
                ig
              </span>
            </div>
          </div>
          <div className="cy-footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services/house-cleaning">Residential</Link>
              </li>
              <li>
                <Link to="/services/commercial-office-cleaning">Commercial</Link>
              </li>
              <li>
                <Link to="/services/deep-cleaning">Deep Cleaning</Link>
              </li>
              <li>
                <Link to="/services/move-in-out-cleaning">Move In/Out</Link>
              </li>
              <li>
                <Link to="/services/airbnb-turnaround-cleaning">Airbnb Turnover</Link>
              </li>
            </ul>
          </div>
          <div className="cy-footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/#work">Our Work</Link>
              </li>
              <li>
                <Link to="/#reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/book">Book Now</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="cy-footer-col">
            <h4>Contact</h4>
            <div className="cy-footer-contact-item">
              <span>📞</span>
              <a href="tel:9522066429">(952) 206-6429</a>
            </div>
            <div className="cy-footer-contact-item">
              <span>✉️</span>
              <a href="mailto:support@cleanaya.com">support@cleanaya.com</a>
            </div>
            <div className="cy-footer-contact-item">
              <span>📍</span>
              <span>Twin Cities, MN</span>
            </div>
            <div className="cy-footer-contact-item">
              <span>🕐</span>
              <span>Open 24/7</span>
            </div>
          </div>
        </div>
        <div className="cy-footer-bottom">
          <p>© {new Date().getFullYear()} Cleanaya Cleaning Services. All rights reserved.</p>
          <p>Minnesota · Insured & Bonded</p>
        </div>
      </footer>
    </div>
  )
}
