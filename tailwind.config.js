module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing:{
        '25':'100px',
        '2.5':'10px',
        '112':'448px',
        '0.3':'0.3rem',
        '3':'3rem',
         '100':'600px'

      },
      fontSize:{
        'smr3':[
          '24px',
          {
            lineHeight:'35px'
          }
        ],
      }
    },
  },
  plugins: [   require('tailwind-scrollbar-hide')],
}
