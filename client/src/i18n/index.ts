import en from "./en";
import es from "./es";
import pt from "./pt";

export type Lang = "en" | "es" | "pt";
export type Translations = typeof en;

export const TRANSLATIONS: Record<Lang, Translations> = { en, es, pt } as any;

export const SUPPORTED_LANGS: Lang[] = ["en", "es", "pt"];

export function isLang(s: string): s is Lang {
  return SUPPORTED_LANGS.includes(s as Lang);
}
