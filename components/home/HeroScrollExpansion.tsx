'use client'

import ScrollExpandMedia from '@/components/scroll-expansion-hero'
import { Button } from '@/components/ui/button'
import { Calendar, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import Image from 'next/image'

export default function HeroScrollExpansion() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="https://cdn.shopify.com/videos/c/o/v/f2b6ac3856934cd3921cb4606fef3514.mp4"
      bgImageSrc="/images/hero/saint-leu-la-reunion.webp"
      title={
        <Image
          src="/images/logos/Logo_Parapente_Reunion.png"
          alt="Parapente Réunion"
          width={400}
          height={150}
          className="max-w-[90vw]"
          priority
        />
      }
      scrollToExpand="Scroll pour découvrir"
      textBlend={true}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section principale */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#021157]">
            Des sensations inoubliables au-dessus du lagon
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vivez l'expérience unique du parapente en biplace à Saint-Leu, La Réunion.
            Survolez le lagon turquoise avec nos moniteurs diplômés d'État.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              asChild
            >
              <a href={`tel:${CONTACT.phone1}`}>
                <Phone className="mr-2 h-5 w-5" />
                Réserver maintenant
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
              asChild
            >
              <a href="#tarifs">
                <Calendar className="mr-2 h-5 w-5" />
                Voir les tarifs
              </a>
            </Button>
          </div>
        </div>

        {/* Badges confiance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
            <div className="text-gray-700 font-medium">Jours de vol par an</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-700 font-medium">Moniteurs diplômés</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-700 font-medium">Générations de passionnés</div>
          </div>
        </div>

        {/* Badge avec logo */}
        <div className="text-center pt-6">
          <div className="inline-block px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
            <Image
              src="/images/logos/Logo_Parapente_Reunion.png"
              alt="Parapente Réunion"
              width={250}
              height={80}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </ScrollExpandMedia>
  )
}
