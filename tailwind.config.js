/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     fontFamily: {
      primary: ["Poppins","sans-serif"]
     },
     textColor: {
        jquery : 'rgb(18,102,109)',
        php : 'rgb(119,123,179)',
        mysql : 'rgb(18,102,109)',
        mongoddb : 'rgb(18,102,109)'

     }
    },
  },
  plugins: [],
};
