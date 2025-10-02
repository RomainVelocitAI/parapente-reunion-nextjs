"use client";

import GalleryHoverCarousel from '@/components/gallery-hover-carousel';

export function CartesGiftGallery() {
  const items = [
    {
      id: "gift-1",
      title: "Le cadeau parfait",
      summary: "Offrez une expérience inoubliable dans le ciel réunionnais. Nos cartes cadeaux sont valables 1 an et permettent de choisir le vol idéal.",
      url: "#",
      image: "/images/produits/carte.png",
    },
    {
      id: "gift-2",
      title: "Vol découverte 15 min",
      summary: "Carte cadeau pour un baptême de l'air de 15 minutes. Idéal pour une première découverte du parapente biplace accessible à tous.",
      url: "#",
      image: "/images/produits/Carte-15min.webp",
    },
    {
      id: "gift-3",
      title: "Vol découverte 30 min",
      summary: "Carte cadeau pour un vol de 30 minutes. Plus de temps pour profiter des sensations et admirer les paysages de La Réunion.",
      url: "#",
      image: "/images/produits/Carte-30min.webp",
    },
    {
      id: "gift-4",
      title: "Vol Sunset magique",
      summary: "Carte cadeau pour un vol au coucher du soleil. L'expérience ultime à partager à deux pour un moment romantique et inoubliable.",
      url: "#",
      image: "/images/produits/Carte-sunset.png",
    },
  ];

  return (
    <GalleryHoverCarousel
      heading="Cartes Cadeaux"
      items={items}
    />
  );
}
