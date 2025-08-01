import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://cyokozai.github.io',
  base: '/deep-research-archives',
  output: 'static', // Keep static for GitHub Pages
  server: {
    host: '0.0.0.0', // Allow external connections for Docker
    port: 4321
  }
});