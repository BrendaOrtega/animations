/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "selector",
    extend: {
      colors: {
        dark: "#0E0E11",
        fish: "#5158F6",
        iron: "#495466",
        lightGray: "#E5E5E5",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
