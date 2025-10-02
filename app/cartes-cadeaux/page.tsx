'use client'

import { ShirtParallaxCard } from '@/components/shirt-parallax-card'

const giftCardsData = [
  {
    id: 'vol-decouverte-15',
    title: 'Vol Découverte 15min',
    price: '90€',
    image: '/images/produits/carte.png',
    description: 'Le baptême de l\'air en parapente est le cadeau parfait pour découvrir les sensations du vol libre. Décollage depuis Saint-Leu avec un moniteur diplômé d\'État pour une vue panoramique sur l\'océan Indien et les paysages volcaniques de La Réunion.',
  },
  {
    id: 'vol-decouverte-20',
    title: 'Vol Découverte 20min',
    price: '100€',
    image: '/images/produits/carte.png',
    description: 'Un vol découverte de 20 minutes pour profiter pleinement des sensations. Cette durée permet d\'explorer davantage les airs et de s\'imprégner totalement de l\'expérience du parapente biplace avec quelques évolutions supplémentaires.',
  },
  {
    id: 'vol-decouverte-30',
    title: 'Vol Découverte 30min',
    price: '120€',
    image: '/images/produits/carte.png',
    description: 'Le vol de 30 minutes offre une immersion totale. Le moniteur pourra vous faire découvrir différentes techniques de vol, chercher les ascendances thermiques et vous offrir une vue panoramique complète de la côte ouest réunionnaise.',
  },
  {
    id: 'vol-decouverte-40',
    title: 'Vol Découverte 40min',
    price: '140€',
    image: '/images/produits/carte.png',
    description: 'Un vol prolongé pour une expérience encore plus intense. 40 minutes dans les airs pour explorer pleinement le ciel réunionnais, jouer avec les thermiques et profiter d\'une liberté totale au-dessus de l\'océan Indien.',
  },
  {
    id: 'vol-decouverte-50',
    title: 'Vol Découverte 50min',
    price: '160€',
    image: '/images/produits/carte.png',
    description: 'Le vol le plus long pour les passionnés. Près d\'une heure de vol pour une découverte complète du parapente, des techniques de pilotage et des paysages exceptionnels de La Réunion vus du ciel.',
  },
  {
    id: 'vol-sunset',
    title: 'Vol Sunset',
    price: '100€',
    image: '/images/produits/carte.png',
    description: 'Un vol inoubliable au coucher du soleil. Décollage en fin d\'après-midi pour admirer les teintes orangées et dorées du ciel réunionnais. L\'océan Indien s\'illumine sous les derniers rayons - un spectacle époustouflant depuis les airs.',
  },
  {
    id: 'vol-marmaille',
    title: 'Vol Marmaille',
    price: '80€',
    image: '/images/produits/carte.png',
    description: 'Une expérience spécialement adaptée aux enfants dès 5 ans. Vol sécurisé et ludique avec approche pédagogique pour découvrir le parapente en famille. Équipement adapté à la morphologie des enfants avec moniteurs spécialisés.',
  },
]

export default function CartesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#021157] mb-6">
            Cartes Cadeaux Parapente Réunion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Offrez une expérience inoubliable dans le ciel réunionnais. Baptême de l'air, vol sunset ou vol marmaille - Le cadeau parfait pour tous les âges.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              ✓ Validité 1 an
            </span>
            <span className="flex items-center gap-2">
              ✓ Envoi immédiat par email
            </span>
            <span className="flex items-center gap-2">
              ✓ Code unique personnalisé
            </span>
            <span className="flex items-center gap-2">
              ✓ Paiement sécurisé
            </span>
          </div>
        </div>
      </section>

      {/* Gift Cards Grid - Asymmetric Layout */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {giftCardsData.map((card, index) => (
              <div
                key={card.id}
                id={card.id}
                className={`${
                  index % 2 === 0 ? 'lg:justify-self-start' : 'lg:justify-self-end'
                }`}
              >
                <div className="mb-6 max-w-md">
                  <ShirtParallaxCard
                    title={card.title}
                    description=""
                    price={card.price}
                    imageUrl={card.image}
                    buttonText="Offrir"
                    buttonHref="#"
                    className="w-full"
                  />
                </div>
                <div className="max-w-md px-4">
                  <p className="text-gray-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une question sur nos cartes cadeaux ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Notre équipe est à votre disposition pour vous conseiller
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+262692829292"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
            >
              📞 +262 692 82 92 92
            </a>
            <a
              href="mailto:info@parapente-reunion.fr"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
            >
              ✉️ Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
