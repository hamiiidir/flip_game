const plugin = require('tailwindcss/plugin')

// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    // '.rotate-y-20': {
    //   transform: 'rotateY(20deg)',
    // },
    // '.rotate-y-40': {
    //   transform: 'rotateY(40deg)',
    // },
    // '.rotate-y-60': {
    //   transform: 'rotateY(60deg)',
    // },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})



module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '88': '22rem',
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
        '156': '39rem',
        '168': '42rem', 
        '180': '45rem',
        '192': '48rem',
        '204': '51rem',
        '216': '54rem',
        '228': '57rem',
        '240': '60rem',
        '252': '63rem',
        '264': '66rem'
      },       
    },
  },
  plugins: [rotateY],
}