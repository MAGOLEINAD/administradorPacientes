module.exports = {
  content: [
    "index.html",
    "./src/**/*.jsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } Celular chico

      'md': '768px',
      // => @media (min-width: 768px) { ... } Tablet o Celular Grande

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } Laptop en adelante

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... } Monitor 24 en adelante 

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }  Monitor superancho
      
      'm2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'mxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'mlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'msm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },

  extend: {
    backgroundImage: {

    }
  },
  plugins: [

  ]
};
