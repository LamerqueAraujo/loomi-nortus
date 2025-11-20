const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ], theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },

};

export default config;
