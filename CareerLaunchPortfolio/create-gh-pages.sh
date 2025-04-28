#!/bin/bash

# This script helps prepare your portfolio for GitHub Pages deployment

echo "Starting GitHub Pages deployment preparation..."

# Create a dist directory if it doesn't exist
mkdir -p dist

# Run the static build
echo "Building your portfolio..."
npx vite build --config vite.config.static.js

# Verify the build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # Create necessary files for GitHub Pages
    echo "Creating GitHub Pages configuration files..."
    
    # Create .nojekyll file to bypass GitHub Pages Jekyll processing
    touch dist/.nojekyll
    
    # Create _redirects file for services like Netlify
    echo "/* /index.html 200" > dist/_redirects
    
    # Copy README.md to dist folder if it exists
    if [ -f README.md ]; then
        cp README.md dist/
    fi
    
    echo ""
    echo "======================= SUCCESS! ======================="
    echo "Your portfolio is ready for GitHub Pages deployment!"
    echo ""
    echo "To deploy your portfolio:"
    echo "1. Create a GitHub repository (if you haven't already)"
    echo "2. Initialize Git in this directory"
    echo "3. Create a gh-pages branch and add the contents of 'dist' folder"
    echo ""
    echo "Commands you can use:"
    echo "   git init"
    echo "   git checkout -b gh-pages"
    echo "   git add dist/*"
    echo "   git commit -m \"Add portfolio files\""
    echo "   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git"
    echo "   git push -u origin gh-pages"
    echo ""
    echo "Then enable GitHub Pages in your repository settings to deploy from the gh-pages branch"
    echo "Your site will be available at: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
    echo "======================================================="
else
    echo "Build failed. Please check the errors above."
    exit 1
fi