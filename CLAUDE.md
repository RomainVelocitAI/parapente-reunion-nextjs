# Parapente Réunion - Site Web Next.js

## Vue d'ensemble du projet

**Nom:** Parapente Réunion
**Type:** Site web commercial de réservation de vols en parapente
**Localisation:** Saint-Leu, La Réunion (974)
**Version:** 0.1.0
**Statut:** En développement actif

### Description
Site web moderne pour une école de parapente à La Réunion proposant des vols tandem, formations et cartes cadeaux. Le site met l'accent sur l'expérience utilisateur avec des animations avancées, des vidéos immersives et une intégration e-commerce Stripe.

### Public cible
- Touristes et résidents de La Réunion cherchant une activité de parapente
- Personnes souhaitant offrir un vol en cadeau
- Futurs pilotes intéressés par une formation

### Fonctionnalités principales
- ✅ Présentation des différents types de vols (Découverte, Sunset, Marmaille, Formation)
- ✅ Système de cartes cadeaux avec paiement Stripe
- ✅ Design responsive avec animations Framer Motion
- ✅ Grille interactive de services avec vidéos
- ✅ Interface multilingue (français)
- ✅ Optimisation SEO pour le référencement local
- 🚧 Système de réservation en ligne (en développement)
- 🚧 Galerie photos et vidéos complète

---

## Stack technique

### Frontend
- **Framework:** Next.js 15.5.4 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS v4 avec PostCSS
- **Animations:**
  - Framer Motion 12.23.22
  - react-scroll-parallax 3.5.0
  - react-intersection-observer 9.16.0
- **UI Components:**
  - Radix UI (primitives)
  - Lucide React (icônes)
  - Composants personnalisés avec variants (CVA)
- **Fonts:** Google Fonts (Inter, Pacifico)

### Backend & Services
- **E-commerce:** Stripe 19.0.0 (@stripe/stripe-js 8.0.0)
- **API Routes:** Next.js API routes serverless
- **Webhooks:** Stripe webhook handlers
- **Hosting:** Netlify (configuration présente)

### Outils de développement
- **Build Tool:** Turbopack (Next.js intégré)
- **Linter:** ESLint 9.x avec config Next.js
- **Type Checking:** TypeScript strict mode
- **Package Manager:** npm
- **Git:** Repository local initialisé

---

## Architecture du projet

### Structure des dossiers

```
parapente-site/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal (Header, Footer)
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Styles globaux
│   ├── api/                     # API Routes
│   │   ├── checkout/           # Routes Stripe checkout
│   │   └── webhooks/           # Webhooks Stripe
│   ├── vol-decouverte/         # Page Vol Découverte
│   ├── vol-sunset/             # Page Vol Sunset
│   ├── vol-marmaille/          # Page Vol Marmaille
│   ├── formation-parapente/    # Page Formation
│   └── cartes-cadeaux/         # Page Cartes Cadeaux + Success
│
├── components/                   # Composants React
│   ├── ui/                      # Composants UI réutilisables
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── carousel.tsx
│   │   └── dynamic-frame-layout.tsx  # Grille interactive principale
│   ├── layout/                  # Composants de mise en page
│   │   ├── Header.tsx          # Navigation principale
│   │   ├── Footer.tsx          # Footer avec liens et infos
│   │   └── AnnouncementBar.tsx # Barre d'annonce
│   ├── home/                    # Composants page d'accueil
│   │   ├── HeroVideo.tsx       # Hero avec vidéo
│   │   ├── ServicesGrid.tsx    # Grille 2x2 des services
│   │   ├── GiftCards.tsx       # Section cartes cadeaux
│   │   ├── ScrollyStats.tsx    # Stats avec scroll
│   │   └── MoniteursSection.tsx # Section moniteurs
│   ├── heroes/                  # Hero sections par page
│   └── galleries/               # Galeries par service
│
├── lib/                         # Utilitaires et helpers
│   ├── constants.ts            # Constantes (contact, prix, couleurs)
│   ├── utils.ts                # Utilitaires (cn pour Tailwind)
│   ├── whatsapp.ts             # Helpers WhatsApp
│   └── animations.ts           # Configurations animations
│
├── public/                      # Assets statiques
│   ├── images/                 # Images (logo, frames, hero)
│   ├── videos/                 # Vidéos locales
│   └── *.svg                   # Icônes SVG
│
├── data/                        # Données structurées (vide pour l'instant)
│
├── .env.local                   # Variables d'environnement
├── next.config.ts              # Configuration Next.js
├── tsconfig.json               # Configuration TypeScript
├── tailwind.config.ts          # Configuration Tailwind (si présent)
├── components.json             # Configuration shadcn/ui
├── netlify.toml                # Configuration Netlify
└── package.json                # Dépendances et scripts
```

### Patterns d'organisation

#### Composants
- **Atomic Design partiel:**
  - `ui/` → Composants atomiques réutilisables
  - `layout/` → Composants de structure
  - `home/` → Composants spécifiques à la page d'accueil
  - `heroes/`, `galleries/` → Composants par domaine métier

