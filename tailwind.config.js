/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontWeight: {
      regular: '400',
      bold: '700',
      extrabold: '900'
    },
    extend: {
      animation: {
        shake: 'shake-musical-notes 1s linear infinite'
      },
      colors: {
        spotify: '#1ed760'
      },
      fontFamily: {
        sans: ['Circular', 'sans-serif']
      },
      keyframes: {
        'shake-musical-notes': {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        }
      }
    }
  },
  plugins: []
};
