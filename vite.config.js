import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'বাচ্চাদের ১০০ উপদেশ',
        short_name: 'উপদেশ মালা',
        description: 'বাচ্চাদের জন্য ১০০টি শিক্ষামূলক উপদেশ - মঞ্জুরুল হক',
        theme_color: '#FF6B6B',
        background_color: '#f0f9ff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png', // আপনাকে এই আইকনগুলো public ফোল্ডারে রাখতে হবে
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})