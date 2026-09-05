# Infrastructure — jobmi.fr

_Last verified: 2026-09-05_

## Hosting

| Layer | Provider | Notes |
|---|---|---|
| App hosting | **Vercel** (project `jobmi`, team `clementrondes-projects`) | Next.js 16, Node **24.x**. Auto-deploys on push to `master`. |
| Domain registrar | **Hostinger** | `.fr` registration only. Annual renewal — keep the account alive. |
| DNS | **Vercel** (nameserver-managed) | Nameservers `ns1.vercel-dns.com` / `ns2.vercel-dns.com`. Manage records in Vercel → Project `jobmi` → Settings → Domains. |
| Email (`@jobmi.fr`) | **Hostinger Email** | Vercel does not do email — it only holds the MX records pointing to Hostinger. |
| TLS certificate | Vercel (Let's Encrypt, auto-renew ~every 90 days) | Do **not** manage manually. |

## DNS records (Vercel zone)

| Type | Name | Value | Purpose |
|---|---|---|---|
| A | `@` | `216.198.79.65`, `64.29.17.65` | Apex → Vercel (Vercel-managed, values may rotate) |
| A / ALIAS | `www` | Vercel | `www` → 308 redirect to apex |
| MX | `@` | `mx1.hostinger.com` (5), `mx2.hostinger.com` (10) | Email |
| TXT | `@` | `v=spf1 include:_spf.mail.hostinger.com ~all` | Email SPF |
| TXT | `_dmarc` | `v=DMARC1; p=none` | Email DMARC |
| CNAME | `autoconfig` | `autoconfig.mail.hostinger.com` | Mail client autoconfig |
| CNAME | `autodiscover` | `autodiscover.mail.hostinger.com` | Mail client autoconfig |
| CNAME | `hostingermail-a._domainkey` | `hostingermail-a.dkim.mail.hostinger.com` | Email DKIM |
| CNAME | `hostingermail-b._domainkey` | `hostingermail-b.dkim.mail.hostinger.com` | Email DKIM |
| CNAME | `hostingermail-c._domainkey` | `hostingermail-c.dkim.mail.hostinger.com` | Email DKIM |

### ⚠️ Missing after the 2026-09 nameserver migration

The 3 `google-site-verification=…` TXT records on `@` were **not** re-added to
the Vercel zone. If the Google Search Console property for `jobmi.fr` was
verified by DNS TXT, it may now show as **unverified**. Old values:

```
google-site-verification=mHgoWudGomnAzf60dshX22sYXgJV0WfKzkxFgvU5Rlg
google-site-verification=2JzPb1bZEQTMHGyR9kbt6P1nS5r7ElSeT-H9dfuLW5s
google-site-verification=Z2pPM2jsg0fsxYcDIWXEVaCKrKO0n8h_RBK6tzP7RRo
```

Re-add whichever one Search Console still expects (or re-verify via the HTML
file / meta tag method).

## History

- **2024-07-15** — domain added to Vercel, but nameservers left on Hostinger
  parking (`ns1/ns2.dns-parking.com`). Split-brain DNS.
- **2024-08-31** — old Hostinger Let's Encrypt cert expired. Went unnoticed.
- **2026-09-02/03** — diagnosed: apex served a Hostinger "Page par défaut" over
  the 2-year-expired cert. Nameservers switched to Vercel. Multi-hour global
  outage while the Vercel DNS zone activated. Email records had to be
  re-created by hand (they don't migrate with the nameserver change).
- **2026-09-03** — Node.js bumped 20.x → 24.x (20.x EOL 2026-10-01).

## If the site goes down again — quick triage

```bash
curl -sI https://jobmi.fr | grep -i server        # expect: server: Vercel
dig +short NS jobmi.fr @8.8.8.8                    # expect: ns1/ns2.vercel-dns.com
dig +short MX jobmi.fr @8.8.8.8                    # expect: mx1/mx2.hostinger.com
echo | openssl s_client -servername jobmi.fr -connect jobmi.fr:443 2>/dev/null \
  | openssl x509 -noout -dates                     # notAfter must be in the future
vercel domains inspect jobmi.fr                    # Vercel's view of the domain
```

- `server:` is **not** Vercel → DNS problem (records or nameservers).
- Cert expired → almost always a DNS problem preventing Vercel from renewing.
- Everything green but pages 500 → check the latest deployment in Vercel.
