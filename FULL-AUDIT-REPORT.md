# Full SEO Audit — jobmi.fr

**Date:** 2026-09-03 (re-run after DNS fix)
**Target:** https://jobmi.fr
**Audit type:** Full site audit (LLM-first + script-backed)
**Overall score at audit time:** **79 / 100 — Good**

> **Update 2026-09-04:** F1 (HowTo), F3 (logo), F4 (og:image), F5 (og:title),
> F6 (security headers), F8 (author `<h2>`) and F11 (Node 24) are **fixed and
> deployed**. Email DNS restored. See `ACTION-PLAN.md` for what remains
> (Search Console resubmit, images/CLS, robots AI blocks, llms.txt line,
> per-article pass, CWV measurement).

> ✅ **The P0 blocker from the earlier run is resolved.** `jobmi.fr` now serves
> the real Next.js app from Vercel over a valid, auto-renewing Let's Encrypt
> certificate (`server: Vercel`, cert valid 2026-08-14 → 2026-11-12). The site
> is crawlable and indexable again. Remaining items are optimization, not
> emergency.

---

## 1. Summary table

| Category | Weight | Score | Rating |
|---|---|---|---|
| Technical SEO | 25% | 82/100 | ✅ Good |
| Content Quality / E-E-A-T | 20% | 80/100 | ✅ Good |
| On-Page SEO | 15% | 85/100 | ✅ Good |
| Schema / Structured Data | 15% | 68/100 | ⚠️ Needs work |
| Performance (CWV) | 10% | N/A | ⚪ Not measured (PageSpeed API rate-limited) |
| Image Optimization | 10% | 70/100 | ⚠️ Needs work |
| AI Search Readiness (GEO) | 5% | 85/100 | ✅ Good |

CWV excluded from the weighted average.

---

## 2. What's working well

- **Valid HTTPS + HSTS** (`max-age=63072000`), clean single-hop response, no redirect chains.
- **robots.txt** present, correct, points to the sitemap; sensible `Disallow`
  of `/api/`, auth and profile routes and tracking query params.
- **sitemap.xml** — 67 URLs, with `lastmod` / `changefreq` / `priority`,
  covers all 29 blog articles + pillar pages + local pages.
- **Canonical, `lang="fr"`, viewport, charset** all correct on every page checked.
- **Structured data graph** on the homepage: `Organization` (+ `sameAs` socials),
  `WebSite` with `SearchAction`, `WebPage` — well linked via `@id`.
- **Article pages** carry `BlogPosting` + `BreadcrumbList` + `Person` (named
  author *Clément RONDEPIERRE*) — a real E-E-A-T authorship signal.
- Articles are substantial (Parcoursup 2026 résultats ≈ 2 000 words) with a
  clear H1, scannable H2 structure, related-articles block, and internal links.
- **`llms.txt` exists and is high quality** (75/100) — descriptive, sectioned,
  with explicit "Instructions for LLMs". Rare and valuable for AI search.
- Twitter Card complete (`summary_large_image`, title, description, image, creator).

---

## 3. Findings (prioritized)

### ⚠️ F1 — `HowTo` schema is deprecated — remove it
- **Evidence:** Homepage ships `{"@type":"HowTo","name":"Comment tester un métier avec Jobmi…"}` with 3 `HowToStep`s.
- **Impact:** Google **removed all HowTo rich results in September 2023**. This
  markup now renders nothing, adds page weight, and can confuse validators.
- **Fix:** Delete the `HowTo` JSON-LD block. If you want the "Comment ça marche"
  steps represented, leave them as plain HTML — no schema type replaces HowTo.

### ⚠️ F2 — `FAQPage` schema won't produce rich results on this site
- **Evidence:** `FAQPage` JSON-LD on the homepage (6 Q/A) and on article pages
  (e.g. `resultats-parcoursup-2026`, 5 Q/A).
- **Impact:** Since August 2023, Google restricts **FAQ rich results to
  government and health authority domains**. On a commercial site the markup is
  valid but ignored for rich results — no penalty, but no benefit either.
- **Fix:** Low priority. Keep the visible FAQ HTML (good for users and for
  answer-engine extraction). You can leave the schema (harmless) or remove it
  to slim the payload — your call. Do **not** expect stars/accordions in SERPs.

### ⚠️ F3 — `Organization.logo` points to a 32×32 favicon
- **Evidence:** `"logo":{"@type":"ImageObject","url":"https://jobmi.fr/favicons/favicon-32x32.png"}`.
- **Impact:** Google's logo guidelines want a crisp image, **min 112×112 px**,
  ideally the real brand logo on transparent/solid background. A 32px favicon
  can be rejected for Knowledge Panel / SERP logo use.
- **Fix:** Point `logo.url` to `https://jobmi.fr/media/logo-jobmi.svg` (or a
  ≥112px PNG export of it).

### ⚠️ F4 — `og:image` missing (Open Graph)
- **Evidence:** `social_meta` check — `og:image: missing (required)`, while
  `twitter:image` = `https://jobmi.fr/og-image.png` exists.
