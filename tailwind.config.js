const { colors: defaultColors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    flex: {
      'layout' : '1 3 0%'
    },
    colors: {
      ...defaultColors,
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        light: '#F7CA7C',
        med: '#F7A63E',
        dark: '#F78D2C',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}