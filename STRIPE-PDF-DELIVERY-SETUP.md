# Stripe PDF Delivery — Stack & System

This package adds the small server-side layer needed to deliver the two paid PDFs securely while keeping the site primarily static.

## 1. Files to add

Copy these into the root of the repository:

- `blueprint-download.html`
- `netlify.toml`
- `package.json`
- `netlify/functions/deliver-blueprint.mjs`
- `netlify/functions/stripe-webhook.mjs`

Do NOT add your PDFs to GitHub. Store them privately in Netlify Blobs only.

## 2. Stripe redirect

For BOTH live Stripe Buy Buttons / Payment Links, use the same After payment URL:

`https://hskdirect.co.uk/blueprint-download.html?session_id={CHECKOUT_SESSION_ID}`

Stripe replaces `{CHECKOUT_SESSION_ID}` with the completed Checkout Session ID.

Do not use `?product=...`. The server determines which product was purchased from Stripe.

## 3. Netlify secrets

In Netlify:

Project configuration → Environment variables

Create:

- `STRIPE_SECRET_KEY` = your LIVE `sk_live_...` secret key
- `STRIPE_WEBHOOK_SECRET` = the `whsec_...` signing secret for your Stripe webhook

Keep both variables available to Functions.

NEVER put either secret in HTML, JavaScript, GitHub, or the repository.

## 4. Stripe webhook

Create a Stripe webhook endpoint:

`https://hskdirect.co.uk/.netlify/functions/stripe-webhook`

Listen for:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`

Copy the endpoint's signing secret into Netlify as `STRIPE_WEBHOOK_SECRET`.

## 5. Store the PDFs privately

The delivery function expects a private Netlify Blobs store called:

`blueprint-pdfs`

with these exact keys:

`overworked-professionals-ai-survival-guide.pdf`

`ai-money-making-blueprint-350-ai-prompts.pdf`

Netlify Blobs keeps the objects out of the public static site. The function retrieves them only after verifying the Stripe session.

## 6. Upload the PDFs

Install Netlify CLI once:

`npm install -g netlify-cli`

Log in:

`netlify login`

From your repository folder, link the local folder to your existing Netlify site if needed:

`netlify link`

Then upload the first PDF:

`netlify blobs:set blueprint-pdfs overworked-professionals-ai-survival-guide.pdf --input "C:\PATH\TO\YOUR\OVERWORKED-PROFESSIONALS-AI-SURVIVAL-GUIDE.pdf"`

Upload the second:

`netlify blobs:set blueprint-pdfs ai-money-making-blueprint-350-ai-prompts.pdf --input "C:\PATH\TO\YOUR\AI-MONEY-MAKING-BLUEPRINT-350-AI-PROMPTS.pdf"`

Check the store:

`netlify blobs:list blueprint-pdfs`

Netlify Blobs supports file-backed `blobs:set` uploads and private server-side access.

## 7. Deploy

Commit the new code to `main` and push it.

Netlify will deploy the static page and Functions.

## 8. Test

Do NOT test with a real £14.99 or £29.99 payment until the complete flow is deployed.

After deployment:

1. Open the live Blueprints page.
2. Click the real Stripe Buy Button.
3. Complete a real purchase only when you're ready to test the live flow.
4. Stripe redirects to `blueprint-download.html?session_id=...`.
5. The page sends the session ID to the Netlify Function.
6. The Function asks Stripe for the session.
7. It requires a LIVE session and `payment_status === "paid"`.
8. It identifies the purchased product.
9. It retrieves the matching private PDF from Netlify Blobs.
10. The browser receives the PDF as a download.

## Security model

The PDF is not linked as:

`https://hskdirect.co.uk/my-ebook.pdf`

A visitor cannot simply guess the PDF URL because there is no public PDF URL.

The server verifies the Stripe Checkout Session before returning the file.

The Stripe secret key remains server-side in Netlify environment variables.

Stripe also recommends using webhooks for reliable fulfilment and using the post-payment redirect to give the customer immediate access after checkout.
