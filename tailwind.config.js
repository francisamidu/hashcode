/** @type {import('tailwindcss').Config} */
// import tailwindscrollbar from 'tailwind-scrollbar'

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'md-only': { max: '1023px', min: '768px' }
      }
    }
  },
  plugins: []
}
