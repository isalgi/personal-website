/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "xs": "375px",
        "sm": "640px",
        "md": "768px",
        "lg": "960px",
        "xl": "1200px",
      },
    },
    fontFamily: {
      jetBrainsMono: "var(--font-jetBrainsMono)",
      audiowide   : "var(--font-audiowide)",
    },
    letterSpacing: {
      custom: '0.35em',
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: '#040D12',
        accent: {
          DEFAULT: '#FFA823',
          hover: '#FFD35A',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}