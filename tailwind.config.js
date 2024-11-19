/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lynch: {
          50: "#f6f7f9",
          100: "#ebeef3",
          200: "#d3dbe4",
          300: "#adbccc",
          400: "#8098b0",
          500: "#607b96",
          600: "#4c637d",
          700: "#3e5066",
          800: "#364556",
          900: "#313b49",
          950: "#202731",
        },
      },
    },
  },
  plugins: [],
};
