/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        500: "repeat(2, minmax(0px, 500px) )",
      },
    },
  },
  plugins: [],
};
