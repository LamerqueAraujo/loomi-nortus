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
  boxShadow: {
    'neon-lg': '0 0 20px 10px rgba(0, 240, 255, 0.7), 0 0 40px 20px rgba(0, 255, 255, 0.4)',
  },

};

export default config;
