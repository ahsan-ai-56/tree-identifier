/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bae0bc',
          300: '#8ec991',
          400: '#5daa61',
          500: '#3a8c3f',
          600: '#2a7030',
          700: '#235927',
          800: '#1e4722',
          900: '#193b1d',
          950: '#0c2010',
        },
        bark: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f1d9b3',
          300: '#e8c082',
          400: '#dda050',
          500: '#d4842a',
          600: '#c46a1f',
          700: '#a3521c',
          800: '#83421e',
          900: '#6b371c',
        },
        moss: {
          400: '#8fbe6b',
          500: '#72a84a',
          600: '#5a8f38',
        },
        cream: '#fafaf7',
        'deep-forest': '#0d2818',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #0d2818 0%, #1e4722 40%, #2a7030 70%, #3a8c3f 100%)',
        'bark-gradient': 'linear-gradient(135deg, #6b371c 0%, #a3521c 50%, #d4842a 100%)',
      },
    },
  },
  plugins: [],
}
