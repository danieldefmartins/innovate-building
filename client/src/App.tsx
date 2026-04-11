import { Toaster } from "@/components/ui/sonner";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useRef, useMemo } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import { useGeoLocation } from "./hooks/useGeoLocation";
import { LanguageContext, parseLangFromPath } from "./hooks/useLanguage";
import { TRANSLATIONS } from "./i18n";
import { LocalBusinessSchema } from "./components/StructuredData";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceLanding from "./pages/ServiceLanding";
import Portfolio from "./pages/Portfolio";
import BeforeAfter from "./pages/BeforeAfter";
import OurTeam from "./pages/OurTeam";
import CostEstimator from "./pages/CostEstimator";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import AreasWeServe from "./pages/AreasWeServe";
import CityLanding from "./pages/CityLanding";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CustomIronworkLanding from "./pages/CustomIronworkLanding";
import Blog from "./pages/Blog";
import BlogArticlePage from "./pages/BlogArticle";
import { getServiceBySlug } from "./data/services";
import { getCityBySlug } from "./data/cities";
import { getArticleBySlug } from "./data/blog";
import { getProposalById } from "./data/proposals";
import Proposal from "./pages/Proposal";

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

function BlogArticleRoute({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return <NotFound />;
  return <BlogArticlePage article={article} />;
}

function ProposalRoute({ params }: { params: { id: string } }) {
  const data = getProposalById(params.id);
  if (!data) return <NotFound />;
  return <Proposal data={data} />;
}

// All content routes — reused for each language prefix
function ContentRoutes({ detectedCity, prefix }: { detectedCity: import("./data/cities").CityData | null; prefix: string }) {
  return (
    <Switch>
      <Route path={`${prefix}/`}>{() => <Home detectedCity={detectedCity} />}</Route>
      <Route path={`${prefix}/custom-ironwork`} component={CustomIronworkLanding} />
      <Route path={`${prefix}/services`} component={Services} />
      <Route path={`${prefix}/services/:slug`}>{(params) => <ServiceRoute params={params} />}</Route>
      <Route path={`${prefix}/portfolio`} component={Portfolio} />
      <Route path={`${prefix}/before-after`} component={BeforeAfter} />
      <Route path={`${prefix}/our-team`} component={OurTeam} />
      <Route path={`${prefix}/cost-estimator`} component={CostEstimator} />
      <Route path={`${prefix}/reviews`} component={Reviews} />
      <Route path={`${prefix}/faq`} component={FAQ} />
      <Route path={`${prefix}/areas-we-serve`} component={AreasWeServe} />
      <Route path={`${prefix}/areas/:slug`}>{(params) => <CityRoute params={params} />}</Route>
      <Route path={`${prefix}/blog`} component={Blog} />
      <Route path={`${prefix}/blog/:slug`}>{(params) => <BlogArticleRoute params={params} />}</Route>
      <Route path={`${prefix}/about`} component={About} />
      <Route path={`${prefix}/contact`} component={Contact} />
      <Route path={`${prefix}/privacy`} component={PrivacyPolicy} />
      <Route path={`${prefix}/terms`} component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Router({ detectedCity }: { detectedCity: import("./data/cities").CityData | null }) {
  const [location] = useLocation();
  const isFirstLoad = useRef(true);

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

  // Determine prefix from current location
  const { lang } = parseLangFromPath(location);
  const prefix = lang === "en" ? "" : `/${lang}`;

  return <ContentRoutes detectedCity={detectedCity} prefix={prefix} />;
}

function App() {
  const [location] = useLocation();
  const isProposal = location.startsWith("/proposal/");
  const { detectedCity } = useGeoLocation();
  const geoPhone = detectedCity?.phone;

  const { lang } = parseLangFromPath(location);
  const t = TRANSLATIONS[lang];
  const prefix = lang === "en" ? "" : `/${lang}`;

  const langContext = useMemo(
    () => ({
      lang,
      t,
      prefix,
      localePath: (path: string) => (prefix ? `${prefix}${path}` : path),
    }),
    [lang, t, prefix]
  );

  if (isProposal) {
    return (
      <Switch>
        <Route path="/proposal/:id">
          {(params) => <ProposalRoute params={params} />}
        </Route>
      </Switch>
    );
  }

  return (
    <LanguageContext.Provider value={langContext}>
      <LocalBusinessSchema />
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Navigation geoPhone={geoPhone} />
        <main className="flex-1 pt-16 lg:pt-20 pb-14 lg:pb-0">
          <Router detectedCity={detectedCity} />
          <Footer geoPhone={geoPhone} />
        </main>
        <StickyMobileCTA geoPhone={geoPhone} />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
