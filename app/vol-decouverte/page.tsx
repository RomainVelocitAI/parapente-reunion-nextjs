'use client'

import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { VolDecouverteHero } from '@/components/heroes/VolDecouverteHero'
import { VolDecouverteGallery } from '@/components/galleries/VolDecouverteGallery'

export default function VolDecouvertePage() {
  const tarifs = [
    { duree: '15-20 minutes', prix: '90€', description: 'Premier contact avec le parapente, sensations garanties' },
    { duree: '20-30 minutes', prix: '100€', description: 'Découvrez les plaisirs du vol en parapente' },
    { duree: '30-40 minutes', prix: '120€', description: 'Plus de temps pour profiter de la vue imprenable' },
    { duree: '40-50 minutes', prix: '140€', description: 'Vol confort pour admirer La Réunion depuis les airs' },
    { duree: '50-60 minutes', prix: '160€', description: 'Vol longue durée pour une expérience complète' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec Zoom Parallax */}
      <VolDecouverteHero />

      {/* Gallery Hover Carousel */}
      <VolDecouverteGallery />

      {/* Tarifs Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] text-center mb-12">
            Tarifs Vol Découverte
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tarifs.map((tarif, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-200 rounded-2xl p-6 hover:border-[#021157] hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#021157] mb-2">{tarif.prix}</div>
                  <div className="text-xl font-semibold text-gray-800 mb-3">{tarif.duree}</div>
                  <p className="text-gray-600">{tarif.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Réservation */}
          <div className="bg-gradient-to-r from-[#021157] to-blue-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à décoller ?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Réservez votre vol découverte par téléphone
            </p>
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 bg-white text-[#021157] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Réserver maintenant
            </a>
            <p className="text-white/80 mt-6 text-sm">
              Disponibilité en temps réel • Conseils personnalisés • Paiement sécurisé
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
