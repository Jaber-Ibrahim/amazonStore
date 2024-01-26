
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container : "1440px"
      },
      screens: {
        xs : "320px",
        sm : "357px",
        sml : "500px",
        md : "667px",
        mdl : "768px",
        lg : "960px",
        lgl : "1024px",
        xl : "1280px",
      } ,
      colors : {
        amazon_blue : "#131921",
        amazon_light : "#232f3e",
        amazon_yellow : "#febd69",
        white_text : "#ffffff",
        light_text : "#ccc",
        quantity_box : "#f0f2f2",
        footer_bottom : "#131a22",
      },
      boxShadow: {
        test_shadow : "0px 0px 32px 1px rgba(199,199,199,1)",
        amazon_input_shadow : "0 0 3px 2px rgba(228,121,17 / 50%)",
      }
    },
  },
  plugins: [],
}