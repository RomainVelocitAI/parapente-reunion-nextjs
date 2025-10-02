'use client'

import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { VolMarmailleHero } from '@/components/heroes/VolMarmailleHero'
import { VolMarmailleGallery } from '@/components/galleries/VolMarmailleGallery'

export default function VolMarmaillePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec Zoom Parallax */}
      <VolMarmailleHero />

      {/* Gallery Hover Carousel */}
      <VolMarmailleGallery />


      {/* Tarif Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] text-center mb-12">
            Tarif Vol Marmaille
          </h2>

          <div className="max-w-md mx-auto mb-12">
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-[#021157] hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#021157] mb-4">80€</div>
                <div className="text-xl font-semibold text-gray-800 mb-4">par enfant</div>
                <p className="text-gray-600 mb-2">Vol adapté pour les moins de 12 ans</p>
                <p className="text-sm text-green-600 font-semibold">Encadrement spécialisé enfants</p>
              </div>
            </div>
          </div>

          {/* Infos parents */}
          <div className="bg-green-50 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#021157] mb-4 text-center">
              👨‍👩‍👧‍👦 Informations pour les parents
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Présence d un parent obligatoire lors du décollage et de l atterrissage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Autorisation parentale requise pour le vol</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Vol adapté en durée et intensité selon l âge et le confort de l enfant</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Photos et vidéos possibles pour immortaliser ce moment unique</span>
              </li>
            </ul>
          </div>

          {/* CTA Réservation */}
          <div className="bg-gradient-to-r from-[#021157] to-green-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Offrez une aventure à votre enfant
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Réservez le vol marmaille par téléphone
            </p>
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 bg-white text-[#021157] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Appelez pour réserver
            </a>
            <p className="text-white/80 mt-6 text-sm">
              Autorisation parentale requise • Moins de 12 ans • Encadrement spécialisé
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
