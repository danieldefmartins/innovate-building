import PageMeta from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, ArrowRight, Star, Quote, MapPin, CheckCircle2 } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";

interface Review {
  name: string;
  location: string;
  service: string;
  text: string;
  rating: number;
  date: string;
  source: string;
}

const REVIEWS: Review[] = [
  {
    name: "Maria Santos",
    location: "Somerville, MA",
    service: "Kitchen Remodeling",
    text: "Daniel and Mendes completely transformed our kitchen. Daniel kept us informed every step of the way, and Mendes and his crew did everything in-house — plumbing, electrical, cabinets, tile. The quality was outstanding. Best decision we made.",
    rating: 5,
    date: "March 2026",
    source: "Google",
  },
  {
    name: "James O'Brien",
    location: "Cambridge, MA",
    service: "Home Addition",
    text: "We added a second-story addition and it looks like it was always part of the house. Daniel handled all the planning and permits, and Mendes was on-site almost every day overseeing the crew. Professional, clean, and on schedule.",
    rating: 5,
    date: "February 2026",
    source: "Google",
  },
  {
    name: "Patricia Chen",
    location: "Newton, MA",
    service: "Bathroom Renovation",
    text: "Our master bathroom went from 1990s to spa-like in 3 weeks. The tile work is gorgeous and the attention to detail is incredible. They even fixed some underlying water damage we didn't know about.",
    rating: 5,
    date: "January 2026",
    source: "Google",
  },
  {
    name: "Robert Fitzgerald",
    location: "Quincy, MA",
    service: "Roofing",
    text: "After the big storm damaged our roof, Innovate was out the next day for an estimate. Full roof replacement done in 2 days, cleaned up perfectly. They even helped with our insurance claim paperwork.",
    rating: 5,
    date: "December 2025",
    source: "Google",
  },
  {
    name: "Ana Rodriguez",
    location: "Everett, MA",
    service: "Basement Finishing",
    text: "They turned our damp, dark basement into a beautiful family room with a half bath. The crew addressed moisture issues first — something other contractors wanted to skip. Honest and thorough.",
    rating: 5,
    date: "November 2025",
    source: "Google",
  },
  {
    name: "Michael Donahue",
    location: "Brookline, MA",
    service: "Home Remodeling",
    text: "We hired Innovate for a whole-house renovation of our 1920s colonial. They handled structural work, updated electrical, new kitchen, two bathrooms, and refinished all the hardwood floors. The house looks incredible and they stayed on budget.",
    rating: 5,
    date: "October 2025",
    source: "Google",
  },
  {
    name: "Sarah Thompson",
    location: "Waltham, MA",
    service: "Deck & Outdoor",
    text: "Beautiful composite deck with built-in lighting and cable railing. The crew was polite, showed up on time every day, and the final product exceeded our expectations. Already recommended them to two neighbors.",
    rating: 5,
    date: "September 2025",
    source: "Google",
  },
  {
    name: "David Kim",
    location: "Medford, MA",
    service: "New Construction",
    text: "Built our dream home from the ground up. Daniel managed the project from start to finish and Mendes was involved in every detail on-site — from foundation to final trim. The communication throughout the entire build was exceptional.",
    rating: 5,
    date: "August 2025",
    source: "Google",
  },
  {
    name: "Karen & John Murphy",
    location: "Malden, MA",
    service: "Kitchen Remodeling",
    text: "Second time using Innovate — first was a bathroom, now a full kitchen gut. Same quality, same professionalism. They remember us, they know our house, and they treat us like family. Can't say enough good things.",
    rating: 5,
    date: "July 2025",
    source: "Google",
  },
  {
    name: "Luis Pereira",
    location: "Framingham, MA",
    service: "Siding & Exterior",
    text: "New siding, windows, and gutters — the whole exterior. Our house looks brand new. The neighbors keep asking who did the work. Fair pricing, no hidden costs, and finished ahead of schedule.",
    rating: 5,
    date: "June 2025",
    source: "Google",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <div className="min-h-screen">
      <PageMeta
        title={`Reviews & Testimonials | ${COMPANY.shortName}`}
        description="Read real reviews from Greater Boston homeowners. 5-star rated general contractor with 20+ years experience, 100% in-house crews. See what our clients say."
      />
      {/* Hero */}
      <section className="bg-primary text-white py-10 md:py-20">
        <div className="container text-center">
          <p className="text-sm font-display font-bold tracking-widest mb-3 text-white/70">REAL REVIEWS FROM REAL HOMEOWNERS</p>
          <h1 className="text-display text-3xl sm:text-4xl md:text-6xl mb-6">WHAT OUR CLIENTS SAY</h1>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-5xl font-display font-black text-accent">{avgRating}</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-white/70 mt-1">Average Rating</p>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-5xl font-display font-black text-accent">{REVIEWS.length}+</div>
              <p className="text-sm text-white/70 mt-1">Verified Reviews</p>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-5xl font-display font-black text-accent">20+</div>
              <p className="text-sm text-white/70 mt-1">Years of Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-card border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
            {[
              "Licensed & Insured (CS-119608)",
              "100% In-House Crews",
              "1,000+ Projects Completed",
              "Greater Boston & NH",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <Card key={i} className="p-6 border border-border relative">
                <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" />

                <div className="flex items-start justify-between mb-3">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted-foreground">{review.source}</span>
                </div>

                <p className="text-sm text-foreground leading-relaxed mb-4 italic">"{review.text}"</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{review.name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {review.location} • {review.service}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">READY TO BE OUR NEXT SUCCESS STORY?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners across Greater Boston. Start with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-6">
                <Phone className="mr-2 w-5 h-5" />
                {PHONE_NUMBERS.MAIN.display}
              </Button>
            </PhoneLink>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                GET FREE ESTIMATE <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
