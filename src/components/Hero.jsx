import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowRight,
  FaGlobe,
  FaGraduationCap,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'
import { COUNTRIES } from '../data/countries'

/* ── Slides derived from the shared countries data ── */
const SLIDES = COUNTRIES.map((c) => ({
  url:     c.image.replace('w=800', 'w=1920'),
  country: c.name,
}))

const TRUST = [
  { icon: <FaUsers />,         value: '500+', label: 'Students Helped'  },
  { icon: <FaGlobe />,         value: '6+',   label: 'Countries Covered' },
  { icon: <FaGraduationCap />, value: '95%',  label: 'Success Rate'     },
]

const SPARKLES = [
  { top: '18%', left: '12%', size: 4, delay: 0.0 },
  { top: '62%', left: '82%', size: 3, delay: 1.5 },
  { top: '74%', left: '22%', size: 5, delay: 0.8 },
  { top: '33%', left: '72%', size: 3, delay: 2.2 },
  { top: '48%', left: '4%',  size: 4, delay: 3.0 },
  { top: '8%',  left: '55%', size: 3, delay: 1.2 },
  { top: '86%', left: '62%', size: 4, delay: 0.5 },
]

const DURATION = 5500 // ms each slide is visible

export default function Hero() {
  const [current,  setCurrent]  = useState(0)
  const [progress, setProgress] = useState(0)
  const slideTimer    = useRef(null)
  const progressTimer = useRef(null)

  /* Preload all images on mount */
  useEffect(() => {
    SLIDES.forEach(({ url }) => {
      const img = new Image()
      img.fetchPriority = 'high'
      img.src = url
    })
  }, [])

  /* Restart timer + progress bar on every slide change */
  useEffect(() => {
    clearInterval(slideTimer.current)
    clearInterval(progressTimer.current)

    setProgress(0)
    const t0 = Date.now()

    progressTimer.current = setInterval(() => {
      setProgress(Math.min(((Date.now() - t0) / DURATION) * 100, 100))
    }, 40)

    slideTimer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, DURATION)

    return () => {
      clearInterval(slideTimer.current)
      clearInterval(progressTimer.current)
    }
  }, [current])

  const goTo = (i) => setCurrent(i)
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length)
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1F3B]"
    >

      {/* ══════════════════════════════════════════════════════════
          BACKGROUND SLIDESHOW — stacked layers, CSS cross-fade
          ─────────────────────────────────────────────────────────
          • Outer div: CSS opacity transition (2.2s) — never unmounts,
            so there is zero mount/unmount flash.
          • Inner div: CSS kenBurns animation — uses a React key tied
            to current so the zoom always restarts from scale(1).
            The inner div remounts while the outer is still at opacity 0,
            so the pop is completely invisible.
          • initial={false} on the Framer Motion outer so slides
            skip the entry animation on the very first render.
      ══════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((slide, i) => {
          const isActive = i === current
          return (
            <motion.div
              key={slide.url}
              className="absolute inset-0 overflow-hidden"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
            >
              {/*
               * Ken Burns layer.
               * Key = 'kb-{current}' while active  → remounts fresh when slide activates.
               * Key = 'bg-{i}'       while inactive → stable, no unnecessary remounts.
               * Remount happens at opacity 0 → invisible → no flash.
               */}
              <div
                key={isActive ? `kb-${current}` : `bg-${i}`}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${slide.url}')`,
                  animation: isActive
                    ? `kenBurns ${(DURATION / 1000 + 3).toFixed(1)}s linear forwards`
                    : 'none',
                  willChange: isActive ? 'transform' : 'auto',
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* ── Cinematic dark overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/[0.80] via-[#1a1a1a]/[0.65] to-[#111111]/[0.82]" />
      <div className="absolute inset-0 bg-gradient-to-t  from-[#111111]/[0.82] via-[#1a1a1a]/25 to-[#1a1a1a]/5" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 32%, rgba(15,15,15,0.50) 100%)' }}
      />

      {/* ── Animated ambient glows ── */}
      <motion.div
        animate={{ x: [0, 45, -20, 0], y: [0, -30, 18, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[25%] right-[18%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,179,1,0.07) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -28, 14, 0], y: [0, 26, -14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[18%] left-[8%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.22, 0.9, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-[14%] left-[28%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
      />

      {/* ── Sparkle dots ── */}
      {SPARKLES.map((dot, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.4] }}
          transition={{ duration: 3 + dot.delay, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
          className="absolute rounded-full bg-[#F5B301] pointer-events-none"
          style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
        />
      ))}

      {/* ══════════════════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto pt-24 pb-36">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 bg-white/[0.1] backdrop-blur-md border border-white/[0.18] rounded-full px-5 py-2.5 mb-10"
        >
          <motion.span
            animate={{ scale: [1, 1.45, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-[#F5B301] rounded-full block shrink-0"
          />
          <span className="text-white text-sm font-medium tracking-wide">
            Now Accepting Applications — 2024/2025 Intake
          </span>
        </motion.div>

        {/* ── Main headline with dynamic country word ── */}
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.08] mb-7 font-poppins"
        >
          Your Gateway to{' '}
          <br className="hidden sm:block" />
          Studying in{' '}

          {/*
           * "Abroad" is replaced by the current country name.
           * AnimatePresence mode="wait" ensures the old name exits
           * completely before the new one enters — clean word swap.
           * minWidth locks the container to the longest country name
           * (Germany/Hungary = 7 chars) so "Studying in" never shifts.
           */}
          <span className="relative inline-block" style={{ minWidth: '4.5em', textAlign: 'left' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
                exit={{   opacity: 0, y: -18, filter: 'blur(6px)' }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F5B301] via-amber-300 to-[#F5B301] bg-[length:200%] animate-[shimmer_3s_linear_infinite]"
              >
                {SLIDES[current].country}
              </motion.span>
            </AnimatePresence>

            {/* Gold underline — redraws on each new country */}
            <AnimatePresence mode="wait">
              <motion.span
                key={`line-${current}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5B301]/0 via-[#F5B301] to-[#F5B301]/0 origin-left rounded-full"
              />
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          We help our students with admissions, visas, housing, and career support —
          turning the dream of studying abroad into a clear, guided journey.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contact')}
            className="btn-primary text-base px-10 py-4 text-[15px]"
          >
            Get Started <FaArrowRight className="text-xs" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('countries')}
            className="btn-outline text-base px-10 py-4 text-[15px]"
          >
            Explore Countries
          </motion.button>
        </motion.div>

        {/* Trust stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {TRUST.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3.5 bg-white/[0.1] backdrop-blur-md border border-white/[0.2] rounded-2xl px-6 py-4 min-w-[170px] cursor-default"
            >
              <div className="w-11 h-11 bg-[#F5B301]/20 border border-[#F5B301]/35 rounded-xl flex items-center justify-center text-[#F5B301] text-lg shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-2xl font-poppins leading-none">
                  {stat.value}
                </div>
                <div className="text-white/75 text-xs mt-0.5 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          ARROW NAV  (desktop)
      ══════════════════════════════════════════════════════════ */}
      {[
        { fn: prev, label: 'Previous', Icon: FaChevronLeft,  pos: 'left-5'  },
        { fn: next, label: 'Next',     Icon: FaChevronRight, pos: 'right-5' },
      ].map(({ fn, label, Icon, pos }) => (
        <button
          key={label}
          onClick={fn}
          aria-label={`${label} slide`}
          className={`absolute ${pos} top-1/2 -translate-y-1/2 z-20 hidden md:flex
            w-11 h-11 rounded-full bg-white/[0.1] backdrop-blur-md border border-white/[0.2]
            items-center justify-center text-white/80
            hover:bg-white/[0.2] hover:text-[#F5B301] transition-all duration-300`}
        >
          <Icon className="text-sm" />
        </button>
      ))}

      {/* ══════════════════════════════════════════════════════════
          BOTTOM BAR — progress dots · country label · scroll cue
      ══════════════════════════════════════════════════════════ */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4">

        {/* Progress dot indicators */}
        <div className="flex items-center gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="relative h-[3px] rounded-full overflow-hidden bg-white/25 transition-all duration-500"
              style={{ width: i === current ? 42 : 12 }}
            >
              {i === current && (
                <motion.div
                  key={`prog-${current}`}
                  className="absolute inset-y-0 left-0 bg-[#F5B301] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Current country label */}
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 6  }}
            animate={{ opacity: 1, y: 0  }}
            exit={{   opacity: 0, y: -6  }}
            transition={{ duration: 0.4 }}
            className="text-white/45 text-[11px] tracking-[0.25em] uppercase font-medium"
          >
            {SLIDES[current].country}
          </motion.span>
        </AnimatePresence>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center pt-1.5 animate-bounce"
        >
          <div className="w-1 h-2 bg-[#F5B301] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
