import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'No signature found' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      );
    }

    // Traiter l'événement
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log('✅ Paiement réussi:', {
          sessionId: session.id,
          customerEmail: session.customer_email,
          amount: session.amount_total,
          metadata: session.metadata,
        });

        // Envoyer les données au webhook n8n
        try {
          const webhookData = {
            sessionId: session.id,
            paymentStatus: session.payment_status,
            amountTotal: session.amount_total ? session.amount_total / 100 : 0, // Convertir centimes en euros
            currency: session.currency,
            customerEmail: session.customer_email,
            buyerFirstName: session.metadata?.buyerFirstName || '',
            buyerLastName: session.metadata?.buyerLastName || '',
            buyerEmail: session.metadata?.buyerEmail || '',
            buyerPhone: session.metadata?.buyerPhone || '',
            recipientType: session.metadata?.recipientType || '',
            sendEmail: session.metadata?.sendEmail === 'true',
            recipientEmail: session.metadata?.recipientEmail || '',
            recipientName: session.metadata?.recipientName || '',
            message: session.metadata?.message || '',
            createdAt: new Date().toISOString(),
          };

          const n8nResponse = await fetch(
            'https://n8n.srv763918.hstgr.cloud/webhook-test/a9ebbe55-8ecd-499d-b160-cf5062caeb11',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(webhookData),
            }
          );

          if (!n8nResponse.ok) {
            console.error('❌ Erreur lors de l\'envoi au webhook n8n:', await n8nResponse.text());
          } else {
            console.log('✅ Données envoyées au webhook n8n avec succès');
          }
        } catch (error: any) {
          console.error('❌ Erreur lors de l\'appel au webhook n8n:', error.message);
        }

        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error('❌ Échec du paiement:', paymentIntent.id);

        // TODO: Notifier le client de l'échec
        break;
      }

      default:
        console.log(`Événement non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Erreur webhook:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
