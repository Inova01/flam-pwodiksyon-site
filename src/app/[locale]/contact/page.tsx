import { MapPin, Mail, Phone } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Motion";
import { stores } from "@/data/site";
import { dictionaries } from "@/i18n/dictionaries";
import { toLocale } from "@/lib/i18n";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = await params;
  const locale = toLocale(resolved.locale);
  const dict = dictionaries[locale];
  return (
    <section className="px-4 pb-20 pt-32 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-agro">{dict.products.whereBuy}</p>
          <h1 className="font-display text-5xl font-black md:text-7xl">{dict.pages.contact.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ash">{dict.pages.contact.body}</p>
          <div className="mt-8 grid gap-3">
            <p className="flex items-center gap-3 rounded-md bg-white p-4"><MapPin className="text-ember" /> Port-au-Prince / réseau national à confirmer</p>
            <p className="flex items-center gap-3 rounded-md bg-white p-4"><Mail className="text-ember" /> contact@flampwodiksyon.ht</p>
            <p className="flex items-center gap-3 rounded-md bg-white p-4"><Phone className="text-ember" /> +509 0000 0000</p>
          </div>
          <div className="mt-8">
            <h2 className="font-display text-3xl font-black">{dict.products.whereBuy}</h2>
            <div className="mt-4 grid gap-3">
              {stores.map((store) => <div className="rounded-md border border-charcoal/10 bg-white p-4 font-bold" key={store}>{store}</div>)}
            </div>
          </div>
        </Reveal>
        <LeadForm dict={dict} />
      </div>
    </section>
  );
}
