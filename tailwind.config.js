/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal':'hsl(166, 100%, 37%)',
        'cobalt-blue':'hsl(234, 85%, 45%)',
        'attribution-blue':'hsl(228, 45%, 44%)',
        'white':'hsl(0, 0%, 100%)',
        'pale-blue':'hsl(221, 100%, 96%)',
        'light-lavender':'hsl(241, 100%, 89%)',
        'dark-gray-blue':'hsl(224, 30%, 27%)',
        'grad-light-slate-blue':'hsl(252, 100%, 67%)',
        'grad-light-royal-blue':'hsl(241, 81%, 54%)',
        'grad-violet-blue':'hsla(256, 72%, 46%, 1)',
        'grad-persian-blue':'hsla(241, 72%, 46%, 0)',
      },
      fontFamily: {
        'sans': ['Hanken Grotesk', 'sans-serif']
      },
      width: {
        '720': '720px'
      },
      fontSize: {
        'p': '1.125rem'
      },
    },

  },
  plugins: [],
}

