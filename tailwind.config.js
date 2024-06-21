const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dmShadow:
          "inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)",
        dmAfterShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        bgc: "rgb(var(--color-bgc) / <alpha-value>)",
        txc: "rgb(var(--color-txc) / <alpha-value>)",
        ter: "rgb(var(--color-ter) / <alpha-value>)",
        transp: "rgba(var(--color-transparent))",
      },
      animation: {
        glow: "glow 1s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          from: {
            textShadow:
              "0 0 0px #fff, 0 0 10px #fff, 0 0 20px #E60BFF, 0 0 20px #E60BFF, 0 0 30px #E60BFF, 0 0 40px #E60BFF, 0 0 50px #E60BFF",
          },
          to: {
            textShadow:
              "0 0 0px #fff, 0 0 10px #F17AFF, 0 0 20px #F17AFF, 0 0 30px #F17AFF, 0 0 40px #F17AFF, 0 0 50px #F17AFF, 0 0 60px #F17AFF",
          },
        },
      },
    },
    fontFamily: {
      arial: ["Arial", "sans-serif"],
      bebasNueue: ["Bebas Nueue", "sans-serif"],
      kollektif: ["Kollektif", "sans-serif"],
      lovelo: ["Lovelo", "sans-serif"],
    },
    letterSpacing: {
      widester: ".15em",
      widestest: ".25em",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
