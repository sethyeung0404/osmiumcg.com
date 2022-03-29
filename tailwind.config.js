module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ocg-blue': '#45526e',
        'deep-blue': '#1C2331',
        'purple-blue': 'rgba(85, 108, 150, 1)',
        'facebook-blue': '#3b5998',
        'linkedin-blue': '#0e76a8',
      },
      animation: {
        bounce: 'bounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
