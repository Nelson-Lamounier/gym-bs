import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this if you want to use a different port
  },
  resolve: {
    alias: {
      "@": "/src", // Use this alias for simpler imports
    },
  },
  build: {
    outDir: "dist", // Directory for production build
  },
});