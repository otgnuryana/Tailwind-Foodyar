module.exports = {
  purge: [
	  './src/**/*.html',
     	  './src/**/*.js',
	 ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    textColor:{
      'primary': '#272042',
      'secondary': '#8B8BA5',
      'add': '#F7C531'
    },
    divideColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'divide': '#FBE0DC'
    },
    
    fontFamily: {
      'otg': ['Quicksand', 'sans-serif'],
    },
    extend: {
    },
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
}
