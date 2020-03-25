const { colors } = require("tailwindcss/defaultTheme")
module.exports = {
  theme: {
    extend: {
      colors: {
        black: "#647787",
        ...colors,
        // gray: "#647787",
      },
    },
  },
  variants: {},
  plugins: [],
}
