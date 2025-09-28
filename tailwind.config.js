/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        primary: ["Saira", "sans-serif"],
      },
      colors: {
        primary: "#4B2E2E", 
        accent: "#D2B48C", 
        secondary: "#A0522D", 
        grey: {
          DEFAULT: "#7D7D7D",
          1: "#D9D9D9",
          2: "#E7E9EB",
          3: "#F5F5F5",
        },
        white: "#FAF7F2", 
      },
      backgroundImage: {
        hero: 'url("/src/assets/images/hero-bg.png")',
        newsletter: 'url("/src/assets/images/newsletter.png")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  plugins: [],
};
