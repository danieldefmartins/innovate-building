import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-10 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1.5 bg-accent text-accent-foreground text-xs font-display font-bold tracking-wider mb-4 rounded">
              FULL-SERVICE GENERAL CONTRACTOR
            </div>
            <h1 className="text-display text-4xl md:text-6xl mb-4">OUR SERVICES</h1>
            <p className="text-xl text-white/80 mb-6">
              From kitchens and bathrooms to roofing and new construction — we handle every trade
              in-house. One contractor, one crew, one point of contact for your entire project.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>100% In-House Crews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{COMPANY.yearsInBusiness} Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card py-10 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {SERVICES.map((service) => (
              <Card key={service.slug} className="p-5 md:p-8 border border-border hover:border-accent transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-heading text-2xl mb-2">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.slice(0, 6).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${service.slug}`}>
                  <Button variant="outline" className="w-full border-2 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    LEARN MORE
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">NOT SURE WHAT YOU NEED?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Call us for a free consultation. We'll visit your home, assess the work, and give you
            a clear, honest estimate — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Phone className="mr-2 w-5 h-5" />
                {PHONE_NUMBERS.MAIN.display}
              </Button>
            </PhoneLink>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                REQUEST FREE ESTIMATE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
