/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        red: '#FF0000',
        btcured: '#FF0000',
        white: '#FFFFFF',
        inactivegrey: '#F5F5F5',
        grey: '#F5F5F5',
        lightred: '#FEC0C0',
        videogrey: '#333333',
        pressedGrey: '#D9D9D9',
      },
      fontFamily: {
        sans: ['Roboto'],
        display: ['Playfair Display', 'Oswald'],
        heading: ['Montserrat'],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
