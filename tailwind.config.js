module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['Kaushan Script'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
