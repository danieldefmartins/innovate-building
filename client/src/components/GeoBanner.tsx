import { useState } from "react";
import { Link, useLocation } from "wouter";
import { MapPin, Phone, X, ArrowRight } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import type { CityData } from "@/data/cities";

interface GeoBannerProps {
  city: CityData;
}

const DISMISS_KEY = "innovate_geo_dismissed";

export default function GeoBanner({ city }: GeoBannerProps) {
  const [location] = useLocation();
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(DISMISS_KEY) === "1"
  );

  // Don't show on city landing pages (already localized) or if dismissed
  if (dismissed || location.startsWith("/areas/")) return null;

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <div className="bg-accent text-accent-foreground relative z-[60]">
      <div className="container flex items-center justify-between py-2.5 gap-3">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap min-w-0">
          <div className="flex items-center gap-1.5 text-sm font-bold font-display tracking-wide whitespace-nowrap">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">
              We serve {city.name}, {city.stateAbbr}!
            </span>
            <span className="sm:hidden">
              {city.name}, {city.stateAbbr}
            </span>
          </div>

          <PhoneLink
            tel={city.phone.tel}
            className="flex items-center gap-1.5 text-sm font-semibold hover:underline whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            {city.phone.display}
          </PhoneLink>

          <Link href={`/areas/${city.slug}`}>
            <span className="hidden md:flex items-center gap-1 text-sm font-medium hover:underline cursor-pointer whitespace-nowrap">
              View local services <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <button
          onClick={dismiss}
          className="p-1 hover:bg-white/20 rounded transition-colors flex-shrink-0 cursor-pointer"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
