import { COMPANY } from "@/lib/constants";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-card py-20">
      <div className="container max-w-3xl">
        <h1 className="text-display text-4xl mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: March 2026</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">Information We Collect</h2>
          <p>When you contact {COMPANY.name} through our website, phone, or email, we may collect your name, phone number, email address, property address, and details about your construction project.</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">How We Use Your Information</h2>
          <p>We use your information to respond to your inquiries, provide estimates, schedule consultations, and communicate about your project. We do not sell or share your personal information with third parties for marketing purposes.</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">Cookies</h2>
          <p>Our website may use cookies and analytics tools (such as Google Analytics) to improve our website and understand how visitors use it.</p>

          <h2 className="text-heading text-2xl mt-8 mb-4">Contact</h2>
          <p>If you have questions about this privacy policy, contact us at {COMPANY.email}.</p>
        </div>
      </div>
    </div>
  );
}
