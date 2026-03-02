import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    site: 'https://iap.software',
    integrations: [react(), sitemap()],
    vite: {
        plugins: [
            tailwindcss(),
            ViteImageOptimizer({
                png: { quality: 80 },
                jpeg: { quality: 80 },
                jpg: { quality: 80 },
                webp: { lossless: false, quality: 80 },
                avif: { lossless: false, quality: 65 },
                cache: true,
            }),],

        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            transformer: 'postcss',
        },
        server: {
            host: true,
            watch: {
                ignored: ['**/yablocks/**']
            }
        }
    },
});