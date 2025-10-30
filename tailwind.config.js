/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}", // ajout du dossier components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
