/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        orbitron: ["Orbitron", 'sans-serif'],
        kskdsfsd: ["Bungee Tint", 'sans-serif'],
          ggggg: ["Bodoni Moda SC", 'serif'],
          robotoslab: ["Roboto Slab", 'serif'],
          bebas: ["Bebas Neue", 'sans-serif'],
          dancing: ["Dancing Script", 'cursive']
      },
      fontWeight: {
        bold: '700', // You can use any custom name or just `700`
      },
    },
  },
  plugins: [],
}

