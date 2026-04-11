import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, ArrowRight, ArrowLeftRight } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/hooks/useLanguage";

interface BeforeAfterProject {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

const PROJECTS: BeforeAfterProject[] = [
  {
    id: "kitchen-1",
    title: "Complete Kitchen Transformation",
    category: "Kitchen",
    location: "Newton, MA",
    description: "Dated galley kitchen transformed into an open-concept modern kitchen with custom cabinetry, quartz countertops, and professional-grade appliances.",
    beforeImage: "/images/IMG_8255.jpeg",
    afterImage: "/images/IMG_9086.jpeg",
    beforeAlt: "Dated kitchen before renovation",
    afterAlt: "Modern kitchen after renovation",
  },
  {
    id: "bathroom-1",
    title: "Master Bathroom Renovation",
    category: "Bathroom",
    location: "Cambridge, MA",
    description: "1990s master bathroom upgraded to a spa-like retreat with walk-in shower, custom tile work, and modern fixtures.",
    beforeImage: "/images/IMG_0164.jpeg",
    afterImage: "/images/IMG_7399.jpeg",
    beforeAlt: "Outdated bathroom before renovation",
    afterAlt: "Modern spa-like bathroom after renovation",
  },
  {
    id: "exterior-1",
    title: "Full Exterior Makeover",
    category: "Exterior",
    location: "Quincy, MA",
    description: "Complete exterior renovation including new siding, roofing, windows, and landscaping. Transformed curb appeal from the ground up.",
    beforeImage: "/images/IMG_6301.jpeg",
    afterImage: "/images/IMG_2924.jpeg",
    beforeAlt: "Home exterior before renovation",
    afterAlt: "Home exterior after complete renovation",
  },
  {
    id: "deck-1",
    title: "Custom Deck Build",
    category: "Deck",
    location: "Brookline, MA",
    description: "Bare backyard transformed with a multi-level composite deck featuring built-in lighting and custom railing.",
    beforeImage: "/images/IMG_0895.jpeg",
    afterImage: "/images/IMG_0343.jpeg",
    beforeAlt: "Backyard before deck construction",
    afterAlt: "Finished composite deck with lighting",
  },
  {
    id: "construction-1",
    title: "New Home Construction",
    category: "New Build",
    location: "Wellesley, MA",
    description: "From bare lot to dream home. Complete new construction with modern finishes, energy-efficient systems, and custom millwork throughout.",
    beforeImage: "/images/IMG_5776.jpeg",
    afterImage: "/images/007c6dcb-df1c-40eb-86b1-0f8aba58d123.jpg",
    beforeAlt: "Construction site before building",
    afterAlt: "Completed new home construction",
  },
];

function BeforeAfterSlider({ project }: { project: BeforeAfterProject }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <Card className="overflow-hidden border border-border group">
      <div
        className="relative aspect-[4/3] cursor-col-resize select-none overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (!isDragging) return;
          handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }}
        onTouchMove={(e) => {
          handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
        }}
        onClick={(e) => {
          handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }}
      >
        {/* After image (full background) */}
        <img
          src={project.afterImage}
          alt={project.afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={project.beforeImage}
            alt={project.beforeAlt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ArrowLeftRight className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-primary/80 text-white text-xs font-display font-bold px-2 py-1 rounded z-20">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 bg-accent/90 text-accent-foreground text-xs font-display font-bold px-2 py-1 rounded z-20">
          AFTER
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-heading text-lg">{project.title}</h3>
          <span className="text-xs font-display font-bold text-accent tracking-wider">{project.category.toUpperCase()}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-1">{project.location}</p>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
}

export default function BeforeAfter() {
  const { t, localePath } = useLanguage();
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <PageMeta
        title={`Before & After Project Gallery | ${COMPANY.shortName}`}
        description="See stunning before and after transformations by Innovate Building. Kitchen remodels, bathroom renovations, home additions, and more across Greater Boston."
      />
      {/* Hero */}
      <section className="bg-primary text-white py-10 md:py-20">
        <div className="container text-center">
          <p className="text-sm font-display font-bold tracking-widest mb-3 text-white/70">TRANSFORMATIONS</p>
          <h1 className="text-display text-3xl sm:text-4xl md:text-6xl mb-4">BEFORE & AFTER</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            See the transformations we deliver for homeowners across Greater Boston and New Hampshire.
            Drag the slider to reveal the full before and after.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat)}
                className={filter === cat ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <BeforeAfterSlider key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">READY FOR YOUR TRANSFORMATION?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every project starts with a free consultation. Let's discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-6">
                <Phone className="mr-2 w-5 h-5" />
                {PHONE_NUMBERS.MAIN.display}
              </Button>
            </PhoneLink>
            <Link href={localePath("/contact")}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                {t.cta.getFreeEstimate} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
