import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Pricing from "@/pages/Pricing";
import Solutions from "@/pages/Solutions";
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
      <Route path="/products" component={Products} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/solutions" component={Solutions} />
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
