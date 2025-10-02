import HeroVideo from '@/components/home/HeroVideo'
import ScrollyStats from '@/components/home/ScrollyStats'
import ServicesGrid from '@/components/home/ServicesGrid'
import GiftCards from '@/components/home/GiftCards'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroVideo />
      <ScrollyStats />
      <ServicesGrid />
      <GiftCards />

      {/* Les autres sections seront ajoutées progressivement */}
    </main>
  )
}
