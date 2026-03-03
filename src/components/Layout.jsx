import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { services as serviceLinks } from '../data/services'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const isServicesActive = location.pathname.startsWith('/services')

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-10 md:h-12" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 1).map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === to
                    ? 'text-[#22bed9]'
                    : 'text-[#4a5763] hover:text-[#22bed9]'
                }`}
              >
                {label}
              </Link>
            ))}
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`font-medium transition-colors duration-200 flex items-center gap-1 ${
                  isServicesActive ? 'text-[#22bed9]' : 'text-[#4a5763] hover:text-[#22bed9]'
                }`}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 min-w-[260px]">
                  <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2">
                    {serviceLinks.map(({ slug, label }) => (
                      <Link
                        key={slug || 'all'}
                        to={slug ? `/services/${slug}` : '/services'}
                        className="block px-4 py-2.5 text-[#4a5763] hover:bg-[#22bed9]/5 hover:text-[#22bed9] transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navLinks.slice(1).map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === to
                    ? 'text-[#22bed9]'
                    : 'text-[#4a5763] hover:text-[#22bed9]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/login"
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/login' ? 'text-[#22bed9]' : 'text-[#4a5763] hover:text-[#22bed9]'
              }`}
            >
              Login
            </Link>
            <a
              href="tel:9522066429"
              className="flex items-center gap-2 text-[#4a5763] hover:text-[#22bed9] font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (952) 206-6429
            </a>
            <Link
              to="/book"
              className="bg-[#22bed9] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#1a9bb5] transition-all duration-300 glow-aqua"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4a5763]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 ${location.pathname === '/' ? 'text-[#22bed9]' : 'text-[#4a5763]'}`}
              >
                Home
              </Link>
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`font-medium py-2 flex items-center gap-2 w-full text-left ${isServicesActive ? 'text-[#22bed9]' : 'text-[#4a5763]'}`}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {serviceLinks.map(({ slug, label }) => (
                      <Link
                        key={slug || 'all'}
                        to={slug ? `/services/${slug}` : '/services'}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2 text-[#4a5763] text-sm"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 ${location.pathname === '/about' ? 'text-[#22bed9]' : 'text-[#4a5763]'}`}
              >
                About
              </Link>
              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 ${location.pathname === '/pricing' ? 'text-[#22bed9]' : 'text-[#4a5763]'}`}
              >
                Pricing
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 ${location.pathname === '/faq' ? 'text-[#22bed9]' : 'text-[#4a5763]'}`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 ${location.pathname === '/contact' ? 'text-[#22bed9]' : 'text-[#4a5763]'}`}
              >
                Contact
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 ${location.pathname === '/login' ? 'text-[#22bed9]' : 'text-[#4a5763]'}`}
              >
                Login
              </Link>
              <a
                href="tel:9522066429"
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium py-2 text-[#22bed9] flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (952) 206-6429
              </a>
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#22bed9] text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Logo className="h-10 mb-4" dark />
              <p className="text-slate-400 max-w-md leading-relaxed">
                Premium cleaning services across Minnesota. Making homes and businesses sparkle since day one.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-slate-400 hover:text-[#22bed9] transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-[#22bed9] transition-colors">Services</Link></li>
                <li><Link to="/pricing" className="text-slate-400 hover:text-[#22bed9] transition-colors">Pricing</Link></li>
                <li><Link to="/faq" className="text-slate-400 hover:text-[#22bed9] transition-colors">FAQ</Link></li>
                <li><Link to="/about" className="text-slate-400 hover:text-[#22bed9] transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-[#22bed9] transition-colors">Contact</Link></li>
                <li><Link to="/login" className="text-slate-400 hover:text-[#22bed9] transition-colors">Login</Link></li>
                <li>
                  <Link to="/book" className="text-[#22bed9] hover:text-[#29c2e0] font-medium">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <a href="tel:9522066429" className="text-[#22bed9] font-medium hover:underline block">(952) 206-6429</a>
              <a href="mailto:support@cleanaya.com" className="text-[#22bed9] font-medium hover:underline block mt-1">support@cleanaya.com</a>
              <p className="text-slate-400 mt-2">Minnesota, USA</p>
              <p className="text-slate-400">Serving the Twin Cities & beyond</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Cleanaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
