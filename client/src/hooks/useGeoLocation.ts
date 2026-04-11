import { useState, useEffect } from "react";
import { CITIES, type CityData } from "@/data/cities";

interface GeoState {
  detectedCity: CityData | null;
  isLoading: boolean;
}

const SESSION_KEY = "innovate_geo";

// Haversine distance in miles between two lat/lon points
function distanceMiles(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959; // Earth radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function findNearestCity(lat: number, lon: number): CityData | null {
  let nearest: CityData | null = null;
  let minDist = Infinity;

  for (const city of CITIES) {
    if (!city.lat || !city.lon) continue;
    const d = distanceMiles(lat, lon, city.lat, city.lon);
    if (d < minDist) {
      minDist = d;
      nearest = city;
    }
  }

  // Only match if within 30 miles of a city we serve
  return minDist <= 30 ? nearest : null;
}

function matchCityByName(city: string, regionCode: string): CityData | null {
  if (!city) return null;
  const cityLower = city.toLowerCase();

  const exact = CITIES.find((c) => {
    if (c.name.toLowerCase() !== cityLower) return false;
    if (c.stateAbbr === "NH" && regionCode !== "NH") return false;
    if (c.stateAbbr === "MA" && regionCode === "NH") return false;
    return true;
  });
  if (exact) return exact;

  // State-level fallback
  if (regionCode === "NH") return CITIES.find((c) => c.slug === "manchester-nh") ?? null;
  if (regionCode === "MA") return CITIES.find((c) => c.slug === "boston") ?? null;
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
        // ignore
      }
    }

    let resolved = false;

    // Strategy 1: Browser Geolocation API (most accurate — GPS on mobile, WiFi on desktop)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (resolved) return;
          resolved = true;
          const city = findNearestCity(pos.coords.latitude, pos.coords.longitude);
          sessionStorage.setItem(SESSION_KEY, JSON.stringify({ slug: city?.slug ?? null }));
          setState({ detectedCity: city, isLoading: false });
        },
        () => {
          // Permission denied or error — fall through to IP-based
          if (resolved) return;
          resolved = true;
          ipFallback();
        },
        { timeout: 5000, maximumAge: 300000 } // 5s timeout, cache for 5 min
      );
    } else {
      ipFallback();
    }

    // Strategy 2: IP-based geolocation (fallback — less accurate)
    function ipFallback() {
      fetch("/api/geo")
        .then((r) => r.json())
        .then((data) => {
          let city: CityData | null = null;

          // Try lat/lon from IP first (nearest city match)
          if (data.lat && data.lon) {
            city = findNearestCity(data.lat, data.lon);
          }

          // Fall back to name matching
          if (!city) {
            city = matchCityByName(data.city ?? "", data.regionCode ?? "");
          }

          sessionStorage.setItem(SESSION_KEY, JSON.stringify({ slug: city?.slug ?? null }));
          setState({ detectedCity: city, isLoading: false });
        })
        .catch(() => {
          setState({ detectedCity: null, isLoading: false });
        });
    }
  }, []);

  return state;
}
