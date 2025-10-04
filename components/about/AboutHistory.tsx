'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Calendar, Users, Award, Heart } from 'lucide-react'

const milestones = [
  {
    year: '1990',
    icon: Calendar,
    title: 'La Naissance',
    description: 'Création de la première école professionnelle de parapente de La Réunion. Un rêve devient réalité sur le site mythique de Saint-Leu.',
    image: '/images/galerie/vraiphoto/decouverte2.JPG'
  },
  {
    year: '2000',
    icon: Users,
    title: 'Trois Générations',
    description: 'Transmission de la passion du vol libre à travers trois générations de moniteurs diplômés d\'État. Une famille de pilotes grandit à Saint-Leu.',
    image: '/images/galerie/vraiphoto/decouverte3.JPG'
  },
  {
    year: '2010',
    icon: Award,
    title: 'Reconnaissance Mondiale',
    description: 'Saint-Leu accueille la Coupe du Monde de parapente. Notre école devient une référence internationale du vol tandem.',
    image: '/images/galerie/vraiphoto/decouverte4.JPG'
  },
  {
    year: 'Aujourd\'hui',
    icon: Heart,
    title: 'Une Grande Famille',
    description: '12 moniteurs diplômés unis par la passion. Des milliers de baptêmes de l\'air réalisés au-dessus du lagon turquoise de Saint-Leu.',
    image: '/images/galerie/vraiphoto/decouverte5.JPG'
  }
]

export default function AboutHistory() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-[#021157]/10 text-[#021157] rounded-full text-sm font-semibold mb-4">
              Notre Histoire
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#021157] mb-6">
              35 Ans de Passion du Parapente à La Réunion
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              De l'école pionnière de vol libre en 1990 à la référence du baptême parapente Saint-Leu aujourd'hui.
              L'histoire d'une famille unie par l'amour du ciel et du lagon turquoise.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="space-y-24">
          {milestones.map((milestone, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2
            })

            const isEven = index % 2 === 0
            const Icon = milestone.icon

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#021157]" />
                    </div>
                    <span className="text-5xl font-bold text-[#021157]">
                      {milestone.year}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-[#021157]">
                    {milestone.title}
                  </h3>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Decorative line */}
                  <div className="w-24 h-1 bg-[#FFD700]" />
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={milestone.image}
                      alt={`${milestone.title} - Parapente Réunion ${milestone.year}`}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021157]/30 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '1990', label: 'Année de création' },
            { number: '12', label: 'Moniteurs diplômés' },
            { number: '3', label: 'Générations de pilotes' },
            { number: '300', label: 'Jours de vol par an' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#021157] mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
