/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'roboto': ['var(--font-roboto)'],
        'manrope': ['var(--font-manrope)'],
        'inter': ['var(--font-inter)'],
        'poppin': ['var(--font-poppin)'],
        'open-sans': ['var(--font-open-sans)']
      }
    },
  },
  plugins: [],
}
