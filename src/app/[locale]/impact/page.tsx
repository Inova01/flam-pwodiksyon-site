import Image from "next/image";
import { Reveal } from "@/components/Motion";
import { dictionaries } from "@/i18n/dictionaries";
import { toLocale } from "@/lib/i18n";

const chains = ["Manioc", "Mangue", "Arachide", "Café", "Cacao", "Épices"];

export default async function ImpactPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = await params;
  const locale = toLocale(resolved.locale);
  const dict = dictionaries[locale];
  return (
    <section className="px-4 pb-20 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-agro">{dict.nav.impact}</p>
          <h1 className="font-display text-5xl font-black md:text-7xl">{dict.pages.impact.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ash">{dict.pages.impact.body}</p>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_.9fr]">
          <Reveal className="relative min-h-96 overflow-hidden rounded-lg">
            <Image src="/images/filieres-impact.png" alt="Filières agricoles haïtiennes" fill className="object-cover" sizes="(min-width: 768px) 55vw, 90vw" />
          </Reveal>
          <div className="grid gap-3">
            {chains.map((chain) => (
              <Reveal key={chain} className="rounded-lg border border-charcoal/10 bg-white p-5">
                <h2 className="font-display text-2xl font-black">{chain}</h2>
                <p className="mt-2 text-sm text-ash">Cartographie fournisseurs, standards qualité, volumes et indicateurs d&apos;impact à renseigner.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
