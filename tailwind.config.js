/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import flowbitePlugin from 'flowbite/plugin';
export default withMT ({
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     'node_modules/flowbite-react/lib/esm/**/*.js'
     
  ],
  theme: {
    extend: {
           fontFamily: {
            sans: ["Fira Code","Silkscreen",]
    },
    animation: {
        type: 'type 2s ease-out .2s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(1ch)' },
          '15%, 20%': { transform: 'translateX(2ch)' },
          '25%, 30%': { transform: 'translateX(3ch)' },
          '35%, 40%': { transform: 'translateX(4ch)' },
          '45%, 50%': { transform: 'translateX(5ch)' },
          '55%, 60%': { transform: 'translateX(6ch)' },
          '65%, 70%': { transform: 'translateX(7ch)' },
          '75%, 80%': { transform: 'translateX(8ch)' },
          '85%, 90%': { transform: 'translateX(9ch)' },
          '95%, 100%': { transform: 'translateX(11ch)' },
        },
    },
    color : {
      'dark' : '#04364A'
    }
  },
},
  plugins: [
   flowbitePlugin

],
  darkMode: "class",
});

