import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import GHLFormPlaceholder from "@/components/GHLFormPlaceholder";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-display font-bold tracking-wider mb-6 rounded">
              CONTACT US
            </div>
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
              LET'S TALK ABOUT YOUR PROJECT
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Ready for a free estimate? Have questions about our services? Reach out — we'd love to
              hear about what you're planning. No pressure, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="section-divider bg-card py-10 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Left — Contact Info */}
            <div>
              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-8">GET IN TOUCH</h2>

              <div className="space-y-6">
                {/* Main Phone */}
                <Card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-heading text-lg mb-1">Main Office</h3>
                      <PhoneLink tel={PHONE_NUMBERS.MAIN.tel} className="text-accent font-bold text-lg hover:underline">
                        {PHONE_NUMBERS.MAIN.display}
                      </PhoneLink>
                      <p className="text-muted-foreground text-sm mt-1">
                        Call or text — we respond fast
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Secondary Phone */}
                <Card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-heading text-lg mb-1">Secondary Line</h3>
                      <PhoneLink tel={PHONE_NUMBERS.SECONDARY.tel} className="text-accent font-bold text-lg hover:underline">
                        {PHONE_NUMBERS.SECONDARY.display}
                      </PhoneLink>
                      <p className="text-muted-foreground text-sm mt-1">
                        Alternate number for estimates & scheduling
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-heading text-lg mb-1">Email</h3>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-accent font-bold text-lg hover:underline"
                      >
                        {COMPANY.email}
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Service Area */}
                <Card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-heading text-lg mb-1">Service Area</h3>
                      <p className="text-foreground font-bold text-lg">Greater Boston & Southern NH</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Massachusetts & New Hampshire — licensed in both states
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Hours */}
                <Card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-heading text-lg mb-1">Business Hours</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between gap-8">
                          <span className="text-muted-foreground">Monday – Friday</span>
                          <span className="font-medium">7:00 AM – 6:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="font-medium">8:00 AM – 2:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-8">REQUEST A FREE ESTIMATE</h2>
              <GHLFormPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-divider bg-muted py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">AREAS WE SERVE</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proudly serving communities across Greater Boston and Southern New Hampshire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Massachusetts */}
            <div>
              <h3 className="text-heading text-xl mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                MASSACHUSETTS
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Boston", "Cambridge", "Somerville", "Everett",
                  "Medford", "Malden", "Quincy", "Brookline",
                  "Newton", "Waltham", "Arlington", "Watertown",
                  "Chelsea", "Revere", "Melrose", "Woburn",
                  "Braintree", "Needham", "Wellesley", "Framingham",
                  "Natick", "Dedham", "Milton", "Stoneham",
                ].map((city) => (
                  <div
                    key={city}
                    className="py-2 px-3 bg-card rounded text-sm font-medium text-foreground/80 border border-border"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {/* New Hampshire */}
            <div>
              <h3 className="text-heading text-xl mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                NEW HAMPSHIRE
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Manchester", "Nashua", "Salem", "Derry",
                  "Londonderry", "Hudson", "Merrimack", "Bedford",
                ].map((city) => (
                  <div
                    key={city}
                    className="py-2 px-3 bg-card rounded text-sm font-medium text-foreground/80 border border-border"
                  >
                    {city}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Don't see your town? Give us a call — we likely serve your area too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-divider bg-card py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">FIND US</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Based in Greater Boston, serving all of Eastern Massachusetts and Southern New Hampshire
            </p>
          </div>

          <div className="w-full h-[400px] bg-muted rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-muted-foreground/50 mx-auto mb-3" />
              <span className="text-muted-foreground text-sm">Google Map Embed Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-6">
              CALL US TODAY — FREE ESTIMATES
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Talk to {COMPANY.ownerName} directly. No sales reps, no runaround — just honest answers
              from the owner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {PHONE_NUMBERS.MAIN.display}
                </Button>
              </PhoneLink>
              <PhoneLink tel={PHONE_NUMBERS.SECONDARY.tel}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {PHONE_NUMBERS.SECONDARY.display}
                </Button>
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
