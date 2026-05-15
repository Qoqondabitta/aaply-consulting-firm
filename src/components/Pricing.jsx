import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    country:  'Italy',
    flag:     '🇮🇹',
    price:    '$650',
    path:     '/italy',
    features: ['University Admission', 'Visa Application', 'Document Review', 'Email Support'],
  },
  {
    country:  'Germany',
    flag:     '🇩🇪',
    price:    '$650',
    path:     '/germany',
    features: ['University Admission', 'Visa Application', 'Document Review', 'Email Support'],
  },
  {
    country:  'USA',
    flag:     '🇺🇸',
    price:    '$550',
    subtext:  'Visa: $100 initial + $900 after approval',
    path:     '/usa',
    features: ['5 University Applications', 'Visa Preparation', 'Interview Coaching', 'Post-Approval Support'],
  },
  {
    country:       'Poland',
    flag:          '🇵🇱',
    price:         '$750',
    path:          '/poland',
    features:      ['University Admission', 'Visa Application', 'Job Assistance*', 'Housing Assistance*'],
    highlighted:   true,
    highlightLabel:'Most Popular',
  },
  {
    country:  'Hungary',
    flag:     '🇭🇺',
    price:    '$500 – $1,000',
    subtext:  'Opening November Intake',
    path:     '/hungary',
    features: ['University Admission', 'Visa Application', '100% Scholarship Option', 'Document Support'],
    badge:    'Coming Soon',
  },
  {
    country:  'Canada',
    flag:     '🇨🇦',
    price:    '$2,000',
    subtext:  'Full-service package',
    path:     '/canada',
    features: ['Admission ($500)', 'Initial Visa ($100)', 'Post-Acceptance ($1,400)', 'Settlement Support'],
  },
]

export default function Pricing() {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-100px' })
  const navigate = useNavigate()

  return (
    <section id="pricing" className="py-16 sm:py-28 bg-[#0B1F3B] relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23F5B301%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#F5B301]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title-white mt-3 mb-5">Simple, Clear Pricing</h2>
          <p className="section-subtitle-white">
            No hidden fees. Know exactly what you're paying for before you commit to anything.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.country}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.highlighted
                  ? 'bg-[#F5B301] shadow-gold-lg'
                  : 'bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] hover:border-[#F5B301]/30 hover:shadow-2xl'
              }`}
            >
              {/* Highlight badge */}
              {plan.highlightLabel && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-[#0B1F3B] text-[#F5B301] text-xs font-bold px-4 py-1.5 rounded-full border border-[#F5B301]/30">
                    ★ {plan.highlightLabel}
                  </span>
                </div>
              )}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Flag + country */}
              <div className="text-3xl mb-4">{plan.flag}</div>
              <h3 className={`text-xl font-bold font-poppins mb-1 ${plan.highlighted ? 'text-[#0B1F3B]' : 'text-white'}`}>
                {plan.country}
              </h3>

              {/* Price */}
              <div className={`text-4xl font-black font-poppins mb-1 leading-none ${plan.highlighted ? 'text-[#0B1F3B]' : 'text-[#F5B301]'}`}>
                {plan.price}
              </div>
              {plan.subtext && (
                <p className={`text-xs mb-5 leading-relaxed ${plan.highlighted ? 'text-[#0B1F3B]/70' : 'text-white/45'}`}>
                  {plan.subtext}
                </p>
              )}

              {/* Features */}
              <ul className="space-y-3 my-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-[#0B1F3B]' : 'bg-[#F5B301]/20'
                    }`}>
                      <FaCheck className={`text-[8px] ${plan.highlighted ? 'text-[#F5B301]' : 'text-[#F5B301]'}`} />
                    </div>
                    <span className={plan.highlighted ? 'text-[#0B1F3B]/85' : 'text-white/65'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate(plan.path)}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? 'bg-[#0B1F3B] text-[#F5B301] hover:bg-navy-dark'
                    : 'bg-[#F5B301] text-[#0B1F3B] hover:bg-yellow-400 shadow-gold'
                }`}
              >
                View Full Details →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-white/30 text-xs mt-10"
        >
          * Assistance only — employment and housing are not guaranteed.
        </motion.p>
      </div>
    </section>
  )
}
