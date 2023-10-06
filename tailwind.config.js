const tailwindcss = require("tailwindcss");
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // darkMode: false,
  content: ["./src/**/*.{html,js,jsx,ts,tsx,}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
          "primary": "#6366f1",        
          "secondary": "#a78bfa",     
          "accent": "#f471b5",      
          "neutral": "#1d283a",      
          "base-100": "#0f1729",      
          "info": "#0ca6e9",
          "success": "#2bd4bd",
          "warning": "#f4c152" ,        
          "error": "#fb6f84",
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      }
    },
  },
  plugins: [tailwindcss, require('flowbite/plugin')],
}


    // current: 'currentColor',
      // 'white': '#ffffff',
      // 'blue': {
      //   '50':  '#f7f9fb',
      //   '100': '#e3f0fd',
      //   '200': '#c5d8fb',
      //   '300': '#9eb4f5',
      //   '400': '#7d8cee',
      //   '500': '#6667e9',
      //   '600': '#544ade',
      //   '700': '#4038c0',
      //   '800': '#2c2693',
      //   '900': '#18185e',
      // },
      // 'indigo': {
      //   '50':  '#f7f9fb',
      //   '100': '#e5eefc',
      //   '200': '#ccd4fb',
      //   '300': '#a8b0f4',
      //   '400': '#8d88ec',
      //   '500': '#7764e7',
      //   '600': '#6347db',
      //   '700': '#4c36be',
      //   '800': '#352591',
      //   '900': '#1e195c',
      // },
      // 'cerise': {
      //   '50':  '#fdfcfb',
      //   '100': '#fcf0ef',
      //   '200': '#f9cadf',
      //   '300': '#f19bbe',
      //   '400': '#f16a9a',
      //   '500': '#e8477b',
      //   '600': '#d52e5a',
      //   '700': '#b02341',
      //   '800': '#84192a',
      //   '900': '#521016',
      // },
      // 'green': {
      //   '50':  '#eaf4f1',
      //   '100': '#c5f0ec',
      //   '200': '#84ead2',
      //   '300': '#49d3a5',
      //   '400': '#15b873',
      //   '500': '#0ea149',
      //   '600': '#0e8d36',
      //   '700': '#0f6e2d',
      //   '800': '#0c4c25',
      //   '900': '#092e1e',
      // },
      // 'yellow': {
      //   '50':  '#faf9ef',
      //   '100': '#f7ef9b',
      //   '200': '#ede157',
      //   '300': '#d1c030',
      //   '400': '#a19917',
      //   '500': '#7d7c0a',
      //   '600': '#636406',
      //   '700': '#4d4c07',
      //   '800': '#353407',
      //   '900': '#252006',
      // },


      // 'bluish': {
      //   '50': '#eeeeff',
      //   '100': '#e0e1ff',
      //   '200': '#c7c8fe',
      //   '300': '#a5a7fc',
      //   '400': '#8184f8',
      //   '500': '#6366f1',
      //   '600': '#4649e5',
      //   '700': '#383bca',
      //   '800': '#3032a3',
      //   '900': '#2e3081',
      //   '950': '#1b1c4b',