import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In development, forward /api requests to the local Express server.
// In production on Vercel, /api is routed to the backend by vercel.json.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
