"use client";

import GalleryHoverCarousel from '@/components/gallery-hover-carousel';

export function VolMarmailleGallery() {
  const items = [
    {
      id: "marmaille-1",
      title: "Le baptême de l'air spécial enfants",
      summary: "Le vol marmaille est une expérience adaptée spécialement pour les enfants de moins de 12 ans. Nos moniteurs diplômés d'État ont l'habitude d'accompagner les plus jeunes dans leur première expérience de vol libre.",
      url: "#",
      image: "/images/galerie/G0015444.webp",
    },
    {
      id: "marmaille-2",
      title: "Vol adapté et sécurisé",
      summary: "Vol adapté en durée et en intensité pour garantir le confort et la sécurité des enfants. Une aventure douce et sécurisée qui laissera des souvenirs mémorables à vos petits aventuriers.",
      url: "#",
      image: "/images/galerie/G0018702.webp",
    },
    {
      id: "marmaille-3",
      title: "Parents présents",
      summary: "Les parents peuvent assister au décollage et à l'atterrissage pour immortaliser ce moment magique. Un souvenir familial inoubliable.",
      url: "#",
      image: "/images/galerie/formation1.jpg",
    },
    {
      id: "marmaille-4",
      title: "Encadrement expert",
      summary: "Moniteurs habitués aux enfants avec un vol tout doux et des sensations adaptées. Réservé aux enfants de moins de 12 ans.",
      url: "#",
      image: "/images/galerie/G0029937.webp",
    },
  ];

  return (
    <GalleryHoverCarousel
      heading="L'aventure aérienne pour les petits réunionnais"
      description="Offrez à vos enfants un <strong>souvenir magique</strong> qu'ils n'oublieront jamais ! Le <strong>vol marmaille</strong> est spécialement conçu pour les <strong>jeunes aventuriers à partir de 4 ans</strong> avec une approche pédagogique adaptée à leur âge. Nos <strong>moniteurs diplômés d'État</strong>, habitués à accompagner les plus jeunes, assurent un <strong>vol tout doux et sécurisé</strong>, adapté en durée et en intensité pour garantir le confort et la sérénité de vos petits pilotes. Les <strong>parents peuvent assister</strong> au décollage et à l'atterrissage pour immortaliser ces instants précieux. Une <strong>expérience familiale inoubliable</strong> dans un cadre exceptionnel à <strong>Saint-Leu</strong>, où sécurité maximale rime avec découverte et émerveillement. Créez des souvenirs mémorables pour toute la famille avec ce baptême de l'air adapté aux enfants <strong>dès 4 ans</strong>."
      items={items}
    />
  );
}
