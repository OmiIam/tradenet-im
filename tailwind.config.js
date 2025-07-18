/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Geist Mono', 'Consolas', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b8deff',
          300: '#7ac0ff',
          400: '#329cff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#0043a6',
          800: '#003780',
          900: '#002659',
        },
        trade: {
          blue: '#0066FF',
          navy: '#0A1628',
          midnight: '#1A2332',
          surface: '#2D3748',
          success: '#00D68F',
          warning: '#FFB800',
          error: '#FF4747',
          neutral: '#8B9299',
        },
        success: '#00D68F',
        warning: '#FFB800',
        error: '#FF4747',
        trading: {
          green: '#00D68F',
          red: '#FF4747',
          blue: '#0066FF',
          dark: '#0A1628',
          light: '#f8fafc',
        }
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '4.5rem', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
        'h4': ['1.25rem', { lineHeight: '1.75rem' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'body': ['1rem', { lineHeight: '1.5rem' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}