/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#e6ecf4',
          100: '#c0ceE4',
          200: '#97b0d2',
          300: '#6d92c0',
          400: '#4d7ab3',
          500: '#2d62a6',
          600: '#1e4d8c',
          700: '#133870',
          800: '#0d2755',
          900: '#071a3a',
          950: '#040e20',
          DEFAULT: '#0B1F3B',
        },
        accent: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F5B301',
          600: '#d99c00',
          700: '#b07f00',
          800: '#8a6300',
          DEFAULT: '#F5B301',
        },
        navy: {
          DEFAULT: '#0B1F3B',
          light:   '#132d55',
          dark:    '#071428',
        },
        gold: {
          DEFAULT: '#F5B301',
          light:   '#fcd34d',
          dark:    '#d99c00',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5B301 0%, #fcd34d 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0B1F3B 0%, #132d55 100%)',
      },
      animation: {
        'fade-in':   'fadeIn 0.6s ease-in-out',
        'slide-up':  'slideUp 0.6s ease-out',
        'float':     'float 4s ease-in-out infinite',
        'pulse-gold':'pulseGold 2s ease-in-out infinite',
        'shimmer':   'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,179,1,0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(245,179,1,0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      boxShadow: {
        'gold':     '0 4px 24px rgba(245,179,1,0.25)',
        'gold-lg':  '0 8px 40px rgba(245,179,1,0.35)',
        'navy':     '0 4px 24px rgba(11,31,59,0.25)',
        'navy-lg':  '0 8px 40px rgba(11,31,59,0.4)',
        'glass':    '0 8px 32px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
