import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaInfoCircle, FaPassport, FaUniversity, FaHome, FaBriefcase, FaGlobe, FaFileAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const iconMap = {
  'University Admission':           <FaUniversity />,
  'University / College Admission': <FaUniversity />,
  'Visa Application':               <FaPassport />,
  'Visa Support':                   <FaPassport />,
  'Visa Preparation (Initial)':     <FaPassport />,
  'Post-Acceptance Visa Processing':<FaPassport />,
  'Post-Approval Visa Support':     <FaPassport />,
  'Job Assistance':                 <FaBriefcase />,
  'Apartment Assistance':           <FaHome />,
  '100% Scholarship Application':   <FaGlobe />,
  '5 University Applications':      <FaUniversity />,
  'Visa Interview Coaching':        <FaFileAlt />,
  'Welcome & Settlement Support':   <FaHome />,
  'Initial Visa Support':           <FaPassport />,
}

const gradients = [
  'from-blue-500 to-indigo-600',
  'from-violet-500 to-purple-700',
  'from-emerald-500 to-teal-700',
  'from-amber-500 to-orange-600',
]

export default function CountryPage({
  name,
  flag,
  flagCode,
  heroImage,
  overviewImage,
  tagline,
  overview,
  services,
  pricing,
  requirements,
  notes,
  badge,
}) {
  const navigate = useNavigate()

  const scrollToContact = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <div className="min-h-screen">

      {/* ══════════════════════════════════════════
          HERO — full viewport, image bg
      ══════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071428]/92 via-[#0B1F3B]/80 to-[#071428]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071428]/80 via-transparent to-transparent" />

        {/* Decorative glow */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#F5B301]/6 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#F5B301] text-[#0B1F3B] text-sm font-bold px-5 py-2 rounded-full mb-8 shadow-gold"
            >
              {badge}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <img
              src={`https://flagcdn.com/w80/${flagCode}.png`}
              alt={`${name} flag`}
              className="w-24 h-16 sm:w-32 sm:h-[86px] object-cover rounded-xl shadow-2xl mx-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-poppins mb-5 leading-tight"
          >
            Study in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B301] to-amber-300">
              {name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={scrollToContact} className="btn-primary text-base px-9 py-4">
              Apply Now <FaArrowRight className="text-xs" />
            </button>
            <button
              onClick={() => navigate(-1)}
              className="btn-outline text-base px-9 py-4"
            >
              ← Back
            </button>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center pt-1.5 animate-bounce">
            <div className="w-1 h-2 bg-[#F5B301] rounded-full" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OVERVIEW — split layout
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-navy-lg">
                <img
                  src={overviewImage || heroImage}
                  alt={`Study in ${name}`}
                  className="w-full h-[220px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/25 to-transparent" />
              </div>
              {/* Gold accent frame */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 border-4 border-[#F5B301] rounded-2xl opacity-40" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-16 h-16 bg-[#F5B301] rounded-2xl opacity-15" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="section-label">{flag} Overview</span>
              <h2 className="section-title mt-3 mb-6">
                Why Study in {name}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">{overview}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Expert Guidance',    val: '✓' },
                  { label: 'Visa Support',        val: '✓' },
                  { label: 'Fast Process',        val: '✓' },
                  { label: 'End-to-End Service',  val: '✓' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 text-sm">
                    <div className="w-5 h-5 bg-[#F5B301] rounded-full flex items-center justify-center shrink-0">
                      <FaCheck className="text-[#0B1F3B] text-[8px]" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <button onClick={scrollToContact} className="btn-primary mt-10">
                Start Your Application <FaArrowRight className="text-xs" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES INCLUDED — icon grid
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-28 bg-[#0B1F3B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F5B301]/4 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label">Package Details</span>
            <h2 className="section-title-white mt-3 mb-4">What's Included</h2>
            <p className="section-subtitle-white">
              Everything we handle for you as part of your {name} package.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-6 flex items-start gap-5
                  hover:bg-white/[0.1] hover:border-[#F5B301]/25 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${gradients[i % gradients.length]} rounded-xl flex items-center justify-center text-white text-lg shrink-0 shadow-lg`}
                >
                  {iconMap[s.label] || <FaCheck />}
                </div>
                <div>
                  <div className="text-white font-bold mb-1.5">{s.label}</div>
                  {s.desc && <div className="text-white/50 text-sm leading-relaxed">{s.desc}</div>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Notes / disclaimers */}
          {notes && notes.length > 0 && (
            <div className="mt-8 space-y-3">
              {notes.map((note, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#F5B301]/80 bg-[#F5B301]/8 border border-[#F5B301]/15 rounded-xl px-5 py-4"
                >
                  <FaInfoCircle className="shrink-0 mt-0.5 text-[#F5B301]" />
                  {note}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING — highlight box
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-28 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Investment</span>
            <h2 className="section-title mt-3">Pricing Breakdown</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-navy-lg overflow-hidden border border-gray-100"
          >
            {/* Header strip */}
            <div className="bg-[#0B1F3B] px-5 py-4 sm:px-8 sm:py-6 flex items-center justify-between">
              <div>
                <div className="text-[#F5B301] text-sm font-semibold uppercase tracking-wider mb-1">
                  {name} Package
                </div>
                <div className="text-white text-2xl sm:text-3xl font-black font-poppins">
                  {pricing.find((p) => p.total)?.value ?? '—'}
                </div>
              </div>
              <img
                src={`https://flagcdn.com/w40/${flagCode}.png`}
                alt={`${name} flag`}
                className="w-12 h-8 sm:w-16 sm:h-[43px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Line items */}
            <div className="px-4 sm:px-8 py-2">
              {pricing.filter((p) => !p.total).map((p, i, arr) => (
                <div
                  key={p.label}
                  className={`flex items-center justify-between py-4 ${
                    i < arr.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F5B301] rounded-full" />
                    <span className="text-gray-600 text-sm">{p.label}</span>
                  </div>
                  <span className="font-semibold text-[#0B1F3B] text-sm">{p.value}</span>
                </div>
              ))}
            </div>

            {/* Total row */}
            {pricing.find((p) => p.total) && (
              <div className="mx-4 sm:mx-8 mb-6 bg-[#F5B301]/10 border border-[#F5B301]/30 rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-between">
                <span className="font-bold text-[#0B1F3B]">Total Agency Fee</span>
                <span className="font-black text-[#0B1F3B] text-2xl font-poppins">
                  {pricing.find((p) => p.total)?.value}
                </span>
              </div>
            )}

            <div className="px-4 sm:px-8 pb-6 sm:pb-8">
              <button
                onClick={scrollToContact}
                className="btn-primary w-full py-4 text-[15px]"
              >
                Apply for {name} <FaArrowRight className="text-xs" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          REQUIREMENTS — checklist
      ══════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #071428 0%, #0B1F3B 60%, #132d55 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5B301]/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label">Checklist</span>
            <h2 className="section-title-white mt-3 mb-4">Requirements</h2>
            <p className="section-subtitle-white">
              Prepare these documents to start your {name} application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requirements.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 bg-white/[0.06] border border-white/[0.1] rounded-xl px-5 py-4
                  hover:bg-white/[0.1] hover:border-[#F5B301]/20 transition-all duration-300"
              >
                <div className="w-7 h-7 bg-[#F5B301] rounded-full flex items-center justify-center shrink-0 shadow-gold">
                  <FaCheck className="text-[#0B1F3B] text-[10px]" />
                </div>
                <span className="text-white/80 font-medium text-sm">{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B]/4 via-transparent to-[#F5B301]/4" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={`https://flagcdn.com/w80/${flagCode}.png`}
              alt={`${name} flag`}
              className="w-20 h-[54px] sm:w-28 sm:h-[75px] object-cover rounded-xl shadow-lg mx-auto mb-6"
            />
            <h2 className="section-title mb-5">Ready to Study in {name}?</h2>
            <p className="section-subtitle mb-10">
              Take the first step today. Our consultants will guide you through every part of
              the process — from application to arrival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToContact} className="btn-primary text-base px-10 py-4">
                Start Your Application <FaArrowRight className="text-xs" />
              </button>
              <a
                href="tel:+14376962005"
                className="btn-navy text-base px-10 py-4"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
