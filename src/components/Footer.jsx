import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTelegram, FaMapMarkerAlt } from 'react-icons/fa'

const countryLinks = [
  { label: 'Poland',  path: '/poland' },
  { label: 'Italy',   path: '/italy' },
  { label: 'Germany', path: '/germany' },
  { label: 'Hungary', path: '/hungary' },
  { label: 'USA',     path: '/usa' },
  { label: 'Canada',  path: '/canada' },
]

const quickLinks = ['Home', 'About', 'Services', 'Pricing', 'Contact']

const socials = [
  { icon: <FaInstagram />,  label: 'Instagram' },
  { icon: <FaFacebook />,   label: 'Facebook' },
  { icon: <FaTelegram />,   label: 'Telegram' },
]

export default function Footer() {
  return (
    <footer className="bg-[#071428] text-white/60">
      {/* Top gradient bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F5B301]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-10 h-10 bg-[#F5B301] rounded-xl flex items-center justify-center shadow-gold shrink-0">
                <span className="text-[#0B1F3B] font-black text-lg font-poppins">A</span>
              </div>
              <span className="text-white font-bold text-xl font-poppins tracking-tight">
                Apply<span className="text-[#F5B301]"> Admission</span>
              </span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Your trusted partner for studying abroad. We guide students from first inquiry through
              admission, visa, and arrival.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/8 border border-white/10 rounded-lg flex items-center justify-center
                    hover:bg-[#F5B301] hover:text-[#0B1F3B] hover:border-[#F5B301] transition-all duration-300 text-white/50"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="text-white/45 hover:text-[#F5B301] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#F5B301]/0 group-hover:bg-[#F5B301] rounded-full transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Countries ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Destinations
            </h4>
            <ul className="space-y-3">
              {countryLinks.map((c) => (
                <li key={c.path}>
                  <Link
                    to={c.path}
                    className="text-white/45 hover:text-[#F5B301] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#F5B301]/0 group-hover:bg-[#F5B301] rounded-full transition-colors" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:a.apply.admission@gmail.com"
                  className="flex items-start gap-3 text-white/45 hover:text-[#F5B301] transition-colors text-sm group"
                >
                  <FaEnvelope className="text-[#F5B301] shrink-0 mt-0.5" />
                  a.apply.admission@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14376962005"
                  className="flex items-center gap-3 text-white/45 hover:text-[#F5B301] transition-colors text-sm"
                >
                  <FaPhone className="text-[#F5B301] shrink-0" />
                  +1 437-696-2005
                </a>
              </li>
              <li>
                <a
                  href="tel:+12896231115"
                  className="flex items-center gap-3 text-white/45 hover:text-[#F5B301] transition-colors text-sm"
                >
                  <FaPhone className="text-[#F5B301] shrink-0" />
                  +1 (289) 623-1115
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/35 text-sm">
                <FaMapMarkerAlt className="text-[#F5B301] shrink-0" />
                Serving students worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Apply Admission. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with passion — helping students reach their dreams.
          </p>
        </div>
      </div>
    </footer>
  )
}
