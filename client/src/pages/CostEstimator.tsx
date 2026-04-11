import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, ArrowRight, Calculator, ChefHat, Bath, Home, PlusCircle, ArrowDown, Hammer, TreePine, DoorOpen } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import PageMeta from "@/components/PageMeta";

interface ProjectType {
  id: string;
  name: string;
  icon: any;
  sqftLabel: string;
  sqftOptions: { label: string; value: number }[];
  finishLevels: { label: string; lowPerSqft: number; highPerSqft: number; description: string }[];
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: "kitchen",
    name: "Kitchen Remodel",
    icon: ChefHat,
    sqftLabel: "Kitchen Size",
    sqftOptions: [
      { label: "Small (< 100 sq ft)", value: 80 },
      { label: "Medium (100–200 sq ft)", value: 150 },
      { label: "Large (200–300 sq ft)", value: 250 },
      { label: "Extra Large (300+ sq ft)", value: 350 },
    ],
    finishLevels: [
      { label: "Budget Refresh", lowPerSqft: 150, highPerSqft: 250, description: "Repaint cabinets, new hardware, basic countertops, update fixtures" },
      { label: "Mid-Range Remodel", lowPerSqft: 300, highPerSqft: 500, description: "New semi-custom cabinets, quartz counters, tile backsplash, new appliances" },
      { label: "High-End Renovation", lowPerSqft: 500, highPerSqft: 800, description: "Custom cabinetry, premium stone, layout changes, high-end appliances" },
    ],
  },
  {
    id: "bathroom",
    name: "Bathroom Remodel",
    icon: Bath,
    sqftLabel: "Bathroom Size",
    sqftOptions: [
      { label: "Half Bath (25–40 sq ft)", value: 30 },
      { label: "Standard (40–70 sq ft)", value: 55 },
      { label: "Master Bath (70–120 sq ft)", value: 95 },
      { label: "Luxury Master (120+ sq ft)", value: 140 },
    ],
    finishLevels: [
      { label: "Budget Update", lowPerSqft: 200, highPerSqft: 350, description: "New vanity, fixtures, paint, minor tile updates" },
      { label: "Mid-Range Remodel", lowPerSqft: 400, highPerSqft: 650, description: "Full gut, new tile, walk-in shower, custom vanity" },
      { label: "High-End Spa", lowPerSqft: 650, highPerSqft: 1000, description: "Premium tile, freestanding tub, frameless glass, heated floors" },
    ],
  },
  {
    id: "basement",
    name: "Basement Finishing",
    icon: ArrowDown,
    sqftLabel: "Basement Size",
    sqftOptions: [
      { label: "Small (300–500 sq ft)", value: 400 },
      { label: "Medium (500–800 sq ft)", value: 650 },
      { label: "Large (800–1200 sq ft)", value: 1000 },
      { label: "Full Basement (1200+ sq ft)", value: 1400 },
    ],
    finishLevels: [
      { label: "Basic Finish", lowPerSqft: 30, highPerSqft: 50, description: "Framing, drywall, basic flooring, lighting, egress compliance" },
      { label: "Living Space", lowPerSqft: 50, highPerSqft: 80, description: "Full finish with bathroom, kitchenette, premium flooring" },
      { label: "Premium Suite", lowPerSqft: 80, highPerSqft: 120, description: "Full kitchen, bathroom, bedroom, custom built-ins, entertainment area" },
    ],
  },
  {
    id: "addition",
    name: "Home Addition",
    icon: PlusCircle,
    sqftLabel: "Addition Size",
    sqftOptions: [
      { label: "Small Room (100–200 sq ft)", value: 150 },
      { label: "Medium (200–400 sq ft)", value: 300 },
      { label: "Large (400–800 sq ft)", value: 600 },
      { label: "Second Story (800+ sq ft)", value: 1000 },
    ],
    finishLevels: [
      { label: "Standard Build", lowPerSqft: 200, highPerSqft: 300, description: "Standard framing, basic finishes, electrical and HVAC extension" },
      { label: "Mid-Range", lowPerSqft: 300, highPerSqft: 450, description: "Quality finishes, bathroom included, matched exterior" },
      { label: "High-End", lowPerSqft: 450, highPerSqft: 650, description: "Premium finishes, custom design, full systems integration" },
    ],
  },
  {
    id: "deck",
    name: "Deck Build",
    icon: TreePine,
    sqftLabel: "Deck Size",
    sqftOptions: [
      { label: "Small (100–200 sq ft)", value: 150 },
      { label: "Medium (200–400 sq ft)", value: 300 },
      { label: "Large (400–600 sq ft)", value: 500 },
      { label: "Multi-Level (600+ sq ft)", value: 750 },
    ],
    finishLevels: [
      { label: "Pressure-Treated Wood", lowPerSqft: 25, highPerSqft: 40, description: "Standard PT lumber, basic railing, standard footings" },
      { label: "Composite Decking", lowPerSqft: 45, highPerSqft: 70, description: "Composite boards, aluminum railing, built-in lighting" },
      { label: "Premium Build", lowPerSqft: 70, highPerSqft: 110, description: "Premium composite, cable railing, outdoor kitchen prep, multi-level" },
    ],
  },
  {
    id: "roofing",
    name: "Roof Replacement",
    icon: Home,
    sqftLabel: "Roof Size (by home sq ft)",
    sqftOptions: [
      { label: "Small Home (< 1,500 sq ft)", value: 1200 },
      { label: "Medium Home (1,500–2,500 sq ft)", value: 2000 },
      { label: "Large Home (2,500–3,500 sq ft)", value: 3000 },
      { label: "Extra Large (3,500+ sq ft)", value: 4000 },
    ],
    finishLevels: [
      { label: "3-Tab Asphalt", lowPerSqft: 4, highPerSqft: 6, description: "Standard 3-tab shingles, 20-year warranty, basic underlayment" },
      { label: "Architectural Shingles", lowPerSqft: 6, highPerSqft: 9, description: "Dimensional shingles, 30-year warranty, ice & water shield" },
      { label: "Premium System", lowPerSqft: 9, highPerSqft: 14, description: "Designer shingles, 50-year warranty, full ventilation, copper flashing" },
    ],
  },
];

