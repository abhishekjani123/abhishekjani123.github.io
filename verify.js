#!/usr/bin/env node
/**
 * Pre-push verification: ensures critical files exist and have valid structure
 */
const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  'index.html',
  'terminal.html',
  'script.js',
  'styles.css',
  'neo-styles.css',
  'favicon.png',
  'Profile Pic.jpeg',
  'Abhishek.pdf',
];

const REQUIRED_LINKS = {
  'index.html': ['terminal.html', 'neo-styles.css', 'Profile Pic.jpeg'],
  'terminal.html': ['styles.css', 'script.js'],
};

let errors = [];

// Check required files exist
for (const file of REQUIRED_FILES) {
  if (!fs.existsSync(path.join(__dirname, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

// Check critical links in HTML
for (const [htmlFile, links] of Object.entries(REQUIRED_LINKS)) {
  const htmlPath = path.join(__dirname, htmlFile);
  if (!fs.existsSync(htmlPath)) continue;
  const content = fs.readFileSync(htmlPath, 'utf8');
  for (const link of links) {
    if (!content.includes(link)) {
      errors.push(`${htmlFile} should reference: ${link}`);
    }
  }
}

// Check script.js has RESUME_URL
const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
if (!scriptContent.includes('Abhishek.pdf')) {
  errors.push('script.js should reference Abhishek.pdf for resume');
}

if (errors.length > 0) {
  console.error('\n❌ Verification failed:\n');
  errors.forEach((e) => console.error('  -', e));
  process.exit(1);
}

console.log('✅ All checks passed. Ready for deployment.');
