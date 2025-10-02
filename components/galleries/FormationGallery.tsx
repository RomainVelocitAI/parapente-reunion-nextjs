"use client";

import GalleryHoverCarousel from '@/components/gallery-hover-carousel';

export function FormationGallery() {
  const items = [
    {
      id: "formation-1",
      title: "Devenez pilote de parapente autonome",
      summary: "Nos formations parapente sont encadrées par des moniteurs diplômés d'État expérimentés. Nous proposons des stages adaptés à tous les niveaux, du débutant complet jusqu'au perfectionnement avancé.",
      url: "#",
      image: "/images/galerie/formation1.jpg",
    },
    {
      id: "formation-2",
      title: "Site exceptionnel de Saint-Leu",
      summary: "La formation se déroule sur le site de Saint-Leu, reconnu internationalement pour ses conditions aérologiques exceptionnelles. Vous apprendrez les techniques de pilotage, la météorologie, l'aérologie et la sécurité en vol.",
      url: "#",
      image: "/images/galerie/G0015444.webp",
    },
    {
      id: "formation-3",
      title: "Formation personnalisée",
      summary: "Notre objectif : vous rendre autonome et capable de voler en toute sécurité. Les stages peuvent être adaptés à votre rythme et vos objectifs personnels.",
      url: "#",
      image: "/images/galerie/G0018702.webp",
    },
    {
      id: "formation-4",
      title: "Progression structurée",
      summary: "Initiation, progression, perfectionnement et préparation au brevet. Programme complet du premier vol jusqu'à l'autonomie totale avec cours théoriques et pratiques.",
      url: "#",
      image: "/images/galerie/G0019469.webp",
    },
  ];

  return (
    <GalleryHoverCarousel
      heading="Apprenez à voler en parapente à La Réunion"
      description="Réalisez votre rêve de liberté : <strong>devenez pilote de parapente autonome</strong> ! Notre <strong>école de parapente à Saint-Leu</strong> propose des <strong>formations complètes</strong> encadrées par des <strong>moniteurs diplômés d'État expérimentés</strong>. Que vous soyez débutant complet ou pilote confirmé cherchant à progresser, nos <strong>stages personnalisés</strong> s'adaptent à votre niveau et à vos objectifs. Profitez des <strong>conditions aérologiques exceptionnelles de Saint-Leu</strong>, site reconnu internationalement, pour apprendre les <strong>techniques de pilotage</strong>, la météorologie, l'aérologie et la sécurité en vol. <strong>Formation progressive</strong> du premier vol jusqu'à l'autonomie totale avec cours théoriques approfondis et nombreuses heures de pratique. Programme structuré en plusieurs étapes : <strong>initiation, progression, perfectionnement</strong> et préparation au <strong>brevet de pilote</strong>. Rejoignez notre communauté de passionnés et vivez l'aventure du vol libre dans un cadre paradisiaque."
      items={items}
    />
  );
}
