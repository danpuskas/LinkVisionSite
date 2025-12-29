import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, CheckCircle2 } from "lucide-react";
import residentialBg from "@assets/stock_images/residential_home_sec_0623215e.jpg";

export default function ResidentialCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const caseStudy = {
    industry: "Residential",
    title: "Securing Residential Construction Sites Across Central Queensland",
    overview: "Residential construction is one of Australia's largest industries, contributing billions annually to the economy. Yet, theft and vandalism during the construction phase remain persistent challenges. Industry reports estimate that losses from site crime can account for around 1% of the total cost of a new home, with millions of dollars lost nationwide each year. These incidents not only increase costs but also delay projects and erode client confidence.",
    challenge: "High-value targets including tools, copper wiring, timber, appliances, and fixtures are frequently stolen. Crimes often occur during the fit-out stage, when homes are complete but unoccupied. Beyond replacement costs, builders face delays, insurance claims, and reputational damage. With thousands of residential projects underway at any given time, the cumulative impact of site crime is significant.",
    solution: "LinkVision deployed a tailored surveillance solution designed specifically for construction environments: ruggedised surveillance units capable of withstanding harsh outdoor conditions, AI-powered monitoring to detect suspicious activity in real time, cloud-based access enabling builders and project managers to monitor sites remotely, rapid deployment systems that can be installed and relocated easily as projects progress, and integration with deterrents such as lighting and alarms to prevent escalation.",
    results: [
      "Incidents reduced by over 60% compared to baseline figures",
      "Asset recovery improved with several attempted thefts thwarted due to real-time alerts",
      "Project delays minimized, saving builders both time and money",
      "Client confidence strengthened with developers reporting improved trust in site security",
    ],
    metrics: {
      reduction: "60%+",
      deployment: "6 months",
      coverage: "Central QLD",
    },
    keyTakeaways: [
      "Theft and vandalism remain a nationwide issue in residential construction, costing millions annually",
      "Proactive surveillance is not just a deterrent—it is a cost-saving investment",
      "LinkVision's solutions provide scalable protection that adapts to the dynamic nature of construction projects",
      "By reducing crime-related losses, builders can deliver homes on time, on budget, and with greater peace of mind",
    ],
    conclusion: "Australia's residential construction industry faces ongoing challenges from theft and vandalism. LinkVision's advanced surveillance solutions demonstrate how technology can transform site security, reduce losses, and protect investments. By addressing risks at a national level, LinkVision is helping builders and developers safeguard Australia's future homes.",
  };

  return (
    <div className="min-h-screen bg-[#182863] relative">
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${residentialBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#182863]/70 via-[#182863]/80 to-[#182863]/95 pointer-events-none" />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
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
                <Card key={idx} className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30">
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
              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">Overview</h3>
                  <p className="text-white/80 leading-relaxed">{caseStudy.overview}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">The Challenge</h3>
                  <p className="text-white/80 leading-relaxed">{caseStudy.challenge}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30">
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4">LinkVision's Approach</h3>
                  <p className="text-white/80 leading-relaxed">{caseStudy.solution}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30">
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

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30">
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

              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30">
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
