import HeroVideo from '@/components/home/HeroVideo'
import ScrollyStats from '@/components/home/ScrollyStats'
import ServicesGrid from '@/components/home/ServicesGrid'
import ExperienceTimeline from '@/components/home/ExperienceTimeline'
import GiftCards from '@/components/home/GiftCards'
import { HomePage } from '@/components/scrolling-animation'
import MoniteursSection from '@/components/home/MoniteursSection'
import FAQSection from '@/components/home/FAQSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroVideo />
      <ScrollyStats />
      <ServicesGrid />
      <ExperienceTimeline />
      <GiftCards />
      <HomePage />
      <MoniteursSection />
      <FAQSection />

      {/* Les autres sections seront ajoutées progressivement */}
    </main>
  )
}
