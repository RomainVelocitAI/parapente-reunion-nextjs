"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

// Configuration des vidéos pour chaque profil
const testimonialVideos = [
  { id: 1, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Vidéo de test - à remplacer
  { id: 2, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Vidéo de test - à remplacer
  { id: 3, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Vidéo de test - à remplacer
  { id: 4, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Vidéo de test - à remplacer
  { id: 5, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Vidéo de test - à remplacer
  { id: 6, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Vidéo de test - à remplacer
  { id: 7, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Vidéo de test - à remplacer
  { id: 8, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Vidéo de test - à remplacer
]

export function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      // Calculer le pourcentage de la section qui est visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      const visiblePercentage = Math.max(0, visibleHeight / sectionHeight)

      // L'animation commence quand 30% de la section est visible
      // Elle progresse jusqu'à 100% quand la section est complètement visible
      let progress = 0
      if (visiblePercentage >= 0.3) {
        // Mapper 30%-100% de visibilité vers 0%-100% de progress
        progress = Math.min((visiblePercentage - 0.3) / 0.7, 1)
      }

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Rotation continue dès le début du déploiement
  useEffect(() => {
    if (isMobile || scrollProgress > 0) {
      const rotationInterval = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.5) % 360)
      }, 50) // Rotation toutes les 50ms pour une animation fluide

      return () => clearInterval(rotationInterval)
    }
  }, [scrollProgress, isMobile])

  // Empêcher le scroll quand la modal est ouverte
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedVideo])

  const maxRadius = isMobile ? 180 : 300
  // Sur mobile : toujours déployé (scrollProgress = 1), sur desktop : animation scroll
  const effectiveProgress = isMobile ? 1 : scrollProgress
  const expandRadius = effectiveProgress * maxRadius

  const handleImageClick = (videoUrl: string) => {
    if (videoUrl) {
      setSelectedVideo(videoUrl)
    }
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  // Calculer la position de chaque image avec rotation
  const getImagePosition = (index: number, total: number) => {
    const baseAngle = (index * 2 * Math.PI) / total
    const angleInRadians = (baseAngle + (rotationAngle * Math.PI) / 180)

    return {
      x: expandRadius * Math.cos(angleInRadians),
      y: expandRadius * Math.sin(angleInRadians)
    }
  }

  return (
    <>
      <div ref={sectionRef} className="min-h-[50vh] bg-[#ffffff] dark:bg-black">
        <div className="min-h-[50vh] flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-[600px]">
            <div
              className={`w-full aspect-square mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${
                (isMobile || scrollProgress > 0.6) ? "border-2 border-[#e9e9e9] dark:border-gray-700" : ""
              }`}
            >
              <div
                className={`w-[85%] aspect-square rounded-full flex items-center justify-center relative transition-all duration-500 ${
                  (isMobile || scrollProgress > 0.2) ? "border-2 border-blue-100 dark:border-blue-800" : ""
                }`}
              >
                <div className="w-[80%] aspect-square rounded-full bg-gradient-to-r from-[#021157] via-[#fbbf24] to-[#f97316] p-0.5 flex items-center justify-center relative">
                  <div className="w-full h-full rounded-full bg-[#ffffff] dark:bg-black flex items-center justify-center relative">
                    {testimonialVideos.map((video, index) => {
                      const position = getImagePosition(index, testimonialVideos.length)
                      const images = [
                        "/images/galerie/vraiphoto/decouverte1.JPG",
                        "/images/galerie/vraiphoto/decouverte2.JPG",
                        "/images/galerie/vraiphoto/decouverte3.JPG",
                        "/images/galerie/vraiphoto/decouverte4.JPG",
                        "/images/galerie/vraiphoto/decouverte5.JPG",
                        "/images/galerie/vraiphoto/decouverte6.jpeg",
                        "/images/galerie/vraiphoto/decouverte7.JPG",
                        "/images/galerie/vraiphoto/decouverte9.JPG"
                      ]

                      return (
                        <div
                          key={video.id}
                          onClick={() => handleImageClick(video.videoUrl)}
                          className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-300 ease-out z-0 cursor-pointer hover:scale-110 hover:border-[#FFD700]"
                          style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                          }}
                        >
                          <img
                            src={images[index]}
                            alt={`Parapente ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-t-6 sm:border-t-8 border-t-transparent border-l-8 sm:border-l-12 border-l-[#021157] border-b-6 sm:border-b-8 border-b-transparent ml-1"></div>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                    <div
                      className={`flex flex-col items-center justify-center relative z-20 transition-opacity duration-500 px-4 max-w-full ${
                        (isMobile || scrollProgress > 0.5) ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-[#021157] text-center mb-2 font-pacifico max-w-full break-words">Ils ont volé avec</h1>
                      <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-[#021157] text-center mb-4 font-pacifico max-w-full break-words">Parapente Réunion</h1>

                      <p className="text-sm sm:text-base text-[#021157]/80 text-center max-w-xs mb-6">
                        Découvrez les témoignages de nos pilotes et passagers
                      </p>

                      <a
                        href="https://www.instagram.com/parapentereunion/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#FFD700] text-[#021157] rounded-full font-semibold text-xs sm:text-sm hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      >
                        En voir plus
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal vidéo */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 overflow-hidden"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-[#FFD700] transition-colors z-[10000]"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative w-full max-w-[95vw] md:max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
