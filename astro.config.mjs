import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    site: 'https://zestones.github.io',
    base: '/yacms-client-template',
    integrations: [react(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
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