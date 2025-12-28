/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // এখানে 'Baloo Da 2' ফন্টটি সেট করা হয়েছে
        sans: ['"Baloo Da 2"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