- **Impact:** Facebook, LinkedIn, WhatsApp, Slack, Discord previews for
  `jobmi.fr` links show no image → much lower click-through when shared.
- **Fix:** Add `<meta property="og:image" content="https://jobmi.fr/og-image.png">`
  (plus `og:image:width` / `og:image:height`, and `og:site_name` `Jobmi`,
  `og:locale` `fr_FR`). In Next.js App Router this goes in the `metadata`
  export / `opengraph-image` file.

### ⚠️ F5 — `og:title` too long (65 chars)
- **Evidence:** `og:title` = "Trouve ta voie | Test d'orientation gratuit et immersions métiers" (65).
- **Impact:** Truncated in social previews (~60 char budget).
- **Fix:** Shorten the OG title (the `<title>` tag can stay as is), e.g.
  "Trouve ta voie — test d'orientation gratuit | Jobmi".

### ⚠️ F6 — Security headers largely missing (score 45/100)
- **Evidence:** Present: HSTS only. Missing: `Content-Security-Policy`,
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`. HSTS also lacks `includeSubDomains`.
- **Impact:** Not a direct ranking factor, but part of "page experience" /
  site-quality signals and a real security gap (clickjacking, MIME sniffing).
- **Fix:** Add a `headers()` block in `next.config.js` (or `vercel.json`):
  ```
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=63072000; includeSubDomains
  ```
  Add CSP last, after testing (it's the one that can break things).

### ⚠️ F7 — Image optimization is inconsistent
- **Evidence:** Homepage `<img>` audit — logo `alt="Logo"` (not descriptive);
  several raster images referenced as `.svg` filenames; multiple `<img>` with
  no `width`/`height`; content images load via `next/image` (good) but decorative
  SVGs are raw `<img>` without `loading`/dimensions.
- **Impact:** Missing dimensions → layout shift risk (CLS). Weak `alt` on the
  logo → minor accessibility / image-search loss.
- **Fix:** Set `alt="Jobmi"` on the logo; give every non-decorative image
  explicit `width`/`height` (or use `next/image` with `fill` + sized container);
  keep `alt=""` only for purely decorative SVGs.

### ⚠️ F8 — Author byline rendered as an `<h2>`
- **Evidence:** On `resultats-parcoursup-2026`, "Clément RONDEPIERRE" is an `<h2>`
  in the heading outline, between the H1 and the first real section heading.
- **Impact:** Pollutes the document outline; search engines parsing headings for
  structure see a person's name where a section title is expected.
- **Fix:** Render the byline as a `<p>`/`<span>` with appropriate styling, not a heading.

### ⚠️ F9 — AI crawlers not explicitly named in robots.txt
- **Evidence:** `robots.txt` has only `User-agent: *` (with `Allow: /`).
  GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc. inherit `*`.
- **Impact:** Neutral today — they're allowed. But you have no explicit control,
  and `llms.txt` signals you *want* AI visibility, so make it deliberate.
- **Fix:** Add explicit `User-agent: GPTBot` / `ClaudeBot` / `PerplexityBot` /
  `Google-Extended` blocks with `Allow: /` (and `Disallow` the same private
  paths as `*`). Keeps intent unambiguous if you ever tighten `*`.

### ⚠️ F10 — `llms.txt` missing the description blockquote
- **Evidence:** `llms_txt_checker` — "Missing description (> blockquote)";
  no `llms-full.txt`.
- **Impact:** Minor — the spec wants a one-line `> summary` right after the H1.
- **Fix:** Add `> French orientation & early-career guidance platform for 18–25s:
  orientation test, job immersions, and practical guides.` under `# Jobmi`.
  Optionally generate `llms-full.txt` with the full article corpus.

### ℹ️ F11 — Node.js 20.x on Vercel is End-of-Life (build blocker, not SEO)
- **Evidence:** Vercel project setting shows Node 20.x; "new builds disabled
  October 1, 2026".
- **Impact:** After 2026-10-01 you can't deploy — including SEO fixes and new
  articles. Indirect but important.
- **Fix:** Vercel → Project `jobmi` → Settings → Node.js Version → `24.x` → Save
  → redeploy → confirm green. Next.js 16 supports it; no `engines` pin to change.

---

## 4. Not assessed / environment limitations

- **Core Web Vitals** — Google PageSpeed Insights API returned HTTP 429
  (rate-limited, no API key). Re-run `scripts/pagespeed.py` later or add
  `PAGESPEED_API_KEY` to `.env`. Field data also visible in Search Console →
  Core Web Vitals once traffic resumes.
- **Full per-article pass** — only `resultats-parcoursup-2026` was inspected in
  depth (representative). Run `/seo article <url>` per article for keyword,
  internal-link and heading-level detail across all 29.
- **Internal-link graph / orphan detection** — not crawled this run.
- **Backlink profile** — not in scope of `seo audit`.

---

## 5. Artifacts

- `FULL-AUDIT-REPORT.md` — `/Users/clementrondepierre/Documents/Dev/Jobmi/FULL-AUDIT-REPORT.md`
- `ACTION-PLAN.md` — `/Users/clementrondepierre/Documents/Dev/Jobmi/ACTION-PLAN.md`
