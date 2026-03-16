import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle2, Users, Award, Shield, Hammer } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-display font-bold tracking-wider mb-6 rounded">
              OUR STORY
            </div>
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
              BUILDING GREATER BOSTON FOR OVER {COMPANY.yearsInBusiness} YEARS
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              From a one-man operation to a full-service construction company — {COMPANY.name} has
              been transforming homes across Massachusetts and New Hampshire with integrity,
              craftsmanship, and 100% in-house crews.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-divider bg-card py-10 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Photo placeholder */}
            <div className="w-full h-[400px] bg-muted rounded-lg border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Photo of {COMPANY.ownerName} & Team Coming Soon</span>
            </div>

            <div>
              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-6">
                MEET {COMPANY.ownerName.toUpperCase()}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {COMPANY.ownerName} started {COMPANY.name} over {COMPANY.yearsInBusiness} years ago with a
                  simple philosophy: do the work right, treat people with respect, and never cut corners. What
                  began as a small operation has grown into one of Greater Boston's most trusted general
                  contracting companies.
                </p>
                <p>
                  Unlike most contractors who juggle subcontractors and middlemen, {COMPANY.ownerName} built
                  the company around 100% in-house crews. Every carpenter, every roofer, every finish
                  worker — they're all part of the {COMPANY.shortName} team. That means better quality
                  control, clearer communication, and a level of accountability you won't find elsewhere.
                </p>
                <p>
                  From kitchen renovations and bathroom remodels to full home additions and new
                  construction, {COMPANY.ownerName} and the team have completed over 1,000 projects across
                  Massachusetts and New Hampshire. The work speaks for itself — and so do the homeowners
                  who keep coming back.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    GET FREE ESTIMATE
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                  <Button size="lg" variant="outline" className="border-2">
                    <Phone className="mr-2 w-5 h-5" />
                    {PHONE_NUMBERS.MAIN.display}
                  </Button>
                </PhoneLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-divider bg-muted py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">WHAT MAKES US DIFFERENT</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              There are plenty of contractors out there. Here's why homeowners choose {COMPANY.shortName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="p-5 md:p-8 border border-border hover:border-accent transition-colors duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-heading text-xl mb-3">100% IN-HOUSE CREWS</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't farm out your project to random subcontractors. Every worker on your job site
                is a trained member of our team. That means consistent quality, real accountability,
                and a crew that takes pride in the finished product.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>No subcontractor markups</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Direct communication with your crew</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Higher quality control standards</span>
                </li>
              </ul>
            </Card>

            <Card className="p-5 md:p-8 border border-border hover:border-accent transition-colors duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-heading text-xl mb-3">{COMPANY.yearsInBusiness} YEARS EXPERIENCE</h3>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY.ownerName} has been in the construction business for over 25 years. That
                experience means fewer surprises, better problem-solving, and the kind of craftsmanship
                that only comes from decades of hands-on work.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>1,000+ completed projects</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Kitchens, baths, roofing, additions & more</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Deep knowledge of local building codes</span>
                </li>
              </ul>
            </Card>

            <Card className="p-5 md:p-8 border border-border hover:border-accent transition-colors duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-heading text-xl mb-3">LICENSED & INSURED</h3>
              <p className="text-muted-foreground leading-relaxed">
                We carry full general contractor licensing and comprehensive insurance coverage. Your
                home and your investment are protected from start to finish. No shortcuts, no gaps in
                coverage.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>MA & NH licensed general contractor</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Full liability & workers' comp insurance</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Compliant with all local building codes</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-divider bg-primary text-white py-10 md:py-20">
        <div className="container">
          <h2 className="text-display text-2xl sm:text-3xl md:text-5xl text-center mb-8 md:mb-14">
            BY THE NUMBERS
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">{COMPANY.yearsInBusiness}</div>
              <div className="text-lg font-heading mb-2">YEARS IN BUSINESS</div>
              <p className="text-white/70 text-sm">
                Serving Greater Boston since day one
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">1,000+</div>
              <div className="text-lg font-heading mb-2">PROJECTS COMPLETED</div>
              <p className="text-white/70 text-sm">
                Kitchens, baths, roofs, additions & more
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">100%</div>
              <div className="text-lg font-heading mb-2">IN-HOUSE CREWS</div>
              <p className="text-white/70 text-sm">
                No subcontractors — ever
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">MA & NH</div>
              <div className="text-lg font-heading mb-2">FULLY LICENSED</div>
              <p className="text-white/70 text-sm">
                Licensed & insured in both states
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Placeholder */}
      <section className="section-divider bg-card py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">MEET THE TEAM</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The people behind every project — experienced, dedicated, and proud of what they build
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: COMPANY.ownerName, role: "Owner & General Contractor" },
              { name: "Team Member", role: "Project Manager" },
              { name: "Team Member", role: "Lead Carpenter" },
              { name: "Team Member", role: "Estimator" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-full h-[280px] bg-muted rounded-lg border border-border flex items-center justify-center mb-4">
                  <span className="text-muted-foreground text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-heading text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-6">
              READY TO WORK WITH A CONTRACTOR YOU CAN TRUST?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free, no-obligation estimate from {COMPANY.ownerName} and the {COMPANY.shortName} team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  REQUEST FREE QUOTE
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
