export type TeamRole = "pdg" | "nutrition" | "agronomy" | "coach" | "sales" | "pr";

export const teamMembers = [
  {
    id: "pdg",
    name: "PDG",
    role: "Direction générale",
    mission: "Priorités, arbitrages, financement, partenariats stratégiques.",
    color: "#E8541E"
  },
  {
    id: "nutrition",
    name: "Nutritionniste",
    role: "Qualité nutritionnelle",
    mission: "Formulation, valeurs nutritionnelles, conformité et bénéfices santé.",
    color: "#1F6F54"
  },
  {
    id: "agronomy",
    name: "Agronome",
    role: "Filières agricoles",
    mission: "Approvisionnement, producteurs, matières premières et saisonnalité.",
    color: "#2F855A"
  },
  {
    id: "coach",
    name: "Conseiller développement personnel",
    role: "Culture d'équipe",
    mission: "Rituels, motivation, cohésion, discipline et suivi des engagements.",
    color: "#F2A516"
  },
  {
    id: "sales",
    name: "Responsable des ventes",
    role: "Commercial & distribution",
    mission: "Points de vente, grossistes, volumes, prix et pipeline B2B.",
    color: "#9E2B0E"
  },
  {
    id: "pr",
    name: "Relations publiques",
    role: "Communication",
    mission: "Presse, diaspora, réseaux sociaux, réputation et événements.",
    color: "#6B6258"
  }
] as const satisfies ReadonlyArray<{ id: TeamRole; name: string; role: string; mission: string; color: string }>;

export const sharedFeed = [
  {
    author: "PDG",
    channel: "Direction",
    time: "Aujourd'hui 08:20",
    body: "Objectif de la semaine : valider les 8 références Phase 1 à tester en priorité et préparer les premiers contacts distributeurs.",
    tags: ["Priorité", "Gouligou", "Lancement"]
  },
  {
    author: "Responsable des ventes",
    channel: "Terrain",
    time: "Hier 17:45",
    body: "Besoin d'une fiche simple par produit : format, prix indicatif, minimum de commande, arguments pour épiceries et supermarchés.",
    tags: ["B2B", "Points de vente"]
  },
  {
    author: "Nutritionniste",
    channel: "Produit",
    time: "Hier 11:10",
    body: "Pour mamba, farines et jus, je propose de créer une grille nutritionnelle standard avant toute impression d'étiquette.",
    tags: ["Qualité", "Étiquettes"]
  }
];

export const privateTasks = [
  { owner: "pdg", title: "Décider les 5 produits MVP", status: "En cours", due: "Cette semaine", priority: "Haute" },
  { owner: "pdg", title: "Identifier 3 partenaires financiers ou industriels", status: "À faire", due: "10 jours", priority: "Haute" },
  { owner: "nutrition", title: "Définir les critères qualité et allergènes du mamba", status: "En cours", due: "Cette semaine", priority: "Haute" },
  { owner: "nutrition", title: "Préparer un modèle de fiche nutritionnelle Gouligou", status: "À faire", due: "2 semaines", priority: "Moyenne" },
  { owner: "agronomy", title: "Cartographier fournisseurs manioc, mangue, arachide", status: "À faire", due: "2 semaines", priority: "Haute" },
  { owner: "agronomy", title: "Vérifier disponibilité saisonnière des fruits pour nectars", status: "En cours", due: "Cette semaine", priority: "Moyenne" },
  { owner: "coach", title: "Mettre en place le rituel hebdomadaire d'équipe", status: "À faire", due: "Vendredi", priority: "Moyenne" },
  { owner: "coach", title: "Créer une grille simple de suivi des engagements", status: "À faire", due: "10 jours", priority: "Basse" },
  { owner: "sales", title: "Lister 20 premiers points de vente à prospecter", status: "En cours", due: "Cette semaine", priority: "Haute" },
  { owner: "sales", title: "Préparer script d'appel grossistes et supermarchés", status: "À faire", due: "Vendredi", priority: "Haute" },
  { owner: "pr", title: "Rédiger communiqué court de présentation Flam Pwodiksyon", status: "À faire", due: "2 semaines", priority: "Moyenne" },
  { owner: "pr", title: "Créer calendrier social média lancement Gouligou", status: "En cours", due: "10 jours", priority: "Moyenne" }
] as const satisfies ReadonlyArray<{ owner: TeamRole; title: string; status: string; due: string; priority: string }>;

export const marketStudy = {
  source: "Etude_marche_Gouligou.xlsx",
  summary: [
    "Haïti : environ 11,7 M d'habitants, avec une forte dépendance aux importations alimentaires.",
    "Opportunité centrale : substituer des importations par des produits transformés localement.",
    "Diaspora : plus de 2 M d'Haïtiens à l'étranger, marché nostalgie à plus fort pouvoir d'achat.",
    "Freins à suivre : insécurité, logistique, énergie, pouvoir d'achat et accès au crédit."
  ],
  funnel: [
    { label: "TAM alimentaire", value: 5265000000 },
    { label: "Marché transformé", value: 947700000 },
    { label: "SAM Gouligou", value: 113724000 },
    { label: "SOM visé 5 ans", value: 2274480 }
  ],
  segments: [
    { name: "Ménages urbains", mix: 40, attractiveness: "Élevée", access: "Moyenne" },
    { name: "Diaspora export", mix: 20, attractiveness: "Très élevée", access: "Faible" },
    { name: "Détaillants informels", mix: 15, attractiveness: "Moyenne", access: "Élevée" },
    { name: "Supermarchés & épiceries", mix: 15, attractiveness: "Élevée", access: "Moyenne" },
    { name: "HoReCa", mix: 5, attractiveness: "Moyenne", access: "Moyenne" },
    { name: "ONG & institutions", mix: 5, attractiveness: "Moyenne", access: "Faible" }
  ],
  competitors: [
    { category: "Farines", intensity: 1, opportunity: "Fort potentiel : substitution d'import, matière locale." },
    { category: "Jus & nectars", intensity: 2, opportunity: "Fort potentiel : fruits locaux." },
    { category: "Confitures", intensity: 2, opportunity: "Différenciation par fruits du terroir." },
    { category: "Mamba", intensity: 2, opportunity: "Qualité, hygiène, marque et emballage." },
    { category: "Épices", intensity: 2, opportunity: "Mélanges prêts à l'emploi." },
    { category: "Entretien Phase 2", intensity: 3, opportunity: "Savon, savon liquide, détergent à préparer plus tard." }
  ],
  priorityProducts: [
    { product: "Farine de manioc", material: "Manioc", score: 12, phase: "Phase 1" },
    { product: "Mamba", material: "Arachide", score: 12, phase: "Phase 1" },
    { product: "Farine de banane", material: "Banane plantain", score: 11, phase: "Phase 1" },
    { product: "Jus / nectar de mangue", material: "Mangue", score: 11, phase: "Phase 1" },
    { product: "Confiture de mangue", material: "Mangue", score: 11, phase: "Phase 1" },
    { product: "Épis", material: "Herbes/épices", score: 11, phase: "Phase 1" },
    { product: "Mélange d'épices créoles", material: "Épices", score: 11, phase: "Phase 1" },
    { product: "Savon de toilette", material: "Huiles/by-products", score: 8, phase: "Phase 2" }
  ],
  projections: [
    { year: "Année 1", revenue: 150000, result: 42500 },
    { year: "Année 2", revenue: 195000, result: 62750 },
    { year: "Année 3", revenue: 253500, result: 89075 },
    { year: "Année 4", revenue: 329550, result: 123298 },
    { year: "Année 5", revenue: 428415, result: 167787 }
  ]
};
