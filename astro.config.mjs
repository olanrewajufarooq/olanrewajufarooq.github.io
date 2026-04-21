import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://olanrewajufarooq.github.io',
  integrations: [react()],
  output: 'static',
  build: {
    // Output research.html instead of research/index.html — preserves existing URLs
    format: 'file',
  },
});
