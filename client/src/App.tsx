import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";

const Home = lazy(() => import("@/pages/Home"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const OneVision = lazy(() => import("@/pages/solutions/OneVision"));
const WideVision = lazy(() => import("@/pages/solutions/WideVision"));
const FreeVision = lazy(() => import("@/pages/solutions/FreeVision"));
const CustomSolutions = lazy(() => import("@/pages/solutions/CustomSolutions"));
const Timelapse = lazy(() => import("@/pages/Timelapse"));
const Industry = lazy(() => import("@/pages/Industry"));
const About = lazy(() => import("@/pages/About"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const ResidentialCaseStudy = lazy(() => import("@/pages/case-studies/Residential"));
const CommercialCaseStudy = lazy(() => import("@/pages/case-studies/Commercial"));
const IndustrialCivilCaseStudy = lazy(() => import("@/pages/case-studies/IndustrialCivil"));
const MiningResourcesCaseStudy = lazy(() => import("@/pages/case-studies/MiningResources"));
const WarehouseLogisticsCaseStudy = lazy(() => import("@/pages/case-studies/WarehouseLogistics"));
const AgricultureFarmingCaseStudy = lazy(() => import("@/pages/case-studies/AgricultureFarming"));
const Contact = lazy(() => import("@/pages/Contact"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return <div className="min-h-screen bg-[#182863]" />;
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/solutions/onevision" component={OneVision} />
        <Route path="/solutions/widevision" component={WideVision} />
        <Route path="/solutions/freevision" component={FreeVision} />
        <Route path="/solutions/custom" component={CustomSolutions} />
        <Route path="/industry" component={Industry} />
        <Route path="/timelapse" component={Timelapse} />
        <Route path="/about" component={About} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/residential" component={ResidentialCaseStudy} />
        <Route path="/case-studies/commercial" component={CommercialCaseStudy} />
        <Route path="/case-studies/industrial-civil" component={IndustrialCivilCaseStudy} />
        <Route path="/case-studies/mining-resources" component={MiningResourcesCaseStudy} />
        <Route path="/case-studies/warehouse-logistics" component={WarehouseLogisticsCaseStudy} />
        <Route path="/case-studies/agriculture-farming" component={AgricultureFarmingCaseStudy} />
        <Route path="/contact" component={Contact} />
        <Route path="/legal/privacy" component={Privacy} />
        <Route path="/legal/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
