'use client'

import { Phone, Sunset, Heart, Star, Users } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { VolSunsetHero } from '@/components/heroes/VolSunsetHero'
import { VolSunsetGallery } from '@/components/galleries/VolSunsetGallery'
import { ShirtParallaxCard } from '@/components/shirt-parallax-card'
import { ImageAutoSlider } from '@/components/image-auto-slider'

export default function VolSunsetPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec Zoom Parallax */}
      <VolSunsetHero />

      {/* Gallery Hover Carousel */}
      <VolSunsetGallery />

      {/* Tarif Section - Style Cartes Cadeaux */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] text-center mb-16">
            Tarif Vol Sunset
          </h2>

          <div className="flex justify-center mb-16">
            <ShirtParallaxCard
              title="Vol Sunset"
              description="Vivez un coucher de soleil magique en vol biplace au-dessus de l'océan Indien. Minimum 2 personnes pour cette expérience inoubliable."
              price="100€"
              imageUrl="/images/paraglider-pixar.png"
              buttonText="Réserver"
              buttonHref={`tel:${CONTACT.phone1}`}
              className="w-full max-w-md md:max-w-3xl"
            />
          </div>

          {/* Image Auto Slider */}
          <div className="mb-16">
            <ImageAutoSlider
              images={[
                '/images/galerie/vol-sunset-slider-1.jpg',
                '/images/galerie/vol-sunset-slider-2.jpg',
                '/images/galerie/vol-sunset-slider-3.jpg',
                '/images/galerie/vol-sunset-slider-4.jpg'
              ]}
              interval={25}
              className="bg-white rounded-2xl"
            />
          </div>

          {/* Infos Vol Sunset - Premium Card */}
          <div className="relative mb-12 max-w-4xl mx-auto">
            <div className="bg-[#021157] border border-[#021157] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              {/* Header */}
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Une expérience romantique unique
                </h3>
                <p className="text-white/90 text-sm">
                  Le vol idéal pour un moment magique à deux
                </p>
              </div>

              {/* Content avec grille */}
              <div className="p-8 md:p-12 bg-white">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Sunset className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-left-3 duration-700">
                      <h4 className="font-bold text-[#021157] mb-1">Lumière dorée</h4>
                      <p className="text-sm text-gray-700">
                        Admirez les couleurs incroyables du coucher de soleil sur l'océan Indien
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Heart className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-right-3 duration-700 delay-150">
                      <h4 className="font-bold text-[#021157] mb-1">Moment romantique</h4>
                      <p className="text-sm text-gray-700">
                        Idéal pour une demande en mariage ou un moment privilégié en couple
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Star className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-left-3 duration-700 delay-300">
                      <h4 className="font-bold text-[#021157] mb-1">Photos exceptionnelles</h4>
                      <p className="text-sm text-gray-700">
                        Des photos et vidéos dans une ambiance magique et des couleurs uniques
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Users className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-right-3 duration-700 delay-450">
                      <h4 className="font-bold text-[#021157] mb-1">Vol en groupe</h4>
                      <p className="text-sm text-gray-700">
                        Minimum 2 personnes pour partager cette expérience inoubliable
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
              Vivez un coucher de soleil d'exception
            </h3>
            <p className="text-xl text-[#021157]/80 mb-8">
              Réservez votre vol sunset par téléphone
            </p>
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 bg-[#FFD700] text-[#021157] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#FFC700] transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Réserver maintenant
            </a>
            <p className="text-[#021157]/70 mt-6 text-sm">
              Réservation obligatoire • Minimum 2 personnes • Horaires selon météo
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
