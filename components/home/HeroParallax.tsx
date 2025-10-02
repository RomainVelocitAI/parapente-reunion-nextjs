'use client'

import { motion } from 'framer-motion'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function HeroParallax() {
  return (
    <ParallaxProvider>
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Image avec Parallax */}
        <Parallax speed={-20} className="absolute inset-0 z-0">
          <div className="relative w-full h-[120vh]">
            <Image
              src="/images/hero/saint-leu-la-reunion.webp"
              alt="Parapente Saint-Leu La Réunion"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>
        </Parallax>

        {/* Contenu Hero */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-white"
          >
            {/* Badge "Depuis 1990" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-6"
            >
              <span className="bg-sky-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Première école de parapente depuis 1990
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Des sensations{' '}
              <span className="text-sky-400">inoubliables</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              Survolez le lagon turquoise de Saint-Leu en parapente biplace
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => window.location.href = '#tarifs'}
              >
                Je réserve mon vol
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#021157] text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300"
                onClick={() => window.location.href = `tel:${CONTACT.phone1}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </Button>
            </motion.div>

            {/* Infos rapides */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 flex flex-wrap gap-6 text-sm text-gray-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full" />
                <span>300 jours de vol par an</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full" />
                <span>12 moniteurs diplômés d'État</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full" />
                <span>3 générations de pilotes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicateur scroll */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-sm font-medium">Découvrir</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>
    </ParallaxProvider>
  )
}
