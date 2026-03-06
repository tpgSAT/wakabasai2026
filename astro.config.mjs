// @ts-check
import { defineConfig } from 'astro/config';


import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://wakabasai.tpgd.jp',

  vite: {
      resolve: {
          alias: {
              '@layouts': '/src/layouts',
              '@components': '/src/components',
              '@lib': '/src/lib',
              '@assets': '/src/assets',
          },
      },
  },

  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: [["dataLayer.push"],"gtm.push"],
      },
    })
  ],
});