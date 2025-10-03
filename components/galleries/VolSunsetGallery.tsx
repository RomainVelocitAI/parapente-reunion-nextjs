"use client";

import GalleryHoverCarousel from '@/components/gallery-hover-carousel';

export function VolSunsetGallery() {
  const sunsetItems = [
    {
      id: "sunset-1",
      title: "Un vol au coucher du soleil inoubliable",
      summary: "Le vol sunset est une expérience unique qui combine les sensations du parapente avec la magie d'un coucher de soleil sur l'océan Indien. Décollez en fin d'après-midi et profitez des couleurs exceptionnelles du ciel réunionnais.",
      url: "#",
      image: "/images/galerie/vol-sunset-carousel-1.jpg",
    },
    {
      id: "sunset-2",
      title: "Spectacle naturel inoubliable",
      summary: "Admirez le soleil qui plonge dans l'océan tandis que vous survolez les lagons de Saint-Leu. Les jeux de lumière sur l'eau et les montagnes créent un spectacle naturel inoubliable.",
      url: "#",
      image: "/images/galerie/vol-sunset-carousel-2.jpg",
    },
    {
      id: "sunset-3",
      title: "Horaire privilégié",
      summary: "Vol en fin d'après-midi pour le coucher de soleil. Une expérience romantique et magique, idéale à partager en duo ou entre amis.",
      url: "#",
      image: "/images/galerie/vol-sunset-carousel-3.jpg",
    },
    {
      id: "sunset-4",
      title: "Minimum 2 personnes",
      summary: "Expérience à partager à deux ou entre amis. Photos et vidéos incluses pour immortaliser ce moment unique.",
      url: "#",
      image: "/images/galerie/vol-sunset-carousel-4.jpg",
    },
  ];

  return (
    <GalleryHoverCarousel
      heading="Vivez la magie d'un coucher de soleil en parapente"
      description="Offrez-vous une <strong>expérience unique</strong> qui restera gravée dans votre mémoire : un <strong>vol sunset en parapente biplace</strong> au-dessus de l'océan Indien. Décollez en fin d'après-midi depuis <strong>Saint-Leu</strong> et admirez le spectacle magique du soleil qui plonge dans l'océan tandis que vous survolez les <strong>lagons turquoise</strong>. Les jeux de lumière sur l'eau et les montagnes créent une atmosphère féerique, parfaite pour un <strong>moment romantique</strong> à partager en couple ou entre amis. Vol en petits groupes (<strong>minimum 2 personnes</strong>) avec <strong>photos et vidéos</strong> pour immortaliser ce moment d'exception. Réservation conseillée pour garantir les meilleures conditions de vol et profiter pleinement de ce coucher de soleil aérien inoubliable."
      items={sunsetItems}
    />
  );
}
