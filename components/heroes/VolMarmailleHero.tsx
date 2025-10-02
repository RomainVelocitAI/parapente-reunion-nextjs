'use client';

import { ZoomParallax } from '@/components/zoom-parallax';

interface VolMarmailleHeroProps {
  title?: string;
  subtitle?: string;
  customImages?: { src: string; alt: string }[];
}

export function VolMarmailleHero({
  title = 'Vol Marmaille',
  subtitle = 'L\'aventure parapente pour les enfants de moins de 12 ans',
  customImages,
}: VolMarmailleHeroProps) {
  const defaultImages = [
    { src: '/images/galerie/G0015444.webp', alt: 'Vol marmaille enfant parapente' },
    { src: '/images/galerie/G0018702.webp', alt: 'Baptême de l\'air enfant La Réunion' },
    { src: '/images/galerie/G0019469.webp', alt: 'Vol enfant sécurisé' },
    { src: '/images/galerie/G0029937.webp', alt: 'Parapente adapté aux enfants' },
    { src: '/images/galerie/G0033325.webp', alt: 'Découverte du ciel pour les enfants' },
    { src: '/images/hero/saint-leu-la-reunion.webp', alt: 'Vol marmaille Saint-Leu' },
    { src: '/images/galerie/formation1.jpg', alt: 'Encadrement enfants parapente' },
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
