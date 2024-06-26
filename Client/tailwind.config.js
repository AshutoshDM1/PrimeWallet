/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: '0 0 1rem rgba(0, 0, 0, 0.3)',
      },
      height: {
        "5h": "5%",
        "7h": "7%",
        "8h": "8%",
        "10h": "10%",
        "15h": "15%",
        "20h": "20%",
        "30h": "30%",
        "40h": "40%",
        "50h": "50%",
        "60h": "60%",
        "70h": "70%",
        "80h": "80%",
        "90h": "90%",
        "95h": "95%",
        "98h": "98%",
      },
      width: {
        "10w": "10%",
        "15w": "15%",
        "20w": "20%",
        "30w": "30%",
        "40w": "40%",
        "50w": "50%",
        "60w": "60%",
        "70w": "70%",
        "80w": "80%",
        "88w": "88%",
        "90w": "90%",
        "95w": "95%",
        "98w": "98%",
        "12vw": "12vw",
        "8vw": "8vw",
        "6vw": "6vw",
        "5vw": "5vw",
        "4vw": "4vw",
        "3vw": "3vw",
        "2vw": "2vw",
        "1.5vw": "1.5vw",
        "1vw": "1vw",
        "0.5vw": "0.5vw",
      },
      borderRadius: {
        "20r": "50px",
        "15r": "30px",
        "10r": "15px",
      },
      fontSize: {
        "1vw": "1vw",
        "1.2vw": "1.2vw",
        "1.3vw": "1.3vw",
        "1.5vw": "1.5vw",
        "1.7vw": "1.7vw",
        "2vw": "2vw",
        "2.5vw": "2.5vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "5vw": "5vw",
      },
      marginTop : {
        "10vw" : "10vh",
        "30vw" : "30vh"
      },
      right: {
        "60h" : "60vw"
      },
      gap : {
        "1vw" : "1vw",
        "2vw" : "2vw",
        "3vw" : "3vw",
        "4vw" : "4vw",
      }
    },
  },
  plugins: [],
};
