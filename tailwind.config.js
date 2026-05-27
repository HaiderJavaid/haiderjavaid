/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pip: {
          light: '#5eead4', // teal-300
          DEFAULT: '#14b8a6', // teal-500
          dark: '#0f766e', // teal-700
          bg: '#020617', // slate-950
        }
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'flicker-in': 'flickerIn 0.8s ease-out both',
      },
      keyframes: {
        scan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.98' },
        },
        flickerIn: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '20%': { opacity: '0' },
          '35%': { opacity: '0.8' },
          '50%': { opacity: '0.2' },
          '65%': { opacity: '1' },
          '80%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}