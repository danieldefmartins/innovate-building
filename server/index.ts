import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Read the built HTML template once at startup ────────────────────────────
const INDEX_HTML_PATH = path.join(__dirname, "public", "index.html");
let htmlTemplate = "";
try {
  htmlTemplate = fs.readFileSync(INDEX_HTML_PATH, "utf-8");
} catch {
  // Template will be read on first request if not available at startup
}

function getTemplate(): string {
  if (!htmlTemplate) {
    htmlTemplate = fs.readFileSync(INDEX_HTML_PATH, "utf-8");
  }
  return htmlTemplate;
}

// ─── Route-based meta tag data ───────────────────────────────────────────────
const BASE_URL = "https://innovatebuildinginc.com";
const COMPANY = "Innovate Building";
const DEFAULT_IMAGE = `${BASE_URL}/images/IMG_2924.jpeg`;

interface MetaData {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

const STATIC_META: Record<string, MetaData> = {
  "/": {
    title: `${COMPANY} | General Contractor | Greater Boston & NH`,
    description: "Greater Boston's trusted general contractor for 25+ years. Home remodeling, kitchen & bathroom renovation, roofing, new construction, and more. Licensed, insured, 100% in-house crews.",
  },
  "/services": {
    title: `Our Services — Full-Service General Contractor | ${COMPANY}`,
    description: "Kitchen remodeling, bathroom renovation, roofing, new construction, additions, basements, decks, siding, and windows. All done by our in-house crews across Greater Boston.",
  },
  "/portfolio": {
    title: `Portfolio — Our Work | ${COMPANY}`,
    description: "Browse our portfolio of completed projects across Greater Boston. Kitchens, bathrooms, new construction, additions, decks, and more. 1,000+ projects completed.",
  },
  "/before-after": {
    title: `Before & After Project Gallery | ${COMPANY}`,
    description: "See stunning before and after transformations by Innovate Building. Kitchen remodels, bathroom renovations, home additions, and more across Greater Boston.",
  },
  "/our-team": {
    title: `Our Team — 100% In-House Crews | ${COMPANY}`,
    description: "Meet the Innovate Building crew. 100% in-house teams — no subcontractors. 20+ years building across Greater Boston and New Hampshire. Licensed #CS-119608.",
  },
  "/cost-estimator": {
    title: `Home Renovation Cost Estimator | ${COMPANY}`,
    description: "Get a free ballpark estimate for your renovation project. Kitchen, bathroom, basement, addition, deck, and roofing costs based on 20+ years of Greater Boston pricing.",
  },
  "/reviews": {
    title: `Reviews & Testimonials | ${COMPANY}`,
    description: "Read real reviews from Greater Boston homeowners. 5-star rated general contractor with 20+ years experience, 100% in-house crews. See what our clients say.",
  },
  "/faq": {
    title: `FAQ — Frequently Asked Questions | ${COMPANY}`,
    description: "Answers to common questions about hiring a general contractor in Greater Boston. Costs, timelines, licensing, process, and more from a 20+ year contractor.",
  },
  "/about": {
    title: `About Us — 20+ Years Building Boston | ${COMPANY}`,
    description: "Learn about Innovate Building Inc — Greater Boston's trusted general contractor since 2001. 100% in-house crews, 1,000+ projects, licensed #CS-119608.",
  },
  "/contact": {
    title: `Contact Us — Free Estimate | ${COMPANY}`,
    description: "Get a free, no-obligation estimate for your renovation project. Call or fill out our form. Licensed general contractor serving Greater Boston and NH for 20+ years.",
  },
  "/blog": {
    title: `Home Improvement Blog | ${COMPANY}`,
    description: "Expert home renovation advice from a 20+ year Greater Boston contractor. Cost guides, how-tos, seasonal tips, and local insights for Massachusetts and NH homeowners.",
  },
  "/areas-we-serve": {
    title: `Areas We Serve | ${COMPANY}`,
    description: "Innovate Building serves 70+ cities across Greater Boston and Southern New Hampshire. Find your local general contractor.",
  },
};

// Dynamic route patterns
const SERVICE_META: Record<string, MetaData> = {
  "kitchen-remodeling": { title: `Kitchen Remodeling in Greater Boston | ${COMPANY}`, description: "Custom kitchen renovations that blend functionality and style. Cabinets, countertops, tile, and full gut remodels by 100% in-house crews." },
  "bathroom-remodeling": { title: `Bathroom Remodeling in Greater Boston | ${COMPANY}`, description: "Transform your bathroom with expert renovation. Walk-in showers, custom tile, modern vanities. Licensed contractor, 25+ years experience." },
  "home-remodeling": { title: `Home Remodeling in Greater Boston | ${COMPANY}`, description: "Complete home renovations by experienced in-house crews. Kitchens, bathrooms, basements, and whole-house remodels across Greater Boston." },
  "roofing": { title: `Roofing Services in Greater Boston | ${COMPANY}`, description: "Full roof replacement and repair by experienced in-house crews. Asphalt, architectural, and designer shingles. Storm damage specialists." },
  "basement-renovation": { title: `Basement Finishing & Renovation | ${COMPANY}`, description: "Turn your unfinished basement into livable space. Framing, drywall, flooring, bathrooms, and full finishing by licensed contractors." },
  "new-construction": { title: `New Home Construction in Greater Boston | ${COMPANY}`, description: "Build your dream home from the ground up. Custom new construction with in-house crews, 25+ years experience, licensed and insured." },
  "home-addition": { title: `Home Additions in Greater Boston | ${COMPANY}`, description: "Need more space? From bump-outs to second stories, we build additions that look like they were always part of your home." },
  "siding": { title: `Siding & Exterior in Greater Boston | ${COMPANY}`, description: "Vinyl, fiber cement, and cedar siding installation. Full exterior renovations including insulation, trim, and weatherproofing." },
  "decks-outdoor": { title: `Decks & Outdoor Living | ${COMPANY}`, description: "Custom deck design and construction. Composite and wood decking, railings, lighting, and outdoor living spaces across Greater Boston." },
  "windows-doors": { title: `Windows & Doors Installation | ${COMPANY}`, description: "Energy-efficient window and door replacement. Expert installation by in-house crews. All major brands, licensed and insured." },
};

function getMetaForRoute(pathname: string): MetaData {
  // Static routes
  if (STATIC_META[pathname]) return STATIC_META[pathname];

  // Service pages
  const serviceMatch = pathname.match(/^\/services\/(.+)$/);
  if (serviceMatch && SERVICE_META[serviceMatch[1]]) {
    return SERVICE_META[serviceMatch[1]];
  }

  // City pages
  const cityMatch = pathname.match(/^\/areas\/(.+)$/);
  if (cityMatch) {
    const slug = cityMatch[1];
    const name = slug.replace(/-nh$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const state = slug.endsWith("-nh") ? "NH" : "MA";
    return {
      title: `General Contractor in ${name}, ${state} | ${COMPANY}`,
      description: `Trusted general contractor serving ${name}, ${state}. Home remodeling, kitchen renovations, roofing, and new construction. 25+ years experience, 100% in-house crews.`,
    };
  }

  // Blog articles
  const blogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      title: `${title} | ${COMPANY}`,
      description: `Expert home renovation advice from a 20+ year Greater Boston contractor.`,
      type: "article",
    };
  }

