/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#1F9777',
        Lightgreen: '#26BB93',
        mainBlack: '#202123',
        secMainBlack: '#26272B',
        mainHover: '#353740',
        textDark:'#7D7D7D',
        whiteGrey:'#3C3D47',
        darkText :'#ACACBE',
        hoverText: '#AAAAB0',
      },
    },
  },
  plugins: [],
}
