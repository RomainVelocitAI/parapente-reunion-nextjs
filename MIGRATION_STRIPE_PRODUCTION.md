# Migration Stripe vers Production - Checklist

## 📋 Checklist complète pour passer en production

### 1. **Clés API Stripe** (`.env.local` et Netlify)

#### Local (`.env.local`)
```env
# Remplacer les clés TEST par les clés LIVE du client
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_XXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_live_XXXXXXXXXXXXXXXX
```

#### Netlify (Environment Variables)
- Aller dans : Site configuration → Environment variables
- Mettre à jour :
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` → clé publishable LIVE
  - `STRIPE_SECRET_KEY` → clé secrète LIVE
  - `NEXT_PUBLIC_SITE_URL` → `https://parapente-reunion.fr`

### 2. **Webhook Stripe**

#### Configurer le webhook en production
1. Aller sur https://dashboard.stripe.com/webhooks (mode LIVE)
2. Cliquer "Add endpoint"
3. URL : `https://parapente-reunion.fr/api/webhooks/stripe`
4. Événements à écouter : `checkout.session.completed`
5. Copier le **Signing secret** (commence par `whsec_...`)

#### Mettre à jour le secret
- `.env.local` : `STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXX`
- Netlify : Ajouter `STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXX`

### 3. **URLs dans le code**

#### ✅ Déjà configuré avec variable d'environnement
- `app/layout.tsx` : `metadataBase` utilise `NEXT_PUBLIC_SITE_URL`
- `app/api/checkout/route.ts` : Les URLs success/cancel utilisent `req.nextUrl.origin`

**Rien à modifier** - Juste mettre à jour `NEXT_PUBLIC_SITE_URL` dans Netlify

### 4. **Images Stripe**

#### ✅ Déjà configuré
- `app/api/checkout/route.ts` ligne 27 : `images: ['https://parapente-reunion.fr/images/logo.png']`

**Rien à modifier** - Le logo sera accessible une fois le domaine migré

### 5. **Webhook n8n**

#### ✅ Déjà configuré
- `app/api/webhooks/stripe/route.ts` ligne 67 : URL n8n en dur
- URL : `https://n8n.srv763918.hstgr.cloud/webhook-test/a9ebbe55-8ecd-499d-b160-cf5062caeb11`

**Rien à modifier** - L'URL n8n reste la même en production

### 6. **Tests avant mise en production**

#### Test en mode LIVE (avec Stripe CLI)
```bash
# Se connecter avec les clés LIVE
stripe login

# Écouter les webhooks LIVE
stripe listen --forward-to localhost:3000/api/webhooks/stripe --live
```

⚠️ **Attention** : Les paiements en mode LIVE sont réels !

#### Alternative : Tester sur Netlify avec clés TEST d'abord
1. Garder les clés TEST
2. Déployer sur Netlify
3. Configurer webhook TEST : `https://jolly-lily-fa5991.netlify.app/api/webhooks/stripe`
4. Faire un paiement test
5. Vérifier que le webhook n8n reçoit bien les données

### 7. **Migration du domaine**

#### Sur Netlify
1. Aller dans : Site configuration → Domain management
2. Ajouter custom domain : `parapente-reunion.fr`
3. Suivre les instructions DNS

#### Chez l'hébergeur DNS
Ajouter les enregistrements fournis par Netlify :
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: jolly-lily-fa5991.netlify.app
```

### 8. **Après la migration**

#### Vérifications post-migration
- [ ] Tester un paiement réel (petit montant)
- [ ] Vérifier que le webhook Stripe est bien appelé
- [ ] Vérifier que n8n reçoit bien les données
- [ ] Vérifier les emails de confirmation
- [ ] Tester sur mobile
- [ ] Vérifier les images Open Graph (partage sur réseaux sociaux)

---

## 🔑 Récapitulatif des secrets à récupérer du client

1. **Clé publishable Stripe LIVE** (commence par `pk_live_`)
2. **Clé secrète Stripe LIVE** (commence par `sk_live_`)
3. **Webhook signing secret** (à créer après configuration du webhook, commence par `whsec_`)

---

## ⚠️ Points d'attention

- **Ne JAMAIS commit les clés LIVE dans Git** (`.env.local` est déjà dans `.gitignore`)
- **Tester d'abord avec clés TEST sur production** avant de passer en LIVE
- **Vérifier que le webhook n8n est accessible** depuis internet
- **Le webhook secret change** entre TEST et LIVE (secret différent)
- **Les URLs de redirection** s'adaptent automatiquement au domaine

---

## 📞 En cas de problème

### Webhook ne se déclenche pas
1. Vérifier les logs Stripe Dashboard → Developers → Webhooks
2. Vérifier que le secret est le bon (TEST vs LIVE)
3. Vérifier que l'URL est accessible : `https://parapente-reunion.fr/api/webhooks/stripe`

### n8n ne reçoit pas les données
1. Vérifier les logs Netlify : Functions → `api/webhooks/stripe`
2. Tester l'URL n8n manuellement avec Postman
3. Vérifier que l'URL n8n est bien accessible depuis Netlify

### Paiement ne fonctionne pas
1. Vérifier que les clés Stripe sont bien configurées
2. Vérifier dans Stripe Dashboard → Payments si le paiement apparaît
3. Vérifier les logs navigateur (Console F12)
