/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
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
        // for scroll bar...
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-cstm': {
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'grey',
            'border-radius':'15px' 
          }, 
          '.loader-cstm': {
            'border-radius': '50%',
            'border-left-color': 'red',
            // 'animation': 'App-logo-spin infinite 20s linear'
          },
          
        }
      };
      addUtilities(newUtils, ['responsive','hover'])
    }
  ],
};



