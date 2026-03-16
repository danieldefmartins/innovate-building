import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import { PHONE_NUMBERS } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import { useState } from "react";

const portfolioItems = [
  { title: "Modern Kitchen Renovation", category: "Kitchen", location: "Cambridge, MA" },
  { title: "Luxury Master Bathroom", category: "Bathroom", location: "Newton, MA" },
  { title: "Second-Story Addition", category: "Addition", location: "Somerville, MA" },
  { title: "Complete Roof Replacement", category: "Roofing", location: "Medford, MA" },
  { title: "Custom Home Build", category: "New Build", location: "Quincy, MA" },
  { title: "Basement Entertainment Room", category: "Basement", location: "Brookline, MA" },
  { title: "James Hardie Siding", category: "Exterior", location: "Arlington, MA" },
  { title: "Composite Deck Build", category: "Deck", location: "Wellesley, MA" },
  { title: "Open Concept Kitchen", category: "Kitchen", location: "Waltham, MA" },
  { title: "Spa Bathroom Remodel", category: "Bathroom", location: "Needham, MA" },
  { title: "In-Law Suite Addition", category: "Addition", location: "Malden, MA" },
  { title: "Full Home Remodel", category: "Remodel", location: "Everett, MA" },
];

const categories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-white/80">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR WORK</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Browse our completed projects across the Greater Boston area. Quality
            craftsmanship you can see and trust.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Placeholder Image */}
                <div className="bg-muted h-[280px] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <p className="font-semibold">{item.category}</p>
                    <p className="text-sm">{item.location}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="text-white">
                    <h3 className="text-lg font-bold leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No projects found for this category.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
            Contact Innovate Building Inc today for a free consultation and
            estimate on your next home improvement project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="h-5 w-5" />
                {PHONE_NUMBERS.MAIN.display}
              </Button>
            </PhoneLink>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-white/10"
              >
                Get a Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
