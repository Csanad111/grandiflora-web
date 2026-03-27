/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5e6e5e',
        'primary-dark': '#4a574a',
        accent: '#899c85',
        'accent-dark': '#3d4f3d',
        surface: '#eff2ef',
        muted: '#c4c4c4',
        separator: '#e6e2ea',
        background: '#1a1a1a',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['"Hedvig Letters Serif"', 'serif'],
        alt: ['"Inria Serif"', 'serif'],
      },
      keyframes: {
        idle: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-3px) scale(1.03)' },
        }
      },
      animation: {
        idle: 'idle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
