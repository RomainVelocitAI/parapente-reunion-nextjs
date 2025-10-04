'use client';

import { useEffect, useState } from 'react';
import { ZoomParallax } from '@/components/zoom-parallax';
import { AnimatedMarqueeHero } from '@/components/hero-3';

interface VolSunsetHeroProps {
  title?: string;
  subtitle?: string;
  customImages?: { src: string; alt: string }[];
}

export function VolSunsetHero({
  title = 'Parapente Réunion | Vol Coucher de Soleil à Saint-Leu',
  subtitle = 'Vivez un coucher de soleil magique en vol biplace au-dessus de l\'océan Indien',
  customImages,
}: VolSunsetHeroProps) {
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
    { src: '/images/galerie/vol-sunset-hero-1.jpg', alt: 'Vol sunset coucher de soleil parapente Saint-Leu' },
    { src: '/images/galerie/vol-sunset-hero-2.jpg', alt: 'Parapente au coucher du soleil océan Indien' },
    { src: '/images/galerie/vol-sunset-hero-3.jpg', alt: 'Vol romantique sunset La Réunion' },
    { src: '/images/galerie/vol-sunset-hero-4.jpg', alt: 'Coucher de soleil parapente biplace' },
    { src: '/images/galerie/vol-sunset-hero-5.jpg', alt: 'Vol en fin de journée Saint-Leu' },
    { src: '/images/galerie/vol-sunset-hero-6.jpg', alt: 'Sunset parapente Réunion' },
    { src: '/images/galerie/vol-sunset-hero-7.jpg', alt: 'Vol magique coucher de soleil' },
  ];

  const images = customImages || defaultImages;

  // Ne rien rendre avant l'hydration pour éviter le FOUC
  if (isMobile === null) return null;

  return (
    <>
      {isMobile ? (
        <AnimatedMarqueeHero
          tagline="Vol Sunset"
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
