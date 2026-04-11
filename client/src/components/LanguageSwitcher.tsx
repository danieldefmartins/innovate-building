import { useLocation } from "wouter";
import { useLanguage, parseLangFromPath } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";
import { SUPPORTED_LANGS } from "@/i18n";

export default function LanguageSwitcher() {
  const { lang, t } = useLanguage();
  const [location, setLocation] = useLocation();

  const switchLang = (newLang: string) => {
    const { cleanPath } = parseLangFromPath(location);
    const newPath = newLang === "en" ? cleanPath : `/${newLang}${cleanPath === "/" ? "" : cleanPath}`;
    setLocation(newPath || "/");
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-display font-bold tracking-wider text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors cursor-pointer">
        <Globe className="w-3.5 h-3.5" />
        {t.langNames[lang]}
      </button>
      <div className="absolute top-full right-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-card border border-border rounded-lg shadow-xl py-1 min-w-[120px]">
          {SUPPORTED_LANGS.map((l) => (
            <button
              key={l}
              onClick={() => switchLang(l)}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${
                lang === l
                  ? "text-accent font-bold bg-accent/5"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {t.langNames[l]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
