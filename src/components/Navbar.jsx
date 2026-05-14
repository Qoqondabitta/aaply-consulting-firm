import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',      href: '/#home' },
  { label: 'About',     href: '/#about' },
  { label: 'Services',  href: '/#services' },
  { label: 'Countries', href: '/#countries' },
  { label: 'Pricing',   href: '/#pricing' },
  { label: 'Contact',   href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      if (location.pathname !== '/') {
        window.location.href = href
        return
      }
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1F3B]/96 backdrop-blur-xl shadow-navy-lg border-b border-white/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div className="w-10 h-10 bg-[#F5B301] rounded-xl flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-shadow duration-300">
                <span className="text-[#0B1F3B] font-black text-lg font-poppins">A</span>
              </div>
            </div>
            <span className="font-bold text-xl font-poppins text-white tracking-tight leading-none">
              Apply<span className="text-[#F5B301]"> Admission</span>
            </span>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-medium text-white/75 hover:text-white transition-colors duration-200 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#F5B301] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="btn-primary text-sm px-5 py-2.5 ml-2"
            >
              Apply Now
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[7px] w-6' : 'w-6'
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'opacity-0 w-0' : 'w-4'
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[7px] w-6' : 'w-6'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0B1F3B] border-t border-white/10 overflow-hidden"
          >
            <div className="px-5 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center text-white/75 hover:text-[#F5B301] font-medium py-3 border-b border-white/8 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="btn-primary w-full"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
