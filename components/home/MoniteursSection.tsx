'use client'

import { useState } from 'react'
import { AnimatedTeamSection } from '@/components/team-section'
import { X } from 'lucide-react'

interface Moniteur {
  name: string
  image: string
  bio: string
  specialite: string
  experience: string
}

export default function MoniteursSection() {
  const [selectedMoniteur, setSelectedMoniteur] = useState<Moniteur | null>(null)

  const teamMembers: Moniteur[] = [
    {
      name: "Pierre Dubois",
      image: "/images/galerie/vraiphoto/decouverte10.JPG",
      bio: "Passionné de vol libre depuis plus de 15 ans, Pierre est diplômé d'État et spécialisé dans les vols découverte. Son approche pédagogique et sa connaissance parfaite des spots réunionnais garantissent une expérience inoubliable en toute sécurité.",
      specialite: "Vol découverte et initiation",
      experience: "15 ans d'expérience"
    },
    {
      name: "Marie Laurent",
      image: "/images/galerie/vraiphoto/decouverte11.JPG",
      bio: "Championne régionale de parapente et monitrice certifiée, Marie allie technique et passion. Elle accompagne aussi bien les débutants que les pilotes confirmés dans leur progression.",
      specialite: "Perfectionnement et vol thermique",
      experience: "12 ans d'expérience"
    },
    {
      name: "Thomas Rivière",
      image: "/images/galerie/vraiphoto/decouverte12.JPG",
      bio: "Ancien pilote professionnel reconverti dans l'enseignement, Thomas partage son expertise avec enthousiasme. Spécialiste des vols panoramiques, il connaît tous les secrets des courants aériens de l'île.",
      specialite: "Vols panoramiques et cross",
      experience: "18 ans d'expérience"
    },
    {
      name: "Sophie Martin",
      image: "/images/galerie/vraiphoto/decouverte13.JPG",
      bio: "Diplômée d'État et passionnée de photographie aérienne, Sophie propose des expériences uniques alliant vol et immortalisation des plus beaux paysages réunionnais.",
      specialite: "Vol photo et sensations",
      experience: "10 ans d'expérience"
    },
    {
      name: "Alexandre Chen",
      image: "/images/galerie/vraiphoto/decouverte14.JPG",
      bio: "Expert en sécurité et en conditions météorologiques tropicales, Alexandre forme également de futurs moniteurs. Sa rigueur et son professionnalisme rassurent même les plus anxieux.",
      specialite: "Formation et sécurité",
      experience: "20 ans d'expérience"
    }
  ]

  const handleMemberClick = (member: Moniteur) => {
    setSelectedMoniteur(member)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedMoniteur(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section className="bg-white py-20">
        <div onClick={(e) => {
          const target = e.target as HTMLElement
          if (target.tagName === 'IMG') {
            const imgSrc = target.getAttribute('src')
            const member = teamMembers.find(m => m.image === imgSrc)
            if (member) {
              handleMemberClick(member)
            }
          }
        }}>
          <AnimatedTeamSection
            title="Nos Moniteurs Diplômés"
            description="Une équipe de professionnels passionnés, diplômés d'État et certifiés, qui vous accompagnent pour des vols en toute sécurité au-dessus des plus beaux paysages de La Réunion"
            members={teamMembers}
          />
        </div>
      </section>

      {/* Modal de présentation du moniteur */}
      {selectedMoniteur && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-[#FFD700] transition-colors z-[10000]"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Photo du moniteur */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <img
                  src={selectedMoniteur.image}
                  alt={selectedMoniteur.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Informations du moniteur */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#021157] mb-2 font-pacifico">
                  {selectedMoniteur.name}
                </h2>

                <div className="mb-6 space-y-2">
                  <p className="text-[#FFD700] font-semibold text-lg">
                    {selectedMoniteur.specialite}
                  </p>
                  <p className="text-[#021157]/70 font-medium">
                    {selectedMoniteur.experience}
                  </p>
                </div>

                <p className="text-[#021157]/80 leading-relaxed text-base md:text-lg mb-6">
                  {selectedMoniteur.bio}
                </p>

                <button
                  onClick={closeModal}
                  className="self-start px-6 py-3 bg-[#021157] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
