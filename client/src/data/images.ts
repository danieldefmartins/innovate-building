/**
 * Categorized portfolio images for Innovate Building Inc
 * Images stored in /public/images/
 */

export interface PortfolioImage {
  src: string;
  alt: string;
  category: string;
}

/** Hero images for the homepage and key landing pages */
export const HERO_IMAGES = {
  home: "/images/IMG_2924.jpeg",
  kitchen: "/images/IMG_9086.jpeg",
  bathroom: "/images/IMG_7399.jpeg",
  deck: "/images/IMG_0343.jpeg",
  newConstruction: "/images/IMG_0895.jpeg",
  basement: "/images/IMG_0164.jpeg",
  exterior: "/images/IMG_6301.jpeg",
  interior: "/images/IMG_5776.jpeg",
} as const;

/** Service-specific images mapped by service slug */
export const SERVICE_IMAGES: Record<string, string[]> = {
  "kitchen-remodeling": [
    "/images/IMG_9086.jpeg",
    "/images/IMG_5777.jpeg",
    "/images/IMG_6345.JPG",
    "/images/IMG_0454.jpeg",
    "/images/IMG_2931.jpeg",
    "/images/IMG_2319.jpeg",
    "/images/IMG_0335.jpeg",
    "/images/IMG_0072.jpeg",
    "/images/f573d1ea-0241-4c97-9ac9-d27ec1871f6b.jpg",
  ],
  "bathroom-remodeling": [
    "/images/IMG_7399.jpeg",
    "/images/IMG_9115.jpeg",
    "/images/IMG_0086.jpeg",
    "/images/IMG_2945.jpeg",
    "/images/IMG_0201.jpeg",
    "/images/IMG_7407.jpeg",
  ],
  "decks-outdoor": [
    "/images/IMG_0343.jpeg",
    "/images/IMG_6459.jpeg",
    "/images/IMG_2474.jpeg",
    "/images/ebd04d3e-e565-48a2-8841-4df8efcdf14f.jpg",
    "/images/9215a924-2fbf-4629-8126-185a6e9885e5.jpg",
    "/images/10e52018-dc13-4879-8628-bfa906abd425.jpg",
  ],
  "new-construction": [
    "/images/IMG_2924.jpeg",
    "/images/IMG_0895.jpeg",
    "/images/IMG_6301.jpeg",
    "/images/IMG_0115.jpeg",
    "/images/IMG_9092.jpeg",
    "/images/IMG_0900.jpeg",
  ],
  "basement-renovation": [
    "/images/IMG_0164.jpeg",
    "/images/2806dc8e-2499-4d7c-b737-1de435ac7cfe.jpg",
    "/images/03e272b4-694b-4a60-bb6c-a60bb2927a4c.jpg",
  ],
  roofing: [
    "/images/15331c74-e597-45d2-9306-07925037e38e.jpg",
    "/images/3eb308c8-29ef-4abd-80c1-cb4daaead3a0.jpg",
  ],
  "home-remodeling": [
    "/images/IMG_5776.jpeg",
    "/images/IMG_8255.jpeg",
    "/images/IMG_8253.jpeg",
    "/images/IMG_1486.jpeg",
    "/images/bcb80092-ad75-422e-bc7b-bbf75414d966.jpg",
    "/images/0ec4b0d6-3fb8-49a6-813b-b88866926b66.jpg",
    "/images/IMG_2317.jpeg",
  ],
  siding: [
    "/images/IMG_6301.jpeg",
    "/images/IMG_5637.jpeg",
    "/images/IMG_0895.jpeg",
  ],
  "home-addition": [
    "/images/007c6dcb-df1c-40eb-86b1-0f8aba58d123.jpg",
    "/images/51bb4475-9338-40a4-8ba0-f6052b36d22a.jpg",
    "/images/18ff43a8-9118-4267-b7d4-ea3274361f3f.jpg",
  ],
  "windows-doors": [
    "/images/IMG_0334.jpeg",
    "/images/IMG_8249.jpeg",
    "/images/IMG_2327.jpeg",
  ],
};

