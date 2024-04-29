/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#3788E5",
        "light-white": "#fff",
        "yellow-color": "#E58A13",
        "grey-color": "#828282",
        "grey-bg": "#E0E0E0",
        "black-color": "#1D1D1D",
      },
    },
  },
  plugins: [],
};
