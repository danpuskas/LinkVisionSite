import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import OneVision from "@/pages/solutions/OneVision";
import WideVision from "@/pages/solutions/WideVision";
import FreeVision from "@/pages/solutions/FreeVision";
import CustomSolutions from "@/pages/solutions/CustomSolutions";
import Timelapse from "@/pages/Timelapse";
import Industry from "@/pages/Industry";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
import ResidentialCaseStudy from "@/pages/case-studies/Residential";
import CommercialCaseStudy from "@/pages/case-studies/Commercial";
import IndustrialCivilCaseStudy from "@/pages/case-studies/IndustrialCivil";
import MiningResourcesCaseStudy from "@/pages/case-studies/MiningResources";
import WarehouseLogisticsCaseStudy from "@/pages/case-studies/WarehouseLogistics";
import AgricultureFarmingCaseStudy from "@/pages/case-studies/AgricultureFarming";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
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
