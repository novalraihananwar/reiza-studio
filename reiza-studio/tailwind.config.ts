import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FDFCFB',
        'ivory': '#F8F4EF',
        'cream': '#F0EAE0',
        'rs-sky': {
          '50': '#F0F9FF',
          '100': '#E0F2FE',
          '200': '#BAE6FD',
          '300': '#7DD3FC',
          '400': '#38BDF8',
          '500': '#0EA5E9',
          '600': '#0284C7',
        },
        'rs-teal': {
          '100': '#CCFBF1',
          '200': '#99F6E4',
          '400': '#2DD4BF',
          '500': '#14B8A6',
          '600': '#0D9488',
        },
        'rs-peach': '#FFCBA4',
        'rs-coral': '#FF8C7A',
        'rs-mint': '#A7F3D0',
        'rs-orange': '#FB923C',
        'rs-navy': '#0F172A',
        'rs-navy-medium': '#1E293B',
        'rs-navy-light': '#334155',
        'rs-slate': '#64748B',
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2s infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.05)',
        'medium': '0 8px 40px rgba(0,0,0,0.08)',
        'large': '0 20px 60px rgba(0,0,0,0.1)',
        'sky': '0 8px 32px rgba(14,165,233,0.25)',
        'teal': '0 8px 32px rgba(45,212,191,0.25)',
        'coral': '0 8px 32px rgba(255,140,122,0.2)',
        'float': '0 24px 64px rgba(0,0,0,0.12)',
        'glass': '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

export default config
