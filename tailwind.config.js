
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
       sm:'350px',
       md:"768px",
       lg:"1024px",
       xl:"1280px",
       "2xl":"1536px"
    },
    colors:{
      brown:"#53423e",
      lightBrown:"#645550",
      darkBrown:"#2c2523",
      black:"#1e1917",
      white:"#fff",
      cyan:"#15d1e9",
      lightCyan:"#88e5f0",
      darkCyan:"#009fb3",
      orange:"#fb9718",
      lightOrange:"#fac27b",
      darkOrnage:"#d28422",
      grey:"#626965",
      lightGray:"#978580",
      darkGray:"#3f4441"

    },
    extend: {
      boxShadow:{
        cyanShadow: '0px 0px 20px 0px rgba(94,206,220,0.5)',
        cyanMediumShadow:"10px 10px 200px 150px rgba(94,206,220,0.5)",
        orangeMediumShadow:"10px 10px 200px 150px rgba(240,169,79,0.54)",
        customeShadow: "0px -2px 2px 1px rgb(207 192 192 / 55%)"

      }
    },
    fontFamily:{
      body:["Josefin Sans"],
      special:["Roboto"]
    }
  },
  plugins: [],
}

