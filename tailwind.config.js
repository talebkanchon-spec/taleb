/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          primary: '#541626',
          secondary: '#70243A',
          royal: '#8D3048',
          deep: '#3B0E19',
          light: '#A33B55',
          subtle: '#FAF4F5',
        },
        surface: {
          pure: '#FFFFFF',
          soft: '#F7F3F4',
          card: '#FFFFFF',
          dark: '#241B1E',
          darkSurface: '#2F1E23',
        },
        brandText: {
          dark: '#241B1E',
          muted: '#635357',
          lightMuted: '#E0CED2',
          pureWhite: '#FFFFFF',
          softWhite: '#F7F3F4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        bengali: ['Hind Siliguri', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-medium': 'floatMedium 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'maroon-glow': '0 0 40px -10px rgba(141, 48, 72, 0.45)',
        'maroon-intense': '0 12px 36px -8px rgba(84, 22, 38, 0.55)',
        'maroon-subtle': '0 8px 30px -12px rgba(84, 22, 38, 0.12)',
        'glass-card': '0 8px 32px 0 rgba(84, 22, 38, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
