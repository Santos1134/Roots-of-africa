
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        'warm-white': 'var(--color-warm-white)',
        'deep-brown': 'var(--color-deep-brown)',
        'warm-gray': 'var(--color-warm-gray)',
        terracotta: 'var(--color-terracotta)',
        ochre: 'var(--color-ochre)',
        sage: 'var(--color-sage)',
        tan: 'var(--color-tan)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
