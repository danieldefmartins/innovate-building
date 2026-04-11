import { useState, useEffect } from "react";
import { CITIES, type CityData } from "@/data/cities";

interface GeoState {
  detectedCity: CityData | null;
  isLoading: boolean;
}

const SESSION_KEY = "innovate_geo";

function matchCity(city: string, regionCode: string): CityData | null {
  if (!city) return null;

  const cityLower = city.toLowerCase();

  // Exact name match (state-aware for duplicates like Salem)
  const exact = CITIES.find((c) => {
    if (c.name.toLowerCase() !== cityLower) return false;
    // For NH cities, verify region matches
    if (c.stateAbbr === "NH" && regionCode !== "NH") return false;
    if (c.stateAbbr === "MA" && regionCode === "NH") return false;
    return true;
  });
  if (exact) return exact;

  // Fallback: state-level default (show biggest city's phone for that state)
  if (regionCode === "NH") {
    return CITIES.find((c) => c.slug === "manchester-nh") ?? null;
  }
  if (regionCode === "MA") {
    return CITIES.find((c) => c.slug === "boston") ?? null;
  }

  return null;
}

export function useGeoLocation(): GeoState {
  const [state, setState] = useState<GeoState>({
    detectedCity: null,
    isLoading: true,
  });

  useEffect(() => {
    // Check sessionStorage first
    const cached = sessionStorage.getItem(SESSION_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const city = parsed.slug
          ? CITIES.find((c) => c.slug === parsed.slug) ?? null
          : null;
        setState({ detectedCity: city, isLoading: false });
        return;
      } catch {
        // ignore parse errors
      }
    }

    fetch("/api/geo")
      .then((r) => r.json())
      .then((data) => {
        const city = matchCity(data.city ?? "", data.regionCode ?? "");
        sessionStorage.setItem(
          SESSION_KEY,
          JSON.stringify({ slug: city?.slug ?? null })
        );
        setState({ detectedCity: city, isLoading: false });
      })
      .catch(() => {
        setState({ detectedCity: null, isLoading: false });
      });
  }, []);

  return state;
}
