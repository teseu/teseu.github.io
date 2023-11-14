/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        business: {
          ...require('daisyui/src/theming/themes')['[data-theme=business]'],
          '.bg-color-1': {
            'background-color': '#1f2937',
          },
          primary: '#7c89ff',
          '--primary-dark': '#312e81',
          '.text-primary-dark': {
            color: 'var(--primary-dark)',
          },
          '.bg-primary-dark': {
            'background-color': 'var(--primary-dark)',
          },
        },
        emerald: {
          ...require('daisyui/src/theming/themes')['[data-theme=emerald]'],
          '.bg-color-1': {
            'background-color': '#f1f5f9',
          },
          primary: '#079038',
          '--primary-dark': '#001c9b',
          '.text-primary-dark': {
            color: 'var(--primary-dark)',
          },
          '.bg-primary-dark': {
            'background-color': 'var(--primary-dark)',
          },
        },
        night: {
          ...require('daisyui/src/theming/themes')['[data-theme=night]'],
          '.bg-color-1': {
            'background-color': '#1e293b',
          },
          '--primary-dark': '#004968',
          '.text-primary-dark': {
            color: 'var(--primary-dark)',
          },
          '.bg-primary-dark': {
            'background-color': 'var(--primary-dark)',
          },
        },
      },
    ],
    // themes: ['business', 'emerald', 'night'],
    darkTheme: 'business', // name of one of the included themes for dark mode
    base: true,
    utils: true,
  },
}
