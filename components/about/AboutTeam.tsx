'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Award, Users, Heart } from 'lucide-react'
import { useRef } from 'react'

const stats = [
  {
    icon: Users,
    number: '12',
    label: 'Moniteurs Diplômés d\'État'
  },
  {
    icon: Award,
    number: '3',
    label: 'Générations de Pilotes'
  },
  {
    icon: Heart,
    number: '35 ans',
    label: 'De Passion à Saint-Leu'
  }
]

export default function AboutTeam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Parallax decorative element */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-0 w-96 h-96 bg-[#021157]/5 rounded-full blur-3xl"
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
              Notre Équipe
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#021157] mb-6">
              Une Grande Famille de Moniteurs Diplômés
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              12 pilotes instructeurs diplômés d'État unis par la passion du vol libre et l'amour du parapente à Saint-Leu.
              Trois générations de moniteurs qui transmettent leur savoir-faire et leur passion depuis 1990.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2
            })

            const Icon = stat.icon

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#021157] flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white group-hover:text-[#021157] transition-colors duration-300" />
                </div>
                <div className="text-5xl font-bold text-[#021157] mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Team Image & Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/galerie/vraiphoto/decouverte3.JPG"
                alt="Équipe de moniteurs parapente diplômés d'État - École Parapente Réunion Saint-Leu"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021157]/30 to-transparent" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#021157]">
              Des Pilotes Instructeurs Passionnés
            </h3>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Notre école de parapente réunit 12 moniteurs diplômés d'État, chacun apportant
                son expertise unique et sa passion contagieuse du vol libre. Chaque moniteur cumule
                des milliers d'heures de vol au-dessus du lagon turquoise de Saint-Leu.
              </p>

              <p>
                Trois générations de pilotes instructeurs se sont succédé depuis la création de
                notre école en 1990. Cette transmission familiale garantit un savoir-faire éprouvé
                et une connaissance intime des conditions de vol à La Réunion.
              </p>

              <p>
                Nous sommes bien plus qu'une équipe de moniteurs professionnels. Nous formons une
                véritable famille du vol libre, unie par l'amour du parapente et le désir de partager
                des moments inoubliables avec nos passagers lors de chaque baptême de l'air.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-24 h-1 bg-[#FFD700]" />
              <p className="text-[#021157] font-semibold">
                Diplômés d'État, Passionnés de Vol
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
