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
      },
      dropShadow: {
        "extrabold-dark":'0 30px 60px rgba(71, 74, 87, 0.25)',
        "bold-dark":'0 15px 30px rgba(0, 0, 0, 0.25)',
        "bold-primary": '0 30px 60px rgba(68, 117, 242, 0.25)',
        "normal-dark": '0 15px 30px rgba(0, 0, 0, 0.1)',
        "normal-primary": '0 15px 30px rgba(68, 117, 242, 0.1)'
      }
    },
  },
  plugins: [],
}

