"use client";

import GalleryHoverCarousel from '@/components/gallery-hover-carousel';

export function VolDecouverteGallery() {
  const items = [
    {
      id: "decouverte-1",
      title: "Découvrez les sensations du parapente",
      summary: "Le vol découverte est le baptême de l'air idéal pour découvrir les sensations du vol libre en parapente biplace. Accompagné d'un moniteur diplômé d'État, vous décollerez depuis Saint-Leu à 800m d'altitude sur un site aménagé avec une pente douce et facile d'accès.",
      url: "#",
      image: "/images/galerie/vol-decouverte-carousel-1.jpg",
    },
    {
      id: "decouverte-2",
      title: "Vue panoramique exceptionnelle",
      summary: "Profitez d'une vue panoramique exceptionnelle sur l'océan Indien, les lagons turquoise et les paysages volcaniques de La Réunion. Une expérience inoubliable accessible à tous, sans condition physique particulière.",
      url: "#",
      image: "/images/galerie/vol-decouverte-carousel-2.jpg",
    },
    {
      id: "decouverte-3",
      title: "Accessible à tous",
      summary: "Dès 5 ans, aucune condition physique particulière requise. Une expérience adaptée à toute la famille pour découvrir le vol libre en toute sécurité.",
      url: "#",
      image: "/images/galerie/vol-decouverte-carousel-3.jpg",
    },
    {
      id: "decouverte-4",
      title: "Sécurité maximale",
      summary: "Moniteurs diplômés d'État et équipement professionnel. Photos incluses pour immortaliser votre première expérience de vol en parapente.",
      url: "#",
      image: "/images/galerie/vol-decouverte-carousel-4.jpg",
    },
  ];

  return (
    <GalleryHoverCarousel
      heading="Votre baptême de l'air à La Réunion"
      description="Découvrez les <strong>sensations uniques du vol libre</strong> avec notre <strong>baptême de l'air en parapente biplace</strong> ! Accessible à tous, sans condition physique particulière, ce <strong>vol découverte</strong> est l'occasion idéale de réaliser votre rêve de voler comme un oiseau. Accompagné d'un <strong>moniteur diplômé d'État</strong> expérimenté, vous décollerez depuis les hauteurs de <strong>Saint-Leu à 800 mètres d'altitude</strong>. Profitez d'une <strong>vue panoramique époustouflante</strong> sur l'océan Indien, les lagons turquoise et les paysages volcaniques de La Réunion. Un moment magique en toute <strong>sécurité maximale</strong> avec briefing complet avant le vol, équipement professionnel fourni et <strong>photos incluses</strong> pour garder un souvenir impérissable de cette expérience aérienne exceptionnelle."
      items={items}
    />
  );
}
