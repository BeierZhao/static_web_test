/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          900: '#0a1628',
          800: '#0f2140',
          700: '#162d56',
          600: '#1e3a6e',
          500: '#2a4a85',
          400: '#3d5fa0',
          100: '#e8edf5',
          50: '#f4f6fa',
        },
        accent: {
          DEFAULT: '#f47920',
          hover: '#e06810',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};