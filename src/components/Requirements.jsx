import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaFileAlt, FaGraduationCap, FaPen, FaUserTie, FaArrowRight } from 'react-icons/fa'

const requirements = [
  {
    icon:  <FaFileAlt className="text-2xl" />,
    title: 'CV / Resume',
    desc:  'An updated, well-formatted resume highlighting your academic and personal achievements.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon:  <FaGraduationCap className="text-2xl" />,
    title: 'Academic Transcripts',
    desc:  'Official grades and academic records from your current or most recent institution.',
    color: 'from-violet-500 to-purple-700',
  },
  {
    icon:  <FaPen className="text-2xl" />,
    title: 'Motivational Letter',
    desc:  'A compelling personal statement explaining your goals and why you want to study abroad.',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    icon:  <FaUserTie className="text-2xl" />,
    title: 'Reference Letters',
    desc:  'Recommendations from teachers, professors, or employers who can vouch for your character.',
    color: 'from-amber-500 to-orange-600',
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-7
                hover:bg-white/[0.09] hover:border-[#F5B301]/25 transition-all duration-400"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {r.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 font-poppins">{r.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
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
