/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(46,98%,50%)',
        accent: 'hsla(46, 98%, 50%, 0.27)',
        navlink: 'hsl(0,0%,21%)',
        hero: 'hsl(0,0%,40%)',
        about: 'hsl(0,2%,90%)',
        body: "hsl(0, 0%, 92%)",
      },
    },
  },
  plugins: [],
};
