'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  '/images/paraglider-pixar.png',
  '/images/paraglider-pixar-chinois.png',
  '/images/paraglider-pixar-metis.png',
]

const paragliders = [
  { id: 1, x: '10%', y: '20%', delay: 0, duration: 20, scale: 1.8, imageIndex: 0, mobileX: '10%' },
  { id: 2, x: '85%', y: '15%', delay: 2, duration: 25, scale: 1.5, imageIndex: 1, mobileX: '70%' },
  { id: 3, x: '15%', y: '60%', delay: 4, duration: 22, scale: 2.1, imageIndex: 2, mobileX: '15%' },
  { id: 4, x: '80%', y: '70%', delay: 1, duration: 23, scale: 1.65, imageIndex: 0, mobileX: '80%' },
  { id: 5, x: '25%', y: '40%', delay: 3, duration: 24, scale: 1.95, imageIndex: 1, mobileX: '25%' },
]

export default function FloatingParagliders() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Ne rien rendre avant l'hydration pour éviter le FOUC
  if (isMobile === null) return null

  // Sur mobile : garder le plus haut (id 2, y:15%), le second (id 1, y:20%), et le plus bas (id 4, y:70%)
  const visibleParagliders = isMobile
    ? paragliders.filter(pg => [1, 2, 4].includes(pg.id))
    : paragliders

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {visibleParagliders.map((pg) => (
        <motion.div
          key={pg.id}
          className="absolute"
          style={{
            left: isMobile ? pg.mobileX : pg.x,
            top: pg.y,
          }}
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, -10, 15, 0],
            rotate: [0, 5, -3, 4, 0],
          }}
          transition={{
            duration: pg.duration,
            delay: pg.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="relative hover:scale-110 transition-all"
            style={{
              width: `${80 * pg.scale}px`,
              height: `${80 * pg.scale}px`,
            }}
          >
            <Image
              src={images[pg.imageIndex]}
              alt="Parapente flottant"
              fill
              sizes="200px"
              className="object-contain chroma-key-green"
              style={{
                mixBlendMode: 'multiply',
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))',
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
