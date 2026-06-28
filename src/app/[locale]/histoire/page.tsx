import Image from "next/image";
import { Reveal } from "@/components/Motion";
import { dictionaries } from "@/i18n/dictionaries";
import { toLocale } from "@/lib/i18n";

export default async function StoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = await params;
  const locale = toLocale(resolved.locale);
  const dict = dictionaries[locale];
  return (
    <section className="px-4 pb-20 pt-32 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
        <Reveal>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ember">Flam Pwodiksyon</p>
          <h1 className="font-display text-5xl font-black md:text-7xl">{dict.pages.histoire.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ash">{dict.pages.histoire.body}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Authenticité", "Qualité", "Durabilité"].map((value) => (
              <div className="rounded-lg bg-white p-5 font-display text-2xl font-black shadow-sm" key={value}>{value}</div>
            ))}
          </div>
        </Reveal>
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src="/images/hero-flam.png" alt="Table de transformation agroalimentaire" fill className="object-cover" sizes="(min-width: 768px) 50vw, 90vw" />
        </Reveal>
      </div>
    </section>
  );
}