#### Routing
- **App Router (Next.js 15):** Routing basé sur les fichiers
- **Pages dynamiques:** Une page par type de vol
- **API Routes:** Gestion des paiements et webhooks

#### State Management
- **Client Components:** `'use client'` pour interactivité
- **React Hooks:** useState, useEffect, useRef
- **Context API:** Non utilisé actuellement (composants autonomes)

#### Data Flow
- **Props drilling:** Transmission simple pour petits composants
- **Constants centralisés:** `lib/constants.ts` pour données partagées
- **API Routes:** Communication serveur pour Stripe

---

## Guides de développement

### Conventions de code

#### Style et formatage
- **Indentation:** 2 espaces
- **Quotes:** Simple quotes pour JSX, doubles pour TS
- **Semi-colons:** Optionnels (configuration ESLint)
- **Naming:**
  - Composants: PascalCase (`ServicesGrid.tsx`)
  - Fichiers utils: camelCase (`constants.ts`)
  - CSS classes: kebab-case via Tailwind

#### Composants React
```tsx
// Pattern standard
'use client' // Si nécessaire

import { useState } from 'react'
import { ComponentProps } from './types' // Types séparés si complexe

export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  const [state, setState] = useState()

  return (
    <div className="tailwind-classes">
      {/* Contenu */}
    </div>
  )
}
```

#### TypeScript
- **Strict mode activé**
- **Typage explicite** pour props et fonctions publiques
- **Interfaces** pour les types complexes
- **Type inference** pour variables locales simples

### Composants clés

#### `dynamic-frame-layout.tsx`
Composant central de la grille interactive 2x2 des services.

**Fonctionnalités:**
- Layout grid responsive
- Hover effects avec agrandissement
- Lecture vidéo automatique
- Frames décoratives personnalisables
- Call-to-action avec bouton WhatsApp

**Usage:**
```tsx
<DynamicFrameLayout
  frames={servicesData}
  showFrames={false}
  hoverSize={8}
  gapSize={16}
/>
```

#### `Header.tsx`
Navigation principale sticky avec:
- Logo et nom de marque
- Menu desktop avec submenu
- Menu mobile responsive
- Bouton de contact WhatsApp

#### `HeroVideo.tsx`
Section hero avec:
- Vidéo background fullscreen
- Overlay texte avec animations
- CTA principal
- Scroll indicator

### Système de design

#### Couleurs brand
```ts
// lib/constants.ts
export const COLORS = {
  primary: "#0EA5E9",    // Bleu ciel
  secondary: "#F97316",  // Orange sunset
  neutral: "#334155",    // Gris ardoise
  success: "#10B981",    // Vert
  error: "#EF4444"       // Rouge
}
```

#### Typographie
- **Font primaire:** Inter (variable)
- **Font décorative:** Pacifico (titres, logo)
- **Classes Tailwind:** Responsive text sizing

#### Espacements
- **Container max-width:** 7xl (1280px)
- **Sections padding:** py-20 (vertical), px-4 (horizontal)
- **Grid gap:** 16px (customizable)

### Testing
**Statut actuel:** Pas de tests configurés

**Recommandations futures:**
- Jest + React Testing Library pour composants
- Playwright pour E2E
- Stripe webhooks testing avec CLI

### Workflow Git
```bash
# Développement local
git add .
git commit -m "feat: description"
git push origin main

# Branches feature (recommandé)
git checkout -b feature/nom-feature
git commit -m "feat: nouvelle feature"
git push origin feature/nom-feature
```

**Convention de commits:**
- `feat:` Nouvelles fonctionnalités
- `fix:` Corrections de bugs
- `style:` Modifications CSS/UI
- `refactor:` Refactoring code
- `docs:` Documentation

---

## Configuration et environnement

### Variables d'environnement requises

```env
# Stripe (Mode TEST par défaut)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# URLs (production)
NEXT_PUBLIC_BASE_URL=https://parapente-reunion.fr
```

### Installation et démarrage

```bash
# Installation des dépendances
npm install

# Développement local (avec Turbopack)
npm run dev
# Accès: http://localhost:3000 ou http://0.0.0.0:3000

# Build de production
npm build

# Démarrer en production
npm start

# Lint
npm run lint
```

### Configuration Stripe locale

**Voir:** [STRIPE_SETUP.md](./STRIPE_SETUP.md)

**Quick start:**
```bash
# Terminal 1: Next.js
npm run dev

# Terminal 2: Stripe webhooks
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### Déploiement Netlify

**Configuration:** `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Variables d'environnement Netlify:**
- Ajouter les mêmes variables que `.env.local`
- Utiliser les clés de **production** Stripe (pk_live_, sk_live_)
- Configurer le webhook endpoint production

---

## Fichiers et répertoires importants

### Configuration

