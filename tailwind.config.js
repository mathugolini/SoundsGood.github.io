// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: '#282828',
        lightGray: '#444444',
        darkOrgange: "#c85103",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
