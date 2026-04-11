import { COMPANY, PHONE_NUMBERS } from "@/lib/constants";
import type { ProposalData } from "@/data/proposals";

// ─── Print button (hidden when printing) ─────────────────────────
function PrintBar() {
  return (
    <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-[oklch(0.30_0.06_250)] text-white px-6 py-3 flex items-center justify-between">
      <span className="text-sm font-medium font-[family-name:var(--font-display)]">
        {COMPANY.name} — Proposal Preview
      </span>
      <button
        onClick={() => window.print()}
        className="bg-[oklch(0.60_0.18_50)] hover:bg-[oklch(0.55_0.18_50)] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
      >
        Print / Save as PDF
      </button>
    </div>
  );
}

// ─── Page wrapper — each child = one printed page ────────────────
function Page({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <section
      className="bg-white mx-auto max-w-[850px] min-h-screen relative px-16 py-20"
      style={{
        pageBreakAfter: last ? "auto" : "always",
        breakAfter: last ? "auto" : "page",
      }}
    >
      {children}
    </section>
  );
}

// ─── Subtle on-screen page separator (hidden in print) ──────────
function PageSeparator() {
  return (
    <div className="print:hidden h-3 bg-gray-200 max-w-[850px] mx-auto" />
  );
}

// ─── Section number badge ────────────────────────────────────────
function SectionNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[oklch(0.60_0.18_50)] text-white text-sm font-bold mr-3 shrink-0">
      {n}
    </span>
  );
}

// =====================================================================
//  PAGE 1 — COVER
// =====================================================================
function CoverPage({ data }: { data: ProposalData }) {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center h-full min-h-[80vh] text-center">
        <img
          src="/images/logo/Innovate-Official-logo-Horizontal-transparent.png"
          alt={COMPANY.name}
          className="h-28 mb-16"
        />
        <h1 className="text-4xl font-bold text-[oklch(0.30_0.06_250)] font-[family-name:var(--font-display)] mb-2">
          Renovation Proposal
        </h1>
        <p className="text-lg text-gray-500 mb-12">{data.projectType}</p>

        <div className="space-y-2 text-gray-700 text-base">
          <p className="font-semibold text-[oklch(0.30_0.06_250)] text-lg">
            {data.projectAddress}
          </p>
          <p>{data.date}</p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 w-64">
          <p className="text-sm text-gray-400 mb-1">Prepared for</p>
          <p className="text-lg font-semibold text-[oklch(0.30_0.06_250)]">
            {data.clientName}
          </p>
        </div>
      </div>
    </Page>
  );
}

