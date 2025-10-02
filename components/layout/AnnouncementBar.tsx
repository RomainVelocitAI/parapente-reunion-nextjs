'use client'

import { useState } from 'react'
import { X, Gift } from 'lucide-react'
import Link from 'next/link'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex-1 flex items-center justify-center space-x-3">
            <Gift className="h-4 w-4 flex-shrink-0" />
            <p className="text-sm font-medium">
              <span className="hidden sm:inline">Offrez un vol inoubliable ! </span>
              <Link href="/#cartes-cadeaux" className="underline underline-offset-2 hover:no-underline">
                Découvrez nos cartes cadeaux →
              </Link>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Fermer l'annonce"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
