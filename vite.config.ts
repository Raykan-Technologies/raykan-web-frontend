import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    // allowedHosts: ['.kando.test'],
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    target: ['chrome107', 'edge107', 'firefox104', 'safari15.4'],
  },
})
