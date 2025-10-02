'use client'

import { ContainerScroll, ContainerInset, ContainerStagger, ContainerAnimated } from '@/components/hero-video'
import { Button } from '@/components/ui/button'
import { Calendar, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import FloatingParagliders from './FloatingParagliders'
import Image from 'next/image'

export default function HeroVideo() {
  return (
    <div className="bg-white">
      <FloatingParagliders />

      {/* Hero Header */}
      <div className="relative mx-auto max-w-7xl px-4 pt-20">
        <div className="mb-8 space-y-6 text-center">
          <div className="flex justify-center">
            <Image
              src="/images/logos/Logo_Parapente_Reunion.png"
              alt="Parapente Réunion"
              width={150}
              height={50}
              className="max-w-[90vw]"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#021157]">
            Des sensations inoubliables
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide font-medium">
            EN PRENANT DE LA HAUTEUR
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 shadow-lg shadow-blue-600/30"
              asChild
            >
              <a href={`tel:${CONTACT.phone1}`}>
                <Phone className="mr-2 h-5 w-5" />
                Appelez-nous
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600/50 bg-white/90 text-blue-700 hover:bg-white hover:border-blue-600 px-8 backdrop-blur-sm"
              asChild
            >
              <a href="#tarifs">
                <Calendar className="mr-2 h-5 w-5" />
                Je réserve mon vol
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Vidéo avec effet scroll */}
      <ContainerScroll>
        <div className="mx-auto max-w-7xl px-4 pt-8">
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
    </div>
  )
}
