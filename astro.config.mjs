import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://teseu.github.io',
  experimental: {
    i18n: {
      defaultLocale: 'pt-br',
      locales: ['pt-br', 'en'],
    },
  },
  integrations: [tailwind()],
})
