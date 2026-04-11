import { useEffect } from "react";
import { useLocation } from "wouter";
import { COMPANY } from "@/lib/constants";

interface PageMetaProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  publishDate?: string;
}

const DEFAULT_TITLE = `${COMPANY.name} | General Contractor | Greater Boston & NH`;
const BASE_URL = `https://${COMPANY.website}`;
const DEFAULT_IMAGE = "/images/IMG_2924.jpeg";

export default function PageMeta({
  title,
  description,
  image,
  type = "website",
  publishDate,
}: PageMetaProps) {
  const [location] = useLocation();
  const fullUrl = `${BASE_URL}${location}`;
  const fullImage = `${BASE_URL}${image ?? DEFAULT_IMAGE}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    setMeta("description", description);

    // Canonical
    setLink("canonical", fullUrl);

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", fullUrl, "property");
    setMeta("og:image", fullImage, "property");
    setMeta("og:type", type, "property");
    setMeta("og:site_name", COMPANY.name, "property");
    setMeta("og:locale", "en_US", "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", title, "name");
    setMeta("twitter:description", description, "name");
    setMeta("twitter:image", fullImage, "name");

    // Article-specific
    if (type === "article" && publishDate) {
      setMeta("article:published_time", publishDate, "property");
    }

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, fullUrl, fullImage, type, publishDate]);

  return null;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
