# Flam Pwodiksyon

Site vitrine officiel pour Flam Pwodiksyon, avec Gouligou comme première marque produit. Le projet est pensé pour un lancement sans e-commerce : catalogue, points d'achat, formulaires de contacts qualifiés et demande grossistes/distributeurs.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion pour les reveals et l'intro
- Lenis pour le smooth scroll
- lucide-react pour les icônes
- i18n maison FR / Kreyòl / EN avec contenus centralisés

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000/fr`.

Build de production :

```bash
npm run build
npm run start
```

## Où modifier le contenu

- Textes traduits : `src/i18n/dictionaries.ts`
- Produits et future gamme entretien : `src/data/site.ts`
- Images générées à remplacer : `public/images/hero-flam.png`, `public/images/gouligou-products.png`, `public/images/filieres-impact.png`
- Email, réseaux et coordonnées : `src/components/Footer.tsx` et `src/app/[locale]/contact/page.tsx`
- Formulaire : `src/app/api/lead/route.ts`

## E-commerce

Le site ne contient ni panier, ni checkout, ni paiement. Les appels à l'action orientent vers :

- `Produits / Gouligou`
- `Contact & où acheter`
- `Grossistes & distributeurs`

La vente en ligne pourra être ajoutée plus tard sans casser le catalogue, mais elle est volontairement hors lancement.

## Déploiement Vercel

1. Pousser le projet sur Git.
2. Importer le dépôt dans Vercel.
3. Build command : `npm run build`.
4. Output : Next.js détecté automatiquement.
5. Brancher le formulaire sur Resend, Formspree, un CRM ou un webhook dans `src/app/api/lead/route.ts`.

## Accessibilité et performance

- Structure sémantique avec titres hiérarchisés.
- Focus visibles via `.focus-ring`.
- `prefers-reduced-motion` respecté.
- Images servies via `next/image`.
- Métadonnées, Open Graph, robots, sitemap et JSON-LD Organisation.

## Note

Les textes et visuels sont des placeholders soignés à valider. Les vraies références produits, formats, coordonnées, distributeurs et indicateurs d'impact doivent remplacer les données actuelles avant mise en ligne.
