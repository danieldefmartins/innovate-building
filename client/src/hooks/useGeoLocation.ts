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

    // IP-based geolocation — silent, no permission needed
    // Uses lat/lon from IP API + nearest-city distance matching
    fetch("/api/geo")
      .then((r) => r.json())
      .then((data) => {
        let city: CityData | null = null;

        // Match by lat/lon distance (most accurate)
        if (data.lat && data.lon) {
          city = findNearestCity(data.lat, data.lon);
        }

        // Fallback: exact city name match
        if (!city && data.city) {
          const cityLower = data.city.toLowerCase();
          city =
            CITIES.find((c) => {
              if (c.name.toLowerCase() !== cityLower) return false;
              if (c.stateAbbr === "NH" && data.regionCode !== "NH") return false;
              if (c.stateAbbr === "MA" && data.regionCode === "NH") return false;
              return true;
            }) ?? null;
        }

        // State-level fallback
        if (!city && data.regionCode === "NH") {
          city = CITIES.find((c) => c.slug === "manchester-nh") ?? null;
        }
        if (!city && data.regionCode === "MA") {
          city = CITIES.find((c) => c.slug === "boston") ?? null;
        }

        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ slug: city?.slug ?? null }));
        setState({ detectedCity: city, isLoading: false });
      })
      .catch(() => {
        setState({ detectedCity: null, isLoading: false });
      });
  }, []);

  return state;
}
