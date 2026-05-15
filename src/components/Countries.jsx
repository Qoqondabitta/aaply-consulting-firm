import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { COUNTRIES } from '../data/countries'

export default function Countries() {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section id="countries" className="py-16 sm:py-28 bg-[#071428]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Destinations</span>
          <h2 className="section-title-white mt-3 mb-5">Choose Your Country</h2>
          <p className="section-subtitle-white">
            Explore our supported destinations and find the perfect match for your academic journey.
          </p>
        </motion.div>

        {/* Country cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {COUNTRIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => navigate(c.path)}
              className="group relative h-[280px] sm:h-[390px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Full-bleed image */}
              <img
                src={c.image}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071428]/95 via-[#0B1F3B]/40 to-black/20" />

              {/* Gold border glow on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#F5B301]/50 transition-all duration-500" />

              {/* Top row: badge + flag */}
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                <span className={`${c.tagColor} text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                  {c.tag}
                </span>
                <img
                  src={`https://flagcdn.com/w40/${c.flagCode}.png`}
                  alt={`${c.name} flag`}
                  className="w-9 h-6 object-cover rounded shadow-lg"
                />
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-3">
                  <span className="text-[#F5B301] font-bold text-sm bg-[#F5B301]/15 border border-[#F5B301]/30 px-3 py-1 rounded-lg">
                    {c.price}
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold font-poppins mb-2">{c.name}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5">{c.desc}</p>
                <div className="flex items-center gap-2 text-[#F5B301] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  View Details <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
