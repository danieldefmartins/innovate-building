import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import { SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t-2 border-sidebar-border">
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-display font-black text-lg">IB</span>
              </div>
              <div>
                <div className="font-display font-bold text-sm">{COMPANY.shortName}</div>
                <div className="text-[10px] text-sidebar-foreground/50 tracking-wider">GENERAL CONTRACTOR</div>
              </div>
            </div>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed mb-4">
              Greater Boston's trusted general contractor for {COMPANY.yearsInBusiness} years.
              Licensed, insured, and 100% in-house crews — no subcontractors.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-accent/20 border border-accent/40 rounded font-medium">
                Licensed & Insured
              </span>
              <span className="text-xs px-2 py-1 bg-accent/20 border border-accent/40 rounded font-medium">
                100% In-House
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-heading text-sm tracking-wider mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
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
            <h4 className="text-heading text-sm tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blog" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/areas-we-serve", label: "Areas We Serve" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
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
            <h4 className="text-heading text-sm tracking-wider mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li>
                <PhoneLink
                  tel={PHONE_NUMBERS.MAIN.tel}
                  className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_NUMBERS.MAIN.display}
                </PhoneLink>
              </li>
              <li>
                <PhoneLink
                  tel={PHONE_NUMBERS.SECONDARY.tel}
                  className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_NUMBERS.SECONDARY.display}
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
                  <span>Greater Boston & New Hampshire</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-sidebar-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sidebar-foreground/50">
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <p>Licensed General Contractor | MA & NH</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
