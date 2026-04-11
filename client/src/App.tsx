import { Toaster } from "@/components/ui/sonner";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import { useGeoLocation } from "./hooks/useGeoLocation";
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

function Router({ detectedCity }: { detectedCity: import("./data/cities").CityData | null }) {
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
      <Route path="/">{() => <Home detectedCity={detectedCity} />}</Route>
      <Route path="/custom-ironwork" component={CustomIronworkLanding} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug">{(params) => <ServiceRoute params={params} />}</Route>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/before-after" component={BeforeAfter} />
      <Route path="/our-team" component={OurTeam} />
      <Route path="/cost-estimator" component={CostEstimator} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/faq" component={FAQ} />
      <Route path="/areas-we-serve" component={AreasWeServe} />
      <Route path="/areas/:slug">{(params) => <CityRoute params={params} />}</Route>
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug">{(params) => <BlogArticleRoute params={params} />}</Route>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isProposal = location.startsWith("/proposal/");
  const { detectedCity } = useGeoLocation();
  const geoPhone = detectedCity?.phone;

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
    <>
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
    </>
  );
}

export default App;
