
module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'mini': '1px',
        '112': '36rem',
        '128': '40rem',
        '144': '44rem',
        '160': '48rem',
      }
    },
    fontWeight : {
      light: 400,
      normal: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
 