'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT } from '@/lib/constants'

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Tarifs et réservations',
    href: '#',
    submenu: [
      { name: 'Vol Découverte', href: '/vol-decouverte' },
      { name: 'Vol Sunset', href: '/vol-sunset' },
      { name: 'Vol Marmaille', href: '/vol-marmaille' },
      { name: 'Formation', href: '/formation-parapente' },
    ]
  },
  { name: 'Boutique cadeau', href: '/cartes-cadeaux' },
  { name: 'A propos', href: '#a-propos' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

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
                  sizes="48px"
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
              <div
                key={item.name}
                className="relative group"
              >
                {item.submenu ? (
                  <>
                    <button className="text-sm font-semibold leading-6 text-[#021157] hover:text-[#FFD700] transition-colors flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#021157] hover:bg-gray-50 hover:text-[#FFD700] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-[#021157] hover:text-[#FFD700] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center justify-center px-4 py-2 bg-[#021157] hover:bg-[#021157]/90 text-white rounded-md font-medium transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              Appelez-nous
            </a>
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
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        className="w-full text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#021157] hover:bg-gray-50 transition-colors flex items-center justify-between"
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openSubmenu === item.name && (
                        <div className="pl-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm text-[#021157] hover:bg-gray-50 hover:text-[#FFD700] transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#021157] hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={`tel:${CONTACT.phone1}`}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#021157] hover:bg-[#021157]/90 text-white rounded-md font-medium transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Appelez-nous
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
