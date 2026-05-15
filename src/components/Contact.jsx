import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaPhone, FaClock, FaArrowRight } from 'react-icons/fa'

const contactItems = [
  {
    icon:  <FaEnvelope className="text-[#F5B301]" />,
    label: 'Email',
    value: 'a.apply.admission@gmail.com',
    href:  'mailto:a.apply.admission@gmail.com',
    bg:    'bg-[#F5B301]/10 border border-[#F5B301]/20',
  },
  {
    icon:  <FaPhone className="text-emerald-400" />,
    label: 'Phone / WhatsApp',
    value: '+1 437-696-2005',
    href:  'tel:+14376962005',
    bg:    'bg-emerald-500/10 border border-emerald-500/20',
  },
  {
    icon:  <FaPhone className="text-sky-400" />,
    label: 'Phone (Canada)',
    value: '+1 (289) 623-1115',
    href:  'tel:+12896231115',
    bg:    'bg-sky-500/10 border border-sky-500/20',
  },
  {
    icon:  <FaClock className="text-violet-400" />,
    label: 'Response Time',
    value: 'Within 24 hours',
    bg:    'bg-violet-500/10 border border-violet-500/20',
  },
]

const countries = [
  'Poland', 'Italy', 'Germany', 'Hungary', 'USA', 'Canada', 'Other',
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm]   = useState({ name: '', email: '', country: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('form-name', 'contact')
    data.append('name',    form.name)
    data.append('email',   form.email)
    data.append('country', form.country)
    data.append('message', form.message)
    try {
      const res = await fetch('/', { method: 'POST', body: data })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', country: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(true)
        setTimeout(() => setError(false), 4000)
      }
    } catch {
      setError(true)
      setTimeout(() => setError(false), 4000)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-28 bg-[#071428]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title-white mt-3 mb-5">Start Your Journey Today</h2>
          <p className="section-subtitle-white">
            Ready to study abroad? Our advisors are here to answer every question and guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white font-poppins mb-3">
              Let's talk about your future
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed text-sm">
              Whether you have questions about a specific country, need help with documents, or
              want to understand the full process — we're here to guide you.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 ${item.bg} rounded-2xl px-5 py-4`}
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/45 font-medium uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white/85 font-semibold hover:text-[#F5B301] transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white/85 font-semibold text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* World badge */}
            <div className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1F3B] to-[#132d55] h-44 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🌍</div>
                <div className="text-white font-semibold text-sm">Serving Students Worldwide</div>
                <div className="text-white/40 text-xs mt-1">Poland · Italy · Germany · Hungary · USA · Canada</div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-navy-lg p-5 sm:p-8 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#0B1F3B] font-poppins mb-7">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-[#0B1F3B]/25 focus:border-[#0B1F3B] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-[#0B1F3B]/25 focus:border-[#0B1F3B] transition-all"
                  />
                </div>
              </div>

              {/* Country dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  Country of Interest
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A]
                    focus:outline-none focus:ring-2 focus:ring-[#0B1F3B]/25 focus:border-[#0B1F3B] transition-all
                    bg-white appearance-none cursor-pointer"
                >
                  <option value="">— Select a destination —</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, questions, or what country you're considering..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-[#0B1F3B]/25 focus:border-[#0B1F3B] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className={`btn-primary w-full py-4 text-[15px] ${
                  sent   ? 'bg-emerald-500 hover:bg-emerald-500 text-white shadow-none' :
                  error  ? 'bg-red-500 hover:bg-red-500 text-white shadow-none' : ''
                }`}
              >
                {sent ? (
                  '✓ Message sent! We\'ll be in touch soon.'
                ) : error ? (
                  '✗ Something went wrong — please try again.'
                ) : (
                  <>Send Message <FaArrowRight className="text-xs" /></>
                )}
              </button>

              <p className="text-center text-gray-400 text-xs">
                We typically respond within 24 hours on business days.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
