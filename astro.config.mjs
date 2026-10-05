import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://olanrewajufarooq.github.io',
  output: 'static',
  build: {
    // Output research.html instead of research/index.html — preserves existing URLs
    format: 'file',
  },
});
