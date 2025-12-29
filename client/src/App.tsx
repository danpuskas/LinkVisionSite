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
import Pricing from "@/pages/Pricing";
import Industry from "@/pages/Industry";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
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
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/case-studies" component={CaseStudies} />
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
