import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://verapeakdigital.com',
  integrations: [
    sitemap({
      // Keep noindex/utility pages out of the sitemap.
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
    }),
  ],
  build: {
    // Inline page CSS into the HTML so it isn't a render-blocking request.
    inlineStylesheets: 'always',
  },
});
