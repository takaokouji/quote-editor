/** @type {import('tailwindcss').Config} */

const colorTextHeader = 'hsl(0, 1%, 16%)';

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: [
        'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans',
        'Helvetica Neue', 'sans-serif'
      ]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      // Three different text colors
      'text-header': colorTextHeader,
      'text-body':   'hsl(0, 5%, 25%)',
      'text-muted':  'hsl(0, 1%, 44%)',

      // Application colors
      primary:          'hsl(350, 67%, 50%)',
      'primary-rotate':   'hsl(10, 73%, 54%)',
      'primary-bg':       'hsl(0, 85%, 96%)',
      secondary:        'hsl(101, 45%, 56%)',
      'secondary-rotate': 'hsl(120, 45%, 56%)',
      tertiary:         'hsl(49, 89%, 64%)',
      glint:            'hsl(210, 100%, 82%)',

      // Neutral colors
      white:      'hsl(0, 0%, 100%)',
      background: 'hsl(30, 50%, 98%)',
      light:      'hsl(0, 6%, 93%)',
      dark:       colorTextHeader
    }
  }
}
