import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend serveris
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Panaikina '/api' prefix'ą
      },
    },
  },
});
