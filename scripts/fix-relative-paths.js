const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // Replace absolute root asset references that break on GitHub Pages subpaths
  content = content.replace(/href="\//g, 'href="./');
  content = content.replace(/src="\//g, 'src="./');
  content = content.replace(/url\(\"\//g, 'url("./');
  content = content.replace(/url\('\//g, "url('./");

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Patched', path.relative(process.cwd(), filePath));
  }
}

console.log('Searching dist for HTML/CSS/JS files to fix absolute asset paths...');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(res));
    } else if (/\.(html|js|css|svg)$/.test(entry.name)) {
      files.push(res);
    }
  }
  return files;
}

if (!fs.existsSync(DIST)) {
  console.warn('dist directory not found:', DIST);
  process.exit(0);
}
const files = walk(DIST);
files.forEach((f) => replaceInFile(f));
console.log('Done.');
