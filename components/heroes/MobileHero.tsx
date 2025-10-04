'use client';

import Image from 'next/image';

interface MobileHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export function MobileHero({ title, subtitle, imageSrc, imageAlt }: MobileHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay gradient pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Contenu */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/95 max-w-2xl drop-shadow-md font-medium">
          {subtitle}
        </p>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white drop-shadow-lg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
