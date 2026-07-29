/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        accent: '#f5c35',
        surface: {
          DEFAULT: '#e1e2e3',
          default: '#101415',
          dim: '#101415',
          bright: '#363a3b',
        },
        container: {
          lowest: '#0b0f10',
          low: '#191c1e',
          high: '#272b2c',
        },
        outline: {
          DEFAULT: '#8a9294',
          variant: '#40484a',
        },
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      spacing: {
        'margin-mobile': '16px',
        'margin-desktop': '64px',
        'stack-sm': '8px',
        'stack-lg': '32px',
        'stack-xl': '64px',
      },
    },
  },
  plugins: [],
}