/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primery: "#30bbf2",
        secondary: "#eb4034",
        success: "#00c9a7",
        danger: "#ff0000",
        warning: "#ffc107",
        info: "#2196f3",
        light: "#f8f9fa",
        dark: "#343a40",
      },
    },
  },
  plugins: [],
};
