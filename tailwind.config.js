/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {},
      backgroundImage: {},
      colors: {
        'sofifa-bg': '#212529',
        'sofifa-nav-bg': '#2e3237',
        'sofifa-sub-bg': '#292d32',
        'sofifa-text-a': '#ced4da',
        'sofifa-text-b': '#868e95',
        'sofifa-text-c': '#cac3c3',
        'sofifa-ovr-a': '#12843f',
        'sofifa-ovr-b': '#67a72b',
        'sofifa-ovr-c': '#e5b533',
        'sofifa-ovr-d': '#d85d26',
        'sofifa-pos-gk': '#c8292b',
        'sofifa-pos-df': '#d85d26',
        'sofifa-pos-mf': '#2d8944',
        'sofifa-pos-at': '#679ffa',
      },
    },
  },
  plugins: [],
}
