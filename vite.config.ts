import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [
    react(),
    VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
        enabled: true,
    },
    includeAssets: ['favicon.ico', 'logo192.png', 'vite.svg'],
    manifest: {
        name: 'Musik Web 3',
        short_name: 'Musik',
        description: 'Gere ta musique comme tu le souhaite',
        theme_color: '#ffffff',
        icons: [
        {
            src: 'https://cdn-icons-png.flaticon.com/512/68/68197.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
        },
        {
            src: 'https://cdn-icons-png.flaticon.com/512/68/68197.png',
            sizes: '512x512',
            type: 'image/png',
        },
        ],
    },
    }),
],
});
