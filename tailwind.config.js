/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontWeight: {
      regular: '400',
      bold: '700',
      extrabold: '900',
    },
    extend: {
      colors: {
        spotify: '#1ed760',
      },
      fontFamily: {
        sans: ['Circular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
