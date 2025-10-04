import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schemas/organization'
import { faqCartesCadeaux } from '@/lib/faq-data'

export const metadata = {
  title: 'Carte Cadeau Parapente Réunion | Bon Cadeau Vol Tandem Saint-Leu',
  description: 'Offrez un baptême de parapente à La Réunion. Carte cadeau vol tandem Saint-Leu valable 1 an. Bon cadeau original pour toutes occasions. Livraison immédiate.',
  keywords: 'carte cadeau parapente réunion, bon cadeau vol tandem saint-leu, cadeau parapente 974, chèque cadeau parapente',
  authors: [{ name: 'Parapente Réunion', url: 'https://parapente-reunion.fr/ecole-parapente-reunion' }],
  creator: 'Parapente Réunion',
  publisher: 'Parapente Réunion',
}

export default function TarifCarteCadeauLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const productSchema = generateProductSchema({
    name: "Carte Cadeau Parapente Réunion",
    description: "Offrez un baptême de parapente à La Réunion. Carte cadeau vol tandem Saint-Leu valable 1 an. Bon cadeau original.",
    image: "https://parapente-reunion.fr/images/galerie/vol-decouverte-hero-1.jpg",
    lowPrice: "80",
    highPrice: "160",
    url: "https://parapente-reunion.fr/tarif-carte-cadeau-parapente-reunion",
    reviewCount: "156",
    ratingValue: "4.9"
  })

  const faqSchema = generateFAQSchema(faqCartesCadeaux)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: 'https://parapente-reunion.fr/' },
    { name: 'Tarifs', url: 'https://parapente-reunion.fr/#tarifs' },
    { name: 'Cartes Cadeaux', url: 'https://parapente-reunion.fr/tarif-carte-cadeau-parapente-reunion' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
