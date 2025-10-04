'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function AboutCTA() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#021157] mb-6">
              Prêt à Vivre l'Aventure Parapente ?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Rejoignez les milliers de passagers qui nous ont fait confiance pour leur baptême de l'air
              au-dessus du lagon de Saint-Leu. Réservez dès maintenant votre vol tandem parapente avec
              nos moniteurs diplômés d'État.
            </p>
          </motion.div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <motion.a
              href="tel:+262692829292"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#021157] flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                <Phone className="w-8 h-8 text-white group-hover:text-[#021157] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#021157] mb-2">
                Appelez-nous
              </h3>
              <p className="text-slate-600 mb-2">
                Réservation par téléphone
              </p>
              <p className="text-2xl font-bold text-[#FFD700]">
                06 92 82 92 92
              </p>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#021157] flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                <MapPin className="w-8 h-8 text-white group-hover:text-[#021157] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#021157] mb-2">
                Notre École
              </h3>
              <p className="text-slate-600">
                Face à l'atterrissage<br />
                Saint-Leu<br />
                La Réunion 974
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#021157] flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                <Clock className="w-8 h-8 text-white group-hover:text-[#021157] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#021157] mb-2">
                Horaires
              </h3>
              <p className="text-slate-600">
                Toute l'année<br />
                7j/7<br />
                Selon conditions météo
              </p>
            </motion.div>
          </div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="tel:+262692829292"
              className="inline-flex items-center gap-2 px-12 py-5 bg-[#FFD700] text-[#021157] rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Réserver mon baptême parapente
              <Phone className="w-6 h-6" />
            </a>
            <p className="mt-6 text-slate-600">
              Réponse rapide et conseils personnalisés de nos moniteurs diplômés d'État
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
