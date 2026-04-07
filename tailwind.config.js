/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          DEFAULT: '#0ea5e9',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          DEFAULT: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.375' }],
        sm: ['clamp(0.875rem, 0.825rem + 0.25vw, 1rem)', { lineHeight: '1.375' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.5' }],
        lg: ['clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)', { lineHeight: '1.5' }],
        xl: ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.375' }],
        '2xl': ['clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)', { lineHeight: '1.25' }],
        '3xl': ['clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)', { lineHeight: '1.25' }],
        '4xl': ['clamp(2.25rem, 1.95rem + 1.5vw, 3rem)', { lineHeight: '1.25' }],
        '5xl': ['clamp(3rem, 2.55rem + 2.25vw, 3.75rem)', { lineHeight: '1.25' }],
        '6xl': ['clamp(3.75rem, 3.15rem + 3vw, 4.5rem)', { lineHeight: '1.25' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      gridTemplateColumns: {
        'hero':    '1fr 360px',
        'about':   '240px 1fr',
        'contact': '280px 1fr',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
