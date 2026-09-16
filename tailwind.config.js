/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1B33",
          light: "#12233F",
          lighter: "#1B324F",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C87A",
          dark: "#9C7B2E",
        },
        cream: "#F6F3EC",
        muted: "#8FA0BD",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
