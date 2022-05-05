module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: { 
      headings: 'MuseoModerno, sans-serif', 
      copy: 'Roboto, sans-serif' 
    },
    container: { 
      center: true, 
      padding: { DEFAULT: '1.5rem', sm: '2.5rem' } 
    },
  },
  plugins: [],
}