import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    primary: {
      '50': '#efb0ff',
      '100': '#d890ed',
      '200': '#bb76d0',
      '300': '#9f5cb4',
      '400': '#844399',
      '500': '#77378c',
      '600': '#6a2a7f',
      '700': '#5d1d73',
      '800': '#500d67',
      '900': '#330044'
    },

    secondary: {
      '50': '#b9d165',
      '100': '#9eb54d',
      '200': '#849935',
      '300': '#6b7f1c',
      '400': '#536600',
      '500': '#485900',
      '600': '#3e4c00',
      '700': '#344000',
      '800': '#2a3400',
      '900': '#171e00'
    }
  },

  alpine: {
    body: {
      backgroundColor: {
        initial: '#330045',
        dark: '#330045'
      },

      color: {
        initial: '#efb0ff',
        dark: '#efb0ff'
      }
    },

    backdrop: {
      backgroundColor: {
        initial: '#efb0ff',
        dark: '#efb0ff'
      }
    }
  }
})