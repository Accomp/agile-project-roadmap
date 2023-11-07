/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ally-plum': '#650360',
        'ally-plum-dark': '#371447',
        'ally-plum-light': '#8a3575',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

