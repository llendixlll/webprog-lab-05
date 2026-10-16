import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// проксі /api на серверний застосунок усуває проблеми CORS у розробці
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:3001' },
  },
});
