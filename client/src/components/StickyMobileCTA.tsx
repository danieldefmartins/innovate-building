import { Phone, MessageSquare } from "lucide-react";
import { PHONE_NUMBERS, type PhoneEntry } from "@/lib/constants";

interface StickyMobileCTAProps {
  geoPhone?: PhoneEntry;
}

export default function StickyMobileCTA({ geoPhone }: StickyMobileCTAProps) {
  const phone = geoPhone ?? PHONE_NUMBERS.MAIN;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-sidebar border-t-2 border-sidebar-border">
      <div className="grid grid-cols-2 divide-x divide-sidebar-border">
        <a
          href={`tel:${phone.tel}`}
          className="flex items-center justify-center gap-2 py-3 text-accent font-display font-bold text-sm hover:bg-sidebar-accent/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          CALL NOW
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 py-3 text-sidebar-foreground font-display font-bold text-sm hover:bg-sidebar-accent/10 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          FREE QUOTE
        </a>
      </div>
    </div>
  );
}
