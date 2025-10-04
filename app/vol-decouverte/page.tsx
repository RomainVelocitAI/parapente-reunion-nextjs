'use client'

import { Phone, Wind, Mountain, Camera, Clock } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { VolDecouverteHero } from '@/components/heroes/VolDecouverteHero'
import { VolDecouverteGallery } from '@/components/galleries/VolDecouverteGallery'
import { ImageAutoSlider } from '@/components/image-auto-slider'
import { ShirtParallaxCard } from '@/components/shirt-parallax-card'
import { TarifFAQ } from '@/components/TarifFAQ'
import { faqVolDecouverte } from '@/lib/faq-data'

export default function VolDecouvertePage() {
  const durations = [
    { value: 0, label: '15-20min', price: 90, description: 'Premier contact avec le parapente, sensations garanties' },
    { value: 1, label: '20-30min', price: 100, description: 'Découvrez les plaisirs du vol en parapente' },
    { value: 2, label: '30-40min', price: 120, description: 'Plus de temps pour profiter de la vue imprenable' },
    { value: 3, label: '40-50min', price: 140, description: 'Vol confort pour admirer La Réunion depuis les airs' },
    { value: 4, label: '50-60min', price: 160, description: 'Vol longue durée pour une expérience complète' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec Zoom Parallax */}
      <VolDecouverteHero />

      {/* Gallery Hover Carousel */}
      <VolDecouverteGallery />

      {/* Tarif Section avec Slider Interactif */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] text-center mb-16">
            Tarifs Vol Découverte
          </h2>

          {/* Carte Tarif Interactive */}
          <div className="flex justify-center mb-16">
            <ShirtParallaxCard
              title="Vol Découverte"
              description="Choisissez la durée de votre vol"
              price="120€"
              imageUrl="/images/paraglider-pixar.png"
              buttonText="Réserver"
              buttonHref={`tel:${CONTACT.phone1}`}
              className="w-full max-w-md md:max-w-3xl"
              interactive={true}
              durations={durations}
            />
          </div>

          {/* Image Auto Slider */}
          <div className="mb-16">
            <ImageAutoSlider
              images={[
                '/images/galerie/vol-decouverte-slider-1.jpg',
                '/images/galerie/vol-decouverte-slider-2.jpg',
                '/images/galerie/vol-decouverte-slider-3.jpg',
                '/images/galerie/vol-decouverte-slider-4.jpg'
              ]}
              interval={25}
              className="bg-white rounded-2xl"
            />
          </div>

          {/* Infos Vol Découverte - Premium Card */}
          <div className="relative mb-12 max-w-4xl mx-auto">
            <div className="bg-[#021157] border border-[#021157] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              {/* Header */}
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  L'expérience parapente à La Réunion
                </h3>
                <p className="text-white/90 text-sm">
                  Tout ce qu'il faut savoir avant de décoller
                </p>
              </div>

              {/* Content avec grille */}
              <div className="p-8 md:p-12 bg-white">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Wind className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-left-3 duration-700">
                      <h4 className="font-bold text-[#021157] mb-1">Vol en thermique</h4>
                      <p className="text-sm text-gray-700">
                        Profitez des courants ascendants pour voler plus longtemps et plus haut
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Mountain className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-right-3 duration-700 delay-150">
                      <h4 className="font-bold text-[#021157] mb-1">Vue panoramique</h4>
                      <p className="text-sm text-gray-700">
                        Admirez le lagon, les montagnes et toute la côte ouest de La Réunion
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Camera className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-left-3 duration-700 delay-300">
                      <h4 className="font-bold text-[#021157] mb-1">Photos et vidéos</h4>
                      <p className="text-sm text-gray-700">
                        Immortalisez votre vol avec des photos et vidéos de qualité professionnelle
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Clock className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-right-3 duration-700 delay-450">
                      <h4 className="font-bold text-[#021157] mb-1">Durée flexible</h4>
                      <p className="text-sm text-gray-700">
                        Choisissez la durée de votre vol selon vos envies, de 15 à 60 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Réservation */}
          <div className="bg-white border-2 border-[#021157] rounded-2xl p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-[#021157] mb-4">
              Prêt pour l'aventure ?
            </h3>
            <p className="text-xl text-[#021157]/80 mb-8">
              Réservez votre vol découverte par téléphone
            </p>
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 bg-[#FFD700] text-[#021157] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#FFC700] transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Réserver maintenant
            </a>
            <p className="text-[#021157]/70 mt-6 text-sm">
              Disponibilité en temps réel • Conseils personnalisés • Paiement sur place
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <TarifFAQ
        faqs={faqVolDecouverte}
        title="Questions fréquentes sur le vol découverte"
        subtitle="Tout savoir sur le baptême de parapente à Saint-Leu"
        imageUrl="/images/galerie/vol-decouverte-slider-1.jpg"
      />
    </main>
  )
}