/** Portfolio page — curated showcase grid across all categories */
export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  // Kitchen
  { src: "/images/IMG_9086.jpeg", alt: "Modern Kitchen with Vaulted Ceilings", category: "Kitchen" },
  { src: "/images/IMG_5777.jpeg", alt: "White Kitchen with Dark Hardwood Floors", category: "Kitchen" },
  { src: "/images/IMG_6345.JPG", alt: "White & Navy Kitchen Renovation", category: "Kitchen" },
  { src: "/images/IMG_0454.jpeg", alt: "Kitchen with Blue Island", category: "Kitchen" },
  { src: "/images/IMG_2931.jpeg", alt: "Luxury Kitchen Remodel", category: "Kitchen" },
  { src: "/images/IMG_0335.jpeg", alt: "Classic White Kitchen", category: "Kitchen" },
  // Bathroom
  { src: "/images/IMG_7399.jpeg", alt: "Modern Black & White Bathroom", category: "Bathroom" },
  { src: "/images/IMG_9115.jpeg", alt: "Master Bathroom with Herringbone Tile", category: "Bathroom" },
  { src: "/images/IMG_0086.jpeg", alt: "Luxury Master Bathroom", category: "Bathroom" },
  { src: "/images/IMG_2945.jpeg", alt: "Marble Walk-in Shower", category: "Bathroom" },
  { src: "/images/IMG_0201.jpeg", alt: "Spa Bathroom Remodel", category: "Bathroom" },
  { src: "/images/IMG_7407.jpeg", alt: "Designer Bathroom Renovation", category: "Bathroom" },
  // New Construction
  { src: "/images/IMG_2924.jpeg", alt: "Custom Home Build — Exterior", category: "New Build" },
  { src: "/images/IMG_0895.jpeg", alt: "Dark Farmhouse New Construction", category: "New Build" },
  { src: "/images/IMG_6301.jpeg", alt: "Blue-Gray Craftsman Exterior", category: "New Build" },
  { src: "/images/IMG_0115.jpeg", alt: "Double Staircase Foyer", category: "New Build" },
  // Deck
  { src: "/images/IMG_0343.jpeg", alt: "Hardwood Deck with Cable Railing", category: "Deck" },
  { src: "/images/IMG_6459.jpeg", alt: "Waterfront Deck at Sunset", category: "Deck" },
  { src: "/images/IMG_2474.jpeg", alt: "Deck with Marsh Views", category: "Deck" },
  // Interior / Remodel
  { src: "/images/IMG_5776.jpeg", alt: "Living Room with Coffered Ceiling", category: "Remodel" },
  { src: "/images/IMG_8255.jpeg", alt: "Coffered Ceiling Dining Room", category: "Remodel" },
  { src: "/images/IMG_8253.jpeg", alt: "Open Concept Living Space", category: "Remodel" },
  { src: "/images/IMG_2317.jpeg", alt: "Modern Staircase Renovation", category: "Remodel" },
  // Basement
  { src: "/images/IMG_0164.jpeg", alt: "Basement Entertainment Room", category: "Basement" },
  // Addition
  { src: "/images/007c6dcb-df1c-40eb-86b1-0f8aba58d123.jpg", alt: "Second-Story Addition", category: "Addition" },
  // Exterior / Siding
  { src: "/images/IMG_5637.jpeg", alt: "James Hardie Siding Installation", category: "Exterior" },
  // Roofing
  { src: "/images/15331c74-e597-45d2-9306-07925037e38e.jpg", alt: "Complete Roof Replacement", category: "Roofing" },
];

/** Homepage portfolio preview — best 6 images across different categories */
export const HOME_PORTFOLIO_PREVIEW: PortfolioImage[] = [
  { src: "/images/IMG_9086.jpeg", alt: "Modern Kitchen Renovation", category: "Kitchen" },
  { src: "/images/IMG_2924.jpeg", alt: "Custom Home Build", category: "New Build" },
  { src: "/images/IMG_7399.jpeg", alt: "Modern Bathroom Remodel", category: "Bathroom" },
  { src: "/images/IMG_0343.jpeg", alt: "Hardwood Deck Build", category: "Deck" },
  { src: "/images/IMG_5776.jpeg", alt: "Living Room Renovation", category: "Remodel" },
  { src: "/images/IMG_0895.jpeg", alt: "New Construction Exterior", category: "New Build" },
];
