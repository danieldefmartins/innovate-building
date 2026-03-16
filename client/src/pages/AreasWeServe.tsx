import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import { CITIES } from "@/data/cities";

const maCities = CITIES.filter((c) => c.stateAbbr === "MA");
const nhCities = CITIES.filter((c) => c.stateAbbr === "NH");

export default function AreasWeServe() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-white/80">
            Service Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AREAS WE SERVE
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Innovate Building Inc proudly serves homeowners across Massachusetts
            and New Hampshire with expert construction and remodeling services.
          </p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-xl h-[350px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-10 w-10 mx-auto mb-3 opacity-50" />
              <p className="font-semibold text-lg">Service Area Map</p>
              <p className="text-sm">
                Greater Boston, Massachusetts &amp; Southern New Hampshire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Massachusetts Cities */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Massachusetts</h2>
          <p className="text-muted-foreground mb-8">
            We serve {maCities.length} cities and towns across the Commonwealth.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {maCities.map((city) => (
              <Link key={city.slug} href={`/areas/${city.slug}`}>
                <Card className="p-4 bg-card border hover:border-accent transition-colors cursor-pointer group">
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {city.stateAbbr}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Hampshire Cities */}
      {nhCities.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2">New Hampshire</h2>
            <p className="text-muted-foreground mb-8">
              We serve {nhCities.length} cities and towns in the Granite State.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {nhCities.map((city) => (
                <Link key={city.slug} href={`/areas/${city.slug}`}>
                  <Card className="p-4 bg-card border hover:border-accent transition-colors cursor-pointer group">
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {city.stateAbbr}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your City?
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
            We may still be able to help. Contact us to find out if we serve your
            area or to schedule a free consultation.
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
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
