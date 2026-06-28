import { Award, Factory, Handshake, MapPin, PackageCheck, Sprout } from "lucide-react";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Motion";
import { ProductGrid } from "@/components/ProductGrid";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/lib/i18n";

const icons = [Sprout, Factory, PackageCheck, Award, MapPin];

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <section className="noise relative min-h-[92vh] overflow-hidden px-4 pb-14 pt-24 sm:min-h-screen md:px-8 md:pt-28">
        <Image src="/images/hero-flam.png" alt="Produits agricoles haïtiens transformés" fill priority className="absolute inset-0 -z-10 object-cover" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream/88 to-cream/30 md:bg-gradient-to-r" />
        <div className="mx-auto grid min-h-[calc(92vh-6rem)] max-w-7xl content-center sm:min-h-[calc(100vh-7rem)]">
          <Reveal className="max-w-3xl">
            <p className="mb-4 inline-flex max-w-full rounded-full bg-white/75 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-ember sm:px-4 sm:text-sm sm:tracking-[0.18em]">
              {dict.home.kicker}
            </p>
            <h1 className="font-display text-[clamp(2.6rem,13vw,5rem)] font-black leading-[0.98] md:text-7xl lg:text-8xl">{dict.home.title}</h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-charcoal/78 sm:text-lg md:text-xl md:leading-8">{dict.home.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href={`/${locale}/produits`}>{dict.common.discover}</CTA>
              <CTA href={`/${locale}/grossistes`} variant="secondary">{dict.common.wholesale}</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="flame-gradient px-4 py-7 text-white md:px-8 md:py-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.stats.map((stat) => (
            <div key={stat} className="rounded-md border border-white/20 px-4 py-4 font-display text-xl font-black sm:py-5 sm:text-2xl">
              {stat}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-agro">Flam Pwodiksyon</p>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-6xl">{dict.home.aboutTitle}</h2>
            <p className="mt-5 text-base leading-7 text-ash sm:text-lg sm:leading-8">{dict.home.about}</p>
          </Reveal>
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/filieres-impact.png" alt="Filières agricoles locales" fill className="object-cover" sizes="(min-width: 768px) 50vw, 90vw" />
          </Reveal>
        </div>
      </section>

      <ProductGrid locale={locale} dict={dict} />

      <section className="bg-charcoal px-4 py-14 text-cream md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-6xl">{dict.home.pathTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {dict.home.path.map((step, index) => {
              const Icon = icons[index] ?? Sprout;
              return (
                <Reveal key={step} className="rounded-lg border border-cream/12 bg-cream/5 p-5">
                  <Icon className="mb-6 text-gold md:mb-8" size={30} />
                  <span className="text-sm font-black text-cream/50">0{index + 1}</span>
                  <h3 className="mt-2 font-display text-xl font-black sm:text-2xl">{step}</h3>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:gap-8">
          <Reveal className="rounded-lg bg-agro p-5 text-white sm:p-8">
            <h2 className="font-display text-3xl font-black sm:text-4xl">{dict.home.diasporaTitle}</h2>
            <p className="mt-4 text-white/82">{dict.home.diaspora}</p>
            <p className="mt-6 rounded-md bg-white/12 px-4 py-3 text-sm font-bold">{dict.common.noCommerce}</p>
          </Reveal>
          <Reveal className="rounded-lg bg-white p-5 shadow-sm sm:p-8">
            <Handshake className="mb-5 text-ember" size={34} />
            <h2 className="font-display text-3xl font-black sm:text-4xl">{dict.home.b2bTitle}</h2>
            <p className="mt-4 text-ash">{dict.home.b2b}</p>
            <div className="mt-6">
              <CTA href={`/${locale}/grossistes`}>{dict.common.wholesale}</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-4 pb-14 md:px-8 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-black sm:text-4xl">{dict.pages.grossistes.title}</h2>
            <p className="mt-4 text-ash">{dict.pages.grossistes.body}</p>
          </Reveal>
          <LeadForm dict={dict} />
        </div>
      </section>
    </>
  );
}
