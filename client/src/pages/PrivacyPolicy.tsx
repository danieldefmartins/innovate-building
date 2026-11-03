import { COMPANY, LEGAL_LINE, PHONE_NUMBERS } from "@/lib/constants";
import PageMeta from "@/components/PageMeta";

const BRAND = "Innovate Building";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-card py-16 md:py-20">
      <PageMeta
        title={`Privacy Policy | ${BRAND}`}
        description="How Innovate Building collects, uses and protects information from website visitors, estimate requests and optional text messages."
      />
      <div className="container max-w-3xl">
        <h1 className="text-display text-4xl mb-4">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">Effective November 3, 2026</p>
          <p>
            This policy explains how {BRAND} handles information collected through innovatebuildinginc.com, our
            estimate forms, phone calls, emails and optional text messages. {LEGAL_LINE} Questions can be sent to{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or{" "}
            <a href={`tel:+${PHONE_NUMBERS.MAIN.tel}`}>{PHONE_NUMBERS.MAIN.display}</a>.
          </p>

          <h2>Who we are</h2>
          <p>{LEGAL_LINE} Innovate Building Inc. is the business responsible for the information described in this policy.</p>

          <h2>Information we collect</h2>
          <p>
            When you request an estimate or contact us, we may collect your name, phone number, email address, project
            address or city, the type of project and any details you choose to share. Our website and analytics tools
            may also record basic technical information such as pages visited, browser type, approximate location
            from your IP address and how you arrived at the site (for example, an ad or search link).
          </p>

          <h2>How we use your information</h2>
          <p>
            We use your information to respond to your request, prepare estimates, schedule site visits, provide
            project updates and customer care, keep records of our work, improve the website and understand which
            advertising brings us customers. We do not sell your personal information.
          </p>

          <h2 id="sms">Text messages (SMS)</h2>
          <p>
            If you check the optional text message box on our forms, or otherwise ask us to text you, we will send
            messages about your quote, appointments and project updates. Message frequency varies. Msg &amp; data rates
            may apply. Reply STOP to cancel, HELP for help. Consent to receive texts is not a condition of any purchase.
          </p>
          <p>
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.
          </p>
          <p>
            We may share information with service providers that help us operate, such as our phone, text messaging,
            email, scheduling and website hosting providers, only so they can provide those services to us. This
            sharing never includes text messaging opt-in data or consent for their own marketing.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            We use cookies and similar tools, including Google Analytics, to measure visits and improve the website.
            You can block or delete cookies in your browser settings; the site will still work.
          </p>

          <h2>How long we keep information</h2>
          <p>
            We keep estimate requests and project records for as long as needed to serve you, meet legal and tax
            obligations and resolve disputes, then delete or anonymize them.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to access, correct or delete your information, or to stop contacting you, by emailing{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or calling{" "}
            <a href={`tel:+${PHONE_NUMBERS.MAIN.tel}`}>{PHONE_NUMBERS.MAIN.display}</a>. To stop text messages at any
            time, reply STOP.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable safeguards to protect your information. No website or transmission is completely secure,
            so please do not send sensitive information such as bank or card numbers through our forms.
          </p>

          <h2>Children</h2>
          <p>Our website and services are intended for adults. We do not knowingly collect information from children under 13.</p>

          <h2>Changes</h2>
          <p>
            We may update this policy and will change the effective date above when we do. See also our{" "}
            <a href="/terms">Terms</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
