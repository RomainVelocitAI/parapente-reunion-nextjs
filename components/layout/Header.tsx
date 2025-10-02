'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT } from '@/lib/constants'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Vols découverte', href: '/#vols' },
  { name: 'Stages', href: '/#stages' },
  { name: 'Photos & Vidéos', href: '/#galerie' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 w-12 transition-transform group-hover:scale-110">
                <Image
                  src="/images/logo.png"
                  alt="Parapente Réunion"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-[#021157]" style={{ fontFamily: 'var(--font-pacifico)' }}>Parapente Réunion</span>
              </div>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-[#021157] hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href={`tel:${CONTACT.phone1}`}>
                <Phone className="mr-2 h-4 w-4" />
                {CONTACT.phone1}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              </span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 mt-2 pt-4 pb-6">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#021157] hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <a href={`tel:${CONTACT.phone1}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Appelez-nous
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
