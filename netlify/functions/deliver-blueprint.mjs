import Stripe from "stripe";
import { getStore } from "@netlify/blobs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRODUCTS = {
  "THE OVERWORKED PROFESSIONALS AI SURVIVAL GUIDE": {
    blobKey: "overworked-professionals-ai-survival-guide.pdf",
    filename: "The-Overworked-Professionals-AI-Survival-Guide.pdf"
  },
  "THE OVERWORKED PROFESSIONAL'S AI SURVIVAL GUIDE": {
    blobKey: "overworked-professionals-ai-survival-guide.pdf",
    filename: "The-Overworked-Professionals-AI-Survival-Guide.pdf"
  },
  "AI MONEY-MAKING BLUEPRINT — 350 AI PROMPTS": {
    blobKey: "ai-money-making-blueprint-350-ai-prompts.pdf",
    filename: "AI-Money-Making-Blueprint-350-AI-Prompts.pdf"
  },
  "AI MONEY-MAKING BLUEPRINT – 350 AI PROMPTS": {
    blobKey: "ai-money-making-blueprint-350-ai-prompts.pdf",
    filename: "AI-Money-Making-Blueprint-350-AI-Prompts.pdf"
  }
};

function json(message, status) {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

export default async (request) => {
  const sessionId = new URL(request.url).searchParams.get("session_id");

  if (!sessionId || !/^cs_(live_|test_)?[A-Za-z0-9]+$/.test(sessionId)) {
    return json("Invalid checkout session.", 400);
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"]
    });
  } catch {
    return json("We couldn't verify that Stripe checkout session.", 400);
  }

  if (!session.livemode) {
    return json("This download endpoint only accepts live Stripe payments.", 403);
  }

  if (session.payment_status !== "paid") {
    return json("Payment has not been confirmed as paid yet.", 403);
  }

  const items = session.line_items?.data || [];
  if (!items.length) {
    return json("No purchased product was found on this checkout session.", 400);
  }

  if (items.length !== 1) {
    return json("This checkout contains more than one item and cannot be fulfilled automatically yet.", 403);
  }

  const product = items[0].price?.product;
  const productName = typeof product === "string" ? null : product?.name;
  const normalizedName = productName?.trim().toUpperCase();
  const productConfig = normalizedName ? PRODUCTS[normalizedName] : null;

  if (!productConfig) {
    return json("This purchase is not configured for digital delivery yet.", 403);
  }

  const store = getStore("blueprint-pdfs");
  const pdf = await store.get(productConfig.blobKey, { type: "arrayBuffer" });

  if (!pdf) {
    return json("Your payment was verified, but the PDF has not been uploaded yet.", 503);
  }

  return new Response(pdf, {
    status: 200,
    headers: {
      "content-type": "application/pdf",
      "content-disposition": `attachment; filename="${productConfig.filename}"`,
      "cache-control": "private, no-store, max-age=0",
      "x-content-type-options": "nosniff"
    }
  });
};

export const config = {
  path: "/.netlify/functions/deliver-blueprint"
};
