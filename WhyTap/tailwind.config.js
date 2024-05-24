/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#861b47',
        'secondary':'#d63637',
        'yellowPrimary':'#FFC221'
      },
      screens:{
        xs:"428px",
      }
    },
  },
  plugins: [],
}

