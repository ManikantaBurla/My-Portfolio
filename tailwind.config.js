/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#ffffff',
        bgElevated: '#f9fafb',
        corpBlue: '#0067b8',
      }
    },
  },
  plugins: [],
}