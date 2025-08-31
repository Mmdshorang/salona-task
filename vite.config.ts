import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SalonaShop', 
        short_name: 'Salona',
        description: 'A sample product app built with React + Vite + TS',
        theme_color: '#2563EB',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/salona.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/salona.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
