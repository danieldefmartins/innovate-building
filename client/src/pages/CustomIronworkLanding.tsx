import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Shield,
  Award,
  Star,
  Wrench,
  Fence,
  Columns3,
  Grid3X3,
  ArrowUpDown,
  Sparkles,
} from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import GHLFormPlaceholder from "@/components/GHLFormPlaceholder";
import Testimonials from "@/components/Testimonials";
import { HERO_IMAGES } from "@/data/images";

const IRONWORK_SERVICES = [
  {
    icon: Fence,
    title: "Custom Gates & Fences",
    description:
      "Driveway gates, garden gates, and security fencing — designed and fabricated in our shop to your exact specifications.",
    features: ["Driveway & entry gates", "Security fencing", "Automated openers"],
  },
  {
    icon: Columns3,
    title: "Railings (Interior & Exterior)",
    description:
      "Staircase railings, porch railings, and deck railings built to code with custom designs that match your home.",
    features: ["Stair railings", "Porch & deck rails", "ADA compliant options"],
  },
  {
    icon: Grid3X3,
    title: "Balconies & Balustrades",
    description:
      "Juliet balconies, full balconies, and decorative balustrades that add elegance and safety to your home.",
    features: ["Juliet balconies", "Full balcony systems", "Decorative balustrades"],
  },
  {
    icon: Shield,
    title: "Window Guards & Grilles",
    description:
      "Security window guards and decorative grilles that protect your home without sacrificing curb appeal.",
    features: ["Security guards", "Decorative grilles", "Basement window wells"],
  },
  {
    icon: ArrowUpDown,
    title: "Spiral Staircases",
    description:
      "Space-saving spiral staircases custom-built in our fabrication shop. Interior and exterior designs available.",
    features: ["Indoor & outdoor", "Custom diameter", "Code compliant"],
  },
  {
    icon: Sparkles,
    title: "Decorative & Ornamental Work",
    description:
      "Scrollwork, finials, rosettes, and custom ornamental pieces that add character and distinction to any project.",
    features: ["Custom scrollwork", "Restoration pieces", "Architectural accents"],
  },
];

const PROCESS_STEPS = [
  {
    step: "Free Consultation",
    description:
      "We visit your property, take measurements, and discuss your vision. No obligation, no pressure.",
  },
  {
    step: "Design & Quote",
    description:
      "We sketch your custom design and provide a transparent, all-inclusive price. No hidden fees.",
  },
  {
    step: "Fabrication",
    description:
      "Your piece is hand-crafted in our Everett fabrication shop by our own skilled welders and metalworkers.",
  },
  {
    step: "Installation",
    description:
      "Our crew handles professional installation, cleanup, and a final walkthrough to ensure your satisfaction.",
  },
];

export default function CustomIronworkLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGES.exterior}
            alt="Custom ironwork by Innovate Building Inc"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>

        <div className="container relative z-10 py-12 md:py-0">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent text-accent-foreground text-xs sm:text-sm font-display font-bold tracking-wider mb-4 sm:mb-6 rounded">
              CUSTOM IRONWORK SPECIALISTS
            </div>

            <h1 className="text-display text-3xl sm:text-5xl md:text-7xl text-white mb-4 sm:mb-6 leading-tight">
              CUSTOM IRONWORK BUILT IN OUR SHOP
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
              Gates, railings, balconies, and ornamental metalwork — designed and
              fabricated in our own 15,000 sq ft shop in Everett, MA. No
              outsourcing. No middlemen. Just master craftsmanship for over{" "}
              {COMPANY.yearsInBusiness} years.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#quote">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                >
                  GET FREE ESTIMATE
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {PHONE_NUMBERS.MAIN.display}
                </Button>
              </PhoneLink>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>Own Fabrication Shop</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>{COMPANY.yearsInBusiness} Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>10% Military Discount</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-divider bg-card py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-display text-3xl md:text-5xl mb-3 md:mb-4">
              WHAT WE BUILD
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Every piece is custom-designed and hand-fabricated in our Everett shop
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {IRONWORK_SERVICES.map((service) => (
              <Card
                key={service.title}
                className="p-5 md:p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h3 className="text-heading text-lg md:text-xl mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 md:mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <a href="#quote">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                GET YOUR FREE IRONWORK ESTIMATE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-divider bg-primary text-white py-12 md:py-20">
        <div className="container">
          <h2 className="text-display text-3xl md:text-5xl text-center mb-8 md:mb-14">
            WHY HOMEOWNERS CHOOSE US
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="p-6 md:p-8 bg-white/10 border-white/20 text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-heading text-lg md:text-xl text-white mb-3">
                OUR OWN FABRICATION SHOP
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                15,000 sq ft facility in Everett, MA. Every piece is designed,
                welded, and finished in-house — no outsourcing, no delays, no
                quality compromises.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-white/10 border-white/20 text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-heading text-lg md:text-xl text-white mb-3">
                {COMPANY.yearsInBusiness} YEARS OF CRAFTSMANSHIP
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Since 2001, we've fabricated and installed thousands of custom
                ironwork pieces for Greater Boston homeowners. Our experience
                shows in every weld.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-white/10 border-white/20 text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-heading text-lg md:text-xl text-white mb-3">
                5-STAR GOOGLE REVIEWS
              </h3>
              <div className="flex justify-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Our customers rate us 4.9/5.0 on Google. Read what homeowners
                say about our custom ironwork and installation quality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Process */}
      <section className="bg-card py-12 md:py-20">
        <div className="container">
          <h2 className="text-display text-3xl md:text-5xl text-center mb-8 md:mb-14">
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-display font-black text-lg">
                  {i + 1}
                </div>
                <h3 className="text-heading text-base md:text-lg mb-2">
                  {step.step}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Form */}
      <section id="quote" className="bg-accent text-accent-foreground py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-6">
              GET YOUR FREE IRONWORK ESTIMATE
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">
              Free on-site consultation. Custom design sketches. Transparent
              pricing. No obligation.
            </p>

            <div className="max-w-2xl mx-auto bg-card text-card-foreground p-6 rounded-lg mb-8">
              <GHLFormPlaceholder service="Custom Ironwork" />
            </div>

            <p className="text-sm opacity-80 mb-3">Prefer to call? We pick up.</p>
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-base sm:text-xl px-6 sm:px-8 py-4 sm:py-6"
              >
                <Phone className="mr-2 w-6 h-6" />
                {PHONE_NUMBERS.MAIN.display}
              </Button>
            </PhoneLink>
          </div>
        </div>
      </section>
    </div>
  );
}
