import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Santos",
    location: "Somerville, MA",
    service: "Kitchen Remodeling",
    text: "Mendes and his team completely transformed our kitchen. They did everything in-house — plumbing, electrical, cabinets, tile — and the quality was outstanding. No subcontractors, no delays. Best decision we made.",
    rating: 5,
  },
  {
    name: "James O'Brien",
    location: "Cambridge, MA",
    service: "Home Addition",
    text: "We added a second-story addition and it looks like it was always part of the house. The crew was professional, clean, and on schedule. Mendes was on-site almost every day overseeing the work.",
    rating: 5,
  },
  {
    name: "Patricia Chen",
    location: "Newton, MA",
    service: "Bathroom Renovation",
    text: "Our master bathroom went from 1990s to spa-like in 3 weeks. The tile work is gorgeous and the attention to detail is incredible. They even fixed some underlying water damage we didn't know about.",
    rating: 5,
  },
  {
    name: "Robert Fitzgerald",
    location: "Quincy, MA",
    service: "Roofing",
    text: "After the big storm damaged our roof, Innovate was out the next day for an estimate. Full roof replacement done in 2 days, cleaned up perfectly. They even helped with our insurance claim paperwork.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-display text-3xl md:text-5xl mb-4">WHAT OUR CLIENTS SAY</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-muted-foreground">
            Trusted by homeowners across Greater Boston for over 25 years
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6 border border-border">
              <Quote className="w-8 h-8 text-accent/30 mb-3" />
              <p className="text-foreground/90 leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.location} &middot; {t.service}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
