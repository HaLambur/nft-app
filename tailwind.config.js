/* eslint-disable global-require */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
