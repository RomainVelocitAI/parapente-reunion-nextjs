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

        // TODO: Implémenter la logique métier
        // 1. Enregistrer la commande dans la base de données
        // 2. Générer les codes de cartes cadeaux
        // 3. Envoyer l'email de confirmation avec les cartes cadeaux
        // 4. Si sendEmail === 'true', envoyer aussi au destinataire

        // Exemple de structure pour les cartes cadeaux:
        // - Générer un code unique par carte (ex: PARA-XXXX-XXXX)
        // - Créer un QR code pour chaque carte
        // - Envoyer un email avec les PDF des cartes cadeaux

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
