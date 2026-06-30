import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://verapeakdigital.com',
  build: {
    // Inline page CSS into the HTML so it isn't a render-blocking request.
    inlineStylesheets: 'always',
  },
});
