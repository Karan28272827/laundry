/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx}', // Updated to include all JS and JSX files in components
    './pages/**/*.{js,jsx}',       // If you have a pages directory, include it here
    './public/index.html',          // Include your main HTML file
  ],
  theme: {
    extend: {
      maxWidth: {
        '4/5': '80%', // Extend maxWidth to include 80%
      },
      colors: {
        'custom-blue': '#1DA1F2', // Example of adding a custom color
      },
      spacing: {
        '18': '4.5rem', // Example of adding a custom spacing
      },
    },
    darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  }
  
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};