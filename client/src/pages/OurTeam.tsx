import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, ArrowRight, Users, Shield, Award, Clock, Hammer, CheckCircle2, HardHat } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import PageMeta from "@/components/PageMeta";

const TEAM_MEMBERS = [
  {
    name: "Sinval Mendes",
    role: "Co-Owner & Field Operations",
    bio: "Construction is a family tradition for Sinval — he learned the trade from his father as a teenager and has been building for over 40 years. As head of field operations, he oversees every crew and every phase on-site. First one on the job, last one to leave.",
    highlights: ["40+ years experience", "Family tradition", "On-site daily"],
    placeholder: true,
  },
  {
    name: "Daniel Martins",
    role: "Co-Owner & Project Manager",
    bio: "With 25+ years in the industry, Daniel is your first point of contact. He handles consultations, estimates, permits, scheduling, and client communication. When you call Innovate Building, Daniel picks up the phone — not a receptionist.",
    highlights: ["25+ years experience", "Project management", "Client relations"],
    placeholder: true,
  },
  {
    name: "Framing & Carpentry Crew",
    role: "Structural & Finish Carpentry",
    bio: "Our in-house framing and carpentry team handles everything from structural framing on new builds to detailed finish work like crown molding and custom cabinetry.",
    highlights: ["In-house crew", "Custom millwork", "Framing to finish"],
    placeholder: true,
  },
  {
    name: "Tile & Masonry Crew",
    role: "Tile Installation & Stone Work",
    bio: "Expert tile setters specializing in custom bathroom and kitchen tile work, backsplashes, and stone installations. Precision layout and waterproofing on every job.",
    highlights: ["In-house crew", "Custom patterns", "Waterproof systems"],
    placeholder: true,
  },
  {
    name: "Roofing Crew",
    role: "Roofing & Exterior",
    bio: "Our dedicated roofing crew handles full replacements, repairs, and storm damage across Greater Boston. Trained in all major roofing systems and ice dam prevention.",
    highlights: ["In-house crew", "All roofing systems", "Storm damage experts"],
    placeholder: true,
  },
  {
    name: "Electrical & Plumbing",
    role: "Licensed Trade Specialists",
    bio: "Licensed electricians and plumbers who have been working with us for years. They know our standards, our timelines, and our commitment to doing things right the first time.",
    highlights: ["Licensed professionals", "Long-term partners", "Code compliant"],
    placeholder: true,
  },
];

const STATS = [
  { icon: Clock, value: "20+", label: "Year Partnership", desc: "Mendes & Daniel, still building" },
  { icon: Hammer, value: "1,000+", label: "Projects Completed", desc: "From kitchens to custom homes" },
  { icon: Users, value: "65+", label: "Combined Years", desc: "Mendes (40+) & Daniel (25+)" },
  { icon: Shield, value: "CS-119608", label: "MA License", desc: "Fully licensed & insured" },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title={`Our Team — 100% In-House Crews | ${COMPANY.shortName}`}
        description="Meet the Innovate Building crew. 100% in-house teams — no subcontractors. 20+ years building across Greater Boston and New Hampshire. Licensed #CS-119608."
      />
      {/* Hero */}
      <section className="bg-primary text-white py-10 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-display font-bold tracking-widest mb-3 text-white/70">THE PEOPLE BEHIND THE WORK</p>
            <h1 className="text-display text-3xl sm:text-4xl md:text-6xl mb-4">MEET OUR CREW</h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              When you hire Innovate Building, you get <strong>our crew</strong> — not subcontractors, not day laborers,
              not whoever shows up. Every person on your job site is part of our team, trained to our standards,
              and accountable to you.
            </p>
          </div>
        </div>
      </section>

      {/* Why In-House Matters */}
      <section className="py-10 md:py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-4">WHY 100% IN-HOUSE CREWS MATTER</h2>
            <p className="text-lg text-muted-foreground">
              Most contractors hire subcontractors they've never worked with before. You get a different crew
              every day, no consistency, and no accountability. We built our business differently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-heading text-lg mb-2">Accountability</h3>
              <p className="text-sm text-muted-foreground">
                Every crew member answers to us — and to you. No finger-pointing between
                subcontractors. One team, one standard, one point of contact.
              </p>
            </Card>
            <Card className="p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-heading text-lg mb-2">Consistency</h3>
              <p className="text-sm text-muted-foreground">
                The same skilled professionals from day one to final walkthrough.
                They know our quality standards because they helped define them.
              </p>
            </Card>
            <Card className="p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-heading text-lg mb-2">On Schedule</h3>
              <p className="text-sm text-muted-foreground">
                No waiting for a subcontractor who's "running behind on another job."
                Our crew is dedicated to your project until it's done.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-10 md:py-16">
        <div className="container">
          <h2 className="text-display text-2xl sm:text-3xl md:text-4xl text-center mb-10">THE INNOVATE BUILDING TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <Card key={i} className="overflow-hidden border border-border">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <HardHat className="w-12 h-12 mx-auto mb-2 opacity-40" />
                    <p className="text-xs font-medium">Photo coming soon</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-heading text-lg">{member.name}</h3>
                  <p className="text-sm text-accent font-display font-bold tracking-wider mb-3">{member.role.toUpperCase()}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.highlights.map((h) => (
                      <span key={h} className="text-xs px-2 py-1 bg-accent/10 border border-accent/20 rounded font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-display font-black text-accent mb-1">{stat.value}</div>
                <div className="text-sm font-display font-bold tracking-wider mb-1">{stat.label}</div>
                <div className="text-xs text-white/60">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-2xl sm:text-3xl md:text-5xl mb-4">WANT OUR TEAM ON YOUR PROJECT?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation and meet the crew that'll bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-6">
                <Phone className="mr-2 w-5 h-5" />
                {PHONE_NUMBERS.MAIN.display}
              </Button>
            </PhoneLink>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                SCHEDULE CONSULTATION <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
