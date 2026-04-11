import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;

// In-memory geo cache (IP → result, 1 hour TTL)
const geoCache = new Map<string, { data: any; expires: number }>();
const GEO_CACHE_TTL = 60 * 60 * 1000; // 1 hour

app.get("/api/geo", async (req, res) => {
  try {
    const forwarded = req.headers["x-forwarded-for"];
    const ip =
      (typeof forwarded === "string" ? forwarded.split(",")[0].trim() : undefined) ||
      req.socket.remoteAddress ||
      "";

    // Skip private/local IPs
    if (!ip || ip === "::1" || ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("10.")) {
      return res.json({ city: null, region: null, regionCode: null });
    }

    // Check cache
    const cached = geoCache.get(ip);
    if (cached && cached.expires > Date.now()) {
      return res.json(cached.data);
    }

    // Call free IP geolocation API (ip-api.com — 45 req/min free)
    const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,city,regionName,region,lat,lon`);
    const geo = await geoRes.json();

    if (geo.status !== "success") {
      return res.json({ city: null, region: null, regionCode: null });
    }

    const result = {
      city: geo.city,
      region: geo.regionName,
      regionCode: geo.region,
      lat: geo.lat,
      lon: geo.lon,
    };

    // Cache result
    geoCache.set(ip, { data: result, expires: Date.now() + GEO_CACHE_TTL });

    // Cleanup old cache entries periodically
    if (geoCache.size > 10000) {
      const now = Date.now();
      for (const [key, val] of geoCache) {
        if (val.expires < now) geoCache.delete(key);
      }
    }

    return res.json(result);
  } catch {
    return res.json({ city: null, region: null, regionCode: null });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// SPA fallback — serve index.html for all routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Innovate Building server running on port ${PORT}`);
});
