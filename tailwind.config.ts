import type {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: {
          grey: '#AEAEAE',
        },
      },
      boxShadow: {
        light: '0px 8px 16px -2px rgba(27, 33, 44, 0.12);',
      },
      backgroundColor: {
        base: '#FFFFFF30',
      },
      backgroundImage: {
        main: "url('/background.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({addBase, theme, addComponents, addUtilities}) {
      addComponents({
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      })
      addUtilities({
        '.overflow-y-auto': {
          'scroll-behavior': 'smooth',
          'scrollbar-width': 'thin',
        },
        '.overflow-x-auto': {
          'scroll-behavior': 'smooth',
          'scrollbar-width': 'thin',
        },
        '.overflow-auto': {
          'scroll-behavior': 'smooth',
          'scrollbar-width': 'thin',
        },
      })
    }),
  ],
}
export default config
