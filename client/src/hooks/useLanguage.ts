import { createContext, useContext } from "react";
import { TRANSLATIONS, type Lang, type Translations } from "@/i18n";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  prefix: string; // "" for English, "/es" or "/pt" for others
  localePath: (path: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: TRANSLATIONS.en,
  prefix: "",
  localePath: (p) => p,
});

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

export function parseLangFromPath(pathname: string): { lang: Lang; cleanPath: string } {
  const match = pathname.match(/^\/(es|pt)(\/|$)(.*)/);
  if (match) {
    const lang = match[1] as Lang;
    const rest = match[3] ? `/${match[3]}` : "/";
    return { lang, cleanPath: rest };
  }
  return { lang: "en", cleanPath: pathname };
}
