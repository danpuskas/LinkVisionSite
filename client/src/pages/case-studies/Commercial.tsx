import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle2 } from "lucide-react";
import commercialBg from "@assets/CaseStudyCommercial_1767080113365.webp";
import SEO from "@/components/SEO";

export default function CommercialCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const caseStudy = {
    industry: "Commercial",
    title: "Protecting Commercial Construction Sites Across Australia",
    overview: "Commercial construction projects in Australia face dual challenges: property crime and compliance oversight. Industry reports estimate that theft and vandalism cost businesses over $100 million annually, with copper wiring, generators, and building materials among the most common losses. At the same time, PPE compliance is under increasing scrutiny, with audits finding up to 30% of workers non-compliant with PPE protocols during the workday.",
    challenge: "High-value theft of heavy machinery, wiring, and fixtures are prime targets, especially during overnight downtime. Vandalism and unauthorised access cause costly delays and insurance claims. Manual PPE checks miss transient violations and lack timestamped evidence, while large sites with multiple subcontractors struggle to maintain consistent monitoring.",
    solution: "LinkVision deployed a tailored surveillance and compliance system: AI-powered surveillance units with perimeter breach and vehicle movement detection, cloud-based monitoring for managers and insurers enabling remote oversight, smart deterrence tools including alarms, lighting, and voice-down features, PPE Analytics Add-on to automatically detect helmet, vest, and boot usage, and automated reporting providing daily compliance summaries and audit-ready evidence.",
    results: [
      "70% reduction in theft and vandalism incidents within 90 days",
      "PPE compliance visibility with >95% detection accuracy",
      "Insurance premiums lowered with verifiable compliance records",
      "Project timelines protected with fewer crime-related interruptions",
      "Stakeholder confidence strengthened among insurers and investors",
    ],
    metrics: {
      reduction: "70%",
      accuracy: ">95%",
      deployment: "90 days",
    },
    keyTakeaways: [
      "Nationwide, commercial construction sites lose over $100 million annually to theft and vandalism",
      "PPE compliance gaps affect up to 30% of workers daily, exposing contractors to liability",
      "LinkVision's combined AI surveillance + PPE analytics delivers measurable risk reductions",
      "Automated compliance reporting transforms PPE oversight into a data-driven process",
    ],
    conclusion: "Commercial construction in Australia demands proactive risk management. LinkVision's integrated surveillance and PPE analytics system reduces theft, deters vandalism, and ensures compliance is documented in real time. The result is fewer losses, stronger accountability, and greater confidence in project delivery.",
  };

  return (
    <>
      <SEO title="Commercial Construction Case Study" description="LinkVision achieved a 70% reduction in theft and over 95% PPE detection accuracy on commercial construction sites. Protecting Australian projects and workers." canonical="/case-studies/commercial" />
      <div className="min-h-screen bg-[#182863] relative">
      <div 
        className="fixed inset-0 opacity-50 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${commercialBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#182863]/70 via-[#182863]/80 to-[#182863]/95 pointer-events-none" />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-[#C800FF] font-bold text-xl">{caseStudy.industry}</div>
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white">
                  Case Study
                </h1>
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-8">
              {caseStudy.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {Object.entries(caseStudy.metrics).map(([key, value], idx) => (
                <Card key={idx} className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-display font-bold text-white mb-1">
                      {value}
                    </div>
                    <div className="text-white/60 capitalize">{key}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">Overview</h3>
                  <p className="text-white/80 leading-relaxed">{caseStudy.overview}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">The Challenge</h3>
                  <p className="text-white/80 leading-relaxed">{caseStudy.challenge}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">LinkVision's Approach</h3>
                  <p className="text-white/80 leading-relaxed">{caseStudy.solution}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">Results</h3>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {caseStudy.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">Conclusion</h3>
                  <p className="text-white/80 leading-relaxed">{caseStudy.conclusion}</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button
                  className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30 text-lg px-8 py-6"
                  data-testid="button-request-quote"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
