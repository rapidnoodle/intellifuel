/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#38383B',
        primary: "#A8A6A1",
        'dark-primary': "#999793",
        'light-primary': "#F7F7F7",
      },
      backgroundImage: {
        'hero': "url('/src/assets/fire-oil-rig.jpg')",
        'content': "url('https://picsum.photos/400')",
        'cme': "url('/src/assets/cme-group-logo-transparent.png')",
        'lane': "url('/src/assets/lane-tech-logo.png')",
      }
    },
  },
  plugins: [],
}

