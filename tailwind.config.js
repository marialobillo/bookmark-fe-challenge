/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}", "index.html", "input.css", "script.js"],
  theme: {
    extend: {},
    colors: {
      redish: "#FA5959",
      blueish: "#5267DF",
      "dark-gray": "#828282",
      "medium-gray": "#9194A2",
      "light-gray": "#F7F7F7",
      blackish: "#242A45",
      whiteish: "#FFFFFF",
    },
  },
  plugins: [],
};
