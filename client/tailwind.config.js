module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        myGreen: {
          DEFAULT: '#03cc90'
        },
        myDark: {
          light: '#3F4354',
          DEFAULT: '#353849',
          dark: '#232734',
        },
      },
      minHeight: {
        zero: '0',
        quarter: '25%',
        half: '50%',
        threefourth: '75%',
        full: '100%',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
