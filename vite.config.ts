import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; // Импортируем модуль path

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Настройка алиаса для @
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
  server: {
    port: 3000,
  },
})
