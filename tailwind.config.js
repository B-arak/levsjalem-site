/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
        "primary-blue": "var(--color-primary-blue)",
        "sage-green": "var(--color-sage-green)",
        "cta-orange": "var(--color-cta-orange)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
