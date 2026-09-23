/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3F5F4", // cool lime-plaster wall
        ink: "#17212B",
        muted: "#56626E",
        line: "#D9E0E3",
        cobalt: { DEFAULT: "#1D4E9E", dark: "#153B79", tint: "#E4EBF5" }, // Fez pottery blue
        zellige: "#1F7A5C", // Fez green tile, used only for "live" status
        brass: "#B08A3E",
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
}
