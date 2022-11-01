module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['0.906rem', { lineHeight: '1.5rem' }],
      lg: ['1rem', { lineHeight: '1.5rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.35rem', { lineHeight: '2rem' }],
      '3xl': ['1.55rem', { lineHeight: '2.25rem' }],
      '4xl': ['1.8rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        'ocg-blue': '#45526e',
        'ocg-lightblue': '#2366a6',
        'deep-blue': '#1C2331',
        'purple-blue': 'rgba(85, 108, 150, 1)',
        'facebook-blue': '#3b5998',
        'linkedin-blue': '#0e76a8',
        'contact-red': '#f87171',
      },
      animation: {
        bounce: 'bounce 2s ease-in-out infinite',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
}
