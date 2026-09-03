// One-off: generates public/og-image.png (1200x630) — the default social share card.
// Run: node scripts/generate-og-image.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6500FF"/>
      <stop offset="1" stop-color="#3A00A8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="90" r="240" fill="#ffffff" opacity="0.06"/>
  <circle cx="120" cy="560" r="200" fill="#ffffff" opacity="0.06"/>
  <text x="90" y="150" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" fill="#ffffff" opacity="0.9">jobmi.fr</text>
  <text x="90" y="320" font-family="Arial, Helvetica, sans-serif" font-size="94" font-weight="800" fill="#ffffff">Trouve ta voie</text>
  <text x="90" y="410" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="500" fill="#ffffff" opacity="0.92">Test d'orientation gratuit &amp; immersions m&#233;tiers</text>
  <text x="90" y="470" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="500" fill="#ffffff" opacity="0.92">pour les 18&#8211;25 ans</text>
  <rect x="90" y="520" width="360" height="8" rx="4" fill="#ffffff" opacity="0.8"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
