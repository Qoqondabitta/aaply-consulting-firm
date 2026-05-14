import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUniversity, FaPassport, FaHome, FaBriefcase } from 'react-icons/fa'

const services = [
  {
    icon:     <FaUniversity className="text-2xl" />,
    title:    'University Admission',
    desc:     'Full application management — document preparation, submission, and follow-ups to top-ranked universities across 6 countries.',
    gradient: 'from-blue-500 to-indigo-600',
    glow:     'group-hover:shadow-blue-500/25',
  },
  {
    icon:     <FaPassport className="text-2xl" />,
    title:    'Visa Application',
    desc:     "Expert guidance from document checklist to embassy appointment preparation. We've helped hundreds secure their student visas.",
    gradient: 'from-violet-500 to-purple-700',
    glow:     'group-hover:shadow-purple-500/25',
  },
  {
    icon:     <FaHome className="text-2xl" />,
    title:    'Accommodation Help',
    desc:     'Finding safe, affordable housing abroad is stressful. We provide guidance and connections to help you secure suitable housing.',
    gradient: 'from-emerald-500 to-teal-700',
    glow:     'group-hover:shadow-emerald-500/25',
    note:     'Assistance only — not guaranteed',
  },
  {
    icon:     <FaBriefcase className="text-2xl" />,
    title:    'Job Support',
    desc:     'CV preparation, job search strategies, and local opportunity connections to support yourself while studying abroad.',
    gradient: 'from-amber-500 to-orange-600',
    glow:     'group-hover:shadow-amber-500/25',
    note:     'Assistance only — not guaranteed',
  },
]

export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-28 bg-[#0B1F3B] relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5B301]/4 to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#F5B301]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">What We Offer</span>
          <h2 className="section-title-white mt-3 mb-5">Our Services</h2>
          <p className="section-subtitle-white">
            End-to-end support for your international education journey — from first inquiry to arrival abroad.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-7 cursor-default
                hover:bg-white/[0.09] hover:border-[#F5B301]/30 transition-all duration-400
                hover:shadow-2xl ${s.glow}`}
            >
              {/* Gold top-border on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F5B301]/0 to-transparent group-hover:via-[#F5B301]/70 transition-all duration-500 rounded-full" />

              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${s.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {s.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-3 font-poppins leading-snug">
                {s.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>

              {s.note && (
                <div className="mt-5 inline-flex items-center gap-1.5 bg-[#F5B301]/10 border border-[#F5B301]/20 text-[#F5B301] text-xs font-medium px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full" />
                  {s.note}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
