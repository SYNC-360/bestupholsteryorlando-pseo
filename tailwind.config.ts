import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors for upholstery/fabric theme
        primary: {
          50: '#fef7ee',
          100: '#fdead6',
          200: '#f9d1ad',
          300: '#f5b179',
          400: '#ef8743',
          500: '#ea6b1f',
          600: '#db5215',
          700: '#b63d14',
          800: '#913218',
          900: '#752b16',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf4f3',
          100: '#fce7e4',
          200: '#fad2ce',
          300: '#f6b4ab',
          400: '#ef8a7a',
          500: '#e56353',
          600: '#d14635',
          700: '#b0372a',
          800: '#923127',
          900: '#7a2e26',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#1f2937',
            },
            h2: {
              color: '#1f2937',
            },
            h3: {
              color: '#1f2937',
            },
            'h4,h5,h6': {
              color: '#374151',
            },
            a: {
              color: '#ea6b1f',
              '&:hover': {
                color: '#db5215',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
export default config