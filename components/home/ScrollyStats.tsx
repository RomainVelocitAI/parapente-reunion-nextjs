'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Calendar, Users, Trophy } from 'lucide-react'
import { useEffect, useRef } from 'react'

const stats = [
  {
    icon: Calendar,
    value: 300,
    suffix: '+',
    label: 'Jours de vol par an',
    description: 'Une saison exceptionnelle',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Users,
    value: 12,
    suffix: '',
    label: 'Moniteurs diplômés',
    description: 'Des experts passionnés',
    gradient: 'from-yellow-500 to-orange-400',
  },
  {
    icon: Trophy,
    value: 3,
    suffix: '',
    label: 'Générations de passionnés',
    description: 'Une histoire familiale',
    gradient: 'from-blue-600 to-cyan-500',
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 150,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function ScrollyStats() {
  return (
    <section className="relative bg-white py-20 mt-32 overflow-hidden">
      {/* Background gradient blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent pointer-events-none" />

      <div className="relative w-full lg:max-w-7xl lg:mx-auto px-4">
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative text-center group"
              >
                {/* Icon with gradient background */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.2,
                    ease: 'backOut',
                  }}
                  viewport={{ once: true }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Counter */}
                <div className="mb-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                    }}
                    viewport={{ once: true }}
                    className={`text-6xl md:text-7xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                </div>

                {/* Label */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.5,
                  }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-[#021157] mb-2"
                >
                  {stat.label}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.6,
                  }}
                  viewport={{ once: true }}
                  className="text-gray-600"
                >
                  {stat.description}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.7,
                  }}
                  viewport={{ once: true }}
                  className={`mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r ${stat.gradient}`}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
            <span className="text-sm font-medium text-gray-700">
              Première école professionnelle de parapente à la Réunion
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
