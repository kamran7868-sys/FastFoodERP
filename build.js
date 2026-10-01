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

// Copy pages
if (fs.existsSync(path.join(__dirname, 'pages'))) {
  fs.cpSync(path.join(__dirname, 'pages'), path.join(distDir, 'pages'), { recursive: true });
  console.log('[BiteFlow Build] Copied pages/ to dist/pages/');
}

// Copy assets
if (fs.existsSync(path.join(__dirname, 'assets'))) {
  fs.cpSync(path.join(__dirname, 'assets'), path.join(distDir, 'assets'), { recursive: true });
  console.log('[BiteFlow Build] Copied assets/ to dist/assets/');
}

// Copy root index.html and login.html
if (fs.existsSync(path.join(__dirname, 'index.html'))) {
  fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distDir, 'index.html'));
  console.log('[BiteFlow Build] Copied index.html to dist/index.html');
}

if (fs.existsSync(path.join(__dirname, 'login.html'))) {
  fs.copyFileSync(path.join(__dirname, 'login.html'), path.join(distDir, 'login.html'));
  console.log('[BiteFlow Build] Copied login.html to dist/login.html');
}

console.log('[BiteFlow Build] Completed! dist directory is ready.');
