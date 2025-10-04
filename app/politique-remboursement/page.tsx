export const metadata = {
  title: 'Politique de Remboursement | Parapente Réunion',
  description: 'Conditions de remboursement et d\'annulation pour les vols en parapente à La Réunion - Parapente Réunion',
}

export default function PolitiqueRemboursementPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#021157] mb-8">
          Politique de Remboursement
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <div className="text-slate-700 space-y-4">
              <p>
                Chez Parapente Réunion, nous nous efforçons de vous offrir la meilleure expérience de vol possible. Notre politique de remboursement a été conçue pour être équitable et transparente, tout en tenant compte des contraintes spécifiques liées à notre activité (conditions météorologiques, disponibilité des moniteurs, etc.).
              </p>
            </div>
          </section>

          {/* Conditions Générales de Remboursement */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Conditions Générales de Remboursement</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Les remboursements sont traités selon les modalités suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les remboursements sont effectués sur le même moyen de paiement utilisé lors de la réservation initiale</li>
                <li>Le délai de traitement d'un remboursement est généralement de 7 à 14 jours ouvrés à compter de la validation de la demande</li>
                <li>Tous les remboursements sont effectués en euros (€)</li>
                <li>Pour toute demande de remboursement, merci de nous contacter par téléphone au 06 92 82 92 92 ou par email à contact@parapente-reunion.fr</li>
              </ul>
            </div>
          </section>

          {/* Annulation à l'Initiative du Client */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Annulation à l'Initiative du Client</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Les conditions de remboursement en cas d'annulation par le Client sont les suivantes :
              </p>

              <div className="bg-[#FFD700]/10 border-l-4 border-[#FFD700] p-6 my-6">
                <h3 className="text-xl font-bold text-[#021157] mb-3">Annulation Plus de 48 Heures Avant le Vol</h3>
                <p>
                  <strong>Remboursement : 100%</strong>
                </p>
                <p className="mt-2">
                  Si vous annulez votre réservation plus de 48 heures avant la date et l'heure prévues du vol, vous bénéficiez d'un remboursement intégral ou d'un report gratuit de votre vol à une date ultérieure de votre choix (sous réserve de disponibilité).
                </p>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-400 p-6 my-6">
                <h3 className="text-xl font-bold text-[#021157] mb-3">Annulation Entre 48 Heures et 24 Heures Avant le Vol</h3>
                <p>
                  <strong>Remboursement : 50%</strong>
                </p>
                <p className="mt-2">
                  Si vous annulez votre réservation entre 48 heures et 24 heures avant la date et l'heure prévues du vol, vous bénéficiez d'un remboursement de 50% du montant total versé.
                </p>
                <p className="mt-2 text-sm italic">
                  Alternativement, vous pouvez choisir de reporter votre vol moyennant le paiement de 50% du tarif initial à titre de frais de modification.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                <h3 className="text-xl font-bold text-[#021157] mb-3">Annulation Moins de 24 Heures Avant le Vol</h3>
                <p>
                  <strong>Remboursement : 0%</strong>
                </p>
                <p className="mt-2">
                  Si vous annulez votre réservation moins de 24 heures avant la date et l'heure prévues du vol, ou si vous ne vous présentez pas au rendez-vous (no-show), aucun remboursement ne sera effectué.
                </p>
                <p className="mt-2 text-sm italic">
                  Cette politique s'applique car nos moniteurs et notre matériel ont été spécifiquement réservés pour votre vol, ce qui nous empêche de proposer ce créneau à d'autres clients.
                </p>
              </div>

              <p className="font-semibold mt-6">
                Comment annuler ?
              </p>
              <p>
                Pour annuler votre réservation, contactez-nous au plus tôt par :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Téléphone : 06 92 82 92 92 ou 02 62 24 87 84</li>
                <li>Email : contact@parapente-reunion.fr</li>
              </ul>
              <p className="text-sm italic mt-4">
                Important : L'annulation est considérée comme effective à partir du moment où nous avons reçu et confirmé votre demande d'annulation. Les horaires de réception de votre demande font foi pour l'application des délais mentionnés ci-dessus.
              </p>
            </div>
          </section>

          {/* Annulation pour Cause Météorologique */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Annulation pour Cause Météorologique</h2>
            <div className="text-slate-700 space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <p className="font-bold text-[#021157] mb-2">
                  Remboursement : 100% OU Report Gratuit
                </p>
                <p>
                  La sécurité de nos passagers est notre priorité absolue. Si les conditions météorologiques ne permettent pas d'effectuer le vol en toute sécurité, nous annulerons le vol.
                </p>
              </div>

              <p>
                Dans ce cas, vous avez le choix entre :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Un remboursement intégral à 100%</strong> du montant versé, sans aucun frais</li>
                <li><strong>Un report gratuit de votre vol</strong> à une date ultérieure de votre choix (sous réserve de disponibilité)</li>
              </ul>

              <p className="mt-4 font-semibold">
                Décision Météorologique
              </p>
              <p>
                La décision d'annuler un vol pour raisons météorologiques est prise exclusivement par nos moniteurs diplômés d'État, qui évaluent en permanence :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La force et la direction du vent</li>
                <li>La visibilité</li>
                <li>Les précipitations</li>
                <li>Les turbulences atmosphériques</li>
                <li>Tout autre facteur pouvant affecter la sécurité du vol</li>
              </ul>

              <p className="text-sm italic mt-4 text-slate-600">
                Note : La météo à La Réunion peut être très changeante, particulièrement en montagne. Il arrive que les conditions soient favorables le matin mais se dégradent l'après-midi, ou inversement. Nous vous recommandons de rester flexible sur vos horaires si possible.
              </p>
            </div>
          </section>

          {/* Annulation pour Raisons Médicales ou de Santé */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Annulation pour Raisons Médicales ou de Santé</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Si vous devez annuler votre vol pour des raisons médicales ou de santé (maladie, blessure, contre-indication médicale), nous pouvons étudier votre demande de remboursement au cas par cas.
              </p>
              <p>
                <strong>Documents requis :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Un certificat médical attestant de l'impossibilité de pratiquer l'activité</li>
                <li>Tout document justifiant de votre état de santé</li>
              </ul>
              <p>
                Sur présentation de ces documents, nous pourrons vous proposer :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Un report gratuit de votre vol à une date ultérieure</li>
                <li>Un remboursement partiel ou total selon la situation</li>
              </ul>
              <p className="text-sm italic text-slate-600">
                Important : Si vous souffrez d'une condition médicale préexistante susceptible d'affecter votre participation au vol, nous vous recommandons de souscrire une assurance annulation lors de votre réservation.
              </p>
            </div>
          </section>

          {/* Refus d'Embarquement par le Moniteur */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Refus d'Embarquement par le Moniteur</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Le moniteur se réserve le droit de refuser l'embarquement d'un passager pour des raisons de sécurité, notamment dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Non-respect des conditions de participation (poids, âge, état de santé)</li>
                <li>État d'ébriété ou influence de substances</li>
                <li>Comportement inapproprié ou dangereux</li>
                <li>Refus de suivre les consignes de sécurité</li>
                <li>Conditions physiques non adaptées au vol</li>
                <li>Équipement non conforme (chaussures ouvertes, vêtements inadaptés)</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                <p className="font-bold text-[#021157] mb-2">
                  Remboursement : 0%
                </p>
                <p>
                  En cas de refus d'embarquement pour l'une des raisons ci-dessus, aucun remboursement ne sera effectué.
                </p>
              </div>

              <p className="text-sm italic text-slate-600">
                Pour éviter tout désagrément, merci de lire attentivement les conditions de participation avant votre réservation et de vous assurer que vous remplissez tous les critères requis.
              </p>
            </div>
          </section>

          {/* Bons Cadeaux et Cartes Cadeaux */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Bons Cadeaux et Cartes Cadeaux</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Les bons cadeaux et cartes cadeaux vendus par Parapente Réunion sont soumis aux conditions suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Validité :</strong> 12 mois à compter de la date d'achat</li>
                <li><strong>Remboursement :</strong> Les bons cadeaux ne sont ni remboursables ni échangeables contre de l'argent</li>
                <li><strong>Report :</strong> Le vol réservé avec un bon cadeau peut être reporté selon les mêmes conditions que les réservations classiques</li>
                <li><strong>Prolongation :</strong> Sur demande et justification, la validité peut être exceptionnellement prolongée (frais de prolongation possibles)</li>
              </ul>
              <p className="text-sm italic text-slate-600">
                Conseil : Si vous offrez un bon cadeau, assurez-vous que la personne bénéficiaire remplit les conditions de participation (poids, âge, santé) et qu'elle n'a pas de contre-indication médicale.
              </p>
            </div>
          </section>

          {/* Prestations Optionnelles */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Prestations Optionnelles (Photos/Vidéos)</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Les prestations photos et vidéos proposées en option suivent les mêmes conditions de remboursement que le vol principal :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Si le vol est annulé, les options photos/vidéos sont automatiquement annulées et remboursées intégralement</li>
                <li>Si le vol est reporté, les options sont reportées avec le vol</li>
                <li>Si le vol a lieu mais que les conditions ne permettent pas la prise de photos/vidéos (météo, problème technique), un remboursement ou un avoir sera proposé pour ces prestations uniquement</li>
              </ul>
            </div>
          </section>

          {/* Modalités de Remboursement */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Modalités Pratiques de Remboursement</h2>
            <div className="text-slate-700 space-y-4">
              <p className="font-semibold">
                Comment demander un remboursement ?
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contactez-nous par téléphone (06 92 82 92 92) ou par email (contact@parapente-reunion.fr)</li>
                <li>Indiquez votre numéro de réservation et le motif de votre demande</li>
                <li>Fournissez les documents justificatifs si nécessaire (certificat médical, etc.)</li>
                <li>Nous étudierons votre demande et vous confirmerons le montant du remboursement dans un délai de 48 heures</li>
              </ol>

              <p className="font-semibold mt-6">
                Délais de Remboursement
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Paiement par carte bancaire :</strong> 7 à 14 jours ouvrés après validation de la demande</li>
                <li><strong>Paiement par chèque :</strong> Un nouveau chèque sera établi sous 7 jours ouvrés</li>
                <li><strong>Paiement en espèces :</strong> Remboursement en espèces immédiat dans nos locaux ou virement bancaire sous 7 jours</li>
                <li><strong>Virement bancaire :</strong> 3 à 7 jours ouvrés après validation</li>
              </ul>

              <p className="text-sm italic text-slate-600 mt-4">
                Note : Les délais indiqués sont des délais de traitement de notre part. Le délai réel de réception des fonds sur votre compte peut varier selon votre établissement bancaire.
              </p>
            </div>
          </section>

          {/* Cas Particuliers */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Cas Particuliers et Circonstances Exceptionnelles</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Certaines situations exceptionnelles peuvent donner lieu à des conditions de remboursement particulières :
              </p>

              <p className="font-semibold mt-4">
                Catastrophes Naturelles et Événements Majeurs
              </p>
              <p>
                En cas de catastrophe naturelle (cyclone, éruption volcanique, etc.) ou d'événement majeur (fermeture des espaces aériens, confinement, etc.), nous appliquerons une politique de remboursement ou de report flexible selon la situation.
              </p>

              <p className="font-semibold mt-4">
                Annulations de Groupe
              </p>
              <p>
                Pour les réservations de groupe (à partir de 5 personnes), des conditions spécifiques peuvent s'appliquer. Merci de nous contacter pour connaître les modalités adaptées à votre réservation.
              </p>

              <p className="font-semibold mt-4">
                Litiges
              </p>
              <p>
                En cas de désaccord sur les conditions de remboursement, nous nous engageons à rechercher une solution amiable dans les plus brefs délais. Si aucune solution amiable n'est trouvée, le litige sera porté devant les tribunaux compétents de Saint-Denis de La Réunion.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Nous Contacter</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Pour toute question concernant notre politique de remboursement ou pour effectuer une demande de remboursement, n'hésitez pas à nous contacter :
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="font-semibold text-[#021157]">Parapente Réunion</p>
                <p className="mt-2">1 Rue Georges Pompidou<br />97436 Saint-Leu, La Réunion</p>
                <p className="mt-2">
                  <strong>Téléphone :</strong> 06 92 82 92 92 / 02 62 24 87 84
                </p>
                <p>
                  <strong>Email :</strong> contact@parapente-reunion.fr
                </p>
                <p className="mt-2">
                  <strong>Horaires :</strong> Lundi - Dimanche : 08h00 - 18h00
                </p>
              </div>
            </div>
          </section>

          {/* Date de mise à jour */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 italic">
              Dernière mise à jour : Janvier 2025
            </p>
            <p className="text-sm text-slate-500 italic mt-2">
              Parapente Réunion se réserve le droit de modifier cette politique de remboursement à tout moment. Les modifications entreront en vigueur dès leur publication sur le site internet. Les réservations déjà effectuées restent soumises aux conditions en vigueur au moment de la réservation.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
