'use client';

import { useEffect, useState } from 'react';
import { ZoomParallax } from '@/components/zoom-parallax';
import { MobileHero } from './MobileHero';

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
    { src: '/images/galerie/vol-decouverte-hero-1.jpg', alt: 'Vol découverte en parapente biplace' },
    { src: '/images/galerie/vol-decouverte-hero-2.jpg', alt: 'Baptême de l\'air à La Réunion' },
    { src: '/images/galerie/vol-decouverte-hero-3.jpg', alt: 'Vol tandem au-dessus du lagon' },
    { src: '/images/galerie/vol-decouverte-hero-4.jpg', alt: 'Parapente biplace Saint-Leu' },
    { src: '/images/galerie/vol-decouverte-hero-5.jpg', alt: 'Vol découverte océan Indien' },
    { src: '/images/galerie/vol-decouverte-hero-6.jpg', alt: 'Baptême parapente Réunion' },
    { src: '/images/galerie/vol-decouverte-hero-7.jpg', alt: 'Vol tandem tropical' },
  ];

  const images = customImages || defaultImages;

  // Ne rien rendre avant l'hydration pour éviter le FOUC
  if (isMobile === null) return null;

  return (
    <>
      {/* Hero Mobile (< 1024px) */}
      {isMobile ? (
        <MobileHero
          title={title}
          subtitle={subtitle}
          imageSrc={images[0].src}
          imageAlt={images[0].alt}
        />
      ) : (
        <>
          {/* Zoom Parallax Effect Desktop */}
          <ZoomParallax images={images} />

          {/* Titre H1 après le scroll Desktop */}
          <section className="relative py-12 bg-gradient-to-b from-transparent to-white">
            <div className="w-full lg:max-w-7xl lg:mx-auto text-center px-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#021157] animate-fade-in" style={{ fontFamily: 'Pacifico, cursive' }}>
                {title}
              </h1>
            </div>
          </section>
        </>
      )}
    </>
  );
}
