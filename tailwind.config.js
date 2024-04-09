/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"PlusJakartaSans"', 'monospace']
      },
      borderRadius: {
        10: '0.625rem',
      },
      colors: {
        link: {
          active: "#4737FF",
          inactive: "#9A9EA6"
        },
        heading: "#181E4B",
        desc: "#5E6282",
        primary: "#4475F2",
        placeholder: "#9C9C9C",
        border: "#DEDEDE"
      }
    },
  },
  plugins: [],
}

