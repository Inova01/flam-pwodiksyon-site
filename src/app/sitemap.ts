import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const routes = ["", "/histoire", "/produits", "/impact", "/grossistes", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://flampwodiksyon.ht/${locale}${route}`,
      lastModified: new Date("2026-06-28")
    }))
  );
}
