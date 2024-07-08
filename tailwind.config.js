/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'display': ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        // Adjust the animation duration to 4s to include the delay
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        shimmer: {
          '0%': {
            backgroundPosition: "-10% 0",
          },
          // End the animation movement at 50% to simulate a 2-second delay
          '50%': {
            backgroundPosition: "-212% 0",
          },
          '100%': {
            backgroundPosition: "-212% 0%",
          },
        },
      },
    },
  },
  plugins: [],
}

