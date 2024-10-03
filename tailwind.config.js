/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#043142',
        'primary-background': '#F5BE00',
        'disabled': '#A6A3A3',
        'secondary': '#777777',
        'icon-colors': '#999999',
        'shimmer': '#D9D9D9',
        'secondary-background': '#F5BE0026',
        'onboarding-gradient-start': '#F5BE0026',
        'onboarding-gradient-end': '#F5BE00',
        'tertiary': '#FFFFFF80',
        'onSurface':'#F5BE0026',
        'caption': '#333333',
      },
    },
    plugins: [],
  }
}