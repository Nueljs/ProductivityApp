/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1ABC9C",
        darkbg: "#1E1E1E"
      },
      borderRadius: {
        DEFAULT: "8px"
      }
    }
  },
  plugins: []
};
