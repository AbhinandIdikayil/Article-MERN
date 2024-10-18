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
        p: 'var(--p-text-color)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60vh)', opacity: '0' }, // Start from off-screen
          '100%': { transform: 'translateY(0)', opacity: '1' },   // End at original position
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards'
      }
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