function formatCurrency(n: number): string {
  if (n >= 1000) return `$${Math.round(n / 1000)}K`;
  return `$${n.toLocaleString()}`;
}

export default function CostEstimator() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<number | null>(null);

  const project = PROJECT_TYPES.find((p) => p.id === selectedType);
  const finish = project && selectedFinish !== null ? project.finishLevels[selectedFinish] : null;
  const sqft = selectedSize;

  const lowEstimate = finish && sqft ? Math.round(finish.lowPerSqft * sqft) : null;
  const highEstimate = finish && sqft ? Math.round(finish.highPerSqft * sqft) : null;

  const reset = () => {
    setSelectedType(null);
    setSelectedSize(null);
    setSelectedFinish(null);
  };

  return (
    <div className="min-h-screen">
      <PageMeta
        title={`Home Renovation Cost Estimator | ${COMPANY.shortName}`}
        description="Get a free ballpark estimate for your renovation project. Kitchen, bathroom, basement, addition, deck, and roofing costs based on 20+ years of Greater Boston pricing."
      />
      {/* Hero */}
      <section className="bg-primary text-white py-10 md:py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-accent-foreground text-xs font-display font-bold tracking-wider mb-4 rounded">
            <Calculator className="w-4 h-4" />
            FREE TOOL
          </div>
          <h1 className="text-display text-3xl sm:text-4xl md:text-6xl mb-4">PROJECT COST ESTIMATOR</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Get a ballpark estimate for your renovation project in under 60 seconds.
            Based on real Greater Boston pricing from our 20+ years of experience.
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">

          {/* Step 1: Project Type */}
          <div className="mb-10">
            <h2 className="text-heading text-xl mb-1">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold mr-2">1</span>
              What type of project?
            </h2>
            <p className="text-sm text-muted-foreground ml-10 mb-4">Select the project that best matches yours</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-10">
              {PROJECT_TYPES.map((pt) => (
                <Card
                  key={pt.id}
                  onClick={() => { setSelectedType(pt.id); setSelectedSize(null); setSelectedFinish(null); }}
                  className={`p-4 cursor-pointer transition-all text-center hover:border-accent ${
                    selectedType === pt.id ? "border-accent bg-accent/5 ring-2 ring-accent" : "border-border"
                  }`}
                >
                  <pt.icon className={`w-8 h-8 mx-auto mb-2 ${selectedType === pt.id ? "text-accent" : "text-muted-foreground"}`} />
                  <span className="text-sm font-display font-bold">{pt.name}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Step 2: Size */}
          {project && (
            <div className="mb-10">
              <h2 className="text-heading text-xl mb-1">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold mr-2">2</span>
                {project.sqftLabel}
              </h2>
              <p className="text-sm text-muted-foreground ml-10 mb-4">Select the closest match to your space</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-10">
                {project.sqftOptions.map((opt) => (
                  <Card
                    key={opt.value}
                    onClick={() => { setSelectedSize(opt.value); setSelectedFinish(null); }}
                    className={`p-4 cursor-pointer transition-all hover:border-accent ${
                      selectedSize === opt.value ? "border-accent bg-accent/5 ring-2 ring-accent" : "border-border"
                    }`}
                  >
                    <span className="text-sm font-medium">{opt.label}</span>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Finish Level */}
          {project && selectedSize && (
            <div className="mb-10">
              <h2 className="text-heading text-xl mb-1">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold mr-2">3</span>
                Finish Level
              </h2>
              <p className="text-sm text-muted-foreground ml-10 mb-4">Choose the quality tier that matches your vision</p>
              <div className="grid grid-cols-1 gap-3 ml-10">
                {project.finishLevels.map((fl, i) => (
                  <Card
                    key={i}
                    onClick={() => setSelectedFinish(i)}
                    className={`p-4 cursor-pointer transition-all hover:border-accent ${
                      selectedFinish === i ? "border-accent bg-accent/5 ring-2 ring-accent" : "border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-display font-bold text-sm">{fl.label}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{fl.description}</p>
                      </div>
                      <span className="text-sm font-bold text-accent whitespace-nowrap ml-4">
                        ${fl.lowPerSqft}–${fl.highPerSqft}/sf
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {lowEstimate && highEstimate && (
            <Card className="p-6 md:p-8 border-2 border-accent bg-accent/5 mb-10 ml-10">
              <div className="text-center">
                <p className="text-sm font-display font-bold tracking-wider text-accent mb-2">YOUR ESTIMATED RANGE</p>
                <div className="text-4xl md:text-5xl font-display font-black text-primary mb-2">
                  {formatCurrency(lowEstimate)} – {formatCurrency(highEstimate)}
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Based on {project!.name.toLowerCase()} • {project!.finishLevels[selectedFinish!].label} • Greater Boston area pricing
                </p>

                <div className="bg-muted rounded-lg p-4 mb-6 text-left">
                  <p className="text-xs text-muted-foreground">
                    <strong>Note:</strong> This is a rough estimate based on typical Greater Boston pricing. Actual costs
                    vary based on your specific space, material choices, structural conditions, and permit requirements.
                    The best way to get an accurate price is a free on-site consultation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Phone className="mr-2 w-5 h-5" />
                      GET EXACT QUOTE — {PHONE_NUMBERS.MAIN.display}
                    </Button>
                  </PhoneLink>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      REQUEST FREE ESTIMATE <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <button onClick={reset} className="mt-4 text-sm text-accent hover:underline cursor-pointer">
                  Start over with a different project
                </button>
              </div>
            </Card>
          )}

        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-card border-t border-border py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-2xl md:text-3xl mb-4">WHY TRUST OUR ESTIMATES?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            These ranges are based on real project costs from our 20+ years building across Greater Boston.
            We don't lowball to get your call — we give you honest numbers so there are no surprises.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { val: "20+", label: "Years Experience" },
              { val: "1,000+", label: "Projects Done" },
              { val: "$0", label: "On-Site Estimates" },
              { val: "0", label: "Hidden Fees" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-display font-black text-accent">{s.val}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
