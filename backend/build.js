import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('[BiteFlow Build] Starting build...');

// Locate source directory containing pages/ and assets/
let sourceDir = __dirname;
if (fs.existsSync(path.join(__dirname, 'public', 'pages'))) {
  sourceDir = path.join(__dirname, 'public');
} else if (fs.existsSync(path.join(__dirname, '..', 'pages'))) {
  sourceDir = path.join(__dirname, '..');
}

const distDir = path.join(__dirname, 'dist');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 1. Copy pages to dist/pages/ AND copy flat into dist/ root
const pagesSrc = path.join(sourceDir, 'pages');
if (fs.existsSync(pagesSrc)) {
  // Nested: dist/pages/...
  fs.cpSync(pagesSrc, path.join(distDir, 'pages'), { recursive: true });
  console.log('[BiteFlow Build] Copied pages to dist/pages/');

  // Flat: dist/... (so /pos, /orders, /tables work cleanly without 404s)
  const pageFiles = fs.readdirSync(pagesSrc);
  for (const file of pageFiles) {
    if (file.endsWith('.html')) {
      fs.copyFileSync(path.join(pagesSrc, file), path.join(distDir, file));
    }
  }
  console.log('[BiteFlow Build] Copied all HTML pages flat to dist/ root');
}

// 2. Set root dist/index.html to the full Dashboard (from pages/index.html)
const dashboardSrc = path.join(pagesSrc, 'index.html');
if (fs.existsSync(dashboardSrc)) {
  fs.copyFileSync(dashboardSrc, path.join(distDir, 'index.html'));
  console.log('[BiteFlow Build] Set dist/index.html to full Dashboard');
}

// 3. Copy assets
const assetsSrc = path.join(sourceDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, path.join(distDir, 'assets'), { recursive: true });
  console.log('[BiteFlow Build] Copied assets/ to dist/assets/');
}

// 4. Copy login.html
let loginSrc = path.join(sourceDir, 'login.html');
if (!fs.existsSync(loginSrc) && fs.existsSync(path.join(pagesSrc, 'login.html'))) {
  loginSrc = path.join(pagesSrc, 'login.html');
}
if (fs.existsSync(loginSrc)) {
  fs.copyFileSync(loginSrc, path.join(distDir, 'login.html'));
  fs.copyFileSync(loginSrc, path.join(distDir, 'pages', 'login.html'));
  console.log('[BiteFlow Build] Copied login.html to dist/ and dist/pages/');
}

console.log('[BiteFlow Build] Successfully prepared dist/ output directory for Vercel!');
