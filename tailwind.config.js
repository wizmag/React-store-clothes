/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        pulses: {
          from: { 'box-shadow': '0 0 25px #7effb2, 0 0 50px #2cd9ff' },
        },

        runtext: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-15%)' },
        },
      },
      colors: {
        shine: '#2cd9ff',
        shine1: '#7effb2',
        shine2: '#2xd9ff',
      },
      transform: {
        transformvw: 'translateX(-100vw)',
      },
    },

    plugins: [],
  },
};
