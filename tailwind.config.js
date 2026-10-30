/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FDE2E4',
          softPink: '#FFCAD4',
          lavender: '#E2ECE9',
          purple: '#DFCCF1',
          blue: '#B5E2FA',
          cream: '#FFF9FB',
          rose: '#F48498',
          heart: '#FF4D6D'
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'Nunito', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.2s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2.5s ease-in-out infinite',
        'wiggle': 'wiggle 1.2s ease-in-out infinite',
        'tear-drop': 'tearDrop 2.2s infinite ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' }
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' }
        },
        tearDrop: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '20%': { opacity: '0.95' },
          '100%': { opacity: '0', transform: 'translateY(32px)' }
        }
      }
    },
  },
  plugins: [],
}

