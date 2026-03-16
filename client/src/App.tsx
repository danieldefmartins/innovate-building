import { Toaster } from "@/components/ui/sonner";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceLanding from "./pages/ServiceLanding";
import Portfolio from "./pages/Portfolio";
import AreasWeServe from "./pages/AreasWeServe";
import CityLanding from "./pages/CityLanding";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { getServiceBySlug } from "./data/services";
import { getCityBySlug } from "./data/cities";

function ServiceRoute({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return <NotFound />;
  return <ServiceLanding service={service} />;
}

function CityRoute({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug);
  if (!city) return <NotFound />;
  return <CityLanding city={city} />;
}

function Router() {
  const [location] = useLocation();
  const isFirstLoad = useRef(true);

  // Scroll to top + gtag page_view on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location,
        page_location: window.location.origin + location,
      });
    }
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug">{(params) => <ServiceRoute params={params} />}</Route>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/areas-we-serve" component={AreasWeServe} />
      <Route path="/areas/:slug">{(params) => <CityRoute params={params} />}</Route>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1 pt-16 lg:pt-20 pb-14 lg:pb-0">
          <Router />
          <Footer />
        </main>
        <StickyMobileCTA />
      </div>
    </>
  );
}

export default App;
