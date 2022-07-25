/*eslint no-undef: "off"*/
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fade: 'fade 400ms linear 0s normal 1 backwards',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0, transform: 'translateY(-25%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
      },
      fontFamily: {
        display: ['Oswald'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
