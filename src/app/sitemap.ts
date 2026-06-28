import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

const routes = ["", "/histoire", "/produits", "/impact", "/grossistes", "/contact"];
const lastModified = new Date("2026-06-28");

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://flampwodiksyon.live/${locale}${route}`,
      lastModified
    }))
  );
}
