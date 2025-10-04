'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Car, Wind, Camera, Anchor } from 'lucide-react'

const timelineSteps = [
  {
    icon: MapPin,
    title: "Rendez-vous au club",
    location: "Saint-Leu",
    description: "Accueil chaleureux à notre club de parapente situé au cœur de Saint-Leu. Briefing sécurité et préparation de votre baptême de parapente avec un moniteur diplômé d'État.",
    time: "15 min",
    color: "from-[#021157] to-blue-900",
    image: "/images/timeline/club.jpg"
  },
  {
    icon: Car,
    title: "Montée panoramique",
    location: "Route des Colimaçons",
    description: "Trajet en 4x4 jusqu'au site de décollage des Colimaçons à 800m d'altitude. Découvrez les paysages spectaculaires de l'ouest de La Réunion lors de cette montée panoramique.",
    time: "20 min",
    color: "from-[#FFD700] to-yellow-500",
    image: "/images/timeline/montee.jpg"
  },
  {
    icon: Wind,
    title: "Décollage et vol tandem",
    location: "Les Colimaçons, Saint-Leu",
    description: "Sensation unique du décollage en douceur pour votre vol tandem parapente. Profitez de 15 à 40 minutes de vol au-dessus du lagon turquoise de Saint-Leu.",
    time: "15-40 min",
    color: "from-[#021157] to-blue-800",
    image: "/images/timeline/vol.jpg"
  },
  {
    icon: Camera,
    title: "Photos et vidéos aériennes",
    location: "En vol au-dessus du lagon",
    description: "Immortalisez votre baptême de l'air avec des photos et vidéos spectaculaires durant votre vol au-dessus de Saint-Leu. Vue panoramique à 360° sur l'océan Indien, les montagnes et le lagon.",
    time: "Tout le vol",
    color: "from-[#FFD700] to-amber-400",
    image: "/images/timeline/photos.jpg"
  },
  {
    icon: Anchor,
    title: "Atterrissage sur la plage",
    location: "Plage de Saint-Leu",
    description: "Atterrissage en douceur sur la plage de sable blanc de Saint-Leu, les pieds presque dans l'eau du lagon. Retour au club et débriefing de votre expérience de vol tandem.",
    time: "5 min",
    color: "from-[#021157] to-blue-950",
    image: "/images/timeline/atterrissage.jpg"
  }
]

export default function ExperienceTimeline() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#021157] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#021157]/10 text-[#021157] rounded-full text-sm font-semibold mb-4">
            Baptême Parapente Réunion
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] mb-4">
            Comment se Déroule votre Vol Tandem à Saint-Leu
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            De l'accueil au club jusqu'à l'atterrissage sur la plage de Saint-Leu,
            découvrez les 5 étapes de votre baptême de parapente à La Réunion
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#021157]/30 via-[#FFD700]/30 to-[#021157]/30 hidden md:block" />

          {/* Steps */}
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <TimelineStep
                key={index}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="tel:+262692829292"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#021157] rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Réserver mon baptême de parapente
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <p className="text-slate-500 mt-4">
            Durée totale de l'expérience : environ 1h30 • Vol tandem parapente Saint-Leu
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function TimelineStep({ step, index }: { step: typeof timelineSteps[0], index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const isEven = index % 2 === 0
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-slate-100">
          {/* Step Number */}
          <div className="flex items-start justify-between mb-4">
            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white text-sm font-bold`}>
              {index + 1}
            </span>
            <span className="text-slate-400 text-sm font-medium">{step.time}</span>
          </div>

          {/* Title & Location */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#021157] transition-colors">
              {step.title}
            </h3>
            <p className="text-[#021157] font-medium flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {step.location}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Decorative Gradient Bar */}
          <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${step.color} group-hover:w-full transition-all duration-500`} />
        </div>
      </div>

      {/* Center Icon */}
      <div className="w-16 h-16 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 my-4 md:my-0 z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ring-4 ring-white`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Image Placeholder (optional) */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-8' : 'md:pr-8'} hidden md:block`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Gradient overlay as placeholder */}
          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-24 h-24 text-white opacity-30" />
          </div>

          {/* You can replace this with actual images later */}
          {/* <Image src={step.image} alt={step.title} fill className="object-cover" /> */}
        </motion.div>
      </div>
    </motion.div>
  )
}
