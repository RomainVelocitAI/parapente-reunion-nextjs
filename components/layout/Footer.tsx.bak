'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Facebook, Instagram, Calendar, Phone } from 'lucide-react'
import { CONTACT, HOURS, SOCIAL } from '@/lib/constants'

const footerLinks = {
  vols: [
    { name: 'Vol Découverte', href: '/#vols' },
    { name: 'Vol Marmaille', href: '/#vols' },
    { name: 'Vol Sunset', href: '/#vols' },
    { name: 'Cartes cadeaux', href: '/#cartes-cadeaux' },
  ],
  formation: [
    { name: 'Stage initiation', href: '/#stages' },
    { name: 'Stage perfectionnement', href: '/#stages' },
    { name: 'Brevet de pilote', href: '/#stages' },
    { name: 'Biplace pédagogique', href: '/#stages' },
  ],
  entreprise: [
    { name: 'À propos', href: '/#apropos' },
    { name: 'Notre équipe', href: '/#equipe' },
    { name: 'Galerie photos', href: '/#galerie' },
    { name: 'Contact', href: '/#contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full lg:max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Grid 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1: À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo.png"
                  alt="Parapente Réunion"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-pacifico)' }}>Parapente Réunion</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Première école professionnelle de parapente à La Réunion.
              3 générations de passionnés au service de votre vol.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Nos prestations</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">Vols</h4>
                <ul className="space-y-2">
                  {footerLinks.vols.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">Formation</h4>
                <ul className="space-y-2">
                  {footerLinks.formation.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Nous contacter</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <div className="text-sm">
                  <a href={`tel:${CONTACT.phone1}`} className="hover:text-white transition-colors block">
                    {CONTACT.phone1}
                  </a>
                  <a href={`tel:${CONTACT.phone2}`} className="hover:text-white transition-colors block">
                    {CONTACT.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <a href={`mailto:${CONTACT.email}`} className="text-sm hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1+Rue+Georges+Pompidou,+97436+Saint-Leu,+La+Réunion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  {CONTACT.address}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-sm">{HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-sm text-gray-400">
                © {currentYear} Parapente Réunion. Tous droits réservés.
              </p>
              <p className="text-xs text-gray-500">
                Propulsé par{' '}
                <a
                  href="https://digiqo.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Digiqo
                </a>
                {' '}- Ladi la fé zot pub
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
