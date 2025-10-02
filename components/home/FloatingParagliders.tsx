'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  '/images/paraglider-pixar.png',
  '/images/paraglider-pixar-chinois.png',
  '/images/paraglider-pixar-metis.png',
]

const paragliders = [
  { id: 1, x: '10%', y: '20%', delay: 0, duration: 20, scale: 1.8, imageIndex: 0 },
  { id: 2, x: '85%', y: '15%', delay: 2, duration: 25, scale: 1.5, imageIndex: 1 },
  { id: 3, x: '15%', y: '60%', delay: 4, duration: 22, scale: 2.1, imageIndex: 2 },
  { id: 4, x: '80%', y: '70%', delay: 1, duration: 23, scale: 1.65, imageIndex: 0 },
  { id: 5, x: '25%', y: '40%', delay: 3, duration: 24, scale: 1.95, imageIndex: 1 },
]

export default function FloatingParagliders() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {paragliders.map((pg) => (
        <motion.div
          key={pg.id}
          className="absolute"
          style={{
            left: pg.x,
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