// =====================================================================
//  PAGE 2 — ABOUT US
// =====================================================================
function AboutPage() {
  return (
    <Page>
      <h2 className="text-3xl font-bold text-[oklch(0.30_0.06_250)] font-[family-name:var(--font-display)] mb-10">
        About {COMPANY.shortName}
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <p>
          <strong className="text-[oklch(0.30_0.06_250)]">Who we are:</strong>{" "}
          {COMPANY.name} is a family-oriented general contracting company with
          over {COMPANY.yearsInBusiness} years of experience serving homeowners
          across Massachusetts and New Hampshire. What started as a passion for
          building has grown into a trusted renovation firm known for honest
          communication, clean job sites, and work that stands the test of time.
        </p>

        <p>
          <strong className="text-[oklch(0.30_0.06_250)]">What we do:</strong>{" "}
          We specialize in full-service residential renovations — from complete
          kitchen and bathroom remodels to room additions, basement build-outs,
          and whole-home transformations. Whether it's a weekend refresh or a
          multi-week renovation, our team handles it start to finish.
        </p>

        <p>
          <strong className="text-[oklch(0.30_0.06_250)]">
            Licensed &amp; Insured:
          </strong>{" "}
          We are fully licensed and insured to operate in both Massachusetts and
          New Hampshire, giving our clients peace of mind from the first
          consultation through final walkthrough.
        </p>

        <p>
          <strong className="text-[oklch(0.30_0.06_250)]">
            Our commitment:
          </strong>{" "}
          Every project we take on is treated like our own home. We believe great
          renovations come from a combination of skilled craftsmanship, quality
          materials, and genuine care for our clients. We don't cut corners — and
          we don't disappear mid-project. From day one to the final walkthrough,
          you'll know exactly where your project stands.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-6 text-center">
        {[
          { label: "Years of Experience", value: COMPANY.yearsInBusiness },
          { label: "States Licensed", value: "MA & NH" },
          { label: "Customer Focus", value: "100%" },
        ].map((stat) => (
          <div key={stat.label} className="py-6 rounded-xl bg-gray-50">
            <p className="text-2xl font-bold text-[oklch(0.60_0.18_50)]">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}

// =====================================================================
//  PAGE 3 — OUR PROCESS
// =====================================================================
function ProcessPage({ data }: { data: ProposalData }) {
  const steps = [
    {
      title: "Consultation",
      desc: "We visit your home, discuss your vision, and assess the scope of work. You'll get honest feedback, realistic options, and a clear written proposal — no pressure, no surprises.",
    },
    {
      title: "Design & Planning",
      desc: "Once the scope is agreed upon, we finalize material selections, timelines, and permits. We coordinate with our trusted partners for any specialty trades so everything is locked in before day one.",
    },
    {
      title: "Build",
      desc: "Our crew gets to work. We keep a clean, organized job site and communicate progress throughout the project. If anything changes, you'll hear about it right away.",
    },
    {
      title: "Final Walkthrough",
      desc: "When the work is done, we walk through the finished project together. We don't consider a job complete until you're fully satisfied with every detail.",
    },
  ];

  return (
    <Page>
      <h2 className="text-3xl font-bold text-[oklch(0.30_0.06_250)] font-[family-name:var(--font-display)] mb-10">
        Our Process
      </h2>

      <div className="space-y-8">
        {steps.map((step, i) => (
          <div key={step.title} className="flex items-start">
            <SectionNumber n={i + 1} />
            <div>
              <h3 className="text-lg font-bold text-[oklch(0.30_0.06_250)] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-gray-50 border border-gray-100">
        <h3 className="font-bold text-[oklch(0.30_0.06_250)] mb-2">
          Timeline for This Project
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          Depending on scope, our projects range from a few days to several
          weeks. For the proposed work at{" "}
          <strong>{data.projectAddress}</strong>, we estimate approximately{" "}
          <strong>{data.estimatedTimeline}</strong> to complete all proposed
          work.
        </p>
        <p className="text-gray-500 text-sm mt-3">
          Our in-house team handles the majority of work. Electrical and
          plumbing are performed by our trusted, licensed partners who we've
          worked with for years.
        </p>
      </div>
    </Page>
  );
}

// =====================================================================
//  PAGE 4 — PROPOSED WORK
// =====================================================================
function WorkPage({ data }: { data: ProposalData }) {
  return (
    <Page>
      <h2 className="text-3xl font-bold text-[oklch(0.30_0.06_250)] font-[family-name:var(--font-display)] mb-2">
        Proposed Work
      </h2>
      <p className="text-gray-500 mb-8 text-sm">{data.projectAddress}</p>

      <div className="space-y-6">
        {data.lineItems.map((item, i) => {
          const isPartner = item.title.includes("Partner Service");
          return (
            <div key={i} className="flex items-start">
              <span className="text-[oklch(0.60_0.18_50)] font-bold text-sm w-7 shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-[oklch(0.30_0.06_250)] text-[15px] mb-1 flex items-center gap-2">
                  {item.title}
                  {isPartner && (
                    <span className="text-[11px] font-semibold bg-[oklch(0.60_0.18_50)]/10 text-[oklch(0.55_0.18_50)] px-2 py-0.5 rounded-full">
                      Partner
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Page>
  );
}

// =====================================================================
//  PAGE 5 — INVESTMENT & NEXT STEPS
// =====================================================================
function InvestmentPage({ data }: { data: ProposalData }) {
  return (
    <Page last>
      <h2 className="text-3xl font-bold text-[oklch(0.30_0.06_250)] font-[family-name:var(--font-display)] mb-10">
        Investment &amp; Next Steps
      </h2>

      {/* Total */}
      <div className="text-center py-10 rounded-xl bg-gray-50 border border-gray-100 mb-10">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          Your Investment
        </p>
        <p className="text-5xl font-bold text-[oklch(0.60_0.18_50)] font-[family-name:var(--font-display)]">
          {data.totalPrice}
        </p>
      </div>

      {/* What's Included */}
      <div className="mb-8">
        <h3 className="font-bold text-[oklch(0.30_0.06_250)] mb-3">
          What's Included
        </h3>
        <ul className="space-y-1.5 text-gray-700 text-sm">
          {(data.notes ?? []).map((note, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[oklch(0.60_0.18_50)] mt-0.5">&#10003;</span>
              {note}
            </li>
          ))}
        </ul>
      </div>

      {/* Payment Terms */}
      <div className="mb-8">
        <h3 className="font-bold text-[oklch(0.30_0.06_250)] mb-3">
          Payment Terms
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          A deposit is required to secure your project on our schedule. Remaining
          balance is broken into progress payments tied to project milestones.
          Full terms will be outlined in the signed agreement.
        </p>
      </div>

      {/* Next Steps */}
      <div className="mb-10">
        <h3 className="font-bold text-[oklch(0.30_0.06_250)] mb-3">
          Next Steps
        </h3>
        <div className="space-y-3 text-gray-700 text-sm">
          {[
            "Review and sign this proposal",
            "Schedule your project start date",
            "We begin building your dream kitchen",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <SectionNumber n={i + 1} />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact + Signature */}
      <div className="border-t border-gray-200 pt-8 flex justify-between items-start">
        <div className="text-sm text-gray-600 space-y-1">
          <p className="font-bold text-[oklch(0.30_0.06_250)]">
            {COMPANY.name}
          </p>
          <p>{COMPANY.email}</p>
          <p>{PHONE_NUMBERS.MAIN.display}</p>
          <p>{COMPANY.website}</p>
        </div>

        <div className="text-right text-sm space-y-6">
          <div>
            <div className="w-48 border-b border-gray-300 mb-1" />
            <p className="text-gray-400">Client Signature</p>
          </div>
          <div>
            <div className="w-48 border-b border-gray-300 mb-1" />
            <p className="text-gray-400">Date</p>
          </div>
        </div>
      </div>

      {/* Validity note */}
      <p className="text-xs text-gray-400 text-center mt-10">
        This proposal is valid until {data.validUntil}. Prices may be subject to
        change after this date.
      </p>
    </Page>
  );
}

// =====================================================================
//  MAIN EXPORT
// =====================================================================
export default function Proposal({ data }: { data: ProposalData }) {
  return (
    <>
      <style>{`
        @media print {
          body { margin: 0; padding: 0; background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { margin: 0.4in 0; size: letter; }
          nav, footer, .print\\:hidden { display: none !important; }
          section { box-shadow: none !important; border: none !important; }
        }
      `}</style>

      <PrintBar />

      <div className="bg-gray-100 print:bg-white pt-16 print:pt-0">
        <CoverPage data={data} />
        <PageSeparator />
        <AboutPage />
        <PageSeparator />
        <ProcessPage data={data} />
        <PageSeparator />
        <WorkPage data={data} />
        <PageSeparator />
        <InvestmentPage data={data} />
      </div>
    </>
  );
}
