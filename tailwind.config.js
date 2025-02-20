/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '580px',
        'xxl': '1440px', // Custom screen size for 1440px
      },
      animation: {
        'ping-slow': 'ping 2s infinite',
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      backgroundImage: {
      'login-bg': "url('./assets/img/log-in/main-bg.jpg')",
      'home-bg': "url('./assets/img/home/main-hero-bg.jpg')"
      },
  },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}