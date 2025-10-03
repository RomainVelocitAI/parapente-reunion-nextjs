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
    { src: '/images/galerie/formation-hero-1.jpg', alt: 'Formation parapente La Réunion' },
    { src: '/images/galerie/formation-hero-2.jpg', alt: 'Stage pilotage parapente' },
    { src: '/images/galerie/formation-hero-3.jpg', alt: 'Apprentissage vol libre' },
    { src: '/images/galerie/formation-hero-4.jpg', alt: 'Formation moniteur diplômé' },
    { src: '/images/galerie/formation-hero-5.jpg', alt: 'Brevet pilote parapente' },
    { src: '/images/galerie/formation-hero-6.jpg', alt: 'École de parapente Saint-Leu' },
    { src: '/images/galerie/formation-hero-7.jpg', alt: 'Formation vol autonome' },
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
