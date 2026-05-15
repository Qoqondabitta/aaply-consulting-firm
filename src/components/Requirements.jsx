import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaFileAlt, FaGraduationCap, FaPen, FaUserTie, FaGlobe, FaArrowRight } from 'react-icons/fa'

const requirements = [
  {
    icon:  <FaFileAlt className="text-2xl" />,
    title: 'CV / Resume',
    desc:  'An updated, well-formatted resume highlighting your academic and personal achievements.',
    color: 'from-blue-500 to-blue-700',
    glow:  'group-hover:shadow-blue-500/25',
  },
  {
    icon:  <FaGraduationCap className="text-2xl" />,
    title: 'Academic Transcripts',
    desc:  'Official grades and academic records from your current or most recent institution.',
    color: 'from-violet-500 to-purple-700',
    glow:  'group-hover:shadow-purple-500/25',
  },
  {
    icon:  <FaPen className="text-2xl" />,
    title: 'Motivational Letter',
    desc:  'A compelling personal statement explaining your goals and why you want to study abroad.',
    color: 'from-emerald-500 to-teal-700',
    glow:  'group-hover:shadow-emerald-500/25',
  },
  {
    icon:  <FaUserTie className="text-2xl" />,
    title: 'Reference Letters',
    desc:  'Recommendations from teachers, professors, or employers who can vouch for your character.',
    color: 'from-amber-500 to-orange-600',
    glow:  'group-hover:shadow-amber-500/25',
  },
  {
    icon:  <FaGlobe className="text-2xl" />,
    title: 'Language Certificate',
    desc:  'Official proof of language proficiency such as IELTS, TOEFL, or an equivalent recognized certificate.',
    color: 'from-sky-500 to-cyan-700',
    glow:  'group-hover:shadow-sky-500/25',
  },
]

export default function Requirements() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="requirements"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071428 0%, #0B1F3B 50%, #132d55 100%)' }}
      ref={ref}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5B301]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#F5B301]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">What You'll Need</span>
          <h2 className="section-title-white mt-3 mb-5">Application Requirements</h2>
          <p className="section-subtitle-white">
            Prepare these documents before starting your application to ensure a smooth, fast process.
          </p>
        </motion.div>

        {/* Cards — top row: 3, bottom row: 2 centered */}
        <div className="px-0 lg:px-8">
          <div className="grid grid-cols-6 gap-6">
            {requirements.slice(0, 3).map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`col-span-6 sm:col-span-3 lg:col-span-2 group relative bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-7 cursor-default
                  hover:bg-white/[0.09] hover:border-[#F5B301]/30 transition-all duration-400
                  hover:shadow-2xl ${r.glow}`}
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F5B301]/0 to-transparent group-hover:via-[#F5B301]/70 transition-all duration-500 rounded-full" />
                <div className={`w-14 h-14 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {r.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 font-poppins leading-snug">{r.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
            {requirements.slice(3).map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (i + 3) * 0.1 }}
                className={`col-span-6 sm:col-span-3 lg:col-span-2 ${i === 0 ? 'lg:col-start-2' : 'lg:col-start-4'} group relative bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-7 cursor-default
                  hover:bg-white/[0.09] hover:border-[#F5B301]/30 transition-all duration-400
                  hover:shadow-2xl ${r.glow}`}
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F5B301]/0 to-transparent group-hover:via-[#F5B301]/70 transition-all duration-500 rounded-full" />
                <div className={`w-14 h-14 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {r.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 font-poppins leading-snug">{r.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 text-sm mb-7">
            Don't have everything ready? We help you prepare every document.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Talk to an Advisor <FaArrowRight className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
