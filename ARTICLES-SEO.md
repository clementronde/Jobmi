# Per-article SEO pass — jobmi.fr/blog (29 articles)

**Date:** 2026-09-04
**Method:** fetched all 29 live article URLs, extracted title/meta/headings/word
count/in-body internal links/schema.

## What's already good (all 29)

- ✅ Exactly one `<h1>` per article, distinct from the `<title>` (good practice)
- ✅ `BlogPosting` + `BreadcrumbList` + `Person` (author) JSON-LD on every article
- ✅ `canonical` correct on every article
- ✅ `datePublished` / `dateModified` present
- ✅ Every article gets a curated `InternalLinksSection` + `RelatedArticles`
  block after the body (so no true orphans)

---

## Fix 1 — Meta descriptions over ~160 chars (truncated in SERP)

Trim to 150–160 chars. Source: `data/` article `metaDescription` field.

| Article | Current len | Action |
|---|---|---|
| `metiers-ia-ne-remplacera-pas-2030` | **228** | cut ~70 chars |
| `resultats-mon-master-2026` | 205 | cut ~50 |
| `comment-commencer-ta-reconversion-professionnelle` | 205 | cut ~50 |
| `parcoursup-gerer-stress-resultats` | 192 | cut ~35 |
| `nouveaux-metiers-crees-par-ia` | 179 | cut ~20 |
| `resultats-parcoursup-2026` | 172 | cut ~15 |
| `orientation-post-bac-sans-parcoursup` | 168 | cut ~10 |
| `comment-ia-booste-ton-futur-metier` | 165 | cut ~10 |
| `pmsmp-18-25-tester-metier-immersion` | 162 | borderline, trim slightly |

---

## Fix 2 — Titles over ~65 chars (incl. the " | Jobmi" suffix → truncated)

The `%s | Jobmi` template adds 8 chars. Shorten the `seoTitle` /
`articleSeoTitleOverrides` string, or for the longest ones drop the brand suffix
(`title: { absolute: '…' }`).

| Article | Full title len | Suggested |
|---|---|---|
| `resultats-mon-master-2026` | **96** | "Résultats Mon Master 2026 : aucune proposition, que faire ?" |
| `comment-trouver-le-job-de-tes-reves-a-20-ans-…` | 95 | "Trouver le job de tes rêves à 20 ans : le guide" |
| `resultats-parcoursup-2026` | 91 | "Résultats Parcoursup 2026 : en attente, refusé, sans réponse ?" |
| `reconversion-apres-une-l1` | 88 | "Réorientation après une L1 : que faire ?" |
| `pmsmp-18-25-tester-metier-immersion` | 87 | "PMSMP 18–25 ans : tester un métier en immersion" |
| `nouveaux-metiers-crees-par-ia` | 83 | "10 nouveaux métiers créés par l'IA (2026)" |
| `metiers-ia-ne-remplacera-pas-2030` | 82 | "10 métiers que l'IA ne remplacera pas d'ici 2030" |
| `parcoursup-gerer-stress-resultats` | 82 | "Parcoursup : gérer le stress des résultats" |
| `comment-commencer-ta-reconversion-professionnelle` | 80 | "Reconversion : 5 questions à te poser avant de te lancer" |
| `financer-reconversion-jeune` | 75 | "Financer sa reconversion quand on est jeune" |
| `bilan-de-competences-gratuit-guide` | 72 | "Bilan de compétences gratuit : le guide 2026" |
| `utiliser-cpf-compte-personnel-formation` | 72 | "CPF : utiliser son compte personnel de formation" |
| `orientation-post-bac-sans-parcoursup` | 71 | "Orientation post-bac sans Parcoursup : 6 options 2026" |
| `trouver-stage-reconversion-methode` | 70 | "Trouver un stage quand on se reconvertit : méthode" |

(The 63–69 char ones are borderline — optional.)

---

## Fix 3 — Thin content (< 700 words) — ✅ DONE 2026-09-04

The 7 `GenericSupportArticle` pages were expanded (~+85% each) in
`data/supportArticleContent.ts`: fuller intro, an `introNote` linking `/test`,
2–3 extra sections, a "Questions fréquentes" block, a longer checklist, and
4–8 in-body internal links each.

| Article | Words (page) before → after |
|---|---|
| `utiliser-profil-riasec-orientation` | 588 → 1086 |
| `jobshadowing-decouvrir-metier` | 589 → 1083 |
| `financer-reconversion-jeune` | 612 → 1185 |
| `mission-locale-orientation-jeune` | 620 → 1119 |
| `comment-preparer-une-immersion-metier` | 628 → 1161 |
| `que-faire-apres-le-bac-sans-idee` | 664 → 1219 |
| `erreurs-reconversion-jeune` | 698 → 1296 |

`readingTime` bumped to 6 min for all 7.

---

## Fix 4 — Add in-body contextual internal links

Footer link blocks exist, but these long articles have **0–1 contextual links**
inside the prose. Add 2–3 links from the body to a relevant pillar
(`/tester-un-metier`, `/reconversion`, `/test`, `/que-faire-apres-le-bac`) or
sibling article.

| Article | Words | In-body links |
|---|---|---|
| `metiers-ia-ne-remplacera-pas-2030` | 2994 | **0** |
| `nouveaux-metiers-crees-par-ia` | 2240 | **0** |
| `metiers-sans-diplome-qui-paient-bien` | 2369 | 3 (ok) |
| `metiers-avenir-2026-qui-recrutent` | 1214 | 1 |
| `comment-ia-booste-ton-futur-metier` | 1873 | 1 |
| `bilan-de-competences-gratuit-guide` | 1176 | 1 |
| `devenir-developpeur-web-sans-diplome` | 1087 | 1 |
| `resultats-mon-master-2026` | 2110 | 1 |

---

## Notes

- **FAQ JSON-LD** on `orientation-post-bac`, `parcoursup-gerer-stress`, `pmsmp`,
  `resultats-mon-master-2026`, `resultats-parcoursup-2026`: valid but no rich
  results on a commercial site (Google restriction). Keep the visible HTML FAQ.
- **Year in evergreen titles** (`…en 2026`, `métiers d'avenir 2026`): fine now,
  but plan a yearly refresh (title + `dateModified`) so they don't read stale in 2027.
- Time-bound articles (`resultats-parcoursup-2026`, `resultats-mon-master-2026`)
  are correctly scoped to this cycle.
