import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                chatbot: resolve(__dirname, 'chatbot/index.html'),
                contact: resolve(__dirname, 'contact/index.html'),
                evenmentiel: resolve(__dirname, 'evenmentiel/index.html'),
                graphic: resolve(__dirname, './graphic-design/index.html'),
                marketing: resolve(__dirname, 'marketing/index.html'),
                audiovisuel: resolve(__dirname, 'photo-video/index.html'),
                portfolio: resolve(__dirname, 'portfolio/index.html'),
                propos: resolve(__dirname, 'propos/index.html'),
                services: resolve(__dirname, 'service-agence/index.html'),
                site: resolve(__dirname, 'site-web/index.html'),
            }
        }
    },
    plugins: [
    ]
});