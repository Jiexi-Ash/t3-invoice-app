/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryPurple: "#7c5dfa",
        lightPurple: "#9277ff",
        darkishNavy: "#1e2139",
        darkishNavy2: "#252945 ",
        lightishGrey: "#dfe3fa",
        darkishGrey: "#888eb0",
        paleishBlue: "#7e88c3 ",
        primaryBlack: "#0c0e16",
        primaryRed: "#ec5757",
        lightRed: "hsl(0, 100%, 80%)",
        paleishWhite: "#f8f8fb ",
        secondaryBlack: "#141625",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
