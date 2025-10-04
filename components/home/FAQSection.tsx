'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Combien coûte un baptême de parapente à la Réunion ?",
    answer: "Nos tarifs varient selon la durée de vol : Vol Découverte (15-20 min) à partir de 90€, Vol Sensation (25-30 min) à 120€, ou notre Vol Sunset à 100€. Pour les plus jeunes, nous proposons un forfait Enfant dès 80€. Tout est inclus : équipement complet, votre moniteur diplômé d'État et l'assurance."
  },
  {
    question: "Où faire du parapente à la Réunion ?",
    answer: "Saint-Leu est LE site de référence pour le parapente à La Réunion 974. Notre école professionnelle vous propose des vols tandem depuis le site des Colimaçons (800m d'altitude) avec survol du lagon turquoise. Saint-Leu accueille même la Coupe du Monde de parapente !"
  },
  {
    question: "Quelle est la meilleure période pour faire du parapente à la Réunion ?",
    answer: "Vous pouvez voler en parapente toute l'année à La Réunion ! Les conditions sont excellentes 300 jours par an. La période avril-novembre offre des conditions optimales pour votre vol tandem parapente, avec des vents favorables et un ciel dégagé au-dessus de Saint-Leu."
  },
  {
    question: "Quel âge pour faire du parapente à la Réunion ?",
    answer: "Le baptême de parapente est accessible dès 5 ans (poids minimum 20kg) avec notre forfait Enfant spécial. Les mineurs doivent être accompagnés d'un adulte. Pas d'âge maximum tant que la condition physique permet de courir quelques pas au décollage pour votre vol tandem à Saint-Leu."
  },
  {
    question: "Comment se passe un baptême de parapente ?",
    answer: "Votre expérience de vol parapente Saint-Leu se déroule en 5 étapes : accueil au club avec briefing sécurité, montée panoramique en 4x4 aux Colimaçons (800m), décollage en douceur pour un vol tandem de 15 à 40 minutes au-dessus du lagon turquoise, photos et vidéos aériennes durant le vol, puis atterrissage sur la plage de Saint-Leu."
  },
  {
    question: "Faut-il réserver à l'avance pour le parapente ?",
    answer: "La réservation est fortement recommandée pour garantir votre créneau de vol parapente Réunion. Contactez-nous au 0692 82 92 92 ou 0262 24 87 84. Les vols dépendent des conditions météo, nous vous confirmons le jour J. Réservez votre baptême de parapente à Saint-Leu dès maintenant !"
  },
  {
    question: "Quelle durée pour un vol de parapente ?",
    answer: "La durée du vol tandem parapente varie selon la formule choisie : Vol Découverte 15-20 minutes, Vol Sensation 25-30 minutes, ou Vol Sunset jusqu'à 40 minutes. Comptez environ 1h30 pour l'expérience complète incluant le briefing, la montée aux Colimaçons et le vol au-dessus du lagon de Saint-Leu."
  },
  {
    question: "Le parapente est-il dangereux à la Réunion ?",
    answer: "Le parapente biplace Réunion est une activité très sécurisée. Nos 12 moniteurs diplômés d'État ont des milliers d'heures de vol. Nous utilisons du matériel homologué dernière génération et volons uniquement dans des conditions météo optimales. Saint-Leu est un site de renommée mondiale avec des conditions de vol exceptionnelles."
  },
  {
    question: "Que faut-il apporter pour un vol de parapente ?",
    answer: "Pour votre baptême de parapente à La Réunion, prévoyez : des baskets fermées, des vêtements confortables adaptés à la météo, de la crème solaire et des lunettes de soleil. Tout l'équipement de vol (sellette, casque, voile) est fourni par notre école parapente Saint-Leu. N'oubliez pas votre appareil photo pour immortaliser l'expérience !"
  },
  {
    question: "Peut-on voler en parapente toute l'année à la Réunion ?",
    answer: "Oui ! Le climat tropical de La Réunion 974 permet de pratiquer le parapente 300 jours par an à Saint-Leu. L'ouest de l'île bénéficie d'un microclimat ensoleillé et sec, idéal pour les vols tandem. Seules les journées de vent trop fort ou de pluie intense sont déconseillées pour garantir votre sécurité en vol."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/galerie/vraiphoto/decouverte1.JPG"
                alt="Vol tandem parapente au-dessus du lagon de Saint-Leu, La Réunion 974"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* FAQ Content */}
          <div className="w-full lg:w-7/12">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-[#FFD700]/20 text-[#021157] rounded-full text-sm font-semibold mb-4">
                Questions Fréquentes
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#021157] mb-4">
                Tout Savoir sur le Parapente à La Réunion
              </h2>
              <p className="text-lg text-slate-600">
                Retrouvez toutes les réponses à vos questions sur le baptême de parapente à Saint-Leu.
                Vol tandem, tarifs, sécurité, conditions météo : nos moniteurs diplômés répondent à vos interrogations.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-slate-200 pb-3 cursor-pointer transition-all duration-300 hover:border-[#FFD700]"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between py-4">
                    <h3 className="text-base md:text-lg font-semibold text-[#021157] pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#021157] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'opacity-100 max-h-[400px] pb-4'
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-600 mb-4">
                Une autre question sur votre vol parapente à Saint-Leu ?
              </p>
              <a
                href="tel:+262692829292"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#021157] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contactez nos moniteurs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
