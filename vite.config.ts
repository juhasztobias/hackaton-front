import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['axios', 'jwt-decode', 'zustand', 'react-router-dom'],
    exclude: ['@babel/runtime']
  },
  server: {
    port: 5173,
    host: true
  }
}); 