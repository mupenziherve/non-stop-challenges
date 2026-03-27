import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6480ff', 
          600: '#3e9bba', 
          700: '#2fa3a1', 
          800: '#1e7a78',
          900: '#145c5b',
        },
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(to right, #6480ff, #3e9bba, #2fa3a1)',
      },
    },
  },
  plugins: [],
}

export default config
