/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            'montserrat': ['Montserrat']
        },
        backgroundColor: {
            'dark': '#2C3333'
        },
        colors: {
            'dark': '#2C3333'
        },
        gridTemplateColumns: {
            'mobile-headlines': 'repeat(auto-fill, minmax(300px, 1fr))',
            'headlines': 'repeat(auto-fill, minmax(400px, 1fr))'
        }
      },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/line-clamp')
    ],
    darkMode: "class"
  }