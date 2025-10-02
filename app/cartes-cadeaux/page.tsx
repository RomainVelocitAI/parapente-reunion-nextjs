'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CONTACT } from '@/lib/constants'
import { GiftCardCheckoutCard } from '@/components/gift-card-checkout-card'

// CSS bounce animation
const bounceStyle = `
@keyframes bounceFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.bounce {
  animation: bounceFloat 3s ease-in-out infinite;
}
`;

export default function CartesPage() {
  const [giftCards, setGiftCards] = useState([
    { id: 'vol-decouverte-15', title: 'Vol Découverte 15min', price: 90, selected: false, quantity: 1 },
    { id: 'vol-decouverte-20', title: 'Vol Découverte 20min', price: 100, selected: false, quantity: 1 },
    { id: 'vol-decouverte-30', title: 'Vol Découverte 30min', price: 120, selected: false, quantity: 1 },
    { id: 'vol-decouverte-40', title: 'Vol Découverte 40min', price: 140, selected: false, quantity: 1 },
    { id: 'vol-decouverte-50', title: 'Vol Découverte 50min', price: 160, selected: false, quantity: 1 },
    { id: 'vol-sunset', title: 'Vol Sunset', price: 100, selected: false, quantity: 1 },
    { id: 'vol-marmaille', title: 'Vol Marmaille', price: 80, selected: false, quantity: 1 },
  ])

  const giftBoxImage = "/images/galerie/boitenobg.png"

  return (
    <main className="min-h-screen bg-white">
      {/* Inject bounce CSS */}
      <style>{bounceStyle}</style>

      {/* Gift Card Checkout Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#021157] text-center mb-12">
            Offrez une expérience inoubliable
          </h1>

          <div className="relative">
            <GiftCardCheckoutCard
              items={giftCards}
              onItemsChange={setGiftCards}
              className="w-full"
            />

            {/* Gift Box 1 - Top Left - Lower */}
            <motion.img
              src={giftBoxImage}
              alt="Boîte cadeau 1"
              className={cn(
                "absolute -top-32 -left-64 h-32 w-auto object-contain pointer-events-none z-20 bounce"
              )}
              style={{ animationDelay: "0s" }}
              whileHover={{
                scale: 1.15,
                y: -6,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />

            {/* Gift Box 2 - Bottom Left - Higher */}
            <motion.img
              src={giftBoxImage}
              alt="Boîte cadeau 2"
              className={cn(
                "absolute -bottom-32 -left-56 h-36 w-auto object-contain pointer-events-none z-20 bounce"
              )}
              style={{ animationDelay: "1s" }}
              whileHover={{
                scale: 1.15,
                y: -6,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />

            {/* Gift Box 3 - Top Right - Lower */}
            <motion.img
              src={giftBoxImage}
              alt="Boîte cadeau 3"
              className={cn(
                "absolute -top-24 -right-72 h-40 w-auto object-contain pointer-events-none z-20 bounce"
              )}
              style={{ animationDelay: "0.5s" }}
              whileHover={{
                scale: 1.15,
                y: -6,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />

            {/* Gift Box 4 - Bottom Right - Higher */}
            <motion.img
              src={giftBoxImage}
              alt="Boîte cadeau 4"
              className={cn(
                "absolute -bottom-24 -right-64 h-36 w-auto object-contain pointer-events-none z-20 bounce"
              )}
              style={{ animationDelay: "1.5s" }}
              whileHover={{
                scale: 1.15,
                y: -6,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />
          </div>

          {/* Descriptions des vols */}
          <div className="mt-16 space-y-8 relative">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#021157] mb-2">Vol Découverte 15-50min</h3>
              <p className="text-gray-700">Le baptême de l'air en parapente est le cadeau parfait pour découvrir les sensations du vol libre. Décollage depuis Saint-Leu avec un moniteur diplômé d'État pour une vue panoramique sur l'océan Indien et les paysages volcaniques de La Réunion.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#021157] mb-2">Vol Sunset</h3>
              <p className="text-gray-700">Un vol inoubliable au coucher du soleil. Décollage en fin d'après-midi pour admirer les teintes orangées et dorées du ciel réunionnais. L'océan Indien s'illumine sous les derniers rayons - un spectacle époustouflant depuis les airs.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#021157] mb-2">Vol Marmaille</h3>
              <p className="text-gray-700">Une expérience spécialement adaptée aux enfants dès 5 ans. Vol sécurisé et ludique avec approche pédagogique pour découvrir le parapente en famille. Équipement adapté à la morphologie des enfants avec moniteurs spécialisés.</p>
            </div>

            {/* Gift Box 5 - Much Lower Left */}
            <motion.img
              src={giftBoxImage}
              alt="Boîte cadeau 5"
              className={cn(
                "absolute -bottom-20 -left-48 h-32 w-auto object-contain pointer-events-none z-20 bounce"
              )}
              style={{ animationDelay: "2s" }}
              whileHover={{
                scale: 1.15,
                y: -6,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />

            {/* Gift Box 6 - Much Lower Right Asymmetric */}
            <motion.img
              src={giftBoxImage}
              alt="Boîte cadeau 6"
              className={cn(
                "absolute -bottom-32 -right-56 h-40 w-auto object-contain pointer-events-none z-20 bounce"
              )}
              style={{ animationDelay: "2.5s" }}
              whileHover={{
                scale: 1.15,
                y: -6,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#021157]">
            Une question sur nos cartes cadeaux ?
          </h2>
          <p className="text-xl mb-8 text-[#021157]">
            Notre équipe est à votre disposition pour vous conseiller
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#021157] text-white hover:bg-[#021157]/90 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appelez-nous
            </a>
            <a
              href="mailto:info@parapente-reunion.fr"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#FFD700] text-[#021157] hover:bg-[#FFC700] rounded-lg font-semibold transition-colors"
            >
              ✉️ Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
