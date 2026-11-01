/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        paper: "#faf8f5",
        line: "#e7e2db",
        ink: {
          DEFAULT: "#1c1917",
          soft: "#57534e",
          faint: "#8a837b",
        },
        brand: {
          DEFAULT: "#c8283f",
          dark: "#a31d32",
          tint: "#fbeaec",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', "sans-serif"],
        display: ["Anuphan", '"IBM Plex Sans Thai"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28, 25, 23, 0.04), 0 8px 24px -12px rgba(28, 25, 23, 0.12)",
      },
    },
  },
  plugins: [],
};
