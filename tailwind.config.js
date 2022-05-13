module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        goSlowDown: "goSlowDown .5s ease-in-out forwards",
      },
      colors: {
        primaryPurple: "#080e67",
        secondaryPurple: "#060a47",
      },
      keyframes: {
        goSlowDown: {
          "100%": { top: "20px", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
