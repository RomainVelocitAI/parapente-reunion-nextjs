'use client';

import { ZoomParallax } from '@/components/zoom-parallax';

interface CartesGiftHeroProps {
  title?: string;
  subtitle?: string;
  customImages?: { src: string; alt: string }[];
}

export function CartesGiftHero({
  title = 'Cartes Cadeaux',
  subtitle = 'Offrez une expérience inoubliable dans le ciel réunionnais',
  customImages,
}: CartesGiftHeroProps) {
  const defaultImages = [
    { src: '/images/produits/carte.png', alt: 'Carte cadeau parapente La Réunion' },
    { src: '/images/produits/Carte-15min.webp', alt: 'Carte cadeau vol découverte 15 min' },
    { src: '/images/produits/Carte-20min.webp', alt: 'Carte cadeau vol découverte 20 min' },
    { src: '/images/produits/Carte-30min.webp', alt: 'Carte cadeau vol découverte 30 min' },
    { src: '/images/produits/Carte-sunset.png', alt: 'Carte cadeau vol sunset' },
    { src: '/images/galerie/G0015444.webp', alt: 'Offrir un baptême de l\'air' },
    { src: '/images/galerie/G0018702.webp', alt: 'Cadeau expérience parapente' },
  ];

  const images = customImages || defaultImages;

  return (
    <>
      {/* Zoom Parallax Effect */}
      <ZoomParallax images={images} />

      {/* Titre et sous-titre après le scroll */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#021157] animate-fade-in" style={{ fontFamily: 'Pacifico, cursive' }}>
            {title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
            {subtitle}
          </p>
        </div>
      </section>
    </>
  );
}
