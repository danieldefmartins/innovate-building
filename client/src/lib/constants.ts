/**
 * Innovate Building Inc — Business Constants
 */

export const COMPANY = {
  name: "Innovate Building Inc",
  shortName: "Innovate Building",
  tagline: "Building Excellence Since 2001",
  email: "info@innovatebuildinginc.com",
  yearsInBusiness: "25+",
  ownerName: "Mendes",
  website: "innovatebuildinginc.com",
} as const;

export const PHONE_NUMBERS = {
  MAIN: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Main",
  },
  SECONDARY: {
    display: "(508) 504-9790",
    tel: "15085049790",
    label: "Secondary",
  },
  // City-specific numbers — update as tracking numbers are provisioned
  BOSTON: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Boston",
  },
  CAMBRIDGE: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Cambridge",
  },
  SOMERVILLE: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Somerville",
  },
  EVERETT: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Everett",
  },
  QUINCY: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Quincy",
  },
  NEWTON: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Newton",
  },
  BROOKLINE: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Brookline",
  },
  MEDFORD: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Medford",
  },
  MALDEN: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Malden",
  },
  WALTHAM: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Waltham",
  },
  FRAMINGHAM: {
    display: "(508) 504-9790",
    tel: "15085049790",
    label: "Framingham",
  },
  NATICK: {
    display: "(508) 504-9790",
    tel: "15085049790",
    label: "Natick",
  },
  WELLESLEY: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Wellesley",
  },
  NEEDHAM: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Needham",
  },
  NEW_HAMPSHIRE: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "New Hampshire",
  },
  MANCHESTER_NH: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Manchester",
  },
  NASHUA_NH: {
    display: "(781) 528-0069",
    tel: "17815280069",
    label: "Nashua",
  },
} as const;

export type PhoneEntry = (typeof PHONE_NUMBERS)[keyof typeof PHONE_NUMBERS];

export const GHL_FORM_ID = "6JKsh0GcgTduSUtFJIaz";
export const GHL_CHAT_WIDGET_ID = ""; // Add chat widget ID when available
