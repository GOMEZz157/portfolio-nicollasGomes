import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ["5173-gomezz157-portfolionico-4xgo1l93tys.ws-us121.gitpod.io"]
  }
});
