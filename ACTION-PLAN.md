# SEO Action Plan — jobmi.fr

**Date:** 2026-09-03 (post DNS fix)
**Site status:** ✅ Live on Vercel, valid TLS, crawlable. Score 79/100 (Good).
No emergency items remain — this is optimization.

---

## Priority order

| # | Action | Effort | Impact | Category |
|---|---|---|---|---|
| A1 | Bump Vercel Node.js to 24.x + redeploy | Low | High (unblocks all future deploys after Oct 1) | Infra |
| A2 | ~~Add `og:image` (+ `og:site_name`, `og:locale`)~~ ✅ DONE 2026-09-03 | Low | High (social CTR) | On-page |
| A3 | ~~Remove deprecated `HowTo` JSON-LD~~ ✅ DONE 2026-09-03 | Low | Medium (clean markup) | Schema |
| A4 | ~~Fix `Organization.logo` → real logo~~ ✅ DONE 2026-09-03 | Low | Medium (Knowledge Panel / SERP logo) | Schema |
| A5 | ~~Shorten `og:title` to ≤60 chars~~ ✅ DONE 2026-09-03 | Low | Low-Med | On-page |
| A6 | ~~Add security headers in `next.config.mjs`~~ ✅ DONE 2026-09-03 | Low-Med | Medium (page experience + security) | Technical |
| A7 | ~~Author byline: `<h2>` → `<p>`~~ ✅ DONE 2026-09-03 | Low | Low-Med (heading outline) | On-page |

> **P2 applied 2026-09-03** — commits pending. Files touched: `app/page.tsx`,
> `app/layout.tsx`, `app/blog/[slug]/page.tsx`, `components/ArticleAuthorBox.jsx`,
> `next.config.mjs`, new `public/og-image.png` (1200×630, was 404 before) +
> `scripts/generate-og-image.mjs`. `npx tsc --noEmit` clean, `npm run build` OK,
> security headers verified on `next start`. **Not yet deployed.**
| A8 | Image `width`/`height` + descriptive logo `alt` | Medium | Medium (CLS, image search) | Images |
| A9 | Explicit AI-crawler blocks in `robots.txt` | Low | Low (intent clarity) | GEO |
| A10 | Add `> description` line to `llms.txt` | Low | Low | GEO |
| A11 | Measure CWV (PageSpeed + Search Console) | Low | — (diagnostic) | Performance |
| A12 | Per-article SEO pass (`/seo article`) ×29 | High | Medium-High | Content |
| A13 | Verify Google Search Console + resubmit sitemap | Low | High (re-indexing after outage) | Technical |

---

## Details

### A1 — Node.js 24.x
Vercel → Project `jobmi` → Settings → Node.js Version → `24.x` → **Save** →
Deployments → latest → `···` → **Redeploy** → confirm build is green.
Rollback = re-select `20.x` if anything breaks (unlikely on Next.js 16).

### A2 — Open Graph image
In the App Router root `metadata` (or `app/opengraph-image.(png|tsx)`):
```ts
openGraph: {
  title: "Trouve ta voie — test d'orientation gratuit | Jobmi",
  description: "...",
  url: "https://jobmi.fr",
  siteName: "Jobmi",
  locale: "fr_FR",
  type: "website",
  images: [{ url: "https://jobmi.fr/og-image.png", width: 1200, height: 630 }],
}
```
Verify with the LinkedIn Post Inspector / Facebook Sharing Debugger.

### A3 — Remove HowTo schema
Delete the `{"@type":"HowTo", ...}` `<script type="application/ld+json">` block
(homepage "Comment ça marche"). No replacement type — HowTo rich results were
removed by Google in Sept 2023. Keep the section as plain HTML.

### A4 — Organization logo
In the `Organization` JSON-LD, change
`logo.url` from `/favicons/favicon-32x32.png` to `/media/logo-jobmi.svg`
(or a ≥112×112 PNG). Keep everything else in the graph as-is — it's well built.

### A5 — og:title length
Trim to ≤60 characters (see A2 example). The `<title>` tag can stay longer.

### A6 — Security headers
`next.config.js`:
```js
async headers() {
  return [{
    source: "/(.*)",
    headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
    ],
  }];
}
```
Add `Content-Security-Policy` afterwards, tested separately (it can break
inline scripts / third-party embeds).

### A7 — Author byline heading
In the article template, render the author name as `<p class="byline">` (or a
`<div>`), not `<h2>`. Keep the `Person` JSON-LD — that's the part Google reads
for authorship.

### A8 — Images
- Logo: `alt="Jobmi"` instead of `alt="Logo"`.
- Every non-decorative `<img>`: add explicit `width` + `height`, or migrate to
  `next/image`.
- Purely decorative SVGs: keep `alt=""` and add `aria-hidden="true"`.

### A9 — robots.txt AI crawlers
Append explicit blocks mirroring the `*` rules, e.g.:
```
User-agent: GPTBot
Allow: /
Disallow: /api/
Disallow: /profil
...

User-agent: ClaudeBot
Allow: /
...
```
(Also `PerplexityBot`, `Google-Extended`, `CCBot`, `Bytespider` as desired.)

### A10 — llms.txt description
Add directly under `# Jobmi`:
```
> Plateforme française d'orientation et de reconversion pour les 18-25 ans :
> test d'orientation, immersions métier et guides pratiques.
```
Optional: generate `llms-full.txt` with the full article text.

### A11 — Core Web Vitals
- `python3 <SKILL_DIR>/scripts/pagespeed.py https://jobmi.fr --strategy mobile`
  (retry later, or set `PAGESPEED_API_KEY`).
- Search Console → Core Web Vitals (field data) once traffic returns.
- Targets: LCP < 2.5s, INP < 200ms, CLS < 0.1.

### A12 — Per-article pass
For each `/blog/*` URL run `/seo article https://jobmi.fr/blog/<slug>` and check:
title/meta length, one H1, heading hierarchy (see A7), target-keyword coverage,
2+ internal links to related pillar/articles, `dateModified` freshness,
answer-engine-friendly intro paragraph.

### A13 — Search Console
- Confirm the `jobmi.fr` property is verified (DNS TXT already present:
  3× `google-site-verification=...`).
- Sitemaps → resubmit `https://jobmi.fr/sitemap.xml`.
- URL Inspection → "Request indexing" for the homepage + top articles, since the
  site was serving an error page to Googlebot until today.
- Watch Coverage / Pages report over the next 1–2 weeks for recovery.
