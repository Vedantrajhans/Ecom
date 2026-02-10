/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#1a1a1a",
        "bg-darker": "#121212",
        "text-light": "#f0f0f0",
        "text-muted": "#b0b0b0",
        primary: "#198754",
        "primary-dark": "#157347",
        "primary-light": "#2ecc71",
        "card-bg": "#242424",
        "border-color": "#333",
      },
    },
  },
  plugins: [],
};
