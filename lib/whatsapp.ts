import { CONTACT } from './constants'

/**
 * Génère un lien WhatsApp avec un message pré-rempli
 * @param message Le message à envoyer
 * @returns URL WhatsApp formatée
 */
export function getWhatsAppLink(message: string): string {
  // Retirer le + du numéro (wa.me attend juste les chiffres)
  const phone = CONTACT.whatsapp.replace('+', '')
  // Encoder le message exactement comme dans l'exemple qui fonctionne
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

/**
 * Messages WhatsApp pré-définis pour chaque type de contact
 */
export const WHATSAPP_MESSAGES = {
  general: "Bonjour, je souhaite réserver un vol en parapente",
  volDecouverte: "Bonjour, je souhaite réserver un Vol Découverte",
  volSunset: "Bonjour, je souhaite réserver un Vol Sunset",
  volMarmaille: "Bonjour, je souhaite réserver un Vol Marmaille",
  formation: "Bonjour, je souhaite obtenir des informations sur la formation parapente",
  carteCadeau: "Bonjour, j'aimerais commander une carte cadeau",
  info: "Bonjour, j'aimerais obtenir des informations",
  reservation: "Bonjour, je souhaite réserver un vol"
}
