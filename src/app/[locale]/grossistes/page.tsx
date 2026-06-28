import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Motion";
import { dictionaries } from "@/i18n/dictionaries";
import { toLocale } from "@/lib/i18n";

export default async function WholesalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = await params;
  const locale = toLocale(resolved.locale);
  const dict = dictionaries[locale];
  return (
    <section className="px-4 pb-20 pt-32 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ember">B2B</p>
          <h1 className="font-display text-5xl font-black md:text-7xl">{dict.pages.grossistes.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ash">{dict.pages.grossistes.body}</p>
          <ul className="mt-8 grid gap-3 text-sm font-bold text-ash">
            <li className="rounded-md bg-white p-4">Formats retail, HoReCa et distributeurs à confirmer.</li>
            <li className="rounded-md bg-white p-4">Aucune commande en ligne : qualification commerciale d&apos;abord.</li>
            <li className="rounded-md bg-white p-4">Pays prioritaires : Haïti, USA, Canada, France.</li>
          </ul>
        </Reveal>
        <LeadForm dict={dict} />
      </div>
    </section>
  );
}
