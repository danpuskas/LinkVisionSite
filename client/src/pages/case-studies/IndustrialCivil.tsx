import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, CheckCircle2 } from "lucide-react";
import industrialBg from "@assets/stock_images/industrial_construct_b79bc8df.jpg";

export default function IndustrialCivilCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const caseStudy = {
    industry: "Industrial & Civil",
    title: "Securing Industrial and Civil Construction Sites Across Australia",
    overview: "Industrial and civil construction projects are expansive, resource-intensive, and often located in remote or open environments. These sites face persistent risks from theft, vandalism, and compliance gaps. National reports estimate annual losses exceeding $100 million from construction-related crime, with copper, fuel, and heavy machinery among the most stolen assets. At the same time, PPE compliance remains a critical issue, with audits showing up to 30% of workers non-compliant during shifts. Insurers and regulators increasingly demand verifiable records of PPE usage, while civil projects also require robust vehicle access oversight.",
    challenge: "High-value theft of excavators, generators, and wiring are prime targets. Vandalism delays can stall projects for weeks. Dozens of subcontractor, service, and delivery vehicles enter and exit daily, complicating accountability. Manual PPE checks fail to capture transient violations, leaving contractors exposed. Projects spanning kilometres require scalable surveillance coverage.",
    solution: "LinkVision deployed a fleet of stand-alone solar-powered surveillance units, scaled to match the size and complexity of each project. Key features included: fleet deployment with multiple ruggedised units positioned across perimeters, laydown areas, and entry points; solar-powered autonomy operating independently without grid power; cloud-based monitoring for remote oversight; smart deterrence with alarms, lighting, and voice-down systems; PPE Analytics Add-on for automated detection of helmet, vest, and boot usage; and Licence Plate Recognition Analytics Add-on to capture and verify vehicle plates, log entry/exit times, and generate reports for subcontractor, service, and delivery vehicle accountability.",
    results: [
      "65% reduction in theft and vandalism incidents within 90 days",
      "PPE compliance visibility with >95% detection accuracy",
      "Vehicle accountability enhanced with licence plate logs reducing unauthorised access",
      "Operational continuity protected with fewer crime-related delays",
      "Insurance premiums lowered with verifiable compliance and vehicle access records",
    ],
    metrics: {
      reduction: "65%",
      accuracy: ">95%",
      coverage: "Scalable",
    },
    keyTakeaways: [
      "Industrial and civil projects face annual crime-related losses exceeding $100 million",
      "PPE compliance gaps affect up to 30% of workers daily, exposing contractors to risk",
      "Vehicle access control is critical — licence plate recognition analytics provide accountability for all vehicles",
      "LinkVision's fleet of stand-alone solar-powered units ensures scalable coverage for projects of any size",
    ],
    conclusion: "Industrial and civil construction projects demand scalable, autonomous risk management. LinkVision's integrated system — combining solar-powered fleet deployment, PPE analytics, and licence plate recognition for all vehicles including service and delivery fleets — reduces theft, deters vandalism, and ensures compliance is documented in real time. The result is fewer losses, stronger accountability, and greater confidence in project delivery across Australia's largest builds.",
  };

  return (
    <div className="min-h-screen bg-[#182863] relative">
      <div 
        className="fixed inset-0 opacity-50 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${industrialBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#182863]/70 via-[#182863]/80 to-[#182863]/95 pointer-events-none" />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center">
                <HardHat className="w-8 h-8 text-white" />
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
  );
}
