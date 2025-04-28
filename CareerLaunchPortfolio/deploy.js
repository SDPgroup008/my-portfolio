// Simple script to build only the frontend for static deployment
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Create a temporary vite config for the static build
const tempConfigContent = `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
});
`;

fs.writeFileSync('vite.config.static.js', tempConfigContent);

// Run the build command with the temporary config
console.log('Building static frontend for deployment...');
exec('npx vite build --config vite.config.static.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Build stderr: ${stderr}`);
  }
  
  console.log(stdout);
  console.log('Static build completed successfully!');
  
  // Create an _redirects file for Netlify (for SPA routing)
  fs.writeFileSync('dist/_redirects', '/* /index.html 200');
  
  // Clean up the temporary config
  fs.unlinkSync('vite.config.static.js');
});