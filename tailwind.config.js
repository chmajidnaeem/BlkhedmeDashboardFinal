<<<<<<< HEAD
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

 /** @type {import('tailwindcss').Config} */
=======
 
  // @type {import('tailwindcss').Config} 
>>>>>>> 6bdd2ffb17a09a2da77b6a09a0c28b3425529527
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily:{
      'montserrat': [ "Montserrat", 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {},
    fontFamily: {
      'Montserrat':[ 'Montserrat', 'sans-serif'],
      'Poppins':['Poppins']
    }
  },
  plugins: [],
}