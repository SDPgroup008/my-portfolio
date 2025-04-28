#!/bin/bash

# Script to prepare your portfolio for Netlify deployment

echo "Starting Netlify deployment preparation..."

# Create necessary directories
mkdir -p CareerLaunchPortfolio
mkdir -p CareerLaunchPortfolio/netlify/functions

# Copy all necessary files to the CareerLaunchPortfolio directory
echo "Copying project files..."
cp -r client CareerLaunchPortfolio/
cp -r shared CareerLaunchPortfolio/
cp -r attached_assets CareerLaunchPortfolio/
cp -r netlify CareerLaunchPortfolio/
cp netlify.toml CareerLaunchPortfolio/
cp vite.config.ts CareerLaunchPortfolio/
cp README.md CareerLaunchPortfolio/
cp package.json CareerLaunchPortfolio/

# Create a ZIP file for upload to Netlify
echo "Creating ZIP archive for Netlify deployment..."
zip -r netlify-deploy.zip CareerLaunchPortfolio

# Cleanup
rm -rf CareerLaunchPortfolio

echo ""
echo "=============== NETLIFY DEPLOYMENT READY ==============="
echo "Your portfolio is prepared for Netlify deployment in 'netlify-deploy.zip'"
echo ""
echo "To deploy to Netlify:"
echo "1. Go to https://app.netlify.com/"
echo "2. Sign up or log in"
echo "3. Click 'Add new site' -> 'Deploy manually'"
echo "4. Upload the netlify-deploy.zip file"
echo ""
echo "Alternatively, you can connect your GitHub repository:"
echo "1. Push your code to GitHub"
echo "2. On Netlify, click 'Add new site' -> 'Import an existing project'"
echo "3. Connect to your GitHub repository"
echo "4. Configure the build settings as follows:"
echo "   - Base directory: CareerLaunchPortfolio"
echo "   - Build command: npm run build"
echo "   - Publish directory: CareerLaunchPortfolio/dist/public"
echo "   - Functions directory: CareerLaunchPortfolio/netlify/functions"
echo "========================================================="