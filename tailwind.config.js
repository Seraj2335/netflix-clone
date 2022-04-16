module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      white:'#fff',
      background:'#33333380',
      black:'#000000'
    },
    extend: {
      spacing:{
        '25':'100px',
        '2.5':'10px',
        '112':'448px',
        '0.3':'0.3rem',
        '3':'3rem',
        '45':'45rem',
        '7.4':'7.4rem'

      },
      fontSize:{
        'smr3':[
          '48px',
          {
            lineHeight:'35px'
          }
        ],
      }
    },
  },
  plugins: [   require('tailwind-scrollbar-hide')],
}
