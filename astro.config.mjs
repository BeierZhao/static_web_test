import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://jzr-automation.ca',
  integrations: [
    tailwind(),
    alpinejs({ entrypoint: '/src/alpine' }),
  ],
});