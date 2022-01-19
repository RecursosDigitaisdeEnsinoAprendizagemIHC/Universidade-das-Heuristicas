module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
        ringWidth: ['active'],
        ringColor: ['active'],
        ringOpacity: ['active'],
        ringOffsetWidth: ['active'],
        ringOffsetColor: ['active'],
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }  