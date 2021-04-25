module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['gc'],
      }
    },
    fontWeight : {
      light: 200,
      normal: 400,
      semibold: 600,
      bold: 700,
      extrabold: 900,
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
 