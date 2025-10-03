# Configuration Stripe - Guide Complet

## 🧪 Mode TEST (Paiements fictifs - AUCUN prélèvement)

### 1. Installer Stripe CLI

**Windows :**
```bash
# Avec Scoop
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
scoop install stripe

# Ou télécharger depuis https://github.com/stripe/stripe-cli/releases
```

**Mac :**
```bash
brew install stripe/stripe-cli/stripe
```

### 2. Connexion à votre compte Stripe

```bash
stripe login
```
Cela ouvrira votre navigateur pour autoriser la connexion.

### 3. Lancer le serveur de développement avec webhook forwarding

```bash
# Terminal 1 - Lancer Next.js
npm run dev

# Terminal 2 - Lancer Stripe webhook forwarding
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

La commande `stripe listen` vous donnera un **webhook secret** qui ressemble à :
```
> Ready! Your webhook signing secret is whsec_xxxxxxxxxxxxx
```

Copiez ce secret dans votre `.env.local` :
```env
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

### 4. Récupérer vos clés de TEST

1. Allez sur [dashboard.stripe.com](https://dashboard.stripe.com)
2. Assurez-vous que le toggle **"Test mode"** est activé (en haut à droite)
3. Allez dans **"Developers"** > **"API keys"**
4. Copiez les clés de TEST (elles commencent par `pk_test_` et `sk_test_`)

Mettez-les dans `.env.local` :
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

## 💳 Cartes de test Stripe (AUCUN prélèvement réel)

Utilisez ces numéros de carte pour tester :

### ✅ Paiement réussi
```
Numéro : 4242 4242 4242 4242
Date : N'importe quelle date future (ex: 12/34)
CVC : N'importe quel code 3 chiffres (ex: 123)
Code postal : N'importe lequel (ex: 75001)
```

### ❌ Paiement échoué (carte refusée)
```
Numéro : 4000 0000 0000 0002
Date : N'importe quelle date future
CVC : N'importe quel code 3 chiffres
```

### 🔐 Authentification 3D Secure requise
```
Numéro : 4000 0025 0000 3155
Date : N'importe quelle date future
CVC : N'importe quel code 3 chiffres
```

### Plus de cartes de test
Voir la liste complète : https://stripe.com/docs/testing

## 🚀 Workflow de test complet

### Terminal 1 - Next.js
```bash
cd parapente-site
npm run dev
```

### Terminal 2 - Stripe Webhooks
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### Terminal 3 - Simuler un événement webhook (optionnel)
```bash
# Simuler un paiement réussi
stripe trigger checkout.session.completed
```

## 📊 Voir les paiements de test

1. Allez sur [dashboard.stripe.com](https://dashboard.stripe.com)
2. Assurez-vous d'être en **mode TEST**
3. Cliquez sur **"Payments"** pour voir tous vos paiements de test

## ⚠️ Mode PRODUCTION (Prélèvements réels)

**NE PASSEZ EN PRODUCTION QUE QUAND VOUS ÊTES PRÊT !**

1. Désactivez le **"Test mode"** dans le dashboard
2. Récupérez les clés de PRODUCTION (`pk_live_` et `sk_live_`)
3. Configurez un webhook endpoint PRODUCTION :
   - URL : `https://votre-domaine.com/api/webhooks/stripe`
   - Événements : `checkout.session.completed`, `payment_intent.payment_failed`
4. Mettez à jour `.env.local` avec les clés LIVE

## 🔍 Debug

### Voir les logs webhook en temps réel
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe --print-json
```

### Voir les événements dans le dashboard
Dashboard > Developers > Events

### Tester un événement spécifique
```bash
stripe trigger checkout.session.completed
stripe trigger payment_intent.payment_failed
```

## ✅ Checklist avant de passer en production

- [ ] Tous les tests fonctionnent avec les cartes de test
- [ ] Le webhook reçoit bien les événements `checkout.session.completed`
- [ ] Les emails de confirmation sont envoyés
- [ ] Les codes de cartes cadeaux sont générés
- [ ] La page de succès s'affiche correctement
- [ ] Vous avez configuré un webhook endpoint en HTTPS
- [ ] Vous avez remplacé les clés TEST par les clés LIVE
- [ ] Vous avez testé un vrai paiement de 1€ pour vérifier
