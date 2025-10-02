'use client'

import { Phone, Award, BookOpen, Users, Target } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { FormationParapenteHero } from '@/components/heroes/FormationParapenteHero'
import { FormationGallery } from '@/components/galleries/FormationGallery'
import { ShirtParallaxCard } from '@/components/shirt-parallax-card'
import { ImageAutoSlider } from '@/components/image-auto-slider'

export default function FormationParapentePage() {
  const etapes = [
    {
      titre: 'Stage découverte',
      duree: '3 à 5 jours',
      description: 'Apprentissage des bases du parapente : gonflage de la voile, décollage, vol en ligne droite et atterrissage'
    },
    {
      titre: 'Stage perfectionnement',
      duree: '5 à 10 jours',
      description: 'Techniques de pilotage avancées, exploitation des conditions aérologiques, vols en thermique'
    },
    {
      titre: 'Préparation au brevet',
      duree: 'Sur mesure',
      description: 'Formation théorique et pratique pour l obtention du brevet de pilote de parapente'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec Zoom Parallax */}
      <FormationParapenteHero />

      {/* Gallery Hover Carousel */}
      <FormationGallery />

      {/* Tarif Section - Style Cartes Cadeaux */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] text-center mb-16">
            Tarif Formation
          </h2>

          <div className="flex justify-center mb-16">
            <ShirtParallaxCard
              title="Formation Parapente"
              description="Chaque formation est adaptée à votre niveau et vos objectifs. Stage découverte, perfectionnement ou préparation brevet. Matériel pédagogique fourni."
              price="Sur devis"
              imageUrl="/images/paraglider-pixar-metis.png"
              buttonText="Demander un devis"
              buttonHref={`tel:${CONTACT.phone1}`}
              className="w-full max-w-md md:max-w-3xl"
            />
          </div>

          {/* Image Auto Slider */}
          <div className="mb-16">
            <ImageAutoSlider
              images={[
                '/images/gallery/formation-1.jpg',
                '/images/gallery/formation-2.jpg',
                '/images/gallery/formation-3.jpg',
                '/images/gallery/formation-4.jpg'
              ]}
              interval={25}
              className="bg-white rounded-2xl"
            />
          </div>

          {/* Infos Formation - Premium Card */}
          <div className="relative mb-12 max-w-4xl mx-auto">
            <div className="bg-[#021157] border border-[#021157] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              {/* Header */}
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Pourquoi se former avec nous
                </h3>
                <p className="text-white/90 text-sm">
                  Une formation de qualité dans un cadre exceptionnel
                </p>
              </div>

              {/* Content avec grille */}
              <div className="p-8 md:p-12 bg-white">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Award className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-left-3 duration-700">
                      <h4 className="font-bold text-[#021157] mb-1">Formation FFVL</h4>
                      <p className="text-sm text-gray-700">
                        Programme reconnu par la Fédération Française de Vol Libre
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Users className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-right-3 duration-700 delay-150">
                      <h4 className="font-bold text-[#021157] mb-1">Petits groupes</h4>
                      <p className="text-sm text-gray-700">
                        Encadrement personnalisé pour une progression optimale
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <BookOpen className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-left-3 duration-700 delay-300">
                      <h4 className="font-bold text-[#021157] mb-1">Théorie et pratique</h4>
                      <p className="text-sm text-gray-700">
                        Formation complète alliant cours théoriques et vols encadrés
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:border-[#021157] hover:shadow-lg transition-all duration-300 group/card">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#021157]/10 rounded-full flex items-center justify-center group-hover/card:bg-[#021157]/20 transition-colors">
                      <Target className="w-6 h-6 text-[#021157]" />
                    </div>
                    <div className="flex-1 animate-in fade-in slide-in-from-right-3 duration-700 delay-450">
                      <h4 className="font-bold text-[#021157] mb-1">Site privilégié</h4>
                      <p className="text-sm text-gray-700">
                        Saint-Leu, site mondialement reconnu pour la formation parapente
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Contact */}
          <div className="bg-white border-2 border-[#021157] rounded-2xl p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-[#021157] mb-4">
              Devenez pilote de parapente
            </h3>
            <p className="text-xl text-[#021157]/80 mb-8">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 bg-[#FFD700] text-[#021157] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#FFC700] transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Demander un devis
            </a>
            <p className="text-[#021157]/70 mt-6 text-sm">
              Formation FFVL • Certificat médical requis • Devis personnalisé gratuit
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
