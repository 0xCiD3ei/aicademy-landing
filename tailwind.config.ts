import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', ...defaultTheme.fontFamily.sans],
        'dela-gothic-one': ['Dela Gothic One', ...defaultTheme.fontFamily.sans],
        'comic-sans-ms': ['Comic Sans MS', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--tw-color-primary))',
          foreground: 'rgb(var(--tw-color-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--tw-color-secondary))',
          foreground: 'rgb(var(--tw-color-secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'rgb(var(--tw-color-destructive))',
          foreground: 'rgb(var(--tw-color-destructive-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--tw-color-muted))',
          foreground: 'rgb(var(--tw-color-muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--tw-color-accent))',
          foreground: 'rgb(var(--tw-color-accent-foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--tw-color-popover))',
          foreground: 'rgb(var(--tw-color-popover-foreground))',
        },
        border: 'rgb(var(--tw-color-border))',
        "btn-hover": 'rgb(var(--tw-color-button-hover))',
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(50px)" },
        },
        "spin-bounce": {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        "spin-debounce": {
          "0%, 100%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
        },
        "slide-x": {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(calc(40px))" },
        },
        "slide-x-bg": {
          from: { width: "0%" },
          to: { width: "max-content" },
        },
        dotPulse: {
          "0%, 100%": { opacity: "0.3" },
          "25%": { opacity: "0.5" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0.5" },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        float: "float 3s ease-in-out infinite",
        "spin-bounce": "spin-bounce 1s ease-in-out infinite",
        "spin-debounce": "spin-debounce 1s ease-in-out infinite",
        "slide-x": "slide-x 2s linear infinite alternate",
        "slide-x-bg": "slide-x-bg 3s ease-out forwards",
        dot1: "dotPulse 1.5s infinite ease-in-out",
        dot2: "dotPulse 1.5s infinite ease-in-out 0.2s",
        dot3: "dotPulse 1.5s infinite ease-in-out 0.4s",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
} satisfies Config;
