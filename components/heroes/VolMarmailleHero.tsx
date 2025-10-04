'use client';

import { useEffect, useState } from 'react';
import { ZoomParallax } from '@/components/zoom-parallax';
import { MobileHero } from './MobileHero';

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
    { src: '/images/galerie/vol-marmaille-hero-1.jpg', alt: 'Vol tandem enfant La Réunion' },
    { src: '/images/galerie/vol-marmaille-hero-2.jpg', alt: 'Parapente enfant océan Indien' },
    { src: '/images/galerie/vol-marmaille-hero-3.jpg', alt: 'Vol marmaille Saint-Leu' },
    { src: '/images/galerie/vol-marmaille-hero-4.jpg', alt: 'Préparation vol enfant avec instructeur' },
    { src: '/images/galerie/vol-marmaille-hero-5.jpg', alt: 'Vol tandem enfant Saint-Leu' },
    { src: '/images/galerie/vol-marmaille-hero-6.jpg', alt: 'Apprentissage parapente enfant Réunion' },
    { src: '/images/galerie/vol-marmaille-hero-7.jpg', alt: 'Vol marmaille encadré professionnel' },
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
