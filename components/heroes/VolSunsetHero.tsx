'use client';

import { ZoomParallax } from '@/components/zoom-parallax';

interface VolSunsetHeroProps {
  title?: string;
  subtitle?: string;
  customImages?: { src: string; alt: string }[];
}

export function VolSunsetHero({
  title = 'Vol Sunset',
  subtitle = 'Vivez un coucher de soleil magique en vol biplace au-dessus de l\'océan Indien',
  customImages,
}: VolSunsetHeroProps) {
  const defaultImages = [
    { src: '/images/galerie/G0015444.webp', alt: 'Vol sunset coucher de soleil parapente' },
    { src: '/images/galerie/G0018702.webp', alt: 'Parapente au coucher du soleil' },
    { src: '/images/galerie/G0019469.webp', alt: 'Vol romantique sunset La Réunion' },
    { src: '/images/galerie/G0029937.webp', alt: 'Coucher de soleil océan Indien parapente' },
    { src: '/images/galerie/G0033325.webp', alt: 'Vol en fin de journée' },
    { src: '/images/hero/saint-leu-la-reunion.webp', alt: 'Sunset Saint-Leu parapente' },
    { src: '/images/galerie/G0015444.webp', alt: 'Vol magique coucher de soleil' },
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
