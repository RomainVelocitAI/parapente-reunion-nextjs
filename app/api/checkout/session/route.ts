import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'session_id manquant' },
        { status: 400 }
      );
    }

    // Récupérer les détails de la session
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'payment_intent'],
    });

    // Récupérer le payment intent pour avoir le numéro de paiement
    const paymentIntent = session.payment_intent as Stripe.PaymentIntent;

    return NextResponse.json({
      id: session.id,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_email,
      payment_status: session.payment_status,
      // Utiliser les derniers 8 caractères du payment intent comme numéro de commande
      order_number: paymentIntent?.id ? paymentIntent.id.slice(-8).toUpperCase() : session.id.slice(-8).toUpperCase(),
      line_items: session.line_items?.data || [],
      metadata: session.metadata,
    });
  } catch (error: any) {
    console.error('Erreur lors de la récupération de la session:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
