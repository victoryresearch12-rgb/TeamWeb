/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2647',
        secondary: '#144272',
        accent: '#FFC300',
        deepGray: '#1B1B1B',
        neutral100: '#F1F3F5',
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.5rem', lg: '2rem' },
      },
      fontSize: {
        'h1': ['44px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['30px', { lineHeight: '1.2', fontWeight: '700' }],
      },
      boxShadow: {
        'sm-soft': '0 4px 12px rgba(10,38,71,0.06)',
      },
    },
  },
  plugins: [],
};
