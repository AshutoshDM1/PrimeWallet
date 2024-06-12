/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10h': '10%',
        '15h': '15%',
        '20h': '20%',
        '30h': '30%',
        '90h': '90%'
      },
      width: {
        '10w': '10%',
        '15w': '15%',
        '20w': '20%',
        '30w': '30%',
        '50w': '50%',
        '90w': '90%',
        '12vw': '12vw'
      },
      borderRadius: {
        '20r' : '50px'
      },
      fontSize : {
        '1vw': '1vw',
        '1.5vw': '1.5vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
      },
    },
  },
  plugins: [],
}
