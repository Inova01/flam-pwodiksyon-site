import type { Locale } from "@/lib/i18n";

export type Product = {
  id: string;
  category: "flours" | "juices" | "jams" | "mamba" | "spices" | "snacks" | "phase2";
  line: "gouligou" | "care";
  status: "available" | "coming";
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  format: string;
  ingredient: Record<Locale, string>;
};

export const navItems = [
  { href: "", key: "home" },
  { href: "histoire", key: "story" },
  { href: "produits", key: "products" },
  { href: "impact", key: "impact" },
  { href: "grossistes", key: "wholesale" },
  { href: "contact", key: "contact" },
  { href: "admin", key: "admin" }
] as const;

export const products: Product[] = [
  {
    id: "farine-manioc",
    category: "flours",
    line: "gouligou",
    status: "available",
    format: "500 g / 1 kg",
    ingredient: { fr: "Manioc local", ht: "Manyok lokal", en: "Local cassava" },
    name: { fr: "Farine de manioc", ht: "Farin manyok", en: "Cassava flour" },
    description: {
      fr: "Une farine fine pour galettes, pâtisseries et recettes sans blé.",
      ht: "Yon farin fen pou galèt, gato ak resèt san ble.",
      en: "A fine flour for flatbreads, baking and wheat-free recipes."
    }
  },
  {
    id: "nectar-mangue",
    category: "juices",
    line: "gouligou",
    status: "available",
    format: "250 ml / 1 L",
    ingredient: { fr: "Mangue", ht: "Mango", en: "Mango" },
    name: { fr: "Nectar de mangue", ht: "Nèktar mango", en: "Mango nectar" },
    description: {
      fr: "Un nectar généreux qui garde la rondeur des mangues haïtiennes.",
      ht: "Yon nèktar ki kenbe gou rich mango peyi a.",
      en: "A generous nectar that keeps the round flavor of Haitian mangoes."
    }
  },
  {
    id: "confiture-goyave",
    category: "jams",
    line: "gouligou",
    status: "available",
    format: "220 g",
    ingredient: { fr: "Goyave", ht: "Gwayav", en: "Guava" },
    name: { fr: "Confiture de goyave", ht: "Konfiti gwayav", en: "Guava jam" },
    description: {
      fr: "Une texture fruitée pour le pain, les desserts et les tables d'hôtel.",
      ht: "Yon teksti fwi pou pen, desè ak tab otèl.",
      en: "A fruit-forward texture for bread, desserts and hotel tables."
    }
  },
  {
    id: "mamba-epice",
    category: "mamba",
    line: "gouligou",
    status: "available",
    format: "340 g",
    ingredient: { fr: "Arachide", ht: "Pistach", en: "Peanut" },
    name: { fr: "Mamba épicé", ht: "Manba pike", en: "Spiced mamba" },
    description: {
      fr: "Beurre d'arachide crémeux avec une chaleur maîtrisée.",
      ht: "Manba krèm ak yon ti chalè byen balanse.",
      en: "Creamy peanut butter with a balanced, controlled heat."
    }
  },
  {
    id: "melange-epis",
    category: "spices",
    line: "gouligou",
    status: "available",
    format: "60 g",
    ingredient: { fr: "Épices locales", ht: "Epis lokal", en: "Local spices" },
    name: { fr: "Mélange d'épices", ht: "Melanj epis", en: "Spice blend" },
    description: {
      fr: "Un assaisonnement sec pour cuisines familiales et professionnelles.",
      ht: "Yon epis sèk pou kwizin lakay ak pwofesyonèl.",
      en: "A dry seasoning for home and professional kitchens."
    }
  },
  {
    id: "chips-banane",
    category: "snacks",
    line: "gouligou",
    status: "available",
    format: "80 g / 150 g",
    ingredient: { fr: "Banane plantain", ht: "Bannann peze", en: "Plantain" },
    name: { fr: "Chips de plantain", ht: "Tchips bannann", en: "Plantain chips" },
    description: {
      fr: "Un snack croustillant pensé pour les commerces et la diaspora.",
      ht: "Yon ti goute kroustiyan pou boutik ak dyaspora.",
      en: "A crisp snack designed for retailers and the diaspora."
    }
  },
  {
    id: "savon-phase2",
    category: "phase2",
    line: "care",
    status: "coming",
    format: "Phase 2",
    ingredient: { fr: "Base végétale", ht: "Baz plant", en: "Plant base" },
    name: { fr: "Gamme entretien", ht: "Liy netwayaj", en: "Care range" },
    description: {
      fr: "Espace réservé aux savons et détergents prévus après la gamme alimentaire.",
      ht: "Plas rezève pou savon ak detèjan apre liy manje a.",
      en: "Reserved space for soaps and detergents after the food range."
    }
  }
];

export const stores = [
  "Supermarchés partenaires",
  "Épiceries fines haïtiennes",
  "Distributeurs HoReCa",
  "Points diaspora à confirmer"
];

export const pageSlugs = {
  story: "histoire",
  products: "produits",
  impact: "impact",
  wholesale: "grossistes",
  contact: "contact"
} as const;
