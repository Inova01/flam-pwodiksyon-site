import { Flame, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="bg-charcoal px-4 py-12 text-cream md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-2 font-display text-xl font-black">
            <Flame className="text-gold" fill="currentColor" /> Flam Pwodiksyon
          </div>
          <p className="max-w-lg text-cream/72">{dict.home.subtitle}</p>
          <p className="mt-4 rounded-md border border-gold/30 px-3 py-2 text-sm text-gold">{dict.common.noCommerce}</p>
        </div>
        <div className="grid gap-2 text-sm">
          <Link href={`/${locale}/produits`}>{dict.nav.products}</Link>
          <Link href={`/${locale}/grossistes`}>{dict.nav.wholesale}</Link>
          <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
        </div>
        <div className="grid content-start gap-3 text-sm text-cream/72">
          <a className="flex items-center gap-2" href="mailto:contact@flampwodiksyon.ht"><Mail size={16} /> contact@flampwodiksyon.ht</a>
          <span className="flex items-center gap-2"><Instagram size={16} /> @flampwodiksyon</span>
          <span className="flex items-center gap-2"><Linkedin size={16} /> Flam Pwodiksyon</span>
        </div>
      </div>
    </footer>
  );
}
