'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Trophy } from 'lucide-react'

const badges = [
  {
    icon: Calendar,
    number: '300+',
    label: 'Jours de vol par an',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    number: '12',
    label: 'Moniteurs diplômés',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Trophy,
    number: '3',
    label: 'Générations de passionnés',
    gradient: 'from-orange-500 to-yellow-500',
  },
]

export default function TrustBadges() {
  return (
    <section className="bg-white py-16 mt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl blur"
                     style={{
                       background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                       '--tw-gradient-from': badge.gradient.split(' ')[1],
                       '--tw-gradient-to': badge.gradient.split(' ')[3],
                       '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
                     } as React.CSSProperties}
                />

                {/* Card content */}
                <div className="relative text-center p-8 rounded-2xl bg-white border border-gray-200 group-hover:border-transparent transition-all duration-300">
                  {/* Icon with gradient */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${badge.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Number with gradient text */}
                  <div className={`text-5xl font-bold bg-gradient-to-br ${badge.gradient} bg-clip-text text-transparent mb-2`}>
                    {badge.number}
                  </div>

                  {/* Label */}
                  <div className="text-gray-700 font-medium">
                    {badge.label}
                  </div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
