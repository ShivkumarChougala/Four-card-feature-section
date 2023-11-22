/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./dist/*.{html,js}"],
  theme: {
    extend:{
      colors:{
      Red: 'hsl(0, 78%, 62%)',
      Cyan: 'hsl(180, 62%, 55%)',
      Orange: 'hsl(34, 97%, 64%)',
      Blue: 'hsl(212, 86%, 64%)',

      //  Neutral

      Very_Dark_Blue: 'hsl(234, 12%, 34%)',
      Grayish_Blue: 'hsl(229, 6%, 66%)',
      Very_Light_Gray: 'hsl(0, 0%, 98%)',
    },
    fontFamily:{
      Poppins:"'Poppins', sans_serif",
    }
  },
  },
  plugins: [],
}

