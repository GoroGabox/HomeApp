/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D2526",
        secondary: "#3D3E40",
        tertiary: "#D98032",
        secondaryLight: "#686F73",
        tertiaryDark: "#A65C1C",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      swap: {
        "font-display":"swap"
      },
    },
  },
  plugins: [],
}