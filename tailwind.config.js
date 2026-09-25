/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0E',
        card: '#151519',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        cardHighlight: '#1E1E24',
        gold: {
          light: '#F8DC81',
          DEFAULT: '#E5B842',
          dark: '#B8861B',
          glow: 'rgba(229, 184, 66, 0.25)',
          muted: 'rgba(229, 184, 66, 0.12)',
        },
        lunora: {
          dark: '#0B0B0E',
          surface: '#151519',
          surfaceElevated: '#1D1D23',
          border: '#26262D',
          textMuted: '#8E8E93',
          textSubtle: '#636366',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(229, 184, 66, 0.25)',
        'gold-glow-lg': '0 0 35px rgba(229, 184, 66, 0.35)',
      }
    },
  },
  plugins: [],
}
