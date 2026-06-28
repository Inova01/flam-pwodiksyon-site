"use client";

import { Flame, Languages, Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { locales, type Locale } from "@/lib/i18n";
import { navItems } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const links = navItems.map((item) => ({
    href: `/${locale}/${item.href}`.replace(/\/$/, ""),
    label: dict.nav[item.key]
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-cream/86 backdrop-blur-xl dark:bg-charcoal/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href={`/${locale}`} className="focus-ring flex items-center gap-2 rounded-sm font-display text-lg font-black">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-charcoal text-gold">
            <Flame size={20} fill="currentColor" />
          </span>
          Flam Pwodiksyon
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <Link key={link.href} className="focus-ring rounded-sm transition hover:text-ember" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-charcoal/10 bg-white/60 p-1 sm:flex">
            <Languages size={16} className="ml-2 text-ash" aria-hidden />
            {locales.map((code) => (
              <Link
                key={code}
                href={`/${code}/${rest}`.replace(/\/$/, "")}
                className={`focus-ring rounded-full px-3 py-1 text-xs font-bold uppercase ${code === locale ? "bg-charcoal text-cream" : "text-ash"}`}
              >
                {code}
              </Link>
            ))}
          </div>
          <button className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 bg-white/70" onClick={() => setDark((value) => !value)} aria-label="Basculer le thème">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 bg-white/70 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Ouvrir le menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-charcoal/10 bg-cream px-4 py-4 lg:hidden">
          <nav className="grid gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md py-2 font-semibold">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
