/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "custom-cyan": "hsl(179, 62%, 43%)",
        "ligther-cyan": "hsl(179, 47%, 52%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "grayish-blue-custom": "hsl(218, 22%, 67%)",
      },
      fontFamily: {
        "default-ff": "Karla, sans-serif",
      },
    },
  },
  plugins: [],
};
