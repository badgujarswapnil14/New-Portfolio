/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#09111f',
        panel: '#0f1c32',
        accent: '#67e8f9',
        highlight: '#f97316',
      },
      boxShadow: {
        ambient: '0 30px 80px rgba(11, 18, 32, 0.45)',
        glow: '0 0 0 1px rgba(103, 232, 249, 0.25), 0 18px 60px rgba(11, 26, 54, 0.45)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(103, 232, 249, 0.18), transparent 28%), radial-gradient(circle at 80% 10%, rgba(249, 115, 22, 0.12), transparent 24%), radial-gradient(circle at bottom right, rgba(96, 165, 250, 0.14), transparent 30%)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}