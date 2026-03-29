/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#000000',
        secondary: '#0a0a0a',
        card: '#0f0f0f',
        border: '#1a1a1a',
        accent: '#7c5cff',
        glow: '#5b8cff',
        muted: '#9ca3af',
      },
      boxShadow: {
        glow: '0 0 32px rgba(124, 92, 255, 0.35)',
        card: '0 20px 40px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
};
