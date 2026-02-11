/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f4c81",
        secondary: "#f5f8fc",
        accent: "#00a8cc",
        dark: "#1f2937",
      },
    },
  },
  plugins: [],
};
