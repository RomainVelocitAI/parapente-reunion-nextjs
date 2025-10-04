import HeroVideo from '@/components/home/HeroVideo'
import ScrollyStats from '@/components/home/ScrollyStats'
import ServicesGrid from '@/components/home/ServicesGrid'
import ExperienceTimeline from '@/components/home/ExperienceTimeline'
import GiftCards from '@/components/home/GiftCards'
import { HomePage } from '@/components/scrolling-animation'
import MoniteursSection from '@/components/home/MoniteursSection'
import FAQSection from '@/components/home/FAQSection'

export const metadata = {
  title: 'Baptême Parapente Réunion | Vol Tandem Saint-Leu - Sensations Inoubliables',
  description: 'École de parapente n°1 à La Réunion depuis 1990. Vol tandem, baptême de l\'air, formation parapente à Saint-Leu avec 12 moniteurs diplômés. Réservation en ligne, vue océan garantie.',
  keywords: 'parapente réunion, baptême parapente saint-leu, vol tandem réunion, parapente 974, école parapente réunion, formation parapente, vol biplace saint-leu',
  openGraph: {
    title: 'Baptême Parapente Réunion | Vol Tandem Saint-Leu',
    description: 'École de parapente n°1 à La Réunion depuis 1990. Vol tandem avec moniteurs diplômés, vue océan.',
    type: 'website',
    locale: 'fr_FR',
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroVideo />
      <ScrollyStats />
      <ServicesGrid />
      <ExperienceTimeline />
      <GiftCards />
      <HomePage />
      <MoniteursSection />
      <FAQSection />
    </main>
  )
}
