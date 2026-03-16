import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  Clock,
  Award,
  Users,
  Hammer,
  Star,
} from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import { SERVICES } from "@/data/services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Background — will be replaced with actual photo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-display font-bold tracking-wider mb-6 rounded">
              {COMPANY.yearsInBusiness} YEARS OF BUILDING EXCELLENCE
            </div>

            <h1 className="text-display text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight">
              YOUR HOME DESERVES A CONTRACTOR WHO DOES IT RIGHT
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Greater Boston's trusted general contractor. Kitchens, bathrooms, roofing, additions,
              new construction — all done by our own crews. No subcontractors. No runarounds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 w-full sm:w-auto"
                >
                  GET FREE ESTIMATE
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {PHONE_NUMBERS.MAIN.display}
                </Button>
              </PhoneLink>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>100% In-House Crews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Greater Boston & NH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-divider bg-card py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-display text-3xl md:text-5xl mb-4">WHAT WE BUILD</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-service general contractor — every trade, every project, all under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer h-full group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-heading text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description.slice(0, 120)}...
                  </p>
                  <span className="text-accent font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    LEARN MORE <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-2">
                VIEW ALL SERVICES
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-divider bg-primary text-white py-20">
        <div className="container">
          <h2 className="text-display text-3xl md:text-5xl text-center mb-14">
            WHY HOMEOWNERS CHOOSE US
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">100%</div>
              <div className="text-lg font-heading mb-2">IN-HOUSE CREWS</div>
              <p className="text-white/70 text-sm">
                No subcontractors. Our own trained crews handle every aspect of your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">{COMPANY.yearsInBusiness}</div>
              <div className="text-lg font-heading mb-2">YEARS EXPERIENCE</div>
              <p className="text-white/70 text-sm">
                {COMPANY.ownerName} has been building homes in Boston for over two decades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">
                <CheckCircle2 className="w-10 h-10 mx-auto" />
              </div>
              <div className="text-lg font-heading mb-2">LICENSED & INSURED</div>
              <p className="text-white/70 text-sm">
                Fully licensed general contractor. Insured for your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">
                <Hammer className="w-10 h-10 mx-auto" />
              </div>
              <div className="text-lg font-heading mb-2">ON-TIME DELIVERY</div>
              <p className="text-white/70 text-sm">
                We give you a timeline and stick to it. No excuses, no delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-divider bg-card py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-display text-3xl md:text-5xl mb-4">OUR WORK</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results — see what we've built for Greater Boston homeowners
            </p>
          </div>

          {/* Portfolio grid — placeholder until photos arrive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Kitchen Renovation", location: "Cambridge, MA" },
              { label: "Master Bathroom", location: "Newton, MA" },
              { label: "Home Addition", location: "Somerville, MA" },
              { label: "Full Home Remodel", location: "Brookline, MA" },
              { label: "New Construction", location: "Quincy, MA" },
              { label: "Roof Replacement", location: "Medford, MA" },
            ].map((project, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <div className="w-full h-[280px] bg-muted flex items-center justify-center border border-border rounded-lg">
                  <span className="text-muted-foreground text-sm">Photo Coming Soon</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-lg">
                  <div>
                    <h3 className="text-heading text-lg text-white mb-1">{project.label}</h3>
                    <p className="text-white/80 text-sm">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-2">
                VIEW FULL PORTFOLIO
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Service Areas */}
      <section className="bg-card py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-display text-3xl md:text-5xl mb-4">AREAS WE SERVE</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proudly serving Greater Boston and Southern New Hampshire
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto mb-8">
            {[
              "Boston", "Cambridge", "Somerville", "Everett", "Medford", "Malden",
              "Quincy", "Brookline", "Newton", "Waltham", "Arlington", "Watertown",
              "Chelsea", "Revere", "Melrose", "Woburn", "Braintree", "Needham",
              "Wellesley", "Framingham", "Natick", "Manchester NH", "Nashua NH", "Salem NH",
            ].map((city) => (
              <div
                key={city}
                className="text-center py-2 px-3 bg-muted rounded text-sm font-medium text-foreground/80"
              >
                {city}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/areas-we-serve">
              <Button variant="outline" className="border-2">
                VIEW ALL SERVICE AREAS
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent text-accent-foreground py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free, no-obligation estimate from Greater Boston's most trusted contractor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-6"
                >
                  REQUEST FREE QUOTE
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-6"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {PHONE_NUMBERS.MAIN.display}
                </Button>
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
