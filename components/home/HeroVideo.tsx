'use client'

import { ContainerScroll, ContainerInset, ContainerStagger, ContainerAnimated } from '@/components/hero-video'
import { Button } from '@/components/ui/button'
import { Calendar, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import FloatingParagliders from './FloatingParagliders'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroVideo() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="bg-white">
      <FloatingParagliders />

      {/* Hero Header */}
      <div className="relative w-full lg:max-w-7xl lg:mx-auto px-4 pt-32">
        <div className="mb-4 md:mb-8 space-y-6 text-center">
          <div className="flex justify-center">
            <Image
              src="/images/logos/Logo_Parapente_Reunion.png"
              alt="Parapente Réunion - École de parapente Saint-Leu"
              width={150}
              height={50}
              className="max-w-[90vw]"
              priority
              fetchPriority="high"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#021157]">
            Baptême Parapente Réunion | Vol Tandem Saint-Leu
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide font-medium">
            EN PRENANT DE LA HAUTEUR
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#021157] font-semibold px-6 sm:px-8 min-h-[48px] shadow-lg transition-all duration-300"
              asChild
            >
              <a href={`tel:${CONTACT.phone1}`} className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Appelez-nous
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#021157] bg-white/90 text-[#021157] hover:bg-[#021157] hover:text-white px-6 sm:px-8 min-h-[48px] backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1+Rue+Georges+Pompidou,+Saint-Leu+97436,+La+Réunion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Venir sur place
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Vidéo avec effet scroll */}
      {isMobile ? (
        // Version mobile : vidéo simple sans effet parallax
        <div className="w-full lg:max-w-7xl lg:mx-auto px-4 pb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/f2b6ac3856934cd3921cb4606fef3514.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
          </div>
        </div>
      ) : (
        // Version desktop : effet parallax complet
        <ContainerScroll>
          <div className="w-full lg:max-w-7xl lg:mx-auto px-4 pt-8">
            <ContainerInset
              translateYRange={["-25%", "50%"]}
              insetYRange={[35, 0]}
              insetXRange={[30, 0]}
              roundednessRange={[1000, 16]}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
                <video
                  src="https://cdn.shopify.com/videos/c/o/v/f2b6ac3856934cd3921cb4606fef3514.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
              </div>
            </ContainerInset>
          </div>
        </ContainerScroll>
      )}
    </div>
  )
}
