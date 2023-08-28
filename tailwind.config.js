/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lap_black: "#23262F",
        lap_black_100: "#353945",
        lap_gray_light: "#777E90",
        lap_gray_200: "#F5F5F5",
        lap_gray_300: "#E9E9E9",
        lap_green: "#0DB14B",
        lap_blue: "#0089D0",
      },
      screens: {
        xsm: { min: "280px", max: "639px" },
        sm: { min: "640px", max: "894px" },
        md: { min: "894px", max: "1174px" },
        // "2xl": { min: "1677px" },
      },
    },
  },
  plugins: [],
};
