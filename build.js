import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('[BiteFlow Build] Starting build...');

const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 1. Copy pages to dist/pages/ AND flat to dist/ root
const pagesSrc = path.join(__dirname, 'pages');
if (fs.existsSync(pagesSrc)) {
  fs.cpSync(pagesSrc, path.join(distDir, 'pages'), { recursive: true });
  console.log('[BiteFlow Build] Copied pages to dist/pages/');

  const pageFiles = fs.readdirSync(pagesSrc);
  for (const file of pageFiles) {
    if (file.endsWith('.html')) {
      fs.copyFileSync(path.join(pagesSrc, file), path.join(distDir, file));
    }
  }
  console.log('[BiteFlow Build] Copied all HTML pages flat to dist/ root');
}

// 2. Set root dist/index.html to the full Dashboard
const dashboardSrc = path.join(pagesSrc, 'index.html');
if (fs.existsSync(dashboardSrc)) {
  fs.copyFileSync(dashboardSrc, path.join(distDir, 'index.html'));
  console.log('[BiteFlow Build] Set dist/index.html to full Dashboard');
}

// 3. Copy assets
const assetsSrc = path.join(__dirname, 'assets');
if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, path.join(distDir, 'assets'), { recursive: true });
  console.log('[BiteFlow Build] Copied assets/ to dist/assets/');
}

// 4. Copy login.html
let loginSrc = path.join(__dirname, 'login.html');
if (!fs.existsSync(loginSrc) && fs.existsSync(path.join(pagesSrc, 'login.html'))) {
  loginSrc = path.join(pagesSrc, 'login.html');
}
if (fs.existsSync(loginSrc)) {
  fs.copyFileSync(loginSrc, path.join(distDir, 'login.html'));
  fs.copyFileSync(loginSrc, path.join(distDir, 'pages', 'login.html'));
  console.log('[BiteFlow Build] Copied login.html to dist/ and dist/pages/');
}

console.log('[BiteFlow Build] Completed! dist directory is ready.');
