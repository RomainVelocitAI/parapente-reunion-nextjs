'use client'

import { DynamicFrameLayout } from '@/components/ui/dynamic-frame-layout'

const servicesData = [
  {
    id: 1,
    video: 'https://cdn.shopify.com/videos/c/o/v/f2b6ac3856934cd3921cb4606fef3514.mp4',
    title: 'Vol Découverte',
    description: 'Découvrez les sensations du parapente lors d\'un vol biplace inoubliable',
    price: 'À partir de 90€',
    defaultPos: { x: 0, y: 0, w: 6, h: 6 },
    corner: '/images/frame/corner.png',
    edgeHorizontal: '/images/frame/edge-h.png',
    edgeVertical: '/images/frame/edge-v.png',
    mediaSize: 1.2,
    borderThickness: 8,
    borderSize: 95,
    isHovered: false,
  },
  {
    id: 2,
    video: 'https://res.cloudinary.com/daa8ghynu/video/upload/v1759401454/videosunset_tgbmox.mp4',
    title: 'Vol Sunset',
    description: 'Admirez le coucher de soleil sur l\'océan Indien depuis le ciel',
    price: '100€',
    defaultPos: { x: 6, y: 0, w: 6, h: 6 },
    corner: '/images/frame/corner.png',
    edgeHorizontal: '/images/frame/edge-h.png',
    edgeVertical: '/images/frame/edge-v.png',
    mediaSize: 1.2,
    borderThickness: 8,
    borderSize: 95,
    isHovered: false,
  },
  {
    id: 3,
    video: 'https://res.cloudinary.com/daa8ghynu/video/upload/v1759401452/videomarmaille_bpdpvg.mp4',
    title: 'Vol Marmaille',
    description: 'Une expérience adaptée aux enfants dès 5 ans',
    price: '80€',
    defaultPos: { x: 0, y: 6, w: 6, h: 6 },
    corner: '/images/frame/corner.png',
    edgeHorizontal: '/images/frame/edge-h.png',
    edgeVertical: '/images/frame/edge-v.png',
    mediaSize: 1.2,
    borderThickness: 8,
    borderSize: 95,
    isHovered: false,
  },
  {
    id: 4,
    video: 'https://res.cloudinary.com/daa8ghynu/video/upload/v1759401487/videoformation_bjfwem.mp4',
    title: 'Formation Parapente',
    description: 'Apprenez à voler en autonomie à La Réunion avec nos moniteurs diplômés',
    price: 'Sur devis',
    defaultPos: { x: 6, y: 6, w: 6, h: 6 },
    corner: '/images/frame/corner.png',
    edgeHorizontal: '/images/frame/edge-h.png',
    edgeVertical: '/images/frame/edge-v.png',
    mediaSize: 1.2,
    borderThickness: 8,
    borderSize: 95,
    isHovered: false,
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021157] mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez l'expérience qui vous correspond
          </p>
        </div>

        <div className="h-[600px] md:h-[800px]">
          <DynamicFrameLayout
            frames={servicesData}
            showFrames={false}
            hoverSize={8}
            gapSize={16}
          />
        </div>
      </div>
    </section>
  )
}
