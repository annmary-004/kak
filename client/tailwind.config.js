/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'kak-blue': '#0088FF',
        'kak-cyan': '#00D2FF',
        'kak-blue-dark': '#0055CC',
        'kak-navy': '#050B17',
        'kak-navy-dark': '#02050D',
        'kak-navy-card': '#0A1329',
        'kak-gray': '#0D1833',
        'kak-gray-mid': '#1E293B',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'kak-gradient': 'linear-gradient(135deg, #0070F3 0%, #00A3FF 100%)',
        'kak-gradient-dark': 'linear-gradient(135deg, #02050D 0%, #081226 50%, #02050D 100%)',
        'kak-gradient-subtle': 'linear-gradient(135deg, #0088FF15 0%, #00D2FF15 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
