import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://iptv-teste-xciptv-apk.vercel.app',
  integrations: [sitemap()],
});
