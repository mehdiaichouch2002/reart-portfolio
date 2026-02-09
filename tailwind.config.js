/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature : ["Great Vibes"],
    },
    variants: {
      extend: {
        fontWeight: ["responsive", "hover", "focus"],
        opacity: ["hover"],
        borderColor: ["hover", "focus"],
        margin: ["first", "last"],
        backgroundColor: ["odd", "even"],
        scale: ["hover", "active", "group-hover"],
      },
    },
  },
  plugins: [],
}

