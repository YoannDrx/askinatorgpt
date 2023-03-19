/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'zinc-700': '#27272a',
        'green-700': '#059669',
        'green-800': '#047857',
        'green-600': '#10b981',
      },
      textColor: {
        'zinc-300': '#6b7280',
        'zinc-400': '#4b5563',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class', // add this line to enable dark mode using the 'dark' class
};