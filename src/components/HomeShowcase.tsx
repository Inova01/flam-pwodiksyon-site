"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Building2, Globe2, Handshake, MapPinned, PackageCheck, Store } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CTA } from "@/components/CTA";
import type { Locale } from "@/lib/i18n";

const slides = [
  {
    eyebrow: "Gouligou",
    title: "Des produits locaux prêts pour les rayons",
    body: "Farines, mamba, jus, confitures, épices et snacks : une première gamme alimentaire pensée pour les ménages, détaillants et distributeurs.",
    image: "/images/gouligou-products.png"
  },
  {
    eyebrow: "Filières",
    title: "De la matière première au produit fini",
    body: "Flam Pwodiksyon relie producteurs, transformation, emballage et distribution pour donner plus de valeur aux récoltes haïtiennes.",
    image: "/images/filieres-impact.png"
  },
  {
    eyebrow: "Diaspora",
    title: "Un goût de chez vous, sans e-commerce au lancement",
    body: "Le site oriente vers les points d'achat et les demandes grossistes. La vente en ligne pourra venir plus tard, au bon moment.",
    image: "/images/hero-flam.png"
  }
];

const distributionSteps = [
  {
    icon: Store,
    title: "Points de vente locaux",
    body: "Épiceries, supermarchés et détaillants urbains reçoivent les formats adaptés au commerce de proximité."
  },
  {
    icon: Building2,
    title: "HoReCa & institutions",
    body: "Hôtels, restaurants, traiteurs, cantines et organisations peuvent demander des volumes et conditions spécifiques."
  },
  {
    icon: Handshake,
    title: "Grossistes & distributeurs",
    body: "Les partenaires B2B qualifient pays, volumes, catégories, cadence et exigences logistiques via le formulaire dédié."
  },
  {
    icon: Globe2,
    title: "Diaspora",
    body: "USA, Canada et France sont préparés comme marchés relais, avec distribution partenaire avant e-commerce direct."
  }
];

export function HomeShowcase({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const slide = slides[active];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <>
      <section className="overflow-hidden bg-charcoal px-4 py-14 text-cream md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-gold">À la une</p>
            <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl md:text-6xl">Une marque qui bouge, une chaîne qui se construit</h2>
            <p className="mt-5 text-base leading-7 text-cream/72 sm:text-lg">
              Ces pages mettent en scène les priorités de lancement : crédibilité, produits, filières et distribution.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {slides.map((item, index) => (
                <button
                  className={`focus-ring h-3 rounded-full transition-all ${index === active ? "w-12 bg-gold" : "w-3 bg-cream/35 hover:bg-cream/60"}`}
                  key={item.title}
                  onClick={() => setActive(index)}
                  aria-label={`Afficher ${item.eyebrow}`}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-cream/12 bg-cream/5 sm:min-h-[560px] lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={slide.title}
                initial={reduce ? false : { opacity: 0, x: 40 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -40 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute inset-0 grid content-end"
              >
                <Image src={slide.image} alt={slide.title} fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative p-5 sm:p-8">
                  <p className="mb-3 inline-flex rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-charcoal">{slide.eyebrow}</p>
                  <h3 className="font-display text-3xl font-black leading-tight sm:text-4xl">{slide.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-cream/80 sm:text-base sm:leading-7">{slide.body}</p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ember">Distribution</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl md:text-6xl">Comment Gouligou arrive jusqu&apos;au client</h2>
              <p className="mt-5 text-base leading-7 text-ash sm:text-lg">
                La distribution commence par des circuits concrets et maîtrisables. Le site ne vend pas encore en ligne : il qualifie les contacts et dirige vers les bons partenaires.
              </p>
              <div className="mt-7">
                <CTA href={`/${locale}/grossistes`}>Demander une distribution</CTA>
              </div>
            </div>

            <div className="relative grid gap-4 md:grid-cols-2">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-ember/25 md:block" />
              {distributionSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.title}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative rounded-lg border border-charcoal/10 bg-white p-5 shadow-sm"
                  >
                    <span className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-ember text-white shadow-flame">
                      <Icon size={22} />
                    </span>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-sm font-black text-ember">0{index + 1}</span>
                      <h3 className="font-display text-2xl font-black">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-ash">{step.body}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-3 rounded-lg bg-agro p-5 text-white md:grid-cols-[auto_1fr] md:items-center md:p-6">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
              <MapPinned size={22} />
            </span>
            <p className="text-sm font-bold leading-6 sm:text-base">
              À compléter avant lancement commercial : liste des points de vente confirmés, zones desservies, contacts grossistes et conditions minimales de commande.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
