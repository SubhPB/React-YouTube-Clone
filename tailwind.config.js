/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtils = {
        '.auto-bg-img': {
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.auto-img': {
          objectPosition: 'center',
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        },
      };
      addUtilities(newUtils, ['responsive','hover'])
    }
  ],
};



