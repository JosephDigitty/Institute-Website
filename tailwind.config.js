/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Merriweather: ['Merriweather', 'serif'],
        ubuntu: ["ubuntu", "sans-serif"],
        ptserif: ["PT Serif", "sans-serif"],
        HR: ["Playwrite HR Lijeva", " cursive"],
        roboto: ["Roboto", " cursive"],
        Opensans: ["Open Sans", " cursive"],
      },
      colors: {
        cipdm: ["#FF4149"],
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

