/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(24.6 95% 53.1%)',
        accent: 'hsla(24.6, 95%, 53.1%, 0.27)',
        navlink: 'hsl(0,0%,21%)',
        hero: 'hsl(0,0%,40%)',
        about: 'hsl(0,2%,90%)',
        body: "hsl(0, 0%, 92%)",
      },
    },
  },
  plugins: [],
};
