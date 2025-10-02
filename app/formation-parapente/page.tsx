'use client'

import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { FormationParapenteHero } from '@/components/heroes/FormationParapenteHero'
import { FormationGallery } from '@/components/galleries/FormationGallery'

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

      {/* Étapes de formation */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#021157] text-center mb-8">
              Les étapes de votre progression
            </h3>
            <div className="space-y-6">
              {etapes.map((etape, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:border-[#021157] hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-[#021157] font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#021157] mb-2">{etape.titre}</h4>
                      <p className="text-sm text-purple-600 font-semibold mb-2">{etape.duree}</p>
                      <p className="text-gray-700">{etape.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Points forts */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#021157]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Certification officielle</h3>
              <p className="text-gray-600">Formation reconnue FFVL</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#021157]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Petits groupes</h3>
              <p className="text-gray-600">Encadrement personnalisé</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#021157]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Site exceptionnel</h3>
              <p className="text-gray-600">Saint-Leu, spot réputé mondialement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarif Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] text-center mb-12">
            Tarifs Formation
          </h2>

          <div className="max-w-md mx-auto mb-12">
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-[#021157] hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#021157] mb-4">Sur devis</div>
                <div className="text-xl font-semibold text-gray-800 mb-4">Tarifs personnalisés</div>
                <p className="text-gray-600 mb-4">
                  Chaque formation est adaptée à votre niveau et vos objectifs. Contactez-nous pour
                  établir un programme sur mesure et obtenir un devis détaillé.
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Stage découverte : 3 à 5 jours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Stage perfectionnement : 5 à 10 jours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Préparation brevet : durée adaptée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Matériel pédagogique fourni</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Infos pratiques */}
          <div className="bg-purple-50 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#021157] mb-4 text-center">
              📋 Informations pratiques
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Certificat médical de non contre-indication à la pratique du parapente obligatoire</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Assurance responsabilité civile incluse pendant la formation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Matériel pédagogique et voile d école fournis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Formation théorique et pratique selon programme FFVL</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Possibilité de stages intensifs ou étalés selon disponibilités</span>
              </li>
            </ul>
          </div>

          {/* CTA Contact */}
          <div className="bg-gradient-to-r from-[#021157] to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Démarrez votre formation
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 bg-white text-[#021157] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Appelez pour un devis
            </a>
            <p className="text-white/80 mt-6 text-sm">
              Formation FFVL • Certificat médical requis • Devis personnalisé gratuit
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
