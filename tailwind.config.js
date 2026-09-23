/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0E0F12", // graphite page background
        surface: "#17191E", // raised panels, inputs, contact band
        fg: "#ECEEF2",
        muted: "#8A909C",
        line: "#262A31",
        accent: { DEFAULT: "#7AA2FF", hover: "#9BB8FF", tint: "rgba(122,162,255,0.12)" },
        live: "#7EE0B8", // only for "live store" status
        danger: "#FF8A80",
      },
      fontFamily: {
        display: ['"Syne"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
}
