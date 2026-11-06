/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sanctum: {
          950: '#06080D',
          900: '#0B0F19',
          850: '#101524',
          800: '#161D31',
          700: '#222B45',
        },
        gold: {
          light: '#FDE68A',
          DEFAULT: '#D4AF37',
          glow: '#F59E0B',
          dark: '#92400E',
          shimmer: '#FEF3C7',
        },
        sacred: {
          vermilion: '#B91C1C',
          saffron: '#D97706',
          kumkum: '#881337',
          sandalwood: '#F5EBE1',
          parchment: '#FAF6EF',
        },
        aura: {
          shiva: '#38BDF8',
          balaji: '#FBBF24',
          healing: '#34D399',
          violet: '#A855F7',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'mandala-glow': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(11, 15, 25, 0) 70%)',
        'divine-conic': 'conic-gradient(from 180deg at 50% 50%, #B45309 0deg, #F59E0B 120deg, #D4AF37 240deg, #B45309 360deg)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

