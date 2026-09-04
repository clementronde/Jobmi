# SEO Action Plan — jobmi.fr

**Last updated:** 2026-09-04
**Site status:** ✅ Live on Vercel, valid TLS, crawlable, Node 24.x, security headers active.
Audit score at re-run: 79/100 (Good) — several items below now fixed.

---

## ✅ Done

### Infra / P0–P1
- [x] **DNS fixed** — `jobmi.fr` nameservers on Vercel (`ns1/ns2.vercel-dns.com`),
      apex serves the Next.js app, valid auto-renewing Let's Encrypt cert.
      (2026-09-03, after a multi-hour outage during the NS switch.)
- [x] **Email restored** — MX (`mx1/mx2.hostinger.com`), SPF, DMARC, `autoconfig`/
      `autodiscover`, DKIM (`hostingermail-a/b/c._domainkey`) re-added to the Vercel
      DNS zone. Verified: `dig MX jobmi.fr` returns the Hostinger MX. (2026-09-03)
- [x] **Node.js 24.x** on Vercel (was 20.x / EOL 2026-10-01). Production deploy
      confirmed on 24.x.

### SEO code fixes (P2) — commit `1f09607`, deployed & verified live
- [x] **`og:image` created + wired** — `public/og-image.png` (1200×630); the URL
      `/og-image.png` was returning **404** before. Now `og:image` present on the
      homepage (it was entirely missing), `/og-image.png` → 200.
- [x] **`og:title` shortened** 65 → 51 chars on the homepage; added `og:locale`,
      `og:site_name`, `twitter` block.
- [x] **`HowTo` JSON-LD removed** from the homepage (deprecated by Google in 2023).
- [x] **`Organization.logo`** → `logo-jobmi.svg` instead of the 32×32 favicon
      (homepage `Organization` + article `publisher`).
- [x] **Author byline** rendered as `<p>` instead of `<h2>` (kept the `Person`
      JSON-LD) — clean heading outline on articles.
- [x] **Security headers** in `next.config.mjs`: `X-Frame-Options`,
      `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
      `Strict-Transport-Security` + `includeSubDomains; preload`. Verified live.

---

## ⬜ Remaining

### P1 — verify (probably a 5-min check)
| # | Action | Notes |
|---|---|---|
| A13 | **Google Search Console** | Confirm `jobmi.fr` property is verified (the 3 `google-site-verification` TXT are in DNS). Sitemaps → resubmit `https://jobmi.fr/sitemap.xml`. URL Inspection → "Request indexing" for the homepage + top articles (the site served an error page to Googlebot for several days). Watch the Pages/Coverage report over 1–2 weeks. |

### P3 — optimization (code, batchable into one deploy)
| # | Action | Effort | Impact |
|---|---|---|---|
| A8 | **Images** — set `alt="Jobmi"` on the logo (currently `alt="Logo"`); add explicit `width`/`height` (or `next/image`) to non-decorative images to kill layout shift; keep `alt=""` + `aria-hidden` only on decorative SVGs. | Medium | Medium (CLS, image search) |
| ~~A9~~ ✅ | ~~**robots.txt** — add explicit `User-agent` blocks for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` (etc.) with `Allow: /`, mirroring the `*` disallows.~~ **DONE 2026-09-04** — GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended all explicitly `Allow: /`. | Low | Low |
| ~~A10~~ ✅ | ~~**llms.txt** — add the `> description` blockquote.~~ **DONE 2026-09-04**. `llms-full.txt` still optional. | Low | Low |
| A11 | **Core Web Vitals** — re-run `scripts/pagespeed.py https://jobmi.fr --strategy mobile` (was API-rate-limited during the audit), then track field data in Search Console. Targets: LCP < 2.5s, INP < 200ms, CLS < 0.1. | Low | Diagnostic |
| A12 | **Per-article SEO pass** — run `/seo article https://jobmi.fr/blog/<slug>` on the 29 blog URLs: title/meta length, one H1, heading hierarchy, target-keyword coverage, 2+ internal links, `dateModified` freshness, answer-engine-friendly intro. | High | Medium-High |

### Optional / housekeeping
- The 12 `FAQPage` JSON-LD blocks (homepage + several articles) are valid but
  **won't produce rich results** on a commercial site (Google restriction since
  Aug 2023). No penalty — leave them, or slim the payload by removing. Keep the
  visible FAQ HTML either way (good for users + answer engines).
- Old artifacts you may want to prune: `app/page.backup.tsx`, `docs/home-page-old.tsx`,
  `seo-metadata-audit-jobmi.{csv,xlsx}`, `TODO-SEO.md`.

---

## Quick verification commands

```bash
curl -sI https://jobmi.fr | grep -iE 'server|x-frame|strict-transport'   # Vercel + headers
curl -sI https://jobmi.fr/og-image.png                                   # 200, not 404
dig +short MX jobmi.fr @8.8.8.8                                           # mx1/mx2.hostinger.com
```
