// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Astro Configuration
export default defineConfig({
  site: 'https://enviosdosruedas.com',
  compressHTML: true,

  integrations: [
    tailwind(),
    react(),
  ],

  output: 'static',

  experimental: {
    // Remove the assets option as it's now enabled by default in Astro 5+
  },

  build: {
    format: 'directory',
  },

  vite: {
    server: {
      fs: {
        strict: true,
      },
    },
    resolve: {
      alias: {
        '@components': './src/components',
        '@layouts': './src/layouts',
        '@pages': './src/pages',
      },
    },
  },
});
