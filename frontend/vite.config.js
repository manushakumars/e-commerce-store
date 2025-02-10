import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // Increase the limit (in KB)
  },
  server: {
    proxy: {
      "/api": {
        target: "https://fragile-rabbit-anusha-58076d08.koyeb.app/",
        changeOrigin: true
      }
    }
  }
});
