 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],

  "scripts": {
    "start": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  }
}