/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a192f",
        "bg-secondary": "#112240",
        "text-primary": "#ccd6f6",
        "text-secondary": "#8892b0",
        "accent-primary": "#64ffda",
      },
    },
  },
  plugins: [],
};
