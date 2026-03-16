import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle2, MapPin, Shield, Award, Clock, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import { SERVICES } from "@/data/services";
import type { CityData } from "@/data/cities";

interface CityLandingProps {
  city: CityData;
}

export default function CityLanding({ city }: CityLandingProps) {
  const topServices = SERVICES.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-accent-foreground text-xs font-display font-bold tracking-wider mb-4 rounded">
              <MapPin className="w-4 h-4" />
              SERVING {city.name.toUpperCase()}, {city.stateAbbr}
            </div>

            <h1 className="text-display text-4xl md:text-6xl lg:text-7xl mb-4">
              {city.heroText}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              {city.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <PhoneLink tel={city.phone.tel}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  CALL {city.phone.display}
                </Button>
              </PhoneLink>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto">
                  FREE ESTIMATE
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{COMPANY.yearsInBusiness} Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>100% In-House Crews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="section-divider bg-card py-20">
        <div className="container">
          <h2 className="text-display text-3xl md:text-4xl text-center mb-4">
            OUR {city.name.toUpperCase()} SERVICES
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            Full-service general contractor serving {city.name}, {city.stateAbbr} homeowners
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topServices.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                <Card className="p-6 border border-border hover:border-accent transition-colors cursor-pointer h-full group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-heading text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Professional {service.shortTitle.toLowerCase()} services in {city.name}. {service.description.slice(0, 80)}...
                  </p>
                  <span className="text-accent font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    LEARN MORE <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for this city */}
      <section className="section-divider bg-primary text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display text-3xl md:text-4xl mb-6">
                WHY {city.name.toUpperCase()} TRUSTS {COMPANY.shortName.toUpperCase()}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                For over {COMPANY.yearsInBusiness} years, we've been the go-to contractor for
                homeowners in {city.name} and throughout {city.state}. Our in-house crews deliver
                quality work on time and on budget.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  `Serving ${city.name} for ${COMPANY.yearsInBusiness}+ years`,
                  "100% in-house crews — no subcontractors",
                  "Licensed and fully insured",
                  "Free on-site estimates",
                  "Transparent pricing — no surprises",
                  "Clean job sites — guaranteed",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <PhoneLink tel={city.phone.tel}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="mr-2 w-5 h-5" />
                  CALL FOR FREE CONSULTATION
                </Button>
              </PhoneLink>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-white/10 border-white/20 text-center">
                <div className="text-4xl font-display font-black text-accent mb-1">{COMPANY.yearsInBusiness}</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </Card>
              <Card className="p-6 bg-white/10 border-white/20 text-center">
                <div className="text-4xl font-display font-black text-accent mb-1">100%</div>
                <div className="text-sm text-white/70">In-House Crews</div>
              </Card>
              <Card className="p-6 bg-white/10 border-white/20 text-center">
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-sm text-white/70">Google Rating</div>
              </Card>
              <Card className="p-6 bg-white/10 border-white/20 text-center">
                <div className="text-4xl font-display font-black text-accent mb-1">1K+</div>
                <div className="text-sm text-white/70">Projects Done</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods (if available) */}
      {city.neighborhoods && city.neighborhoods.length > 0 && (
        <section className="bg-card py-16">
          <div className="container">
            <h2 className="text-display text-2xl md:text-3xl text-center mb-8">
              NEIGHBORHOODS WE SERVE IN {city.name.toUpperCase()}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {city.neighborhoods.map((n) => (
                <span key={n} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container text-center">
          <h2 className="text-display text-3xl md:text-5xl mb-4">
            READY TO START YOUR {city.name.toUpperCase()} PROJECT?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Free consultation and estimate for {city.name}, {city.stateAbbr} homeowners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink tel={city.phone.tel}>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-6">
                <Phone className="mr-2 w-5 h-5" />
                {city.phone.display}
              </Button>
            </PhoneLink>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                REQUEST FREE QUOTE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
