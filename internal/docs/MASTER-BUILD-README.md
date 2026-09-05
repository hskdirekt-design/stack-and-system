# Stack & System — Master Build

This is the consolidated working build for the current Stack & System website project.

## Included
- Homepage / proposition improvements
- Practical stacks and visual workflow content
- Public editorial tools directory data (`tools-data.js`)
- Search security separation from PartnerStack programme data
- Company profile pages and 323 existing logo assets
- Product storefront and Stripe Buy Buttons
- Secure Stripe purchase verification / Netlify Functions
- TikTok commercial-channel integration notes/data
- Recovered API Patterns article
- Resources hub links
- Legacy `blog.html` redirect to `api-patterns.html`
- Sitemap and robots configuration
- SEO metadata/canonical QA

## Security / editorial rule
PartnerStack marketplace/source notes and programme/commission data are not part of the public directory search dataset. Internal programme pages are marked `noindex,nofollow`.

Affiliate disclosures on genuine public partner pages remain where appropriate; those are not the same thing as exposing internal PartnerStack marketplace information.

## Deployment status
**Do not deploy yet.** Netlify deployment remains intentionally paused until the final review is approved.

## Stripe
The site contains the supplied live Stripe Buy Button IDs/public key. Secure delivery requires Netlify environment variables:
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

The two purchased PDFs must also be uploaded to the private Netlify Blobs store expected by `deliver-blueprint.mjs`.

Never put Stripe secret keys in the repository or chat.

## QA snapshot
- HTML pages: 489
- Local HTML references checked: 16,377
- Missing local HTML targets: 0
- Pages with titles: 489/489
- Pages with non-empty meta descriptions: 489/489
- Pages with canonical tags: 488/489 (the exception is the legacy redirect page `blog.html`)
- Public search records: 482
- PartnerStack/programme leakage in `tools-data.js`: none detected
- Internal PartnerStack source blocks in public HTML: none detected
- Logo assets: 323
