import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This ensures Vite binds to all network interfaces
    port: 5173,
    watch: {
      usePolling: true // This is often necessary in Docker environments
    }
  }
});
