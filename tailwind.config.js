
module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['gc'],
      },
      spacing: {
        '112': '36rem',
        '128': '40rem',
        '144': '44rem',
        '160': '48rem',
      }
    },
    fontWeight : {
      light: 300,
      normal: 400,
      semibold: 500,
      bold: 600,
      extrabold: 700,
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
 