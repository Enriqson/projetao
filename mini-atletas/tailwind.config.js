/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue: "#2859C5",
        light_blue: "#8FBFFA",
        dark_blue: "#5078CF",
        yellow: "#FFCC4D",
        light_yellow: "#FFE5A5",
        green: "#28C567",
        light_green: "#B5D6C2",
        purple: "#8928C5",
        light_purple: "#CEB0E1",
        pink: "#F203C8",
        light_pink: "#FFB7F2",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
