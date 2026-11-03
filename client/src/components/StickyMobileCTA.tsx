import { Phone, MessageSquare, ClipboardList } from "lucide-react";
import { PHONE_NUMBERS, type PhoneEntry } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";

interface StickyMobileCTAProps {
  geoPhone?: PhoneEntry;
}

export default function StickyMobileCTA({ geoPhone }: StickyMobileCTAProps) {
  const phone = geoPhone ?? PHONE_NUMBERS.MAIN;
  const { t, lang, localePath } = useLanguage();
  const textLabel = lang === "en" ? "TEXT" : "TEXTO";
  const smsBody = encodeURIComponent("Hi, I'd like a free estimate");

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-sidebar border-t-2 border-sidebar-border">
      <div className="grid grid-cols-3 divide-x divide-sidebar-border">
        <a
          href={`tel:${phone.tel}`}
          className="flex items-center justify-center gap-2 py-3 text-accent font-display font-bold text-sm hover:bg-sidebar-accent/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          {t.nav.callNow}
        </a>
        <a
          href={`sms:+${PHONE_NUMBERS.MAIN.tel}?&body=${smsBody}`}
          className="flex items-center justify-center gap-2 py-3 text-sidebar-foreground font-display font-bold text-sm hover:bg-sidebar-accent/10 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          {textLabel}
        </a>
        <a
          href={localePath("/contact")}
          className="flex items-center justify-center gap-2 py-3 bg-accent text-accent-foreground font-display font-bold text-sm hover:bg-accent/90 transition-colors"
        >
          <ClipboardList className="w-4 h-4" />
          {t.nav.freeQuote}
        </a>
      </div>
    </div>
  );
}
