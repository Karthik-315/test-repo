module.exports = {
  content: ["./**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/images/hero-bg.jpg')",

        "button-left": "url('./assets/images/prev.png')",
        "button-right": "url('./assets/images/next.png')",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