  // Default
  return STATIC_META["/"];
}

function parseLang(pathname: string): { lang: string; cleanPath: string } {
  const match = pathname.match(/^\/(es|pt)(\/|$)(.*)/);
  if (match) {
    const rest = match[3] ? `/${match[3]}` : "/";
    return { lang: match[1], cleanPath: rest };
  }
  return { lang: "en", cleanPath: pathname };
}

const LOCALE_MAP: Record<string, string> = {
  en: "en_US",
  es: "es_US",
  pt: "pt_BR",
};

function injectMeta(html: string, pathname: string): string {
  const { lang, cleanPath } = parseLang(pathname);
  const meta = getMetaForRoute(cleanPath);
  const url = `${BASE_URL}${pathname}`;
  const image = meta.image ? `${BASE_URL}${meta.image}` : DEFAULT_IMAGE;
  const type = meta.type || "website";
  const locale = LOCALE_MAP[lang] || "en_US";

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escapeHtml(meta.description)}"`
  );

  // Build hreflang tags for all language variants
  const enPath = cleanPath;
  const hreflangs = `
    <link rel="alternate" hreflang="en" href="${BASE_URL}${enPath}" />
    <link rel="alternate" hreflang="es" href="${BASE_URL}/es${enPath === "/" ? "" : enPath}" />
    <link rel="alternate" hreflang="pt" href="${BASE_URL}/pt${enPath === "/" ? "" : enPath}" />
    <link rel="alternate" hreflang="x-default" href="${BASE_URL}${enPath}" />`;

  // Inject OG + Twitter + canonical + hreflang tags before </head>
  const ogTags = `
    <link rel="canonical" href="${url}" />${hreflangs}
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:site_name" content="Innovate Building Inc" />
    <meta property="og:locale" content="${locale}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${image}" />`;

  html = html.replace("</head>", `${ogTags}\n  </head>`);

  return html;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ─── Geo API endpoint ────────────────────────────────────────────────────────
const geoCache = new Map<string, { data: any; expires: number }>();
const GEO_CACHE_TTL = 60 * 60 * 1000;

app.get("/api/geo", async (req, res) => {
  try {
    const forwarded = req.headers["x-forwarded-for"];
    const ip =
      (typeof forwarded === "string" ? forwarded.split(",")[0].trim() : undefined) ||
      req.socket.remoteAddress ||
      "";

    if (!ip || ip === "::1" || ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("10.")) {
      return res.json({ city: null, region: null, regionCode: null });
    }

    const cached = geoCache.get(ip);
    if (cached && cached.expires > Date.now()) {
      return res.json(cached.data);
    }

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

    geoCache.set(ip, { data: result, expires: Date.now() + GEO_CACHE_TTL });

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

// ─── Serve static files ──────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

// ─── SPA fallback with meta tag injection ────────────────────────────────────
app.get("*", (req, res) => {
  const html = injectMeta(getTemplate(), req.path);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Innovate Building server running on port ${PORT}`);
});
