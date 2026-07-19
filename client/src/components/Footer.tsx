import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE_NUMBERS, COMPANY, type PhoneEntry } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

interface FooterProps {
  geoPhone?: PhoneEntry;
}

export default function Footer({ geoPhone }: FooterProps) {
  const phone = geoPhone ?? PHONE_NUMBERS.MAIN;
  const { t, localePath } = useLanguage();

  const companyLinks = [
    { href: "/about", label: t.footer.aboutUs },
    { href: "/our-team", label: t.footer.ourTeam },
    { href: "/before-after", label: t.footer.beforeAfter },
    { href: "/reviews", label: t.footer.reviews },
    { href: "/cost-estimator", label: t.footer.costEstimator },
    { href: "/faq", label: t.footer.faq },
    { href: "/blog", label: t.footer.blog },
    { href: "/portfolio", label: t.footer.portfolio },
    { href: "/areas-we-serve", label: t.footer.areasWeServe },
    { href: "/contact", label: t.footer.contact },
    { href: "/privacy", label: t.footer.privacyPolicy },
    { href: "/terms", label: t.footer.termsOfService },
  ];

  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t-2 border-sidebar-border">
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/images/logo/New-transparent.png"
                alt={COMPANY.shortName}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed mb-4">
              {t.footer.description(COMPANY.yearsInBusiness)}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-accent/20 border border-accent/40 rounded font-medium">
                {t.common.licensedInsured}
              </span>
              <span className="text-xs px-2 py-1 bg-accent/20 border border-accent/40 rounded font-medium">
                {t.common.inHouseCrews}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-heading text-sm tracking-wider mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link href={localePath(`/services/${service.slug}`)}>
                    <span className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm cursor-pointer">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-heading text-sm tracking-wider mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={localePath(link.href)}>
                    <span className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-heading text-sm tracking-wider mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li>
                <PhoneLink
                  tel={phone.tel}
                  className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {phone.display}
                </PhoneLink>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sidebar-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{t.common.greaterBostonNH}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-sidebar-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sidebar-foreground/50">
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. {t.footer.allRightsReserved}</p>
            <p>{t.footer.licensedGC}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
