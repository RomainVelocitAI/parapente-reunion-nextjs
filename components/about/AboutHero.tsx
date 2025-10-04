"use client"

import React from "react"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

const images = [
  "/images/galerie/vraiphoto/decouverte1.JPG",
  "/images/galerie/vraiphoto/decouverte2.JPG",
  "/images/galerie/vraiphoto/decouverte3.JPG",
  "/images/galerie/vraiphoto/decouverte4.JPG",
  "/images/galerie/vraiphoto/decouverte5.JPG",
  "/images/galerie/vraiphoto/decouverte7.JPG",
  "/images/galerie/vraiphoto/decouverte9.JPG",
  "/images/galerie/vraiphoto/decouverte10.JPG",
  "/images/galerie/vraiphoto/decouverte11.JPG",
  "/images/galerie/vraiphoto/decouverte12.JPG",
  "/images/galerie/vraiphoto/decouverte13.JPG",
  "/images/galerie/vraiphoto/decouverte14.JPG",
  "/images/galerie/vraiphoto/decouverte15.JPG",
  "/images/galerie/vraiphoto/decouverte16.JPG",
  "/images/galerie/vraiphoto/marmaille1.JPG",
]

export default function AboutHero() {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  }

  const duplicatedImages = [...images, ...images]

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-center text-center px-4">
      <div className="z-10 flex flex-col items-center">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border-2 border-[#FFD700] bg-[#FFD700] px-6 py-2 text-sm font-semibold text-[#021157] backdrop-blur-sm"
        >
          Depuis 1990
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-[#021157]"
        >
          {"Pionniers du Parapente à La Réunion".split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={FADE_IN_ANIMATION_VARIANTS}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-slate-600 leading-relaxed"
        >
          Première école professionnelle de parapente de l'île. Trois générations de moniteurs diplômés d'État unis par la passion du vol libre à Saint-Leu.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="tel:+262692829292"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD700] text-[#021157] font-bold text-lg shadow-lg transition-all hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-opacity-75"
          >
            Réserver votre vol
            <Phone className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Image Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
              style={{
                rotate: `${(index % 2 === 0 ? -2 : 5)}deg`,
              }}
            >
              <img
                src={src}
                alt={`Parapente Réunion Saint-Leu - Vol libre ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
