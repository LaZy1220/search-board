/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      center:true,
    },
    extend: {
      colors:{
        lightdarkgray:'hsl(180, 29%, 50%)',
        lightgray:'hsl(180, 52%, 96%)',
        darkgray:'hsl(180, 8%, 52%)',
        verydarkgray:'hsl(180, 14%, 20%)'
      },
    },
  },
  plugins: [],
}
