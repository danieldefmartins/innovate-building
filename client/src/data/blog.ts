import type { ReactNode } from "react";

export type BlogCategory = "Cost Guides" | "How-To" | "Local Insights" | "Seasonal Tips";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Cost Guides",
  "How-To",
  "Local Insights",
  "Seasonal Tips",
];

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: () => ReactNode;
  publishDate: string;
  category: BlogCategory;
  readTime: string;
  metaDescription: string;
  heroImage?: string;
  relatedServices: string[];
  relatedCities: string[];
}

// Content is defined inline as JSX factory functions in blog-content.tsx
// to keep this file focused on metadata.
// We re-export from there after defining the metadata here.

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "kitchen-remodel-cost-boston",
    title: "How Much Does a Kitchen Remodel Cost in Boston? (2026 Guide)",
    excerpt:
      "Get a realistic breakdown of kitchen remodel costs in the Greater Boston area — from budget refreshes to high-end gut renovations.",
    content: () => null, // replaced at bottom
    publishDate: "2026-01-15",
    category: "Cost Guides",
    readTime: "10 min read",
    metaDescription:
      "Kitchen remodel costs in Boston range from $25K to $120K+. Get a detailed 2026 price breakdown by project scope, materials, and neighborhood from a local contractor.",
    heroImage: "/images/IMG_9086.jpeg",
    relatedServices: ["kitchen-remodeling", "home-remodeling"],
    relatedCities: ["boston", "cambridge", "brookline"],
  },
  {
    slug: "how-to-choose-general-contractor-massachusetts",
    title: "How to Choose a General Contractor in Massachusetts",
    excerpt:
      "Hiring a contractor is the biggest decision in any renovation. Here's what to look for — and what red flags to avoid — in Massachusetts.",
    content: () => null,
    publishDate: "2026-01-22",
    category: "How-To",
    readTime: "9 min read",
    metaDescription:
      "Learn how to vet, compare, and hire a reliable general contractor in Massachusetts. Licensing requirements, questions to ask, and red flags to watch for.",
    heroImage: "/images/IMG_5776.jpeg",
    relatedServices: ["home-remodeling", "new-construction"],
    relatedCities: ["boston", "newton", "wellesley"],
  },
  {
    slug: "bathroom-renovation-cost-guide-boston",
    title: "Bathroom Renovation Cost Guide for Greater Boston Homeowners",
    excerpt:
      "Planning a bathroom renovation? Here's what Greater Boston homeowners actually pay — with cost ranges for every level of project.",
    content: () => null,
    publishDate: "2026-02-05",
    category: "Cost Guides",
    readTime: "9 min read",
    metaDescription:
      "Bathroom renovation costs in Greater Boston range from $15K to $60K+. Detailed 2026 pricing for fixtures, tile, labor, and full gut remodels.",
    heroImage: "/images/IMG_7399.jpeg",
    relatedServices: ["bathroom-remodeling", "home-remodeling"],
    relatedCities: ["boston", "quincy", "medford"],
  },
  {
    slug: "massachusetts-building-permits-homeowner-guide",
    title: "A Homeowner's Guide to Building Permits in Massachusetts",
    excerpt:
      "When do you need a building permit in Massachusetts? What does the process look like? A plain-English breakdown for homeowners.",
    content: () => null,
    publishDate: "2026-02-12",
    category: "Local Insights",
    readTime: "8 min read",
    metaDescription:
      "Learn when you need a building permit in Massachusetts, how to apply, typical costs, and what happens if you skip one. A homeowner-friendly guide.",
    heroImage: "/images/IMG_0895.jpeg",
    relatedServices: ["home-remodeling", "home-addition", "new-construction"],
    relatedCities: ["boston", "somerville", "framingham"],
  },
  {
    slug: "best-time-to-renovate-new-england",
    title: "The Best Time to Renovate Your Home in New England",
    excerpt:
      "Timing your renovation right can save money and headaches. Here's the seasonal breakdown for New England homeowners.",
    content: () => null,
    publishDate: "2026-02-20",
    category: "Seasonal Tips",
    readTime: "7 min read",
    metaDescription:
      "Discover the best months to start a home renovation in New England. Seasonal pros and cons for interior and exterior projects, plus contractor booking tips.",
    heroImage: "/images/IMG_6301.jpeg",
    relatedServices: ["home-remodeling", "roofing", "siding"],
    relatedCities: ["boston", "waltham", "needham"],
  },
  {
    slug: "basement-finishing-boston-complete-guide",
    title: "Basement Finishing in Boston: The Complete 2026 Guide",
    excerpt:
      "Turn your unfinished basement into livable space. Everything Boston homeowners need to know — costs, permits, moisture, and design ideas.",
    content: () => null,
    publishDate: "2026-03-01",
    category: "How-To",
    readTime: "11 min read",
    metaDescription:
      "Complete guide to finishing a basement in Boston. Costs ($30–$100/sq ft), moisture solutions, permit requirements, and design ideas from a local contractor.",
    heroImage: "/images/IMG_0164.jpeg",
    relatedServices: ["basement-renovation", "home-remodeling"],
    relatedCities: ["boston", "malden", "everett"],
  },
  {
    slug: "roofing-replacement-signs-new-england",
    title: "7 Signs You Need a Roof Replacement (New England Edition)",
    excerpt:
      "New England weather is brutal on roofs. Here are the seven warning signs that it's time for a replacement — not just a patch.",
    content: () => null,
    publishDate: "2026-03-10",
    category: "How-To",
    readTime: "8 min read",
    metaDescription:
      "Learn the 7 telltale signs your New England roof needs replacement. Age, curling shingles, leaks, ice damage, and more — plus what to expect from the process.",
    heroImage: "/images/15331c74-e597-45d2-9306-07925037e38e.jpg",
    relatedServices: ["roofing", "siding"],
    relatedCities: ["boston", "quincy", "natick"],
  },
  {
    slug: "home-addition-vs-moving-boston",
    title: "Home Addition vs. Moving: What Makes More Sense in Boston?",
    excerpt:
      "Need more space? In today's Boston housing market, building an addition may be smarter than buying a bigger house. Here's the math.",
    content: () => null,
    publishDate: "2026-03-18",
    category: "Local Insights",
    readTime: "9 min read",
    metaDescription:
      "Compare the costs of a home addition vs. buying a new home in Greater Boston. Real numbers, hidden costs, and the factors most homeowners overlook.",
    heroImage: "/images/007c6dcb-df1c-40eb-86b1-0f8aba58d123.jpg",
    relatedServices: ["home-addition", "new-construction"],
    relatedCities: ["boston", "newton", "brookline"],
  },
  {
    slug: "energy-efficient-upgrades-massachusetts-homes",
    title: "Top Energy-Efficient Upgrades for Massachusetts Homes",
    excerpt:
      "From insulation to windows to heat pumps — the upgrades that actually pay for themselves in Massachusetts, plus available rebates.",
    content: () => null,
    publishDate: "2026-04-01",
    category: "How-To",
    readTime: "10 min read",
    metaDescription:
      "Discover the best energy-efficient home upgrades for Massachusetts. Insulation, windows, heat pumps, and available Mass Save rebates explained by a local contractor.",
    heroImage: "/images/IMG_8255.jpeg",
    relatedServices: ["windows-doors", "siding", "roofing"],
    relatedCities: ["boston", "cambridge", "waltham"],
  },
  {
    slug: "deck-building-guide-boston-area",
    title: "Building a Deck in the Boston Area: Materials, Permits & Costs",
    excerpt:
      "Thinking about a new deck? Here's everything Boston-area homeowners need to know about materials, permits, costs, and timelines.",
    content: () => null,
    publishDate: "2026-04-10",
    category: "Cost Guides",
    readTime: "9 min read",
    metaDescription:
      "Complete guide to building a deck in the Boston area. Compare composite vs. wood costs, permit requirements, and what to expect from the building process.",
    heroImage: "/images/IMG_0343.jpeg",
    relatedServices: ["decks-outdoor", "home-remodeling"],
    relatedCities: ["boston", "quincy", "newton"],
  },
];

// Now inject actual content functions — done via a separate assignment
// so that the content can reference JSX with imports.
// See blog-content.tsx for the actual article bodies.

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: BlogCategory): BlogArticle[] {
  return BLOG_ARTICLES.filter((a) => a.category === category);
}

export function getRelatedArticles(
  current: BlogArticle,
  limit = 3
): BlogArticle[] {
  return BLOG_ARTICLES.filter(
    (a) => a.slug !== current.slug && a.category === current.category
  ).slice(0, limit);
}
