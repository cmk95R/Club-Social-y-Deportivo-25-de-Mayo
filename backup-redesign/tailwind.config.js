/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          50: '#f1fafc',
          100: '#dcf3f8',
          200: '#b8e8f2',
          300: '#84d8e8',
          400: '#48bfd6',
          500: '#2aa3bd',
          600: '#23859f',
          700: '#226b82',
          800: '#23576a',
          900: '#0a2c3b',
          950: '#04161f',
        },
        aqua: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        primary: {
          50: '#f1fafc',
          100: '#dcf3f8',
          200: '#b8e8f2',
          300: '#84d8e8',
          400: '#48bfd6',
          500: '#2aa3bd',
          600: '#23859f',
          700: '#226b82',
          800: '#23576a',
          900: '#0a2c3b',
          950: '#04161f',
        },
        ink: '#051821',
        foam: '#f5fbfc',
        mist: '#e8f4f7',
        sand: '#f4efe6',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'Cambria', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        water: '0 30px 80px -40px rgba(4, 22, 31, 0.5)',
        glow: '0 18px 60px -18px rgba(34, 211, 238, 0.55)',
      },
      backgroundImage: {
        'water-line':
          'linear-gradient(180deg, rgba(4,22,31,0) 0%, rgba(4,22,31,0.4) 45%, rgba(4,22,31,0.92) 100%)',
        'grid-faint':
          'linear-gradient(rgba(4,22,31,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(4,22,31,0.045) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-faint': '72px 72px',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        float: 'float 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.8s ease-out infinite',
        shimmer: 'shimmer 2.6s linear infinite',
        'spin-slow': 'spin 26s linear infinite',
        drift: 'drift 18s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        drift: {
          '0%': { transform: 'translate3d(-2%, 0, 0) scale(1.04)' },
          '100%': { transform: 'translate3d(2%, -1%, 0) scale(1.08)' },
        },
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
