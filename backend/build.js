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

// Copy pages
const pagesSrc = path.join(sourceDir, 'pages');
if (fs.existsSync(pagesSrc)) {
  fs.cpSync(pagesSrc, path.join(distDir, 'pages'), { recursive: true });
  console.log('[BiteFlow Build] Copied pages/ to dist/pages/');
}

// Copy assets
const assetsSrc = path.join(sourceDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, path.join(distDir, 'assets'), { recursive: true });
  console.log('[BiteFlow Build] Copied assets/ to dist/assets/');
}

// Copy index.html and login.html
const indexSrc = path.join(sourceDir, 'index.html');
if (fs.existsSync(indexSrc)) {
  fs.copyFileSync(indexSrc, path.join(distDir, 'index.html'));
  console.log('[BiteFlow Build] Copied index.html to dist/index.html');
}

const loginSrc = path.join(sourceDir, 'login.html');
if (fs.existsSync(loginSrc)) {
  fs.copyFileSync(loginSrc, path.join(distDir, 'login.html'));
  console.log('[BiteFlow Build] Copied login.html to dist/login.html');
}

console.log('[BiteFlow Build] Successfully prepared dist/ output directory for Vercel!');
