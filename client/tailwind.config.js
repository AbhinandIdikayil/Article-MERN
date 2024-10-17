/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Define custom colors mapped to your CSS variables
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        p:'var(--p-text-color)'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode for background-color
      textColor: ['dark'], // Enable dark mode for text color
    },
  },
  plugins: [],
}

