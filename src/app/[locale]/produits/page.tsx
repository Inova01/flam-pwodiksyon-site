import { ProductGrid } from "@/components/ProductGrid";
import { dictionaries } from "@/i18n/dictionaries";
import { toLocale } from "@/lib/i18n";

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = await params;
  const locale = toLocale(resolved.locale);
  const dict = dictionaries[locale];
  return <ProductGrid locale={locale} dict={dict} />;
}
