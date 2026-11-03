import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Phone, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import {
  SERVICE_OPTIONS,
  captureAttribution,
  loadForm,
  newAttempt,
  readyForm,
  sendLead,
  type Attempt,
  type LeadValues,
  type PublicForm,
} from "@/lib/crm";

interface EstimateFormProps {
  /** Pre-selects the closest 360 service option, e.g. "Kitchen remodel". */
  service?: string;
  variant?: "default" | "compact";
}

const EMPTY: LeadValues = { name: "", phone: "", email: "", location: "", service: "", message: "", website: "" };
const SMS_HREF = `sms:+${PHONE_NUMBERS.MAIN.tel}?&body=${encodeURIComponent("Hi, I'd like a free estimate")}`;

const field =
  "w-full rounded-md border border-input bg-card px-3 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring";
const label = "block text-sm font-semibold text-foreground mb-1.5";

export default function EstimateForm({ service, variant = "default" }: EstimateFormProps) {
  const [values, setValues] = useState<LeadValues>({
    ...EMPTY,
    service: service && (SERVICE_OPTIONS as readonly string[]).includes(service) ? service : "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `ef-${uid}-${name}`;
  const formRef = useRef<PublicForm | null>(null);
  const attemptRef = useRef<Attempt | null>(null);

  useEffect(() => {
    captureAttribution();
    // Load the signed token when the form opens, so the 2-second rule is met by the time people press Send.
    loadForm()
      .then((f) => (formRef.current = f))
      .catch(() => {
        /* retried on submit; errors are shown then */
      });
  }, []);

  const set = (k: keyof LeadValues) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    if (!values.name.trim() || !values.phone.trim()) {
      setStatus("error");
      setError("Please add your name and phone number so we can reach you.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const form = await readyForm(formRef.current);
      formRef.current = form;
      attemptRef.current ??= newAttempt();
      await sendLead(form, attemptRef.current, values, smsConsent);
      setStatus("sent");
      if (typeof window.gtag === "function") window.gtag("event", "generate_lead", { form: "innovate-building-estimate" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We couldn't send that. Please call or text us.");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-left rounded-lg border border-border bg-card p-6" role="status" aria-live="polite">
        <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
        <h3 className="text-heading text-xl mb-2 text-foreground">Thank you, we got your request.</h3>
        <p className="text-muted-foreground mb-4">
          We'll call you to talk through your project and set up a free estimate. Want to talk sooner?
        </p>
        <a href={`tel:+${PHONE_NUMBERS.MAIN.tel}`} className="inline-flex items-center gap-2 font-bold text-accent hover:underline">
          <Phone className="w-4 h-4" /> {PHONE_NUMBERS.MAIN.display}
        </a>
      </div>
    );
  }

  const compact = variant === "compact";
  return (
    <form onSubmit={onSubmit} noValidate className="text-left space-y-4" aria-label="Request a free estimate">
      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor={id("name")} className={label}>Your name *</label>
          <input id={id("name")} name="name" autoComplete="name" required className={field} value={values.name} onChange={set("name")} />
        </div>
        <div>
          <label htmlFor={id("phone")} className={label}>Phone *</label>
          <input id={id("phone")} name="phone" type="tel" inputMode="tel" autoComplete="tel" required className={field} value={values.phone} onChange={set("phone")} />
        </div>
        <div>
          <label htmlFor={id("email")} className={label}>Email</label>
          <input id={id("email")} name="email" type="email" autoComplete="email" className={field} value={values.email} onChange={set("email")} />
        </div>
        <div>
          <label htmlFor={id("location")} className={label}>Project address or city</label>
          <input id={id("location")} name="location" autoComplete="street-address" className={field} value={values.location} onChange={set("location")} />
        </div>
      </div>
      <div>
        <label htmlFor={id("service")} className={label}>What can we help with?</label>
        <select id={id("service")} name="service" className={field} value={values.service} onChange={set("service")}>
          <option value="">Choose a project type</option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      {!compact && (
        <div>
          <label htmlFor={id("message")} className={label}>Tell us a little about the project</label>
          <textarea id={id("message")} name="message" rows={4} className={field} value={values.message} onChange={set("message")} />
        </div>
      )}
      {/* Honeypot: hidden from people, bots fill it. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

      <div className="flex items-start gap-3">
        <input
          id={id("sms")}
          name="smsConsent"
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0 accent-[var(--accent)]"
          checked={smsConsent}
          onChange={(e) => setSmsConsent(e.target.checked)}
        />
        <label htmlFor={id("sms")} className="text-xs leading-relaxed text-muted-foreground">
          I agree to receive text messages from Innovate Building about my quote, appointments and project updates. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help. See our{" "}
          <a href="/privacy" className="underline hover:text-accent">Privacy Policy</a> and{" "}
          <a href="/terms#sms" className="underline hover:text-accent">Terms</a>.
        </label>
      </div>

      {status === "error" && (
        <div role="alert" className="rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-foreground">
          <p className="mb-2">{error}</p>
          <div className="flex flex-wrap gap-4 font-semibold">
            <a href={`tel:+${PHONE_NUMBERS.MAIN.tel}`} className="inline-flex items-center gap-1 text-accent underline">
              <Phone className="w-4 h-4" /> Call {PHONE_NUMBERS.MAIN.display}
            </a>
            <a href={SMS_HREF} className="inline-flex items-center gap-1 text-accent underline">
              <MessageSquare className="w-4 h-4" /> Text us
            </a>
            <a href={`mailto:${COMPANY.email}`} className="text-accent underline">Email</a>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-display text-base font-bold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Sending…
          </>
        ) : (
          "Get my free estimate"
        )}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Free and no obligation. Prefer to talk?{" "}
        <a href={`tel:+${PHONE_NUMBERS.MAIN.tel}`} className="font-semibold text-accent hover:underline">Call</a> or{" "}
        <a href={SMS_HREF} className="font-semibold text-accent hover:underline">text</a> {PHONE_NUMBERS.MAIN.display}.
      </p>
    </form>
  );
}
