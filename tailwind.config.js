/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#DD0B82', dark: '#B50868', soft: '#FCE8F3' },
        ink: '#030303', cyanlight: '#F4FEFF', greylight: '#F5F6F8', muted: '#666666',
      },
      fontFamily: { heading: ['Poppins', 'system-ui', 'sans-serif'], body: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: { card: '0 8px 30px rgba(3,3,3,0.06)', pink: '0 10px 30px rgba(221,11,130,0.25)' },
    },
  },
  plugins: [],
}
