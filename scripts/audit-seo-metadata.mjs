import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';

const ROOT = process.cwd();
const BASE_URL = 'https://jobmi.fr';
const TITLE_LIMIT_PX = 600;
const DESCRIPTION_LIMIT_PX = 920;
const TODAY = new Date('2026-05-25T00:00:00+02:00');
const OUTPUT = path.join(ROOT, 'seo-metadata-audit-jobmi.csv');
const OUTPUT_XLSX = path.join(ROOT, 'seo-metadata-audit-jobmi.xlsx');

const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');

const loadTsModule = (file) => {
  const source = read(file);
  const js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;

  const exports = {};
  const module = { exports };
  const sandbox = {
    exports,
    module,
    require: () => ({}),
    console,
  };

  vm.runInNewContext(js, sandbox, { filename: file });
  return module.exports;
};

const extractBalancedObject = (source, marker = 'export const metadata') => {
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) return '';

  const start = source.indexOf('{', markerIndex);
  if (start === -1) return '';

  let depth = 0;
  let quote = '';
  let escaped = false;

  for (let i = start; i < source.length; i += 1) {
    const char = source[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = '';
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '{') depth += 1;
    if (char === '}') depth -= 1;
    if (depth === 0) return source.slice(start, i + 1);
  }

  return '';
};

