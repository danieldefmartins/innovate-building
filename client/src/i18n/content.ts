// Re-export all content translations with a unified accessor
import { servicesES, faqDataES, reviewsES } from "./content-es";
import { servicesPT, faqDataPT, reviewsPT } from "./content-pt";
import type { Lang } from "./index";

export function getServiceTranslation(slug: string, lang: Lang) {
  if (lang === "es" && servicesES[slug]) return servicesES[slug];
  if (lang === "pt" && servicesPT[slug]) return servicesPT[slug];
  return null; // fall back to English data
}

export function getFaqData(lang: Lang) {
  if (lang === "es") return faqDataES;
  if (lang === "pt") return faqDataPT;
  return null; // use English default
}

export function getReviews(lang: Lang) {
  if (lang === "es") return reviewsES;
  if (lang === "pt") return reviewsPT;
  return null; // use English default
}

// FAQ category translations
export const FAQ_CATEGORIES: Record<Lang, Record<string, string>> = {
  en: { General: "General", Process: "Process", "Costs & Payment": "Costs & Payment", "Project-Specific": "Project-Specific", "Warranty & Quality": "Warranty & Quality" },
  es: { General: "General", Process: "Proceso", "Costs & Payment": "Costos y Pagos", "Project-Specific": "Específico del Proyecto", "Warranty & Quality": "Garantía y Calidad", Proceso: "Proceso", Costos: "Costos", Garantía: "Garantía" },
  pt: { General: "Geral", Process: "Processo", "Costs & Payment": "Custos e Pagamentos", "Project-Specific": "Específico do Projeto", "Warranty & Quality": "Garantia e Qualidade", Geral: "Geral", Processo: "Processo", Custos: "Custos", Garantia: "Garantia" },
};

// Cost estimator translations
export const ESTIMATOR_LABELS: Record<Lang, {
  projectTypes: Record<string, string>;
  finishLevels: Record<string, string>;
  sqftLabels: Record<string, string>;
}> = {
  en: {
    projectTypes: { kitchen: "Kitchen Remodel", bathroom: "Bathroom Remodel", basement: "Basement Finishing", addition: "Home Addition", deck: "Deck Build", roofing: "Roof Replacement" },
    finishLevels: {},
    sqftLabels: {},
  },
  es: {
    projectTypes: { kitchen: "Remodelación de Cocina", bathroom: "Remodelación de Baño", basement: "Terminación de Sótano", addition: "Ampliación de Casa", deck: "Construcción de Terraza", roofing: "Reemplazo de Techo" },
    finishLevels: {},
    sqftLabels: {},
  },
  pt: {
    projectTypes: { kitchen: "Reforma de Cozinha", bathroom: "Reforma de Banheiro", basement: "Acabamento de Porão", addition: "Ampliação de Casa", deck: "Construção de Deck", roofing: "Substituição de Telhado" },
    finishLevels: {},
    sqftLabels: {},
  },
};
