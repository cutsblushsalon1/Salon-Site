/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11110f",
        cream: "#f6f3ed",
        sand: "#ded8cc",
        gold: "#b89a64",
        moss: "#3f4a3b"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(17,17,15,.10)"
      }
    }
  },
  plugins: []
}