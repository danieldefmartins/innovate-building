import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import GHLFormPlaceholder from "@/components/GHLFormPlaceholder";
import type { ServiceData } from "@/data/services";
import { SERVICE_IMAGES } from "@/data/images";

interface ServiceLandingProps {
  service: ServiceData;
}

export default function ServiceLanding({ service }: ServiceLandingProps) {
  const images = SERVICE_IMAGES[service.slug] || [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary text-white py-10 md:py-20 lg:py-28">
        {images[0] && (
          <div className="absolute inset-0 z-0">
            <img src={images[0]} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
        )}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1.5 bg-accent text-accent-foreground text-xs font-display font-bold tracking-wider mb-4 rounded">
                {COMPANY.yearsInBusiness} YEARS OF EXPERIENCE
              </div>
              <h1 className="text-display text-4xl md:text-6xl mb-4">{service.heroTitle}</h1>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">{service.heroSubtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                    <Phone className="mr-2 w-5 h-5" />
                    {PHONE_NUMBERS.MAIN.display}
                  </Button>
                </PhoneLink>
                <a href="#quote">
                  <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                    GET FREE ESTIMATE
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>100% In-House Crews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Free Estimates</span>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-card text-card-foreground p-6 rounded-lg border-2 border-accent">
              <h2 className="text-heading text-2xl mb-2 text-center">GET YOUR FREE ESTIMATE</h2>
              <p className="text-sm text-muted-foreground text-center mb-4">
                No obligation. We'll call you back within 2 hours.
              </p>
              <GHLFormPlaceholder service={service.shortTitle} variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card py-10 md:py-16">
        <div className="container">
          <h2 className="text-display text-2xl sm:text-3xl md:text-4xl text-center mb-6 md:mb-10">
            WHAT'S INCLUDED
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      {images.length > 1 && (
        <section className="py-10 md:py-16">
          <div className="container">
            <h2 className="text-display text-2xl sm:text-3xl md:text-4xl text-center mb-6 md:mb-10">
              OUR {service.shortTitle.toUpperCase()} PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {images.slice(0, 6).map((src, i) => (
                <Link key={i} href="/portfolio">
                  <div className="group relative rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={src}
                      alt={`${service.title} project ${i + 1}`}
                      className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/portfolio">
                <Button variant="outline" className="border-2">
                  VIEW FULL PORTFOLIO
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="section-divider bg-muted py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-6">
                WHY CHOOSE {COMPANY.shortName.toUpperCase()} FOR {service.shortTitle.toUpperCase()}
              </h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Phone className="mr-2 w-5 h-5" />
                    CALL FOR FREE CONSULTATION
                  </Button>
                </PhoneLink>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border border-border">
                <div className="text-4xl font-display font-black text-accent mb-1">{COMPANY.yearsInBusiness}</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center border border-border">
                <div className="text-4xl font-display font-black text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">In-House Crews</div>
              </Card>
              <Card className="p-6 text-center border border-border">
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Google Reviews</div>
              </Card>
              <Card className="p-6 text-center border border-border">
                <div className="text-4xl font-display font-black text-accent mb-1">1K+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-card py-10 md:py-16">
        <div className="container">
          <h2 className="text-display text-2xl sm:text-3xl md:text-4xl text-center mb-6 md:mb-10">OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-display font-black text-lg">
                  {i + 1}
                </div>
                <h3 className="text-heading text-lg mb-2">{step.step}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-divider bg-muted py-10 md:py-16">
        <div className="container">
          <h2 className="text-display text-2xl sm:text-3xl md:text-4xl text-center mb-6 md:mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, i) => (
              <Card key={i} className="p-6 border border-border">
                <h3 className="text-heading text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="quote" className="bg-accent text-accent-foreground py-10 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">
              GET YOUR FREE {service.shortTitle.toUpperCase()} ESTIMATE
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Free on-site consultation. Transparent pricing. No obligation.
            </p>

            <div className="max-w-2xl mx-auto bg-card text-card-foreground p-6 rounded-lg mb-8">
              <GHLFormPlaceholder service={service.shortTitle} />
            </div>

            <p className="text-sm opacity-80 mb-3">Prefer to call? We pick up.</p>
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-base sm:text-xl px-6 sm:px-8 py-4 sm:py-6">
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
