/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lt: '350px',
        sm: '550px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        "max-w-xl": "1080px",
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
         grey: '#0A0909'
    },
    },
  },
  plugins: [],
}