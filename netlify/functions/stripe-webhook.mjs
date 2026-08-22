import Stripe from "stripe";
import { getStore } from "@netlify/blobs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (request) => {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return new Response("Webhook configuration missing.", { status: 500 });
  }

  const body = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return new Response("Invalid Stripe signature.", { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object;

    if (session.payment_status === "paid") {
      const store = getStore("blueprint-orders");
      await store.setJSON(session.id, {
        sessionId: session.id,
        customerEmail: session.customer_details?.email || session.customer_email || null,
        paidAt: new Date().toISOString(),
        livemode: session.livemode === true
      });
    }
  }

  return new Response("ok", { status: 200 });
};

export const config = {
  path: "/.netlify/functions/stripe-webhook"
};
