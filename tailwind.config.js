/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textColor: "hsl(60, 39%, 9%)",
        background: "hsl(55, 40%, 94%)",
        primary: "hsl(237, 40%, 33%)",
        secondary: "hsl(269, 39%, 80%)",
        accent: "hsl(208, 40%, 40%)",
        dark: "#7d7c83",
      },
    },
  },
  plugins: [],
};
