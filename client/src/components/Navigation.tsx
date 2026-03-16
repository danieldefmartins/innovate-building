import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { PhoneLink } from "@/components/PhoneLink";
import { SERVICES } from "@/data/services";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/services", label: "SERVICES", hasDropdown: true },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/areas-we-serve", label: "AREAS WE SERVE" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? location === "/"
      : location === path || location.startsWith(path + "/");

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 h-20 bg-sidebar border-b-2 border-sidebar-border z-50">
        <div className="container h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer gap-3">
              <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-display font-black text-lg">IB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sidebar-foreground font-display font-bold text-sm leading-tight">
                  {COMPANY.shortName}
                </span>
                <span className="text-sidebar-foreground/50 text-[10px] font-medium tracking-wider">
                  GENERAL CONTRACTOR
                </span>
              </div>
            </div>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link href={item.path}>
                  <div
                    className={`
                      px-4 py-2 cursor-pointer transition-all border-b-2 flex items-center gap-1
                      ${
                        isActive(item.path)
                          ? "border-accent text-sidebar-accent-foreground"
                          : "border-transparent hover:border-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground"
                      }
                    `}
                  >
                    <span className="text-xs font-display font-bold tracking-wider whitespace-nowrap">
                      {item.label}
                    </span>
                    {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </div>
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[240px]">
                      {SERVICES.map((service) => (
                        <Link key={service.slug} href={`/services/${service.slug}`}>
                          <div className="px-4 py-2.5 hover:bg-muted transition-colors cursor-pointer">
                            <span className="text-sm font-medium text-foreground">{service.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone CTA */}
          <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-bold tracking-wider">
              <Phone className="w-4 h-4 mr-2" />
              {PHONE_NUMBERS.MAIN.display}
            </Button>
          </PhoneLink>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-sidebar border-b-2 border-sidebar-border z-50">
        <div className="container h-full flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center cursor-pointer gap-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-display font-black text-sm">IB</span>
              </div>
              <span className="text-sidebar-foreground font-display font-bold text-sm">
                {COMPANY.shortName}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                <Phone className="w-4 h-4 mr-1" />
                CALL
              </Button>
            </PhoneLink>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sidebar-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-sidebar z-40 pt-16 overflow-y-auto">
          <div className="container py-8">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link href={item.path}>
                    <div
                      onClick={() => {
                        if (!item.hasDropdown) setMobileMenuOpen(false);
                        if (item.hasDropdown) setServicesOpen(!servicesOpen);
                      }}
                      className={`
                        py-4 px-6 border-l-4 cursor-pointer transition-all flex items-center justify-between
                        ${
                          isActive(item.path)
                            ? "border-accent bg-sidebar-accent/20 text-sidebar-accent-foreground"
                            : "border-transparent hover:border-accent/50 hover:bg-sidebar-accent/10 text-sidebar-foreground/70"
                        }
                      `}
                    >
                      <span className="text-lg font-display font-bold tracking-wider">
                        {item.label}
                      </span>
                      {item.hasDropdown && (
                        <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      )}
                    </div>
                  </Link>

                  {/* Mobile Services Submenu */}
                  {item.hasDropdown && servicesOpen && (
                    <div className="ml-6 border-l-2 border-sidebar-border">
                      {SERVICES.map((service) => (
                        <Link key={service.slug} href={`/services/${service.slug}`}>
                          <div
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-3 px-6 text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors cursor-pointer"
                          >
                            <span className="text-sm font-medium">{service.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Phone */}
            <div className="mt-8 px-6">
              <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
                  <Phone className="mr-2 w-5 h-5" />
                  {PHONE_NUMBERS.MAIN.display}
                </Button>
              </PhoneLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
