/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nanum Gothic', 'sans-serif'],
        serif: ['Noto Serif KR', 'serif'],
        Hangul: ['GapyeongHanseokbong-Bold'],
      },
      colors: {
        beige: {
          50: '#fbfaf5',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};