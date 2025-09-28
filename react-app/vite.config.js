import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@config': '/src/config',
      '@data': '/src/data',
      '@presentation': '/src/presentation',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@services': '/src/services',
      '@navigation': '/src/navigation'
    }
  }
})
