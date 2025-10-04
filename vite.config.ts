import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    // Allow Vite to be accessed via network (ngrok or remote host)
    // `host: true` binds to 0.0.0.0 so forwarded requests with a different Host
    // header (like the ngrok domain) are accepted.
    // Allowed hosts for Host header validation. Add the ngrok host you saw in the
    // error so Vite doesn't reject forwarded requests.
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '1ca5952468d0.ngrok-free.app'
    ],
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true,
  },
});
