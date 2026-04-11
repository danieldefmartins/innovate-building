import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/hooks/useLanguage";
import { getReviews } from "@/i18n/content";
import { useEffect, useRef } from "react";
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

function GoogleReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load the widget script
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    document.head.appendChild(script);

    // Create the iframe
    const iframe = document.createElement("iframe");
    iframe.className = "lc_reviews_widget";
    iframe.src = "https://reputationhub.site/reputation/widgets/review_widget/qlZXb9KPceYKwHjwidqA?widgetId=69da481824937eb6469b8e1f";
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.minWidth = "100%";
    iframe.style.width = "100%";
    containerRef.current.appendChild(iframe);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={containerRef} />;
}

export default function Reviews() {
  const { t, lang, localePath } = useLanguage();
  const reviewItems = getReviews(lang) ?? REVIEWS;
  const avgRating = (reviewItems.reduce((sum, r) => sum + r.rating, 0) / reviewItems.length).toFixed(1);

  return (
    <div className="min-h-screen">
      <PageMeta
        title={`${t.reviews.title} | ${COMPANY.shortName}`}
        description="Read real reviews from Greater Boston homeowners. 5-star rated general contractor with 20+ years experience, experienced in-house crews. See what our clients say."
      />
      {/* Hero */}
      <section className="bg-primary text-white py-10 md:py-20">
        <div className="container text-center">
          <p className="text-sm font-display font-bold tracking-widest mb-3 text-white/70">{t.reviews.subtitle}</p>
          <h1 className="text-display text-3xl sm:text-4xl md:text-6xl mb-6">{t.reviews.title}</h1>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-5xl font-display font-black text-accent">{avgRating}</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-white/70 mt-1">{t.reviews.averageRating}</p>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-5xl font-display font-black text-accent">{reviewItems.length}+</div>
              <p className="text-sm text-white/70 mt-1">{t.reviews.verifiedReviews}</p>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-5xl font-display font-black text-accent">20+</div>
              <p className="text-sm text-white/70 mt-1">{t.reviews.yearsOfTrust}</p>
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
              "Experienced In-House Crews",
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
            {reviewItems.map((review, i) => (
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

      {/* Live Google Reviews Widget */}
      <section className="py-10 md:py-16 bg-card border-t border-border">
        <div className="container">
          <h2 className="text-display text-2xl sm:text-3xl md:text-4xl text-center mb-8">
            {lang === "es" ? "NUESTRAS RESEÑAS EN GOOGLE" : lang === "pt" ? "NOSSAS AVALIAÇÕES NO GOOGLE" : "OUR GOOGLE REVIEWS"}
          </h2>
          <GoogleReviewsWidget />
        </div>
      </section>

      {/* Google Review CTA */}
      <section className="py-10 md:py-16 bg-card border-t border-border">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-xl border-2 border-border p-8 md:p-12 text-center">
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <h2 className="text-display text-2xl md:text-3xl mb-3">
              {lang === "es" ? "¿TRABAJAMOS JUNTOS? ¡DÉJENOS UNA RESEÑA!" : lang === "pt" ? "TRABALHAMOS JUNTOS? DEIXE UMA AVALIAÇÃO!" : "WORKED WITH US? LEAVE A GOOGLE REVIEW!"}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {lang === "es"
                ? "Su opinión ayuda a otros propietarios a encontrar un contratista en quien puedan confiar. Toma menos de un minuto."
                : lang === "pt"
                ? "Sua opinião ajuda outros proprietários a encontrar um empreiteiro em quem possam confiar. Leva menos de um minuto."
                : "Your feedback helps other homeowners find a contractor they can trust. It takes less than a minute."}
            </p>
            <a
              href="https://g.page/r/CQKCNIGqqOqIEAE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                <Star className="mr-2 w-5 h-5 fill-current" />
                {lang === "es" ? "DEJAR UNA RESEÑA EN GOOGLE" : lang === "pt" ? "DEIXAR UMA AVALIAÇÃO NO GOOGLE" : "LEAVE A GOOGLE REVIEW"}
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              {lang === "es" ? "Se abre en Google Maps — inicie sesión con su cuenta de Google" : lang === "pt" ? "Abre no Google Maps — faça login com sua conta Google" : "Opens in Google Maps — sign in with your Google account"}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">{t.reviews.readyNextStory}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t.reviews.readyNextStorySub}
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
