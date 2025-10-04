export const metadata = {
  title: 'Mentions Légales | Parapente Réunion',
  description: 'Mentions légales et informations juridiques de Parapente Réunion, école de parapente à Saint-Leu, La Réunion',
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#021157] mb-8">
          Mentions Légales
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Éditeur du site</h2>
            <div className="text-slate-700 space-y-2">
              <p>
                <strong>Raison sociale :</strong> PARAPENTE REUNION EXPLOITATION
              </p>
              <p>
                <strong>Directeur de publication :</strong> Laurent Moretti
              </p>
              <p>
                <strong>Adresse :</strong> Pointe des Châteaux, 1 Rue Georges Pompidou, 97436 Saint-Leu, La Réunion
              </p>
              <p>
                <strong>Téléphone :</strong> 0692 82 92 92 / 0262 24 87 84
              </p>
              <p>
                <strong>Email :</strong> contact@parapente-reunion.fr
              </p>
              <p>
                <strong>SIRET :</strong> 441 206 018 00026
              </p>
              <p>
                <strong>RCS :</strong> Saint-Denis de La Réunion
              </p>
            </div>
          </section>

          {/* Développement et conception */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Développement et conception du site</h2>
            <div className="text-slate-700 space-y-2">
              <p>
                <strong>Créateur du site :</strong>{" "}<a href="https://digiqo.fr" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Digiqo.fr</a>{" "}(Romain CANO - romain@digiqo.fr)
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Hébergement</h2>
            <div className="text-slate-700 space-y-2">
              <p>
                Le site est hébergé par Vercel Inc., située à San Francisco, Californie, États-Unis.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Propriété intellectuelle</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété exclusive de Parapente Réunion, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Parapente Réunion.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Protection des données personnelles</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : contact@parapente-reunion.fr
              </p>
              <p>
                Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion des réservations et à l'amélioration de nos services. Elles sont destinées uniquement à Parapente Réunion et ne seront en aucun cas communiquées à des tiers.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Cookies</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En naviguant sur ce site, vous acceptez l'utilisation de ces cookies.
              </p>
              <p>
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Limitation de responsabilité</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Parapente Réunion s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p>
                Parapente Réunion ne saurait être tenu responsable des dommages directs ou indirects qui pourraient résulter de l'accès au site ou de l'utilisation de celui-ci, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-bold text-[#021157] mb-4">Droit applicable et juridiction compétente</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p>
                En cas de litige et à défaut d'accord amiable, le différend sera porté devant les tribunaux compétents de Saint-Denis de La Réunion.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
