import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'WatashiNoKodomo',
        short_name: 'Kodomo',
        description: 'Un Tamagotchi en PWA',
        theme_color: '#1b1e26',
        icons: [
          {
            src: 'https://imgs.search.brave.com/E9XEfQ7elR0i8OZjpZlC8K2BuL78YARn-Yq0YQ07z0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ2Vlay16b25l/LWljb25zLXJvdW5k/ZWQvMTEwL1RhbWFn/b3RjaGktNTEyLnBu/Zw',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://imgs.search.brave.com/E9XEfQ7elR0i8OZjpZlC8K2BuL78YARn-Yq0YQ07z0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ2Vlay16b25l/LWljb25zLXJvdW5k/ZWQvMTEwL1RhbWFn/b3RjaGktNTEyLnBu/Zw',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
