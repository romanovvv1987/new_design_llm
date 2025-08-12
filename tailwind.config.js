/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medium: {
          primary: '#242424',
          secondary: '#6B6B6B',
          background: '#FFFFFF',
          border: '#F2F2F2',
          search: '#F9F9F9',
          yellow: '#FFC017'
        }
      },
      fontFamily: {
        'medium': ['medium-content-sans-serif-font', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
        'sohne': ['sohne', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        'medium-title': ['42px', { lineHeight: '52px', letterSpacing: '-0.011em' }],
        'medium-subtitle': ['22px', { lineHeight: '28px', letterSpacing: '-0.003em' }],
        'medium-body': ['20px', { lineHeight: '32px', letterSpacing: '-0.003em' }],
        'medium-heading': ['24px', { lineHeight: '30px', letterSpacing: '-0.016em' }]
      }
    },
  },
  plugins: [],
}
