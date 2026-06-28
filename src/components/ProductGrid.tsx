"use client";

import { Search, ShoppingBag, Sprout } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n/dictionaries";

const categories = ["all", "flours", "juices", "jams", "mamba", "spices", "snacks", "phase2"] as const;

export function ProductGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const haystack = `${product.name[locale]} ${product.description[locale]} ${product.ingredient[locale]}`.toLowerCase();
      return matchesCategory && haystack.includes(q);
    });
  }, [category, locale, query]);

  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ember">Gouligou</p>
            <h1 className="font-display text-4xl font-black md:text-6xl">{dict.products.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-ash">{dict.products.intro}</p>
          </div>
          <label className="relative block min-w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ash" size={18} />
            <input
              className="focus-ring w-full rounded-full border border-charcoal/15 bg-white px-12 py-4"
              placeholder={dict.products.search}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${category === item ? "bg-charcoal text-cream" : "bg-white text-ash hover:text-ember"}`}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item === "all" ? dict.products.all : item === "phase2" ? dict.common.phase2 : item}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <article key={product.id} className="group overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-flame">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image
                  src="/images/gouligou-products.png"
                  alt={product.name[locale]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  style={{ objectPosition: `${50 + (index % 3) * 14}% ${40 + (index % 2) * 12}%` }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-xs font-black text-charcoal">
                  {product.status === "coming" ? dict.common.coming : "Gouligou"}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="font-display text-2xl font-black">{product.name[locale]}</h2>
                  {product.line === "care" ? <Sprout className="text-agro" /> : <ShoppingBag className="text-ember" />}
                </div>
                <p className="text-sm text-ash">{product.description[locale]}</p>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-md bg-cream p-3">
                    <dt className="font-bold text-ash">Format</dt>
                    <dd className="font-black">{product.format}</dd>
                  </div>
                  <div className="rounded-md bg-cream p-3">
                    <dt className="font-bold text-ash">Filière</dt>
                    <dd className="font-black">{product.ingredient[locale]}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-md border border-ember/20 bg-ember/10 px-4 py-3 text-sm font-bold text-braise">{dict.products.noCart}</p>
      </div>
    </section>
  );
}
