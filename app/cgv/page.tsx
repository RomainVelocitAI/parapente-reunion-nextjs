export const metadata = {
  title: 'Conditions Générales de Vente | Parapente Réunion',
  description: 'Conditions générales de vente des vols en parapente biplace à La Réunion - Parapente Réunion',
}

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#021157] mb-8">
          Conditions Générales de Vente
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Article 1 - Objet */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 1 - Objet</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre PARAPENTE REUNION EXPLOITATION, immatriculée au RCS de Saint-Denis de La Réunion sous le numéro SIRET 441 206 018 00026, ci-après dénommée "Parapente Réunion" ou "le Prestataire", et toute personne physique ou morale, ci-après dénommée "le Client", souhaitant bénéficier des services proposés par Parapente Réunion.
              </p>
              <p>
                Les présentes CGV s'appliquent à tous les services de vols en parapente biplace proposés par Parapente Réunion, notamment les baptêmes de l'air, vols découverte, et stages de perfectionnement.
              </p>
            </div>
          </section>

          {/* Article 2 - Services */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 2 - Description des Services</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Parapente Réunion propose les services suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Baptême de l'air en parapente biplace :</strong> Vol d'initiation accompagné d'un moniteur diplômé d'État, d'une durée variable selon les conditions météorologiques (généralement 15 à 30 minutes)</li>
                <li><strong>Vols découverte :</strong> Vols plus longs permettant de découvrir les sensations du parapente</li>
                <li><strong>Stages et formations :</strong> Cours de perfectionnement pour pilotes confirmés</li>
                <li><strong>Prestations photos et vidéos :</strong> Captation du vol en option</li>
              </ul>
              <p>
                Tous les vols sont effectués sous réserve de conditions météorologiques favorables et sont encadrés par des moniteurs diplômés d'État.
              </p>
            </div>
          </section>

          {/* Article 3 - Tarifs */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 3 - Tarifs</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Les tarifs de nos prestations sont indiqués en euros toutes taxes comprises (TTC) et sont consultables sur notre site internet www.parapente-reunion.fr ainsi que dans nos locaux.
              </p>
              <p>
                Parapente Réunion se réserve le droit de modifier ses tarifs à tout moment. Toutefois, les prestations seront facturées sur la base des tarifs en vigueur au moment de la réservation.
              </p>
              <p>
                Les tarifs incluent :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>L'encadrement par un moniteur diplômé d'État</li>
                <li>La fourniture du matériel de vol (voile, sellette, casque)</li>
                <li>L'assurance responsabilité civile professionnelle</li>
                <li>Le transfert depuis le point de rendez-vous jusqu'au décollage (si applicable)</li>
              </ul>
            </div>
          </section>

          {/* Article 4 - Réservation */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 4 - Réservation et Confirmation</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                La réservation peut être effectuée :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Par téléphone au 06 92 82 92 92 ou 02 62 24 87 84</li>
                <li>Par email à l'adresse contact@parapente-reunion.fr</li>
                <li>Via le formulaire de contact sur notre site internet</li>
                <li>Directement dans nos locaux à Saint-Leu</li>
              </ul>
              <p>
                Toute réservation est considérée comme ferme et définitive dès réception du paiement intégral ou de l'acompte convenu. Une confirmation de réservation sera alors transmise au Client par email ou SMS.
              </p>
              <p>
                <strong>Important :</strong> Les vols sont soumis aux conditions météorologiques. En cas de conditions défavorables, Parapente Réunion se réserve le droit de reporter le vol à une date ultérieure en accord avec le Client.
              </p>
            </div>
          </section>

          {/* Article 5 - Modalités de Paiement */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 5 - Modalités de Paiement</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Le règlement des prestations peut être effectué :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>En espèces</li>
                <li>Par carte bancaire</li>
                <li>Par chèque (uniquement pour les réservations anticipées)</li>
                <li>Par virement bancaire</li>
              </ul>
              <p>
                Pour les réservations de groupes ou les stages, un acompte de 30% peut être demandé à la réservation, le solde étant exigible avant la prestation.
              </p>
              <p>
                Aucun vol ne sera effectué sans règlement préalable complet de la prestation.
              </p>
            </div>
          </section>

          {/* Article 6 - Annulation et Modification */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 6 - Annulation et Modification par le Client</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                <strong>Annulation à l'initiative du Client :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Annulation plus de 48 heures avant la prestation : remboursement intégral ou report sans frais</li>
                <li>Annulation entre 48 heures et 24 heures avant la prestation : retenue de 50% du montant versé</li>
                <li>Annulation moins de 24 heures avant la prestation ou absence du Client : aucun remboursement</li>
              </ul>
              <p>
                Toute demande d'annulation ou de modification doit être notifiée par téléphone ou par email.
              </p>
              <p>
                <strong>Annulation pour cause météorologique :</strong> En cas d'annulation du vol pour des raisons météorologiques (décision prise exclusivement par le moniteur pour des raisons de sécurité), le Client bénéficie d'un report à une date ultérieure ou d'un remboursement intégral.
              </p>
            </div>
          </section>

          {/* Article 7 - Conditions de Participation */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 7 - Conditions de Participation</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Pour participer à un vol en parapente biplace, le Client doit :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Être âgé d'au moins 5 ans (autorisation parentale obligatoire pour les mineurs)</li>
                <li>Avoir un poids compris entre 20 kg et 110 kg</li>
                <li>Être en bonne condition physique et ne présenter aucune contre-indication médicale (problèmes cardiaques, respiratoires graves, épilepsie, grossesse, etc.)</li>
                <li>Porter des chaussures fermées et des vêtements adaptés</li>
                <li>Suivre les consignes de sécurité données par le moniteur</li>
              </ul>
              <p>
                Le Client s'engage à informer Parapente Réunion de tout problème de santé ou condition particulière susceptible d'affecter la sécurité du vol.
              </p>
              <p>
                Le moniteur se réserve le droit de refuser l'embarquement d'un passager s'il estime que les conditions de sécurité ne sont pas réunies (état physique, consignes non respectées, conditions météorologiques).
              </p>
            </div>
          </section>

          {/* Article 8 - Assurance et Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 8 - Assurance et Responsabilité</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Parapente Réunion est couvert par une assurance responsabilité civile professionnelle couvrant les dommages causés aux tiers dans le cadre de son activité.
              </p>
              <p>
                Le Client bénéficie également d'une assurance individuelle accident couvrant les dommages corporels subis pendant le vol.
              </p>
              <p>
                Toutefois, le parapente étant une activité sportive comportant des risques inhérents, le Client reconnaît avoir été informé de ces risques et accepte de les prendre en participant au vol.
              </p>
              <p>
                Il est fortement recommandé au Client de souscrire une assurance personnelle complémentaire couvrant les activités sportives à risque.
              </p>
            </div>
          </section>

          {/* Article 9 - Droit à l'Image */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 9 - Droit à l'Image</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Des photos et vidéos peuvent être réalisées pendant le vol. Ces supports peuvent être utilisés par Parapente Réunion à des fins promotionnelles (site internet, réseaux sociaux, brochures) sauf opposition écrite du Client.
              </p>
              <p>
                Le Client dispose d'un droit d'accès, de modification, de rectification et de suppression des données le concernant conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au RGPD.
              </p>
            </div>
          </section>

          {/* Article 10 - Force Majeure */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 10 - Force Majeure</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Parapente Réunion ne pourra être tenu responsable de l'inexécution de ses obligations en cas de force majeure, notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conditions météorologiques défavorables (vent, pluie, brouillard, orages)</li>
                <li>Catastrophes naturelles (cyclones, éruptions volcaniques)</li>
                <li>Réglementations aériennes ou restrictions d'espace aérien</li>
                <li>Incidents techniques imprévus affectant le matériel de vol</li>
              </ul>
              <p>
                Dans ces cas, le Client bénéficiera d'un report de sa prestation à une date ultérieure ou d'un remboursement intégral.
              </p>
            </div>
          </section>

          {/* Article 11 - Réclamations */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 11 - Réclamations</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Toute réclamation relative à l'exécution des prestations doit être adressée par écrit à :
              </p>
              <p className="font-semibold">
                Parapente Réunion<br />
                1 Rue Georges Pompidou<br />
                97436 Saint-Leu, La Réunion<br />
                Email : contact@parapente-reunion.fr
              </p>
              <p>
                Parapente Réunion s'engage à répondre dans un délai de 15 jours ouvrés à compter de la réception de la réclamation.
              </p>
            </div>
          </section>

          {/* Article 12 - Droit Applicable */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 12 - Droit Applicable et Juridiction Compétente</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Les présentes Conditions Générales de Vente sont régies par le droit français.
              </p>
              <p>
                En cas de litige et à défaut d'accord amiable, le différend sera porté devant les tribunaux compétents de Saint-Denis de La Réunion.
              </p>
            </div>
          </section>

          {/* Article 13 - Acceptation */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Article 13 - Acceptation des CGV</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                La réservation et le paiement d'une prestation impliquent l'acceptation pleine et entière des présentes Conditions Générales de Vente par le Client.
              </p>
              <p>
                Le Client reconnaît avoir pris connaissance de ces conditions et les accepter sans réserve.
              </p>
            </div>
          </section>

          {/* Date de mise à jour */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 italic">
              Dernière mise à jour : Janvier 2025
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
