'use client';

import { useEffect, useState } from 'react';
import { ZoomParallax } from '@/components/zoom-parallax';
import { AnimatedMarqueeHero } from '@/components/hero-3';

interface FormationParapenteHeroProps {
  title?: string;
  subtitle?: string;
  customImages?: { src: string; alt: string }[];
}

export function FormationParapenteHero({
  title = 'Parapente Réunion | Formation Pilote à Saint-Leu',
  subtitle = 'Apprenez à voler en toute autonomie avec nos stages de formation FFVL',
  customImages,
}: FormationParapenteHeroProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Ne rien rendre avant l'hydration pour éviter le FOUC
  if (isMobile === null) return null;

  return (
    <>
      {isMobile ? (
        <AnimatedMarqueeHero
          tagline="Formation Parapente"
          title={title}
          description={subtitle}
          ctaText="Réserver maintenant"
          images={images.map(img => img.src)}
        />
      ) : (
        <>
          <ZoomParallax images={images} />
          <section className="relative py-12 bg-gradient-to-b from-transparent to-white">
            <div className="w-full lg:max-w-7xl lg:mx-auto text-center px-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#021157] animate-fade-in leading-snug" style={{ fontFamily: 'Pacifico, cursive' }}>
                {title}
              </h1>
            </div>
          </section>
        </>
      )}
    </>
  );
}
