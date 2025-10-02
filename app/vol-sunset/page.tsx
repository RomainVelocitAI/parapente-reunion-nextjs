'use client'

import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { VolSunsetHero } from '@/components/heroes/VolSunsetHero'
import { VolSunsetGallery } from '@/components/galleries/VolSunsetGallery'

export default function VolSunsetPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec Zoom Parallax */}
      <VolSunsetHero />

      {/* Gallery Hover Carousel */}
      <VolSunsetGallery />

      {/* Tarif Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] text-center mb-12">
            Tarif Vol Sunset
          </h2>

          <div className="max-w-md mx-auto mb-12">
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 hover:border-[#021157] hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#021157] mb-4">100€</div>
                <div className="text-xl font-semibold text-gray-800 mb-4">par personne</div>
                <p className="text-gray-600 mb-2">Vol au coucher du soleil</p>
                <p className="text-sm text-orange-600 font-semibold">Minimum 2 personnes</p>
              </div>
            </div>
          </div>

          {/* CTA Réservation */}
          <div className="bg-gradient-to-r from-[#021157] to-orange-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Réservez votre vol sunset
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Contactez-nous pour organiser votre vol au coucher du soleil
            </p>
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 bg-white text-[#021157] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Appelez pour réserver
            </a>
            <p className="text-white/80 mt-6 text-sm">
              Réservation obligatoire • Minimum 2 personnes • Horaires selon météo
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
