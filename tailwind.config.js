module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      container: {
        padding:'1rem',
        center: true

      },
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
      colors: {
       'Grayish-Blue': 'hsl(217, 19%, 38%)',
       'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
       'Light-Cyan': 'hsl(193, 38%, 86%)',
       'Neon-Green': ' hsl(150, 100%, 66%)'

      }
    },
  },
  plugins: [],
}