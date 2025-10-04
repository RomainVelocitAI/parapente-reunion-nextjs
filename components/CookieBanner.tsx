'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Shield, BarChart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: Date.now()
  })

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const savedConsent = localStorage.getItem('cookie-consent')
    if (!savedConsent) {
      // Afficher le bandeau après 1 seconde
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consentData))
    setIsVisible(false)

    // Activer/désactiver les services selon le consentement
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (consentData.analytics) {
        // Activer GA4 si configuré
        console.log('Analytics activés')
      }

      // Marketing/Publicité
      if (consentData.marketing) {
        console.log('Marketing activé')
      }
    }
  }

  const acceptAll = () => {
    const fullConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }
    saveConsent(fullConsent)
  }

  const acceptNecessary = () => {
    const minimalConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }
    saveConsent(minimalConsent)
  }

  const acceptSelected = () => {
    saveConsent({ ...consent, timestamp: Date.now() })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-white border-2 border-[#021157] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 md:p-8">
              {/* En-tête */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Cookie className="w-8 h-8 text-[#FFD700]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#021157]">
                    Protection de vos données
                  </h2>
                </div>
                <button
                  onClick={acceptNecessary}
                  className="text-[#021157]/60 hover:text-[#021157] transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Message principal */}
              <div className="mb-6">
                <p className="text-[#021157]/80 text-lg mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site,
                  analyser notre audience et personnaliser nos contenus. Vous pouvez choisir
                  d'accepter tous les cookies ou personnaliser vos préférences.
                </p>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-[#021157] font-semibold underline hover:no-underline transition-all"
                >
                  {showDetails ? 'Masquer les détails' : 'En savoir plus'}
                </button>
              </div>

              {/* Détails des cookies */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 space-y-4"
                  >
                    {/* Cookies nécessaires */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-600 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-[#021157]">Cookies nécessaires</h3>
                            <span className="text-sm text-green-600 font-semibold">Toujours actifs</span>
                          </div>
                          <p className="text-sm text-[#021157]/70">
                            Essentiels au fonctionnement du site (panier, sécurité, préférences).
                            Ces cookies ne peuvent pas être désactivés.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Cookies analytiques */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <BarChart className="w-5 h-5 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-[#021157]">Cookies analytiques</h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={consent.analytics}
                                onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                          <p className="text-sm text-[#021157]/70">
                            Nous aident à comprendre comment les visiteurs utilisent le site
                            (Google Analytics). Données anonymisées.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Cookies marketing */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <Cookie className="w-5 h-5 text-orange-600 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-[#021157]">Cookies marketing</h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={consent.marketing}
                                onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                            </label>
                          </div>
                          <p className="text-sm text-[#021157]/70">
                            Permettent d'afficher des publicités et contenus pertinents
                            (Meta Pixel, Google Ads).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Liens légaux */}
                    <div className="text-sm text-[#021157]/70 pt-2">
                      Pour plus d'informations, consultez notre{' '}
                      <a href="/mentions-legales" className="text-[#021157] underline hover:no-underline">
                        politique de confidentialité
                      </a>
                      .
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-[#FFD700] text-[#021157] px-6 py-3 rounded-xl font-bold text-lg hover:bg-[#FFC700] transition-all hover:scale-105 shadow-lg"
                >
                  Tout accepter
                </button>
                <button
                  onClick={acceptNecessary}
                  className="flex-1 bg-white text-[#021157] px-6 py-3 rounded-xl font-bold text-lg border-2 border-[#021157] hover:bg-gray-50 transition-all"
                >
                  Nécessaires uniquement
                </button>
                {showDetails && (
                  <button
                    onClick={acceptSelected}
                    className="flex-1 bg-[#021157] text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-[#021157]/90 transition-all"
                  >
                    Confirmer ma sélection
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
