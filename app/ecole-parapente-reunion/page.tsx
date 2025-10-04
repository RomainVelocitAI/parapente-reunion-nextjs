import AboutHero from '@/components/about/AboutHero'
import AboutHistory from '@/components/about/AboutHistory'
import AboutValues from '@/components/about/AboutValues'
import AboutTeam from '@/components/about/AboutTeam'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata = {
  title: 'École Parapente Réunion depuis 1990 | Moniteurs Diplômés Saint-Leu',
  description: 'Première école professionnelle de parapente de La Réunion depuis 1990. 12 moniteurs diplômés d\'État. 3 générations de passion du vol à Saint-Leu',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white -mt-32">
      <AboutHero />
      <AboutHistory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </main>
  )
}
