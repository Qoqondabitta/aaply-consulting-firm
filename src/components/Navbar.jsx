import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',         href: '/#home',         section: 'home' },
  { label: 'About',        href: '/#about',        section: 'about' },
  { label: 'Services',     href: '/#services',     section: 'services' },
  { label: 'Countries',    href: '/#countries',    section: 'countries' },
  { label: 'Pricing',      href: '/#pricing',      section: 'pricing' },
  { label: 'Requirements', href: '/#requirements', section: 'requirements' },
  { label: 'Contact',      href: '/#contact',      section: 'contact' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')
  const location = useLocation()

  /* Scrolled state — adds solid navy bg */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Scroll-spy — track which section occupies the middle of the viewport */
  useEffect(() => {
    if (location.pathname !== '/') return

    const options = { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    const cb = (entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
    }

    const observers = navLinks
      .map(({ section }) => {
        const el = document.getElementById(section)
        if (!el) return null
        const obs = new IntersectionObserver(cb, options)
        obs.observe(el)
        return obs
      })
      .filter(Boolean)

    return () => observers.forEach((obs) => obs.disconnect())
  }, [location.pathname])

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

  const isOnHome = location.pathname === '/'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1F3B]/96 backdrop-blur-xl shadow-navy-lg border-b border-white/8'
          : 'bg-gradient-to-b from-black/55 via-black/20 to-transparent'
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

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => {
              const isActive = isOnHome && activeSection === link.section
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 group py-1 ${
                    isActive ? 'text-[#F5B301]' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#F5B301] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}

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
              {navLinks.map((link) => {
                const isActive = isOnHome && activeSection === link.section
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center gap-2 font-medium py-3 border-b border-white/8 transition-colors text-sm ${
                      isActive ? 'text-[#F5B301]' : 'text-white/75 hover:text-[#F5B301]'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full shrink-0" />
                    )}
                    {link.label}
                  </a>
                )
              })}
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
