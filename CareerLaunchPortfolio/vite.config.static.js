import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Configuration for static site deployment (GitHub Pages, Netlify, etc.)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("client", "src"),
      "@shared": path.resolve("shared"),
      "@assets": path.resolve("attached_assets"),
    },
  },
  root: path.resolve("client"),
  build: {
    outDir: path.resolve("dist"),
    emptyOutDir: true,
  },
  base: './', // This ensures all asset paths are relative
});