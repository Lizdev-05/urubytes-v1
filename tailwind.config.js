/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#3788E5",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};
