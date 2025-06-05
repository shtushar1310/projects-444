/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-left': 'floatLeft 1s ease-out forwards',
        'gradient': 'gradient 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        floatLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        gradient: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': '0% 50%'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '100% 50%'
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': '0% 50%'
          }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%',
      },
    },
  },
  plugins: [],
} 