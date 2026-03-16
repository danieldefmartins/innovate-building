import { COMPANY } from "@/lib/constants";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-card py-20">
      <div className="container max-w-3xl">
        <h1 className="text-display text-4xl mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: March 2026</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">Agreement</h2>
          <p>By using the {COMPANY.name} website, you agree to these terms of service.</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">Services</h2>
          <p>{COMPANY.name} provides general contracting, home remodeling, and construction services in Massachusetts and New Hampshire. All project work is governed by a separate written contract.</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">Estimates</h2>
          <p>Free estimates provided through our website or phone are for informational purposes. Final project pricing is determined after an on-site assessment and documented in a written contract.</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">Licensing</h2>
          <p>{COMPANY.name} is a licensed and insured general contractor operating in the Commonwealth of Massachusetts and the State of New Hampshire.</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">Contact</h2>
          <p>Questions about these terms can be directed to {COMPANY.email}.</p>
        </div>
      </div>
    </div>
  );
}
