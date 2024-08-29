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
      maxWidth: {
        '4/5': '80%', // Add this line to extend maxWidth
      },
      keyframes: {
        darken: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.85' },
        },
        animate: {
          '0%': {
            transform: 'translateY(0%)',
            opacity: '1',
          },
          '99%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-1200%)',
            opacity: '0',
          },
        },
      },
      animation: {
        darken: 'darken 6s linear forwards',
        'bubble-animate': 'animate 6s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
