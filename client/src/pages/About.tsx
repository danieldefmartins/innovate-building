import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle2, Users, Award, Shield, Hammer, Heart, Handshake, HardHat } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/hooks/useLanguage";

export default function About() {
  const { t, localePath } = useLanguage();
  return (
    <div className="min-h-screen">
      <PageMeta
        title={`About Us — A 20+ Year Partnership Built on Trust | ${COMPANY.shortName}`}
        description="Meet Mendes and Daniel — the partnership behind Innovate Building Inc. Over 20 years together, 1,000+ projects, and a family tradition of craftsmanship. Licensed #CS-119608."
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-display font-bold tracking-wider mb-6 rounded">
              {t.about.ourStory}
            </div>
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
              {t.about.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              {t.about.heroSub}
            </p>
          </div>
        </div>
      </section>

      {/* The Partnership */}
      <section className="section-divider bg-card py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent text-xs font-display font-bold tracking-wider rounded mb-4">
              <Handshake className="w-4 h-4" />
              {t.about.partnership}
            </div>
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">
              {t.about.partnershipTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mendes and Daniel have been building together for over two decades. In an industry where
              partnerships come and go, theirs has stood the test of time — just like the homes they build.
              That kind of stability, trust, and shared vision is exactly what you want in the people
              building your dream home.
            </p>
          </div>

          {/* Mendes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center mb-16 md:mb-24">
            <div className="w-full h-[400px] bg-muted rounded-lg border border-border flex items-center justify-center order-1 lg:order-1">
              <div className="text-center text-muted-foreground">
                <HardHat className="w-12 h-12 mx-auto mb-2 opacity-40" />
                <span className="text-sm">Photo coming soon</span>
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-display font-bold tracking-wider rounded mb-3">
                {t.about.mendesRole}
              </div>
              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-2">
                MEET MENDES
              </h2>
              <p className="text-sm text-accent font-display font-bold tracking-wider mb-6">
                {t.about.mendesYears}
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For Mendes, construction isn't just a career — it's a family legacy. He learned the trade
                  from his father as a teenager, working job sites before most kids had their first part-time
                  job. That hands-on education — framing walls, laying foundations, finishing trim — gave him
                  something no classroom ever could: an instinct for quality that's been refined over four decades.
                </p>
                <p>
                  With over 40 years of experience, Mendes is the backbone of every Innovate Building project.
                  As head of field operations, he oversees every crew, every phase, and every detail on-site.
                  He's the first one on the job and the last one to leave. If something isn't right, he catches
                  it before you ever see it.
                </p>
                <p>
                  His philosophy is simple: <em>"Build it like it's your own home."</em> That standard has
                  never changed in 40 years — and it's why homeowners trust him with their biggest investment.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["40+ Years Experience", "Family Tradition", "Field Operations", "Quality Control", "On-Site Daily"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-accent/10 border border-accent/20 rounded font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Daniel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center mb-16 md:mb-24">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-display font-bold tracking-wider rounded mb-3">
                {t.about.danielRole}
              </div>
              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-2">
                MEET DANIEL
              </h2>
              <p className="text-sm text-accent font-display font-bold tracking-wider mb-6">
                {t.about.danielYears}
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Daniel is the first person you'll talk to when you call Innovate Building — and that's
                  by design. With over 25 years in the construction industry, he understands that a great
                  project starts long before the first nail is driven. It starts with listening, understanding
                  your vision, and translating it into a plan that works for your home and your budget.
                </p>
                <p>
                  As project manager and co-owner, Daniel handles everything from the initial consultation
                  and estimate to permits, scheduling, material selection, and client communication throughout
                  the build. He's the bridge between your vision and the crew that brings it to life — making
                  sure nothing falls through the cracks and you're never left wondering what's happening
                  with your project.
                </p>
                <p>
                  His approach to construction management is rooted in transparency and trust. You'll get
                  detailed written estimates, honest timelines, and direct access to the person actually
                  running your project — not a receptionist, not a voicemail. Daniel picks up the phone.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["25+ Years Experience", "Project Management", "Client Relations", "Estimating", "Permits & Planning"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-accent/10 border border-accent/20 rounded font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full h-[400px] bg-muted rounded-lg border border-border flex items-center justify-center order-1 lg:order-2">
              <div className="text-center text-muted-foreground">
                <HardHat className="w-12 h-12 mx-auto mb-2 opacity-40" />
                <span className="text-sm">Photo coming soon</span>
              </div>
            </div>
          </div>

          {/* Partnership Highlight */}
          <div className="bg-primary rounded-xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-display text-xl sm:text-2xl md:text-3xl mb-4">
                A PARTNERSHIP THAT SPEAKS FOR ITSELF
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                In construction, partnerships are fragile. The stress of deadlines, budgets, and demanding
                projects breaks most of them apart within a few years. Mendes and Daniel have been working
                together for over <strong className="text-white">20 years</strong> — through recessions,
                pandemics, and thousands of projects. They're still here, still building, and still pushing
                each other to do better work.
              </p>
              <p className="text-white/80 leading-relaxed">
                That kind of partnership isn't just rare — it's a promise. If we can build a relationship
                that lasts two decades in one of the toughest industries in the world, imagine what we
                can build for you. When Mendes is on your job site making sure every cut is perfect and
                Daniel is on the phone keeping you updated, you're getting more than a contractor — you're
                getting a team that actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-divider bg-muted py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">{t.about.whatMakesDifferent}</h2>
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
              <h3 className="text-heading text-xl mb-3">COMBINED 65+ YEARS</h3>
              <p className="text-muted-foreground leading-relaxed">
                Between Mendes (40+ years) and Daniel (25+ years), you're getting over six decades of
                combined construction experience. That means fewer surprises, faster problem-solving,
                and craftsmanship that only comes from a lifetime of hands-on work.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>1,000+ completed projects</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Every type of residential construction</span>
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
                  <span>MA License #CS-119608 & NH licensed</span>
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
            {t.about.byTheNumbers}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">20+</div>
              <div className="text-lg font-heading mb-2">{t.about.yearPartnership}</div>
              <p className="text-white/70 text-sm">
                Mendes & Daniel, still building strong
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
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-display font-black text-accent mb-2">65+</div>
              <div className="text-lg font-heading mb-2">{t.about.combinedYears}</div>
              <p className="text-white/70 text-sm">
                Mendes (40+) & Daniel (25+)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-6">
              {t.about.readyToWork}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.about.readyToWorkSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={localePath("/contact")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  {t.cta.requestFreeQuote}
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
