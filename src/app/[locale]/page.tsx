import { HomePage } from "@/components/HomePage";
import { dictionaries } from "@/i18n/dictionaries";
import { toLocale } from "@/lib/i18n";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = await params;
  const locale = toLocale(resolved.locale);
  return <HomePage locale={locale} dict={dictionaries[locale]} />;
}
