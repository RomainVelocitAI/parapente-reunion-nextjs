'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [sessionData, setSessionData] = useState<any>(null)

  useEffect(() => {
    if (sessionId) {
      // Récupérer les détails de la session
      fetch(`/api/checkout/session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSessionData(data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Erreur lors de la récupération de la session:', error)
          setLoading(false)
        })
    }
  }, [sessionId])

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#021157] mx-auto"></div>
          <p className="mt-4 text-[#021157]">Chargement...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Icône de succès */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#021157] mb-4">
            Paiement réussi !
          </h1>

          {/* Message */}
          <p className="text-lg text-[#021157]/80 mb-8">
            Merci pour votre achat ! Vous allez recevoir un email de confirmation
            avec vos cartes cadeaux dans quelques instants.
          </p>

          {/* Numéro de commande */}
          {sessionData?.order_number && (
            <div className="bg-[#021157] text-white rounded-lg p-6 mb-8">
              <p className="text-sm opacity-80 mb-1">Numéro de commande</p>
              <p className="text-3xl font-bold tracking-wider">{sessionData.order_number}</p>
            </div>
          )}

          {/* Détails de la commande */}
          {sessionData?.line_items && sessionData.line_items.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="font-bold text-[#021157] mb-4">Votre commande :</h2>
              <div className="space-y-3">
                {sessionData.line_items.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between items-center text-[#021157]/80">
                    <span>{item.description} × {item.quantity}</span>
                    <span className="font-bold">{((item.amount_total || 0) / 100).toFixed(2)}€</span>
                  </div>
                ))}
                <div className="border-t pt-3 flex justify-between items-center font-bold text-[#021157]">
                  <span>Total</span>
                  <span className="text-xl">{sessionData.amount_total ? (sessionData.amount_total / 100).toFixed(2) : '0.00'}€</span>
                </div>
              </div>
            </div>
          )}

          {/* Informations */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold text-[#021157] mb-4">Prochaines étapes :</h2>
            <ul className="space-y-3 text-[#021157]/80">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Vérifiez votre boîte mail (et les spams) pour le email de confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Vos cartes cadeaux sont valables 1 an à partir de la date d'achat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Contactez-nous pour réserver votre vol au {CONTACT.phone1}</span>
              </li>
            </ul>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#021157] text-white font-bold hover:bg-[#021157]/90 transition-all"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[#021157] text-[#021157] font-bold hover:bg-gray-50 transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Info complémentaire */}
        <div className="mt-8 text-center text-sm text-[#021157]/60">
          <p>
            Une question ? Contactez-nous par email à{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-[#021157] underline">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#021157] mx-auto"></div>
          <p className="mt-4 text-[#021157]">Chargement...</p>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}
