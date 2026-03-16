import {
  Home,
  Bath,
  ChefHat,
  Hammer,
  ArrowDown,
  Building2,
  PlusCircle,
  Paintbrush,
  TreePine,
  DoorOpen,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  features: string[];
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "home-remodeling",
    title: "Home Remodeling",
    shortTitle: "Home Remodel",
    icon: Home,
    description:
      "Complete home remodeling services from design to completion. We transform outdated homes into modern living spaces while preserving what makes your house feel like home.",
    heroTitle: "COMPLETE HOME REMODELING",
    heroSubtitle:
      "Transform your entire home with a trusted contractor who does everything in-house. No subcontractors, no runarounds — just quality craftsmanship from start to finish.",
    features: [
      "Whole-home renovations",
      "Open floor plan conversions",
      "Structural modifications",
      "Electrical & plumbing upgrades",
      "Custom millwork & trim",
      "Energy efficiency improvements",
    ],
    benefits: [
      "Single point of contact for your entire project",
      "In-house crews — no subcontractor delays",
      "25+ years of renovation expertise",
      "Licensed and fully insured",
      "Free detailed estimates",
      "On-time, on-budget delivery",
    ],
    process: [
      { step: "Free Consultation", description: "We visit your home, discuss your vision, and assess the scope of work." },
      { step: "Design & Estimate", description: "Detailed proposal with transparent pricing — no hidden fees." },
      { step: "Construction", description: "Our in-house crew handles everything from demo to finishing touches." },
      { step: "Final Walkthrough", description: "We walk through every detail together before final handoff." },
    ],
    faqs: [
      { q: "How long does a full home remodel take?", a: "Typical whole-home renovations take 8-16 weeks depending on scope. We provide a detailed timeline during the estimate phase." },
      { q: "Do you handle permits?", a: "Yes. We pull all necessary building permits and handle inspections — it's part of our service." },
      { q: "Can I live in my home during renovation?", a: "In many cases, yes. We phase work to minimize disruption and can advise on what makes sense for your project." },
    ],
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    shortTitle: "Kitchens",
    icon: ChefHat,
    description:
      "Custom kitchen renovations that blend functionality with style. From cabinet installation to complete kitchen overhauls, we build kitchens that become the heart of your home.",
    heroTitle: "KITCHEN REMODELING EXPERTS",
    heroSubtitle:
      "Your kitchen is the most-used room in your home. We design and build kitchens that work as hard as you do — with premium materials, expert craftsmanship, and zero shortcuts.",
    features: [
      "Custom & semi-custom cabinetry",
      "Countertop installation (granite, quartz, marble)",
      "Kitchen island design & build",
      "Backsplash & tile work",
      "Plumbing & electrical updates",
      "Flooring installation",
    ],
    benefits: [
      "Complete kitchen renovation under one roof",
      "In-house crews for every trade",
      "3D kitchen design visualization",
      "Premium material sourcing",
      "25+ years of kitchen expertise",
      "Transparent pricing — no change-order surprises",
    ],
    process: [
      { step: "Kitchen Consultation", description: "We measure your space, discuss your cooking habits, and explore design options." },
      { step: "Design & Material Selection", description: "Choose cabinets, countertops, fixtures, and finishes with our guidance." },
      { step: "Build & Install", description: "Professional demolition, construction, and installation by our in-house team." },
      { step: "Quality Inspection", description: "Final walkthrough ensuring every detail meets our standards." },
    ],
    faqs: [
      { q: "How long does a kitchen remodel take?", a: "A typical kitchen renovation takes 4-8 weeks. We provide a specific timeline based on your project scope." },
      { q: "Can you work with my existing layout?", a: "Absolutely. We can refresh your kitchen within the existing footprint or redesign the layout entirely." },
      { q: "Do you supply materials or do I?", a: "We handle material sourcing and procurement, but we're happy to work with materials you've already purchased." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortTitle: "Bathrooms",
    icon: Bath,
    description:
      "Transform your bathroom into a spa-like retreat. From powder rooms to master bath renovations, we handle plumbing, tile, fixtures, and everything in between.",
    heroTitle: "BATHROOM RENOVATION SPECIALISTS",
    heroSubtitle:
      "From outdated to outstanding. Our in-house team handles every aspect of your bathroom renovation — plumbing, tile, electrical, and finishing — with no subcontractors.",
    features: [
      "Complete bathroom gut renovations",
      "Walk-in shower conversions",
      "Bathtub-to-shower conversions",
      "Custom tile & stonework",
      "Vanity & fixture installation",
      "Accessibility modifications",
    ],
    benefits: [
      "All trades handled in-house",
      "Waterproofing done right the first time",
      "Premium fixture & material options",
      "ADA-compliant designs available",
      "25+ years of bathroom renovation experience",
      "Clean, respectful work crews",
    ],
    process: [
      { step: "Bathroom Assessment", description: "We evaluate your space, plumbing, and ventilation to identify the best approach." },
      { step: "Design & Selections", description: "Pick your tile, fixtures, vanity, and finishes with expert guidance." },
      { step: "Renovation", description: "Complete tear-out and rebuild by our skilled in-house crews." },
      { step: "Reveal", description: "Final inspection and reveal of your new bathroom." },
    ],
    faqs: [
      { q: "How long does a bathroom remodel take?", a: "Most bathroom renovations take 2-4 weeks depending on scope and complexity." },
      { q: "Can you add a bathroom where there isn't one?", a: "Yes — we can add bathrooms in basements, under stairs, or convert closet spaces. We handle all the plumbing and structural work." },
      { q: "Do you do walk-in shower conversions?", a: "Yes, this is one of our most popular services. We remove the tub and build a custom tiled walk-in shower." },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    shortTitle: "Roofing",
    icon: Hammer,
    description:
      "Professional roofing services including new installation, replacement, and repair. We use premium materials and stand behind our work with solid warranties.",
    heroTitle: "PROFESSIONAL ROOFING SERVICES",
    heroSubtitle:
      "Your roof protects everything underneath it. We install, repair, and replace roofs with premium materials, expert craftsmanship, and industry-leading warranties.",
    features: [
      "Complete roof replacement",
      "New roof installation",
      "Roof repair & leak fixes",
      "Asphalt shingle roofing",
      "Flat roof systems",
      "Gutter installation & repair",
    ],
    benefits: [
      "Licensed roofing contractor",
      "Premium material warranties",
      "In-house crews — no subcontracted roofers",
      "Emergency leak repair available",
      "Free roof inspections",
      "Clean job site — guaranteed",
    ],
    process: [
      { step: "Roof Inspection", description: "Free inspection to assess damage, wear, and remaining lifespan." },
      { step: "Estimate & Materials", description: "Transparent pricing with material options to fit your budget." },
      { step: "Installation", description: "Professional installation by our experienced roofing crew." },
      { step: "Final Inspection", description: "Quality check and cleanup — your yard will look better than before." },
    ],
    faqs: [
      { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed in 1-3 days, weather permitting." },
      { q: "Does insurance cover my roof?", a: "Storm damage is often covered. We can help you navigate the insurance claims process." },
      { q: "What roofing materials do you recommend?", a: "For New England, we typically recommend architectural asphalt shingles for their durability and value. We also install metal and flat roof systems." },
    ],
  },
  {
    slug: "basement-renovation",
    title: "Basement Finishing & Renovation",
    shortTitle: "Basements",
    icon: ArrowDown,
    description:
      "Unlock your home's hidden potential. We transform unfinished basements into beautiful living spaces — home offices, gyms, entertainment rooms, or extra bedrooms.",
    heroTitle: "BASEMENT FINISHING & RENOVATION",
    heroSubtitle:
      "Your basement is the easiest way to add livable square footage without an addition. We handle waterproofing, framing, electrical, plumbing, and finishing — all in-house.",
    features: [
      "Complete basement finishing",
      "Waterproofing & moisture control",
      "Egress window installation",
      "Bathroom additions",
      "Home theater / media rooms",
      "Home office buildouts",
    ],
    benefits: [
      "Adds significant home value",
      "Complete waterproofing before finishing",
      "All trades handled in-house",
      "Code-compliant egress windows",
      "25+ years of basement experience",
      "Free moisture assessment included",
    ],
    process: [
      { step: "Moisture Assessment", description: "We check for water issues before anything else — dry basement first, finishing second." },
      { step: "Design & Layout", description: "Plan your new space — bedrooms, bathroom, entertainment, office, or all of the above." },
      { step: "Build Out", description: "Framing, electrical, plumbing, insulation, drywall, and finishing by our crew." },
      { step: "Completion", description: "Final walkthrough of your brand-new living space." },
    ],
    faqs: [
      { q: "How much does it cost to finish a basement?", a: "Costs vary by size and scope. A basic finish might start around $30-50/sq ft, while higher-end finishes with bathrooms run $60-100+/sq ft. We provide free detailed estimates." },
      { q: "Does a finished basement add home value?", a: "Yes — a finished basement typically recoups 70-75% of costs at resale and adds significant livable space." },
      { q: "What about moisture issues?", a: "We always assess and address moisture before finishing. Waterproofing is step one — we won't finish a wet basement." },
    ],
  },
  {
    slug: "new-construction",
    title: "New Home Construction",
    shortTitle: "New Construction",
    icon: Building2,
    description:
      "Build your dream home from the ground up. Full-service new construction with in-house crews, transparent pricing, and 25+ years of building expertise.",
    heroTitle: "NEW HOME CONSTRUCTION",
    heroSubtitle:
      "Building a new home is the biggest investment most people make. We take that seriously — with in-house crews, transparent budgets, and a contractor who's been building homes for 25+ years.",
    features: [
      "Custom home building",
      "Spec home construction",
      "Foundation to finish",
      "Energy-efficient construction",
      "Multi-family development",
      "Permit & planning coordination",
    ],
    benefits: [
      "Mendes personally oversees every build",
      "100% in-house crews — no subs",
      "Transparent budgeting with no surprises",
      "25+ years of new construction experience",
      "Energy-efficient building practices",
      "Full warranty on craftsmanship",
    ],
    process: [
      { step: "Planning & Design", description: "Work with your architect or use our referral network to finalize plans." },
      { step: "Permits & Site Prep", description: "We handle permits, excavation, and foundation work." },
      { step: "Construction", description: "Framing through finishing — all managed and executed by our team." },
      { step: "Final Walkthrough", description: "Punch list, inspections, and certificate of occupancy." },
    ],
    faqs: [
      { q: "How long does it take to build a new home?", a: "Typical new construction takes 6-12 months from breaking ground to move-in, depending on size and complexity." },
      { q: "Do you provide architectural plans?", a: "We work with trusted architects and can connect you with one. We can also build from plans you already have." },
      { q: "What areas do you build in?", a: "We build throughout Greater Boston and Southern New Hampshire. Some areas have specific zoning requirements we can help navigate." },
    ],
  },
  {
    slug: "home-addition",
    title: "Home Additions",
    shortTitle: "Additions",
    icon: PlusCircle,
    description:
      "Expand your living space with a professionally built home addition. Second floors, in-law suites, bump-outs, and garage conversions — all done in-house.",
    heroTitle: "HOME ADDITION SPECIALISTS",
    heroSubtitle:
      "Love your neighborhood but need more space? A home addition is the smart alternative to moving. We build additions that look like they were always part of your home.",
    features: [
      "Second-story additions",
      "In-law / accessory dwelling units",
      "Room additions & bump-outs",
      "Garage conversions",
      "Sunroom additions",
      "Mudroom & entryway additions",
    ],
    benefits: [
      "Seamless integration with existing home",
      "Structural engineering coordination",
      "All permits and inspections handled",
      "In-house framing, electrical, plumbing",
      "Adds significant property value",
      "25+ years of addition experience",
    ],
    process: [
      { step: "Feasibility Assessment", description: "We evaluate your property, setbacks, and structural capacity." },
      { step: "Design & Engineering", description: "Architectural plans, structural engineering, and permit applications." },
      { step: "Construction", description: "Foundation, framing, and full buildout by our in-house crews." },
      { step: "Integration & Finish", description: "Seamless connection to your existing home with matching finishes." },
    ],
    faqs: [
      { q: "Do I need special permits for an addition?", a: "Yes — additions require building permits and often zoning review. We handle the entire permitting process." },
      { q: "Will an addition match my existing home?", a: "Absolutely. We carefully match siding, roofing, and architectural details so the addition looks original." },
      { q: "How much does a home addition cost?", a: "Costs vary significantly by type and size. A basic bump-out might be $50-80K while a second-story addition can be $150-300K+. We provide detailed free estimates." },
    ],
  },
  {
    slug: "siding",
    title: "Siding & Exterior",
    shortTitle: "Siding",
    icon: Paintbrush,
    description:
      "Protect and beautify your home with professional siding installation. Vinyl, fiber cement, and wood siding installed by experienced in-house crews.",
    heroTitle: "SIDING & EXTERIOR SERVICES",
    heroSubtitle:
      "Your home's exterior is its first impression and its first defense against New England weather. We install premium siding that looks great and lasts decades.",
    features: [
      "Vinyl siding installation",
      "James Hardie fiber cement siding",
      "Cedar & wood siding",
      "Exterior trim & fascia",
      "Soffit & ventilation",
      "Exterior painting",
    ],
    benefits: [
      "Premium brand-name materials",
      "Manufacturer-certified installation",
      "Improves energy efficiency",
      "Boosts curb appeal and home value",
      "Weather-resistant for New England",
      "In-house installation crews",
    ],
    process: [
      { step: "Exterior Assessment", description: "We inspect your current siding, sheathing, and insulation." },
      { step: "Material Selection", description: "Choose from vinyl, fiber cement, or wood — with color samples." },
      { step: "Installation", description: "Professional removal and installation by our experienced crew." },
      { step: "Final Inspection", description: "Quality check of every seam, corner, and trim piece." },
    ],
    faqs: [
      { q: "What siding material is best?", a: "For most Greater Boston homes, we recommend James Hardie fiber cement for durability and curb appeal, or vinyl for budget-friendly performance." },
      { q: "How long does siding last?", a: "Vinyl siding lasts 20-40 years, fiber cement 30-50 years, and properly maintained wood can last decades." },
      { q: "Can you add insulation under new siding?", a: "Yes — we often add rigid foam insulation when re-siding, which can significantly improve your home's energy efficiency." },
    ],
  },
  {
    slug: "decks-outdoor",
    title: "Decks & Outdoor Living",
    shortTitle: "Decks",
    icon: TreePine,
    description:
      "Custom deck building and outdoor living spaces. Composite, pressure-treated, and hardwood decks built to enjoy New England summers.",
    heroTitle: "CUSTOM DECKS & OUTDOOR LIVING",
    heroSubtitle:
      "Extend your living space outdoors with a custom-built deck, patio, or outdoor kitchen. We build outdoor spaces that stand up to New England weather and look great for years.",
    features: [
      "Composite decking (Trex, TimberTech)",
      "Pressure-treated wood decks",
      "Multi-level deck designs",
      "Pergolas & covered structures",
      "Outdoor kitchens",
      "Deck repair & restoration",
    ],
    benefits: [
      "Custom designs for your property",
      "Premium composite materials available",
      "Built to code with proper footings",
      "In-house construction crews",
      "Extends your living space",
      "Increases property value",
    ],
    process: [
      { step: "Site Evaluation", description: "We assess your yard, grade, and the best orientation for your deck." },
      { step: "Design & Materials", description: "Choose your layout, material, railing style, and extras." },
      { step: "Construction", description: "Footings, framing, decking, and railing installed by our crew." },
      { step: "Enjoy", description: "Final inspection and your first barbecue on the new deck." },
    ],
    faqs: [
      { q: "Composite vs. wood — what's better?", a: "Composite costs more upfront but requires virtually no maintenance. Wood is more affordable but needs staining every 2-3 years. Both are great options." },
      { q: "Do I need a permit for a deck?", a: "In most Massachusetts towns, yes. We handle the full permit process." },
      { q: "How long does deck construction take?", a: "Most decks are completed in 1-2 weeks from the start of construction." },
    ],
  },
  {
    slug: "windows-doors",
    title: "Windows & Doors",
    shortTitle: "Windows",
    icon: DoorOpen,
    description:
      "Energy-efficient window and door replacement. Reduce energy bills and improve comfort with professionally installed windows and entry doors.",
    heroTitle: "WINDOW & DOOR REPLACEMENT",
    heroSubtitle:
      "Old, drafty windows and doors waste energy and money. We install premium replacement windows and doors that keep your home comfortable year-round.",
    features: [
      "Full window replacement",
      "Entry door installation",
      "Sliding door replacement",
      "Storm doors & windows",
      "Bay & bow windows",
      "Energy-efficient upgrades",
    ],
    benefits: [
      "Lower energy bills immediately",
      "Premium brand windows (Anderson, Pella, Marvin)",
      "Professional, leak-free installation",
      "Improved home security",
      "Noise reduction",
      "In-house installation crews",
    ],
    process: [
      { step: "Window Assessment", description: "We measure every opening and assess your current windows' condition." },
      { step: "Product Selection", description: "Choose from top brands with various style and efficiency options." },
      { step: "Installation", description: "Expert installation with proper flashing, insulation, and trim." },
      { step: "Quality Check", description: "We verify every window operates smoothly, locks properly, and is sealed tight." },
    ],
    faqs: [
      { q: "How much do replacement windows cost?", a: "Window costs vary by size, style, and brand — typically $400-1,200 per window installed. We provide free detailed estimates." },
      { q: "Will new windows really save on energy?", a: "Yes — Energy Star windows can reduce energy bills by 7-15% compared to single-pane windows." },
      { q: "How long does window replacement take?", a: "Most homes are completed in 1-2 days. Each window swap takes about 30-45 minutes." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
