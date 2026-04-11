import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ArrowRight, ChevronDown, Search } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import PageMeta from "@/components/PageMeta";
import { FAQSchema } from "@/components/StructuredData";
import { useLanguage } from "@/hooks/useLanguage";
import { getFaqData } from "@/i18n/content";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  // General
  {
    category: "General",
    question: "How long have you been in business?",
    answer: "Innovate Building Inc has been serving Greater Boston and New Hampshire homeowners since 2001 — over 20 years of experience with more than 1,000 projects completed. We're licensed in both Massachusetts (CS-119608) and New Hampshire.",
  },
  {
    category: "General",
    question: "Are you licensed and insured?",
    answer: "Yes. We are a fully licensed general contractor in Massachusetts (License #CS-119608) and New Hampshire. We carry comprehensive general liability insurance and workers' compensation coverage. We're happy to provide certificates of insurance upon request.",
  },
  {
    category: "General",
    question: "Do you use subcontractors?",
    answer: "We have experienced in-house crews who handle the core of every project — carpentry, framing, finishing, tile, and more. For specialized trades like electrical, plumbing, and HVAC, we work with licensed professionals we've partnered with for years. Either way, Daniel and Mendes oversee every aspect of your project personally.",
  },
  {
    category: "General",
    question: "What areas do you serve?",
    answer: "We serve the entire Greater Boston area including Boston, Cambridge, Somerville, Newton, Brookline, Quincy, and all surrounding cities. We also serve Southern New Hampshire including Manchester, Nashua, Salem, and surrounding towns. Visit our Areas We Serve page for the full list.",
  },
  {
    category: "General",
    question: "Do you offer free estimates?",
    answer: "Yes. We provide free on-site consultations and estimates for all projects. There's no obligation and no pressure. We'll visit your home, discuss your vision, take measurements, and provide a detailed written estimate — typically within a few business days.",
  },

  // Process
  {
    category: "Process",
    question: "What does your process look like from start to finish?",
    answer: "Our process has four key phases: (1) Free Consultation — we visit your home, discuss your goals, and take measurements. (2) Design & Estimate — we provide a detailed written proposal with scope, materials, and pricing. (3) Construction — our in-house crew completes the work with daily oversight from our project manager. (4) Final Walkthrough — we do a thorough inspection together and don't consider the job done until you're 100% satisfied.",
  },
  {
    category: "Process",
    question: "Do you handle permits?",
    answer: "Yes. We handle all building permits required for your project. We know the permit requirements for every city and town in our service area, and we have established relationships with local building departments. The cost of permits is typically included in our estimate.",
  },
  {
    category: "Process",
    question: "Will you be on-site during construction?",
    answer: "Yes. Our owner, Daniel, is on-site regularly overseeing every active project. You'll also have a dedicated project lead who is on your job site every day. We believe in hands-on management — not managing projects from a desk.",
  },
  {
    category: "Process",
    question: "How do you handle change orders?",
    answer: "We believe in transparent pricing. If any changes arise during construction — whether you request a change or we discover something unexpected — we'll discuss it with you immediately, provide a written change order with the cost impact, and only proceed after your approval. No surprises on your final bill.",
  },

  // Costs & Payment
  {
    category: "Costs & Payment",
    question: "How much does a kitchen remodel cost?",
    answer: "Kitchen remodels in Greater Boston typically range from $25,000 for a budget refresh to $120,000+ for a high-end gut renovation. The exact cost depends on your kitchen size, material choices, layout changes, and appliance selections. Use our Cost Estimator tool for a quick ballpark, or schedule a free consultation for an exact quote.",
  },
  {
    category: "Costs & Payment",
    question: "How much does a bathroom renovation cost?",
    answer: "Bathroom renovations in the Boston area range from $15,000 for a basic update to $60,000+ for a luxury master bath with premium tile, walk-in shower, and heated floors. A standard full gut and remodel of a typical bathroom runs $25,000–$45,000.",
  },
  {
    category: "Costs & Payment",
    question: "What is your payment schedule?",
    answer: "We typically structure payments in milestones: a deposit to secure your project on our schedule, then progress payments at key construction milestones (e.g., after framing, after rough-in, etc.), with a final payment upon completion and your satisfaction. The exact schedule is outlined in your contract before any work begins.",
  },
  {
    category: "Costs & Payment",
    question: "Do you offer financing?",
    answer: "While we don't offer direct financing, many of our clients work with their banks or credit unions for home improvement loans or HELOCs. We're happy to provide detailed estimates and project documentation that lenders typically require.",
  },

  // Project-Specific
  {
    category: "Project-Specific",
    question: "How long does a kitchen remodel take?",
    answer: "A typical kitchen remodel takes 4–8 weeks depending on the scope. A cosmetic refresh (paint, hardware, counters) might take 2–3 weeks, while a full gut renovation with layout changes takes 8–12 weeks. We'll provide a detailed timeline in your proposal.",
  },
  {
    category: "Project-Specific",
    question: "How long does a bathroom renovation take?",
    answer: "Most bathroom renovations take 2–4 weeks. A half-bath update might be done in 7–10 days, while a master bathroom gut renovation takes 3–5 weeks. Custom tile work and specialty fixtures can add time.",
  },
  {
    category: "Project-Specific",
    question: "Can you work with my existing layout or do I need to change it?",
    answer: "Absolutely — we can work with your existing layout for a more cost-effective renovation, or we can redesign the layout for a more functional space. Changing plumbing and electrical locations adds cost, so we'll discuss the trade-offs and help you decide what makes sense for your budget and goals.",
  },
  {
    category: "Project-Specific",
    question: "Do you do additions and new construction?",
    answer: "Yes. We handle everything from small bump-outs and single-room additions to full second-story additions and ground-up new home construction. Our in-house crews handle framing, roofing, siding, and interior finishing — all under one roof.",
  },
  {
    category: "Project-Specific",
    question: "Can you match my addition to my existing home's exterior?",
    answer: "Yes, and this is something we take great pride in. A well-built addition should look like it was always part of the house. We carefully match siding, roofing, trim, and architectural details so the transition is seamless.",
  },

  // Warranty & Quality
  {
    category: "Warranty & Quality",
    question: "Do you offer a warranty on your work?",
    answer: "Yes. We stand behind our workmanship with a warranty on all labor. Additionally, all materials and products come with their manufacturer's warranties. If anything we built isn't right, we'll come back and fix it — period.",
  },
  {
    category: "Warranty & Quality",
    question: "What happens if something goes wrong after the project is done?",
    answer: "Call us. We've been in business for over 20 years because we stand behind our work. If there's an issue with our workmanship, we'll come back and address it promptly. Our reputation is built on accountability, not excuses.",
  },
  {
    category: "Warranty & Quality",
    question: "Do you clean up at the end of each day?",
    answer: "Yes. We respect your home. Our crews clean up at the end of every work day — tools organized, debris removed, work area swept. We also use dust barriers and floor protection to minimize disruption to your living space. At the end of the project, we do a thorough final cleanup before your walkthrough.",
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full text-left py-5 flex items-start justify-between gap-4 cursor-pointer group"
      >
        <span className="text-base font-medium group-hover:text-accent transition-colors">{item.question}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 mt-0.5 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-accent" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { t, lang, localePath } = useLanguage();

  const faqItems = getFaqData(lang) ?? FAQ_DATA;
  const categories = [t.common.all, ...Array.from(new Set(faqItems.map((f) => f.category)))];

  const filtered = faqItems.filter((f) => {
    const matchesCategory = activeCategory === t.common.all || f.category === activeCategory;
    const matchesSearch = !searchQuery ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <PageMeta
        title={`FAQ — Frequently Asked Questions | ${COMPANY.shortName}`}
        description="Answers to common questions about hiring a general contractor in Greater Boston. Costs, timelines, licensing, process, and more from a 20+ year contractor."
      />
      <FAQSchema faqs={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} />
      {/* Hero */}
      <section className="bg-primary text-white py-10 md:py-20">
        <div className="container text-center">
          <p className="text-sm font-display font-bold tracking-widest mb-3 text-white/70">{t.faq.subtitle.split("—")[0]}</p>
          <h1 className="text-display text-3xl sm:text-4xl md:text-6xl mb-4">{t.faq.title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="py-6 border-b border-border bg-card">
        <div className="container max-w-4xl">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t.faq.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setOpenIndex(null); }}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-background"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={activeCategory === cat ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-10">
              {t.faq.noResults} <Link href={localePath("/contact")} className="text-accent hover:underline">{t.cta.contactUs}</Link>.
            </p>
          ) : (
            <div>
              {filtered.map((item, i) => (
                <FAQAccordion
                  key={`${item.category}-${i}`}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-4">{t.faq.stillHaveQuestions}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t.faq.stillHaveQuestionsSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-6">
                <Phone className="mr-2 w-5 h-5" />
                {PHONE_NUMBERS.MAIN.display}
              </Button>
            </PhoneLink>
            <Link href={localePath("/contact")}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                {t.cta.contactUs} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
