module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Dark_Blue: "hsl(209, 23%, 22%)", // (Dark Mode Elements)
        Very_Dark_Blue: "hsl(207, 26%, 17%)", // (Dark Mode Background)
        Very_Dark_Blue_Text: "hsl(200, 15%, 8%)", // (Light Mode Text)
        Dark_Gray: "hsl(0, 0%, 52%)", // (Light Mode Input)
        Very_Light_Gray: "hsl(0, 0%, 98%)", // (Light Mode Background)
        White: "hsl(0, 0%, 100%)", // (Dark Mode Text & Light Mode Elements)
      },
      fontWeight: {
        light: 300,
        bold: 600,
        extrabold: 800
      }
    },
  },
  plugins: [],
}