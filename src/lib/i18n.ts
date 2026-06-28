export const locales = ["fr", "ht", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function toLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
