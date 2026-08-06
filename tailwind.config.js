/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f4ecd8',
        paper2: '#fffdf6',
        line: '#c9bd9c',
        ink: '#1f3350',
        ink2: '#2c4266',
        qsl: '#c1443c',
        stamp: '#4a6b4f',
        brass: '#b98a3a',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        mono: ['"Courier Prime"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
