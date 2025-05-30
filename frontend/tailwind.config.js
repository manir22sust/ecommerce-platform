/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "shop-red": "#e3000f",
        "shop-red-dark": "#b91c1c",
      },
    },
  },
  plugins: [],
};
