import HeroVideo from '@/components/home/HeroVideo'
import ScrollyStats from '@/components/home/ScrollyStats'
import ServicesGrid from '@/components/home/ServicesGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroVideo />
      <ScrollyStats />
      <ServicesGrid />

      {/* Les autres sections seront ajoutées progressivement */}
    </main>
  )
}
