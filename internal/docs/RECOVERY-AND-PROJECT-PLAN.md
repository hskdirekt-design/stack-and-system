# Stack & System — complete recovery build

Baseline: the full project archive supplied by the owner.

## Included work

- Canonical Learn / Build navigation across all root HTML pages.
- Blog and Marketplace removed from primary navigation only; their pages remain available.
- Active navigation states, including Blueprint child pages.
- Site-wide search bar and dedicated search page backed by `search-index.json`.
- Back button on non-home pages.
- Back-to-top control on long pages.
- Clean Gmail → Notion blueprint URL via `_redirects`.
- New dedicated landing page for The Overworked Professional's AI Survival Guide.
- New dedicated landing page for the AI Money-Making Blueprint.
- Products page now exposes the guide as a proper product destination.
- Existing public test Stripe checkout for the AI Money-Making Blueprint has been removed from the customer-facing CTA because no verified live payment link for that specific product was available in the project archive. The page now routes to Products rather than sending customers into Stripe test mode.
- The verified live Stripe Payment Link supplied by the owner is used only for the Overworked Professional's AI Survival Guide.
- Sitemap updated for the clean Gmail blueprint URL and the new product landing page.
- Existing page content and company/tool pages preserved.

## 3D protection

`app.js` was modified only before the existing 3D-system marker. The 3D system begins at:

`const visual = $(".hero-visual");`

The original 3D section from that marker to the end of `app.js` was preserved byte-for-byte from the supplied project archive.

`styles.css` only received scoped navigation/search/page-control styles.

## Deployment

Do not deploy until the working tree has been inspected and the affected pages have been manually checked.