const extractStringProperty = (objectSource, prop) => {
  const match = objectSource.match(
    new RegExp(`${prop}\\s*:\\s*(["'\`])([\\s\\S]*?)\\1`)
  );

  if (!match) return '';

  return match[2]
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const getStaticMetadata = (file) => {
  const source = read(file);
  const objectSource = extractBalancedObject(source);
  return {
    title: extractStringProperty(objectSource, 'title'),
    description: extractStringProperty(objectSource, 'description'),
  };
};

const widthPx = (text) => {
  if (!text) return 0;

  let width = 0;
  for (const char of text) {
    if (char === ' ') width += 4;
    else if ('.,;:!|/\\\'"`()[]{}-–—?'.includes(char)) width += 4;
    else if ('ilIjtfr'.includes(char)) width += 4.5;
    else if ('mwMW@#%&'.includes(char)) width += 10;
    else if (/[A-ZÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŸ]/.test(char)) width += 8;
    else width += 7;
  }

  return Math.round(width);
};

const applyTemplate = (title, isHome = false) => {
  if (!title) return '';
  if (isHome) return title;
  return `${title} | Jobmi`;
};

const classify = ({ finalTitle, description }) => {
  const titleWidth = widthPx(finalTitle);
  const descriptionWidth = widthPx(description);
  const titleIssues = [];
  const descriptionIssues = [];

  if (!finalTitle) titleIssues.push('Title manquant');
  if (titleWidth > TITLE_LIMIT_PX) titleIssues.push(`Title trop long (${titleWidth}/${TITLE_LIMIT_PX}px)`);
  if (/Jobmi\s*[|–-]\s*Jobmi/i.test(finalTitle) || /Jobmi.+\|\s*Jobmi/i.test(finalTitle)) {
    titleIssues.push('Marque Jobmi doublon ou deja presente avant template');
  }

  if (!description) descriptionIssues.push('Description manquante');
  if (descriptionWidth > DESCRIPTION_LIMIT_PX) {
    descriptionIssues.push(`Description trop longue (${descriptionWidth}/${DESCRIPTION_LIMIT_PX}px)`);
  }

  const issues = [...titleIssues, ...descriptionIssues];

  return {
    titleWidth,
    descriptionWidth,
    titleStatus: titleIssues.length ? 'A faire' : 'Bon',
    descriptionStatus: descriptionIssues.length ? 'A faire' : 'Bon',
    status: issues.length ? 'A faire' : 'Bon',
    issues: issues.join(' | '),
  };
};

const csvCell = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
const xmlCell = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const columnName = (index) => {
  let name = '';
  let current = index + 1;
  while (current > 0) {
    const remainder = (current - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    current = Math.floor((current - 1) / 26);
  }
  return name;
};

const writeXlsx = (xlsxPath, headers, rows) => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'jobmi-seo-xlsx-'));
  const mkdir = (dir) => fs.mkdirSync(path.join(tempDir, dir), { recursive: true });
  const writeXml = (file, content) => {
    fs.writeFileSync(path.join(tempDir, file), content, 'utf8');
  };

  mkdir('_rels');
  mkdir('xl/_rels');
  mkdir('xl/worksheets');

  const allRows = [headers, ...rows];
  const sheetData = allRows
    .map((row, rowIndex) => {
      const rowNumber = rowIndex + 1;
      const cells = row
        .map((value, columnIndex) => {
          const cellRef = `${columnName(columnIndex)}${rowNumber}`;
          return `<c r="${cellRef}" t="inlineStr"><is><t>${xmlCell(value)}</t></is></c>`;
        })
        .join('');
      return `<row r="${rowNumber}">${cells}</row>`;
    })
    .join('');

  writeXml(
    '[Content_Types].xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`
  );
  writeXml(
    '_rels/.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`
  );
  writeXml(
    'xl/workbook.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="Audit SEO" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>`
  );
  writeXml(
    'xl/_rels/workbook.xml.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`
  );
  writeXml(
    'xl/worksheets/sheet1.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="3" width="45" customWidth="1"/>
    <col min="4" max="4" width="70" customWidth="1"/>
    <col min="5" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="90" customWidth="1"/>
    <col min="8" max="10" width="18" customWidth="1"/>
    <col min="11" max="11" width="55" customWidth="1"/>
  </cols>
  <sheetData>${sheetData}</sheetData>
</worksheet>`
  );

  if (fs.existsSync(xlsxPath)) fs.rmSync(xlsxPath);
  execFileSync('zip', ['-qr', xlsxPath, '.'], { cwd: tempDir });
  fs.rmSync(tempDir, { recursive: true, force: true });
};
const addRecord = (records, record) => {
  const classified = classify(record);
  records.push({ ...record, ...classified });
};

const routeFile = (route) => {
  if (route === '/') return 'app/page.tsx';
  return `app${route}/page.tsx`;
};

const routeLayout = (route) => {
  if (route === '/') return 'app/layout.tsx';
  return `app${route}/layout.tsx`;
};

const metadataForStaticRoute = (route, { sourceOverride } = {}) => {
  const page = routeFile(route);
  const layout = routeLayout(route);
  const pageExists = fs.existsSync(path.join(ROOT, page));
  const layoutExists = fs.existsSync(path.join(ROOT, layout));
  const pageMeta = pageExists ? getStaticMetadata(page) : {};
  const layoutMeta = layoutExists ? getStaticMetadata(layout) : {};
  const rootMeta = getStaticMetadata('app/layout.tsx');

  return {
    route,
    title: pageMeta.title || layoutMeta.title || rootMeta.title,
    description: pageMeta.description || layoutMeta.description || rootMeta.description,
    source: sourceOverride || [
      pageMeta.title || pageMeta.description ? page : '',
      layoutMeta.title || layoutMeta.description ? layout : '',
    ].filter(Boolean).join(' + ') || 'app/layout.tsx',
  };
};

const formatEventDate = (event) => {
  const start = new Date(`${event.date_start}T00:00:00`);
  const end = event.date_end ? new Date(`${event.date_end}T00:00:00`) : null;
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (!end || event.date_start === event.date_end) return formatter.format(start);
  return `${formatter.format(start)} - ${formatter.format(end)}`;
};

const records = [];

const staticRoutes = [
  '/',
  '/a-propos',
  '/blog',
  '/carte-orientation',
  '/cgu',
  '/contact',
  '/evenements-orientation',
  '/evenements/ateliers-metiers',
  '/evenements/en-ligne',
  '/evenements/journees-portes-ouvertes',
  '/evenements/salons',
  '/inscription',
  '/me-connecter',
  '/mention-legales',
  '/outil/temps-devant-toi',
  '/outils',
  '/politique-de-confidentialite',
  '/profil',
  '/profile',
  '/que-faire-apres-le-bac',
  '/reconversion',
  '/stage-et-formation',
  '/test',
  '/tester-metiers-paris',
  '/tester-un-metier',
];

for (const route of staticRoutes) {
  const meta = metadataForStaticRoute(route);
  addRecord(records, {
    url: `${BASE_URL}${route === '/' ? '' : route}`,
    route,
    title: meta.title,
    finalTitle: applyTemplate(meta.title, route === '/'),
    description: meta.description,
    source: meta.source,
  });
}

const testOrientationMeta = getStaticMetadata('app/orientation/test-orientation-jeunes/content.tsx');
for (const route of ['/test-orientation', '/test-orientation-18-25-ans']) {
  addRecord(records, {
    url: `${BASE_URL}${route}`,
    route,
    title: testOrientationMeta.title,
    finalTitle: applyTemplate(testOrientationMeta.title),
    description: testOrientationMeta.description,
    source: 'app/orientation/test-orientation-jeunes/content.tsx',
  });
}

const { geoPages } = loadTsModule('data/geoPages.ts');
for (const page of geoPages) {
  addRecord(records, {
    url: `${BASE_URL}/${page.slug}`,
    route: `/${page.slug}`,
    title: page.title,
    finalTitle: applyTemplate(page.title),
    description: page.description,
    source: 'data/geoPages.ts',
  });
}

const cityContentSource = read('app/carte-orientation/[city]/page.tsx');
for (const city of ['paris', 'lyon', 'nantes']) {
  const cityBlock = cityContentSource.match(new RegExp(`${city}:\\s*{([\\s\\S]*?)\\n\\s*},`))?.[1] || '';
  const title = extractStringProperty(`{${cityBlock}}`, 'title');
  const description = extractStringProperty(`{${cityBlock}}`, 'description');
  addRecord(records, {
    url: `${BASE_URL}/carte-orientation/${city}`,
    route: `/carte-orientation/${city}`,
    title,
    finalTitle: applyTemplate(title),
    description,
    source: 'app/carte-orientation/[city]/page.tsx',
  });
}

const { jobTestingPages } = loadTsModule('data/jobTestingPages.ts');
for (const page of jobTestingPages) {
  addRecord(records, {
    url: `${BASE_URL}/tester-metier/${page.slug}`,
    route: `/tester-metier/${page.slug}`,
    title: page.title,
    finalTitle: applyTemplate(page.title),
    description: page.description,
    source: 'data/jobTestingPages.ts',
  });
}

const { immersionOffers } = loadTsModule('data/immersionOffers.ts');
for (const offer of immersionOffers) {
  const title = `${offer.title} | Immersion métier 18–25 ans`;
  const description = `${offer.context} Métier visé : ${offer.targetJob}. Ville : ${offer.city}. Niveau : ${offer.level}.`;
  addRecord(records, {
    url: `${BASE_URL}/immersions/${offer.slug}`,
    route: `/immersions/${offer.slug}`,
    title,
    finalTitle: applyTemplate(title),
    description,
    source: 'app/immersions/[slug]/page.tsx + data/immersionOffers.ts',
  });
}

const { orientationEvents } = loadTsModule('data/events.ts');
for (const event of orientationEvents.filter((item) => item.seo_indexable)) {
  const title = `${event.title} | Jobmi`;
  const description = `${event.description_short} ${event.online_only ? 'Événement en ligne.' : `${event.city}, ${event.region}.`} Dates : ${formatEventDate(event)}.`;
  addRecord(records, {
    url: `${BASE_URL}/evenements/${event.slug}`,
    route: `/evenements/${event.slug}`,
    title,
    finalTitle: applyTemplate(title),
    description,
    source: 'app/evenements/[slug]/page.tsx + data/events.ts',
  });
}

const { articles } = loadTsModule('data/articles.ts');
const articleTitleOverrides = {
  'reconversion-professionnelle-20-ans-guide-complet':
    'Plan d’action reconversion à 20 ans : quoi faire en 30 jours',
  'metiers-ia-ne-remplacera-pas-2030':
    '10 métiers que l’IA ne remplacera pas en 2026–2030 (salaires + formations)',
  'nouveaux-metiers-crees-par-ia':
    "10 nouveaux métiers créés par l'IA 2026 (salaires + formations accessibles)",
  'comment-ia-booste-ton-futur-metier':
    "Comment l'IA booste 15 métiers concrets (exemples 2026)",
  'pmsmp-18-25-tester-metier-immersion':
    'PMSMP 18–25 ans : comment tester un métier en immersion avant de te reconvertir',
  'orientation-post-bac-sans-parcoursup':
    'Orientation post‑bac sans Parcoursup : 6 vraies options en 2026',
};

for (const article of articles.filter((item) => new Date(item.datePublished) <= TODAY)) {
  const title = articleTitleOverrides[article.slug] || article.title;
  addRecord(records, {
    url: `${BASE_URL}/blog/${article.slug}`,
    route: `/blog/${article.slug}`,
    title,
    finalTitle: applyTemplate(title),
    description: article.metaDescription,
    source: articleTitleOverrides[article.slug]
      ? 'app/blog/[slug]/page.tsx override + data/articles.ts'
      : 'data/articles.ts',
  });
}

records.sort((a, b) => {
  if (a.status !== b.status) return a.status === 'A faire' ? -1 : 1;
  return a.route.localeCompare(b.route, 'fr');
});

const headers = [
  'Statut',
  'URL',
  'Route',
  'Title HTML final',
  'Title px',
  'Statut title',
  'Description',
  'Description px',
  'Statut description',
  'Probleme',
  'Source code',
];

const rows = records.map((record) => [
  record.status,
  record.url,
  record.route,
  record.finalTitle,
  `${record.titleWidth}/${TITLE_LIMIT_PX}`,
  record.titleStatus,
  record.description,
  `${record.descriptionWidth}/${DESCRIPTION_LIMIT_PX}`,
  record.descriptionStatus,
  record.issues,
  record.source,
]);

fs.writeFileSync(
  OUTPUT,
  [headers, ...rows].map((row) => row.map(csvCell).join(';')).join('\n'),
  'utf8'
);
writeXlsx(OUTPUT_XLSX, headers, rows);

const summary = records.reduce(
  (acc, record) => {
    acc.total += 1;
    acc[record.status] += 1;
    return acc;
  },
  { total: 0, Bon: 0, 'A faire': 0 }
);

console.log(JSON.stringify({ output: OUTPUT, xlsx: OUTPUT_XLSX, ...summary }, null, 2));
