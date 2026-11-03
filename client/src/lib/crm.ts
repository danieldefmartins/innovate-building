/**
 * Native estimate form -> 360 CRM published form `innovate-building-estimate`.
 * Flow: GET /public/website/forms/:slug (signed token) -> wait >= 2 s after issuedAt
 * -> POST /public/website/direct-submit. No photo field on this form.
 */
import { PHONE_NUMBERS } from "@/lib/constants";

export const CRM_API = "https://api.get360crm.com";
export const FORM_SLUG = "innovate-building-estimate";
export const WORKSPACE_ID = "575c4cb3-f83c-4ad3-8a40-9f401b6cb353";

/** Must match the 360 form's consentText exactly. */
export const SMS_CONSENT_TEXT =
  "I agree to receive text messages from Innovate Building about my quote, appointments and project updates. Message frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help. See our Privacy Policy and Terms.";

/** Select options accepted by the 360 form (anything else goes into the message). */
export const SERVICE_OPTIONS = [
  "ADU construction",
  "Home addition",
  "Kitchen remodel",
  "Bathroom remodel",
  "Basement finishing",
  "Whole-home renovation",
  "Deck",
  "Other / not sure yet",
] as const;

const PHONE = PHONE_NUMBERS.MAIN.display;
const FALLBACK = `We couldn't send that. Please call or text ${PHONE}, or email support@innovatebuildinginc.com. Your details are still here.`;

export type PublicForm = {
  token: string;
  config: {
    consentRequired: boolean;
    consentText: string;
    requireCaptcha?: boolean;
    fields: { id: string; type: string; options?: string[] }[];
  };
};

function claims(token: string): { ws?: string; kind?: string; issuedAt?: number; exp?: number } {
  const encoded = token.split(".")[0].replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(atob(encoded.padEnd(Math.ceil(encoded.length / 4) * 4, "=")));
}

async function requestJson<T>(url: string, body?: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: body ? "POST" : "GET",
      credentials: "omit",
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(30000),
    });
  } catch {
    throw new Error(FALLBACK);
  }
  if (!response.ok) {
    if (response.status === 429)
      throw new Error(`Too many requests. Please wait a minute and try again, or call or text ${PHONE}.`);
    throw new Error(FALLBACK);
  }
  return response.json() as Promise<T>;
}

export async function loadForm(): Promise<PublicForm> {
  const form = await requestJson<PublicForm>(
    `${CRM_API}/public/website/forms/${encodeURIComponent(FORM_SLUG)}`
  );
  const c = claims(form.token);
  if (
    c.ws !== WORKSPACE_ID ||
    c.kind !== "form" ||
    form.config.requireCaptcha ||
    form.config.consentRequired ||
    form.config.consentText !== SMS_CONSENT_TEXT
  ) {
    throw new Error(`Online requests are temporarily unavailable. Please call or text ${PHONE} for your free estimate.`);
  }
  return form;
}

/** Reuse the token loaded when the form opened; 360 rejects submits < 2 s after issuedAt. */
export async function readyForm(current: PublicForm | null): Promise<PublicForm> {
  let form = current;
  let c: ReturnType<typeof claims> = {};
  try {
    if (form) c = claims(form.token);
  } catch {
    form = null;
  }
  if (!form || !c.exp || c.exp - Date.now() < 120_000) {
    form = await loadForm();
    c = claims(form.token);
  }
  const wait = (c.issuedAt ?? Date.now()) + 2500 - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  return form;
}

export function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return "+1" + digits;
  if (digits.length === 11 && digits.startsWith("1")) return "+" + digits;
  if (value.trim().startsWith("+") && digits.length >= 8 && digits.length <= 15) return "+" + digits;
  throw new Error("Please enter a valid phone number, like (781) 555-0123.");
}

const ATTR_KEY = "ib_attribution";
const ATTR_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "fbclid", "msclkid"];

/** First-touch attribution (UTMs, click ids, referrer, landing page), kept 90 days. */
export function captureAttribution(): Record<string, string> {
  try {
    const stored = JSON.parse(localStorage.getItem(ATTR_KEY) || "null");
    if (stored && stored.expires > Date.now()) return stored.data;
    const params = new URLSearchParams(window.location.search);
    const data: Record<string, string> = {};
    for (const k of ATTR_PARAMS) {
      const v = params.get(k);
      if (v) data[k] = v.slice(0, 200);
    }
    if (document.referrer && !document.referrer.includes(window.location.host)) data.referrer = document.referrer.slice(0, 300);
    data.landing_page = window.location.origin + window.location.pathname;
    localStorage.setItem(ATTR_KEY, JSON.stringify({ data, expires: Date.now() + 90 * 864e5 }));
    return data;
  } catch {
    return {};
  }
}

export type LeadValues = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
  website: string; // honeypot
};

/** One attempt = one idempotency key + upload session, reused on retry. */
export type Attempt = { key: string; uploadSessionId: string };
export const newAttempt = (): Attempt => ({ key: crypto.randomUUID(), uploadSessionId: crypto.randomUUID() });

export async function sendLead(form: PublicForm, attempt: Attempt, values: LeadValues, smsConsent: boolean) {
  const answers: Record<string, string> = {
    name: values.name.trim(),
    phone: normalizePhone(values.phone),
    source_page: window.location.pathname,
  };
  if (values.email.trim()) answers.email = values.email.trim();
  if (values.location.trim()) answers.location = values.location.trim();
  if ((SERVICE_OPTIONS as readonly string[]).includes(values.service)) answers.service = values.service;
  if (values.message.trim()) answers.message = values.message.trim();
  return requestJson<{ thankYou?: string }>(`${CRM_API}/public/website/direct-submit`, {
    token: form.token,
    key: attempt.key,
    uploadSessionId: attempt.uploadSessionId,
    answers,
    attribution: captureAttribution(),
    smsConsent,
    emailConsent: false,
    consent: false,
    website: values.website,
  });
}
