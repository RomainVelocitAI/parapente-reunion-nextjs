'use client';

import { ZoomParallax } from '@/components/zoom-parallax';

interface FormationParapenteHeroProps {
  title?: string;
  subtitle?: string;
  customImages?: { src: string; alt: string }[];
}

export function FormationParapenteHero({
  title = 'Formation Parapente',
  subtitle = 'Apprenez à voler en toute autonomie avec nos stages de formation',
  customImages,
}: FormationParapenteHeroProps) {
  const defaultImages = [
    { src: '/images/galerie/formation1.jpg', alt: 'Formation parapente La Réunion' },
    { src: '/images/galerie/G0015444.webp', alt: 'Stage pilotage parapente' },
    { src: '/images/galerie/G0018702.webp', alt: 'Apprentissage vol libre' },
    { src: '/images/galerie/G0019469.webp', alt: 'Formation moniteur diplômé' },
    { src: '/images/galerie/G0029937.webp', alt: 'Brevet pilote parapente' },
    { src: '/images/galerie/G0033325.webp', alt: 'École de parapente Saint-Leu' },
    { src: '/images/hero/saint-leu-la-reunion.webp', alt: 'Formation vol autonome' },
  ];

  const images = customImages || defaultImages;

  return (
    <>
      {/* Zoom Parallax Effect */}
      <ZoomParallax images={images} />

      {/* Titre H1 après le scroll */}
      <section className="relative py-12 bg-gradient-to-b from-transparent to-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#021157] animate-fade-in" style={{ fontFamily: 'Pacifico, cursive' }}>
            {title}
          </h1>
        </div>
      </section>
    </>
  );
}
