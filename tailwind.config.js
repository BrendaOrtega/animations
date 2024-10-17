/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0E0E11",
        fish: "#5158F6",
        iron: "#495466",
        metal: "#989898",
        lightGray: "#E5E5E5",
      },
      backgroundImage: {
        hero: "url('/cover.png')",
        flipWords: "url('/gifs/flip-words.png')",
        flipWordsGif: "url('/gifs/flip-words.gif')",
        cards: "url('/gifs/card.png')",
        cardsGif: "url('/gifs/3dcard.gif')",
        draggable: "url('/gifs/draggable.png')",
        draggableGif: "url('/gifs/draggable.gif')",
      },
    },
  },
  plugins: [],
};
