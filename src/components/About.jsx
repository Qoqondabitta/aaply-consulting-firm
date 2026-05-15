import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaHandshake, FaStar, FaCheckCircle } from 'react-icons/fa'

const values = [
  {
    icon: <FaGraduationCap className="text-[#F5B301] text-xl" />,
    title: 'Expert Guidance',
    desc: "Personalized advice from consultants who've navigated the same journey.",
  },
  {
    icon: <FaHandshake className="text-[#F5B301] text-xl" />,
    title: 'Transparent Process',
    desc: 'No hidden fees. Clear timelines. Honest communication at every step.',
  },
  {
    icon: <FaCheckCircle className="text-[#F5B301] text-xl" />,
    title: 'End-to-End Support',
    desc: 'From first inquiry to arrival abroad — we stay with you throughout.',
  },
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-16 sm:py-28 bg-[#071428]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-navy-lg">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                alt="Students graduating"
                className="w-full h-[240px] sm:h-[500px] object-cover"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 items-center gap-4 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#F5B301] rounded-xl flex items-center justify-center shrink-0 shadow-gold">
                <FaStar className="text-[#0B1F3B] text-2xl" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#0B1F3B] font-poppins leading-none">✓</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">Visa Assistance</div>
              </div>
            </motion.div>

            {/* Decorative gold border accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-4 border-[#F5B301] rounded-2xl opacity-30" />
          </motion.div>

          {/* ── Text column ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="section-label">Our Story</span>

            <h2 className="section-title-white mt-3 mb-6">
              Two Partners,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B301] to-amber-300">
                One Mission
              </span>
            </h2>

            <p className="text-white/65 leading-relaxed mb-5 text-[15px]">
              Apply Admission was founded by two partners who went through the challenging journey
              of studying abroad themselves. Having faced every hurdle — from confusing paperwork
              to housing stress — they built this agency to make that path clear and guided for others.
            </p>
            <p className="text-white/65 leading-relaxed mb-10 text-[15px]">
              Today, we're a dedicated consultancy committed to walking students through every stage:
              university selection, admission applications, visa processing, accommodation, and
              career support. We treat every student's dream as our personal responsibility.

            </p>

            {/* Values list */}
            <div className="space-y-5">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 bg-[#0B1F3B] rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-navy">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">{item.title}</div>
                    <div className="text-white/55 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                Book a Free Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
