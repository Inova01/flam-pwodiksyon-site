import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroFlame } from "@/components/Motion";
import { SmoothScroll } from "@/components/SmoothScroll";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, locales, toLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolved = await params;
  const locale = isLocale(resolved.locale) ? resolved.locale : "fr";
  const dict = dictionaries[locale];
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/images/hero-flam.png"],
      locale
    }
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const resolved = await params;
  const locale = toLocale(resolved.locale);
  const dict = dictionaries[locale];
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flam Pwodiksyon",
    url: "https://flampwodiksyon.live",
    brand: { "@type": "Brand", name: "Gouligou" },
    areaServed: ["HT", "US", "CA", "FR"]
  };

  return (
    <>
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <SmoothScroll />
      <IntroFlame />
      <Header locale={locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
