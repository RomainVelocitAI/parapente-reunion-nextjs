import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, formData } = body;

    // Calculer le montant total
    const totalAmount = items.reduce((sum: number, item: any) => {
      return sum + (item.price * item.quantity);
    }, 0);

    // Créer les line items pour Stripe
    const lineItems = items
      .filter((item: any) => item.selected && item.quantity > 0)
      .map((item: any) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.title,
            description: `Carte cadeau parapente - ${item.title}`,
            images: ['https://parapente-reunion.com/images/galerie/boitenobg.png'],
          },
          unit_amount: item.price * 100, // Stripe utilise les centimes
        },
        quantity: item.quantity,
      }));

    // Déterminer l'URL de base (localhost en dev, domaine réel en prod)
    const baseUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : req.nextUrl.origin;

    // Créer la session de checkout Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}/cartes-cadeaux/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cartes-cadeaux`,
      customer_email: formData.buyerEmail,
      metadata: {
        // Stocker les informations du formulaire dans les métadonnées
        buyerFirstName: formData.buyerFirstName,
        buyerLastName: formData.buyerLastName,
        buyerEmail: formData.buyerEmail,
        buyerPhone: formData.buyerPhone,
        recipientType: formData.recipientType,
        sendEmail: formData.sendEmail.toString(),
        recipientEmail: formData.recipientEmail || '',
        recipientName: formData.recipientName || '',
        message: formData.message || '',
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Erreur lors de la création de la session Stripe:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
