import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.vue',
    './pages//*.{js,ts,jsx,tsx,mdx}',
    './components//*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      mobile: '320px',
      tablet: '640px',
      'tablet-large': '768px',
      desktop: '1024px',
    },

    colors: {
      white: '#FFFFFF',
      black: '#1B1D1F',
      'black-soft': '#282B30',
      'light-gray': '#D2D5DA',
      blue: '#4E80EE',
      grey: '#6C727F',
    },

    fontFamily: {
      primary: ['Rubik', 'sans-serif'],
    },

    spacing: {
      0: '0px',

      4: '4px',
      8: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      18: '18px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      66: '66px',
      72: '72px',
      80: '80px',
      96: '96px',
      108: '108px',
      152: '152px',
      220: '220px',
    },

    extend: {
      borderRadius: {
        xl: '20px',
      },
      backgroundSize: {
        'full-width': '100% auto',
      },
      backgroundImage: {
        desktop: "url('/src/assets/img/hero-image.jpg')",
        mobile: "url('/src/assets/img/hero-image-sm.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config