- **[package.json](./package.json)** - Dépendances et scripts npm
- **[tsconfig.json](./tsconfig.json)** - Configuration TypeScript (strict, paths alias)
- **[next.config.ts](./next.config.ts)** - Configuration Next.js (ignore ESLint/TS builds)
- **[components.json](./components.json)** - Configuration shadcn/ui
- **[netlify.toml](./netlify.toml)** - Configuration déploiement Netlify
- **[.env.local](./env.local)** - Variables d'environnement (NON versionné)

### Points d'entrée

- **[app/layout.tsx](./app/layout.tsx)** - Layout racine avec Header/Footer
- **[app/page.tsx](./app/page.tsx)** - Page d'accueil
- **[app/globals.css](./app/globals.css)** - Styles globaux Tailwind

### Composants essentiels

- **[components/ui/dynamic-frame-layout.tsx](./components/ui/dynamic-frame-layout.tsx)** - Grille interactive principale
- **[components/layout/Header.tsx](./components/layout/Header.tsx)** - Navigation
- **[components/layout/Footer.tsx](./components/layout/Footer.tsx)** - Pied de page
- **[components/home/ServicesGrid.tsx](./components/home/ServicesGrid.tsx)** - Section services homepage

### Utilitaires

- **[lib/constants.ts](./lib/constants.ts)** - Constantes (contact, prix, réseaux sociaux)
- **[lib/utils.ts](./lib/utils.ts)** - Helpers (cn pour Tailwind merge)
- **[lib/whatsapp.ts](./lib/whatsapp.ts)** - Fonctions WhatsApp

### API Routes

- **[app/api/checkout/route.ts](./app/api/checkout/route.ts)** - Création session Stripe
- **[app/api/webhooks/stripe/route.ts](./app/api/webhooks/stripe/route.ts)** - Traitement webhooks

### Documentation

- **[README.md](./README.md)** - Documentation Next.js par défaut
- **[STRIPE_SETUP.md](./STRIPE_SETUP.md)** - Guide complet configuration Stripe
- **[CLAUDE.md](./CLAUDE.md)** - Ce fichier (documentation projet)

---

## Contacts et informations

### Informations de contact
- **Téléphone principal:** +262 692 82 92 92
- **Téléphone secondaire:** +262 262 24 87 84
- **Email:** info@parapente-reunion.fr
- **Adresse:** 1 Rue Georges Pompidou, 97436 Saint-Leu, La Réunion
- **WhatsApp:** +262 692 82 92 92

### Réseaux sociaux
- **Facebook:** [Parapente Reunion](https://www.facebook.com/p/Parapente-Reunion-100063497685780/)
- **Instagram:** [@parapentereunion](https://www.instagram.com/parapentereunion/)

### Horaires
- **Ouverture:** Lundi - Dimanche, 08h00 - 18h00

### Prix des vols (à partir de)
- **Vol Marmaille:** 80€
- **Vol Découverte 15min:** 90€
- **Vol Découverte 20min:** 100€
- **Vol Découverte 25min:** 110€
- **Vol Découverte 30min:** 120€
- **Vol Découverte 40min:** 160€
- **Vol Sunset:** 100€
- **Formation:** Sur devis

---

## Prochaines étapes et roadmap

### Priorités court terme
- [ ] Finaliser intégration Stripe en production
- [ ] Ajouter système de réservation en ligne
- [ ] Compléter galeries photos/vidéos
- [ ] Optimiser performance images (WebP, lazy loading)
- [ ] Tests E2E avec Playwright

### Améliorations UX/UI
- [ ] Animations de transition entre pages
- [ ] Loading states pour actions async
- [ ] Toasts de confirmation
- [ ] Optimisation mobile (touches, espacements)

### SEO et accessibilité
- [ ] Audit accessibilité WCAG AA
- [ ] Schema.org markup (LocalBusiness, Product)
- [ ] Sitemap XML dynamique
- [ ] Robots.txt optimisé

### Features métier
- [ ] Système de booking avec calendrier
- [ ] Envoi emails automatiques (confirmations)
- [ ] Dashboard admin pour gérer réservations
- [ ] Programme de fidélité/parrainage
- [ ] Multilingue (anglais, créole)

---

## Notes techniques

### Performance
- **Turbopack** activé pour builds ultra-rapides
- **Image optimization** Next.js native
- **Font optimization** avec next/font
- **Code splitting** automatique (App Router)

### SEO
- **Metadata** complet dans layout.tsx
- **Open Graph** configuré
- **Twitter Cards** configuré
- **Robots.txt** permissif
- **Canonical URLs** via metadataBase

### Sécurité
- **HTTPS** obligatoire (Netlify)
- **Stripe webhooks** avec signature verification
- **Env variables** non exposées côté client (sauf NEXT_PUBLIC_*)
- **CSP** à configurer (Content Security Policy)

### Limitations connues
- Pas de tests automatisés
- TypeScript errors ignorés en build (à corriger)
- ESLint errors ignorés en build (à corriger)
- Pas de CI/CD configuré (recommandé: GitHub Actions)

---

**Dernière mise à jour:** 3 octobre 2025
**Maintenu par:** Claude Code + Équipe Parapente Réunion
