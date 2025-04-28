// Script to prepare the portfolio site for GitHub Pages deployment
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Starting GitHub Pages deployment preparation...');

// Step 1: Build the static version of the site
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
  
  // Step 2: Create a CNAME file if you have a custom domain
  // Uncomment and replace with your domain if needed
  // fs.writeFileSync('dist/CNAME', 'yourdomain.com');
  
  // Step 3: Create a .nojekyll file to bypass Jekyll processing on GitHub Pages
  fs.writeFileSync('dist/.nojekyll', '');
  
  // Step 4: Create a _redirects file for services like Netlify
  fs.writeFileSync('dist/_redirects', '/* /index.html 200');
  
  // Step 5: Copy README.md to dist folder
  try {
    const readmeContent = fs.readFileSync('README.md');
    fs.writeFileSync('dist/README.md', readmeContent);
  } catch (err) {
    console.log('No README.md found to copy');
  }
  
  console.log('\nDeployment preparation complete!');
  console.log('\nTo deploy to GitHub Pages:');
  console.log('1. Create a GitHub repository and initialize it');
  console.log('2. Create a new branch called "gh-pages" in your repository');
  console.log('3. Copy all files from the "dist" folder to the gh-pages branch');
  console.log('4. Push the gh-pages branch to GitHub');
  console.log('5. Go to your repository settings and ensure GitHub Pages is enabled');
  console.log('   and set to deploy from the "gh-pages" branch');
  console.log('\nYour portfolio will be available at: https://yourusername.github.io/repository-name/');
});