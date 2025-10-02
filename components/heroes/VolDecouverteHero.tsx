'use client';

import { ZoomParallax } from '@/components/zoom-parallax';

interface VolDecouverteHeroProps {
  title?: string;
  subtitle?: string;
  customImages?: { src: string; alt: string }[];
}

export function VolDecouverteHero({
  title = 'Vol Découverte',
  subtitle = 'Baptême de l\'air en parapente biplace à Saint-Leu, La Réunion',
  customImages,
}: VolDecouverteHeroProps) {
  const defaultImages = [
    { src: '/images/galerie/G0015444.webp', alt: 'Parapente vol découverte à La Réunion' },
    { src: '/images/galerie/G0018702.webp', alt: 'Vol biplace au-dessus du lagon' },
    { src: '/images/galerie/G0019469.webp', alt: 'Vue aérienne de Saint-Leu' },
    { src: '/images/galerie/G0029937.webp', alt: 'Baptême de l\'air en parapente' },
    { src: '/images/galerie/G0033325.webp', alt: 'Parapente biplace océan Indien' },
    { src: '/images/hero/saint-leu-la-reunion.webp', alt: 'Saint-Leu depuis les airs' },
    { src: '/images/galerie/G0015444.webp', alt: 'Découverte du parapente' },
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
