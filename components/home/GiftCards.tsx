'use client'

import { HomeGiftCard } from '@/components/home-gift-card'

const giftCards = [
  {
    title: 'Carte Cadeau Vol Découverte\n15 minutes',
    description: 'Offrez un baptême de l\'air en parapente biplace au-dessus de Saint-Leu. Le cadeau parfait pour découvrir les sensations du vol libre à La Réunion.',
    price: '90€',
    imageUrl: '/images/galerie/boitenobg.png',
    id: 'vol-decouverte-15',
  },
  {
    title: 'Carte Cadeau Vol Sunset',
    description: 'Un vol inoubliable au coucher du soleil sur l\'océan Indien. Admirez les couleurs magnifiques du ciel réunionnais depuis les airs.',
    price: '100€',
    imageUrl: '/images/galerie/boitenobg.png',
    id: 'vol-sunset',
  },
  {
    title: 'Carte Cadeau Vol Marmaille',
    description: 'Une expérience adaptée aux enfants dès 5 ans. Un vol sécurisé et ludique pour découvrir le parapente en famille.',
    price: '80€',
    imageUrl: '/images/galerie/boitenobg.png',
    id: 'vol-marmaille',
  },
]

export default function GiftCards() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50" id="cartes-cadeaux">
      <div className="w-full lg:max-w-7xl lg:mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] mb-4">
            Offrez un Vol en Parapente à La Réunion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carte cadeau parapente tandem, baptême de l'air et formation - Validité 1 an
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center">
          {giftCards.map((card) => (
            <HomeGiftCard
              key={card.id}
              title={card.title}
              description={card.description}
              price={card.price}
              imageUrl={card.imageUrl}
              buttonText="Offrir"
              buttonHref={`/tarif-carte-cadeau-parapente-reunion#${card.id}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/tarif-carte-cadeau-parapente-reunion"
            className="inline-block text-[#021157] hover:text-[#021157]/70 font-semibold text-lg hover:underline"
          >
            Voir toutes nos cartes cadeaux →
          </a>
        </div>
      </div>
    </section>
  )
}
