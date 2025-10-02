'use client'

import React from 'react'
import Image from 'next/image'

interface ImageAutoSliderProps {
  images: string[]
  interval?: number
  className?: string
}

export const ImageAutoSlider = ({ images, interval = 20, className = '' }: ImageAutoSliderProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <div className={`w-full relative overflow-hidden ${className}`}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-right-${interval} {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .infinite-scroll-${interval} {
            animation: scroll-right-${interval} ${interval}s linear infinite;
            will-change: transform;
          }

          .scroll-container-mask {
            -webkit-mask-image: linear-gradient(
              90deg,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
            mask-image: linear-gradient(
              90deg,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
          }

          .image-item-slider {
            transition: transform 0.3s ease, filter 0.3s ease;
          }

          .image-item-slider:hover {
            transform: scale(1.05);
            filter: brightness(1.1);
          }
        `
      }} />

      {/* Scrolling images container */}
      <div className="scroll-container-mask w-full py-8">
        <div className={`infinite-scroll-${interval} flex gap-6`} style={{ width: 'max-content' }}>
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="image-item-slider flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={image}
                alt={`Image ${(index % images.length) + 1}`}
                width={320}
                height={320}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
