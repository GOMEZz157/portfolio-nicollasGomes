import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ["5173-gomezz157-portfolionico-tmcy74xjtuk.ws-us117.gitpod.io"]
  }
});
