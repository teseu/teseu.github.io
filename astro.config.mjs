import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://teseu.github.io',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'en'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
