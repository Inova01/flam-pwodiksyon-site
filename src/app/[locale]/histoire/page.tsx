import Image from "next/image";
import { Reveal } from "@/components/Motion";
import { dictionaries } from "@/i18n/dictionaries";
import { toLocale } from "@/lib/i18n";

const team = [
  {
    name: "Lawrence Auguste",
    role: "PDG",
    description: "Ingénieur en Mechatronics and Robotics, il porte la vision industrielle, technologique et stratégique de Flam Pwodiksyon.",
    image: "/images/lawrence-auguste.jpg"
  },
  {
    name: "Nutritionniste",
    role: "Qualité nutritionnelle",
    description: "Structure les formulations, les informations nutritionnelles, les allergènes et les standards qualité des produits Gouligou."
  },
  {
    name: "Agronome",
    role: "Filières agricoles",
    description: "Relie Flam Pwodiksyon aux producteurs, sécurise les matières premières locales et suit la saisonnalité des récoltes."
  },
  {
    name: "Conseiller en développement personnel",
    role: "Culture & discipline d'équipe",
    description: "Aide l'équipe à garder le cap, clarifier les engagements et bâtir des rituels de progression durable."
  },
  {
    name: "Responsable des ventes",
    role: "Distribution & croissance",
    description: "Développe les points de vente, les relations grossistes, les volumes et les premiers circuits de distribution."
  },
  {
    name: "Responsable relations publiques",
    role: "Image & partenaires",
    description: "Construit la présence publique de Flam Pwodiksyon auprès de la diaspora, de la presse et des partenaires."
  }
];

export default async function StoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = await params;
  const locale = toLocale(resolved.locale);
  const dict = dictionaries[locale];

  return (
    <>
      <section className="px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ember">Flam Pwodiksyon</p>
            <h1 className="font-display text-5xl font-black md:text-7xl">{dict.pages.histoire.title}</h1>
            <p className="mt-6 text-lg leading-8 text-ash">{dict.pages.histoire.body}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Authenticité", "Qualité", "Durabilité"].map((value) => (
                <div className="rounded-lg bg-white p-5 font-display text-2xl font-black shadow-sm" key={value}>
                  {value}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/hero-flam.png" alt="Table de transformation agroalimentaire" fill className="object-cover" sizes="(min-width: 768px) 50vw, 90vw" />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-20 text-cream md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-gold">Équipe fondatrice</p>
            <h2 className="font-display text-4xl font-black md:text-6xl">Six profils pour transformer l&apos;idée en entreprise</h2>
            <p className="mt-5 text-lg leading-8 text-cream/72">
              Flam Pwodiksyon réunit des compétences complémentaires : direction, nutrition, agronomie, culture d&apos;équipe, ventes et relations publiques.
              Les photos manquantes peuvent être remplacées dès que chaque membre fournit son portrait.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.role} className="rounded-lg border border-cream/12 bg-cream/5 p-5">
                <div className="relative mb-5 aspect-square overflow-hidden rounded-lg bg-cream/10">
                  {member.image ? (
                    <Image src={member.image} alt={`Portrait de ${member.name}`} fill className="object-cover" sizes="(min-width: 1024px) 28vw, 90vw" />
                  ) : (
                    <div className="grid h-full place-items-center bg-gradient-to-br from-ember/70 via-gold/60 to-agro/70 p-6 text-center">
                      <span className="font-display text-5xl font-black text-white">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">{member.role}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{member.name}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/70">{member.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
