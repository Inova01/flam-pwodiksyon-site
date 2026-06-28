# Note de design

Concept : **la flamme qui transforme**. Flam Pwodiksyon est présenté comme le groupe fondateur et industriel ; Gouligou apparaît comme la première marque produit. Le site laisse une place visible mais non active à la future gamme entretien.

Palette : orange flamme, or chaud, braise, vert agro, crème et charbon. L'orange porte l'énergie de transformation, le vert ancre les filières agricoles, le crème apporte chaleur et lisibilité.

Typographie : Sora pour les titres, Inter pour le texte courant. Les titres sont larges, confiants et directs ; les contenus restent courts pour parler aux consommateurs, distributeurs et partenaires.

Animations : intro courte, reveals au scroll, hover produit, smooth scroll. Les effets restent basés sur `transform` et `opacity`, avec désactivation via `prefers-reduced-motion`.

Architecture : le catalogue est un système de données, pas une page figée. Les produits Gouligou peuvent monter à environ 40 références, et la ligne entretien est déjà modélisée avec le statut `coming`.
