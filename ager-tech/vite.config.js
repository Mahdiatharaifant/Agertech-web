import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const __dirname = path.dirname('./src');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
});
