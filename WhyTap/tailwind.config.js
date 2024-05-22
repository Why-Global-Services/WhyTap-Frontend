/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#861b47',
        'secondary':'#d63637'
      }
    },
  },
  plugins: [],
}

