/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#FF592C',
        hovermain: '#f83500',
      },
      fontFamily: {
        sfpro: ['sfpro', 'sans-serif'],
      },
      gridTemplateColumns: {
        auto: 'repeat( auto-fit, minmax(250px, 1fr) )',
      },
    },
  },
  plugins: [],
};
