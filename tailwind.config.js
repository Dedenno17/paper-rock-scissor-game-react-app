module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        goSlowDown: "goSlowDown .5s ease-in-out forwards",
        bounceSide: "bounceSide 1s infinite",
        bounceOppositeSide: "bounceOppositeSide 1s infinite",
      },
      colors: {
        primaryPurple: "#080e67",
        secondaryPurple: "#060a47",
        ternaryPurple: "#6366b9",
      },
      keyframes: {
        goSlowDown: {
          "100%": { top: "30px", opacity: 1 },
        },
        bounceSide: {
          "0%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        bounceOppositeSide: {
          "0%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
