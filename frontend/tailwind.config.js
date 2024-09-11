/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/home.js',
    './components/navBar.js',
    './components/login.js',
    './components/Signup.js',
    './components/notfound.js',
    './components/popup.js',
    './components/services.js',
    './components/order.js',
    './components/LandingPage.js'

  ],
  theme: {
    extend: {
      maxWidth: 
        {
          '4/5': '80%', // Add this line to extend maxWidth
        },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

