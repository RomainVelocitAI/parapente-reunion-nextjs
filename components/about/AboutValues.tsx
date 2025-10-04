'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Users, Heart, Trophy } from 'lucide-react'
import { useRef } from 'react'

const values = [
  {
    icon: Shield,
    title: 'Sécurité Absolue',
    description: 'Matériel homologué dernière génération, moniteurs diplômés d\'État avec milliers d\'heures de vol. La sécurité de nos passagers est notre priorité numéro un lors de chaque vol tandem parapente.'
  },
  {
    icon: Users,
    title: 'Transmission Familiale',
    description: 'Trois générations de pilotes instructeurs se sont succédé depuis 1990. Nous formons une grande famille du vol libre unie par la passion du parapente à Saint-Leu et l\'amour de notre île.'
  },
  {
    icon: Heart,
    title: 'Passion du Vol',
    description: 'Chaque baptême de l\'air est une opportunité de partager notre passion pour le vol libre. Nous volons au-dessus du lagon turquoise avec le même émerveillement qu\'au premier jour.'
  },
  {
    icon: Trophy,
    title: 'Excellence Professionnelle',
    description: 'Première école professionnelle de parapente de La Réunion, reconnue internationalement. Saint-Leu accueille la Coupe du Monde et nous sommes fiers d\'être des acteurs majeurs de ce site mythique.'
  }
]

export default function AboutValues() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="relative py-20 bg-white overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#021157]/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-[#FFD700]/20 text-[#021157] rounded-full text-sm font-semibold mb-4">
              Nos Valeurs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#021157] mb-6">
              Ce Qui Nous Anime Depuis 35 Ans
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Quatre piliers fondamentaux guident notre école de parapente et façonnent chaque expérience de vol au-dessus de Saint-Leu.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2
            })

            const Icon = value.icon

            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#021157] flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white group-hover:text-[#021157] transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#021157] mb-4 group-hover:text-[#021157] transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#FFD700]/10 transition-colors duration-300" />
              </motion.div>
            )
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 shadow-xl">
            {/* Quote marks */}
            <div className="absolute top-6 left-6 text-6xl text-[#FFD700] opacity-20">"</div>

            <p className="text-2xl md:text-3xl text-[#021157] font-semibold leading-relaxed mb-6 relative z-10">
              Nous sommes bien plus qu'une école de parapente.
              Nous sommes une famille du vol libre, ancrée dans la vie de l'île depuis 1990.
            </p>

            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-1 bg-[#FFD700]" />
              <p className="text-slate-600 font-medium">
                L'équipe Parapente Réunion
              </p>
              <div className="w-16 h-1 bg-[#FFD700]" />
            </div>

            {/* Quote marks */}
            <div className="absolute bottom-6 right-6 text-6xl text-[#FFD700] opacity-20">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
