import { COMPANY, LEGAL_LINE, PHONE_NUMBERS } from "@/lib/constants";
import PageMeta from "@/components/PageMeta";

const BRAND = "Innovate Building";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-card py-16 md:py-20">
      <PageMeta
        title={`Terms & SMS Text Messaging Terms | ${BRAND}`}
        description="Website terms, estimate information and optional SMS text messaging terms for Innovate Building in Massachusetts and New Hampshire."
      />
      <div className="container max-w-3xl">
        <h1 className="text-display text-4xl mb-4">Terms &amp; Conditions</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">Effective November 3, 2026</p>
          <p>
            These terms cover use of the {BRAND} website (innovatebuildinginc.com) and our optional text messaging
            program. {LEGAL_LINE} Questions can be sent to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or{" "}
            <a href={`tel:+${PHONE_NUMBERS.MAIN.tel}`}>{PHONE_NUMBERS.MAIN.display}</a>.
          </p>

          <h2>Website information</h2>
          <p>
            The website gives general information about our remodeling and construction services. It is not a site
            assessment, engineering advice or a determination of permit requirements. Those depend on the actual
            property and scope.
          </p>

          <h2>Estimates and project agreements</h2>
          <p>
            Submitting a form, calling or texting us requests a conversation about an estimate. It does not create a
            construction contract, reserve a start date or require you to buy anything. Ballpark figures on the website
            or cost estimator are for planning only. Final pricing, scope, schedule, payment terms and any warranty are
            set in a separate written proposal or contract, which governs the project. Website photos show past work
            and do not guarantee an identical result at another property.
          </p>

          <h2>Information you submit</h2>
          <p>
            Please give accurate contact details and only information you are allowed to share. Do not send unlawful
            content or sensitive information such as bank or card numbers through the website.
          </p>

          <section id="sms">
            <h2>SMS / Text Messaging Terms</h2>
            <p>
              Program name: {BRAND} text messages. If you check the optional SMS consent box on our forms, you agree to
              receive text messages from {BRAND} at the number you provide. Message types include quote follow-ups,
              appointment scheduling and reminders, project updates and customer care. Message frequency varies. Msg
              &amp; data rates may apply. Consent is not a condition of purchase or of requesting an estimate.
            </p>
            <p>
              Reply STOP to cancel, HELP for help. After you reply STOP you may receive one message confirming the
              opt-out, and no further program messages will be sent unless you opt in again. For support, call or text{" "}
              <a href={`tel:+${PHONE_NUMBERS.MAIN.tel}`}>{PHONE_NUMBERS.MAIN.display}</a> or email{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
            <p>
              You must be the subscriber or an authorized user of the phone number you provide. Carriers are not liable
              for delayed or undelivered messages. Please do not use text messages for emergencies. Our{" "}
              <a href="/privacy">Privacy Policy</a> explains how mobile information and consent are handled; mobile
              information is never shared with third parties for marketing.
            </p>
          </section>

          <h2>Website use</h2>
          <p>
            Use the website lawfully and do not try to interfere with it, bypass its security or misuse its forms.
            Website text, logos and photos belong to {BRAND} or are used with permission and may not be republished
            without permission.
          </p>

          <h2>Availability and outside links</h2>
          <p>
            The website or forms may sometimes be unavailable. If a form does not confirm that your request was sent,
            please call or text us rather than assuming we received it. Links to other websites are for reference; we do
            not control their content.
          </p>

          <h2>Who we are</h2>
          <p>{LEGAL_LINE} Innovate Building Inc. is a Massachusetts corporation.</p>

          <h2>Changes</h2>
          <p>
            We may update these terms and will change the effective date above when we do. Nothing in these terms limits
            rights that cannot legally be limited.
          </p>
        </div>
      </div>
    </div>
  );
}
