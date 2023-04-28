/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "avg-viewers-bg-from": "#ff715b",
        "avg-viewers-bg-to": "#5634bd",
        "peak-viewers-bg-from": "#4263c6",
        "peak-viewers-bg-to": "#6ac897",
        "avg-stream-duration-bg-from": "#eb995f",
        "avg-stream-duration-bg-to": "#ef7b62",
        "total-followers-bg-from": "#405dc7",
        "total-followers-bg-to": "#803fe5",
        "twitch-checkmark": "#bf94ff",
        "widget-bg": "#1e2029",
        "background-color": "#12141d",
        "search-color": "#24262e",
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },

  plugins: [],
};
