import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tractor, CheckCircle2 } from "lucide-react";
import agricultureBg from "@assets/stock_images/agriculture_farming__1d3e0a9d.jpg";

export default function AgricultureFarmingCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const caseStudy = {
    industry: "Agriculture & Farming",
    title: "Tackling Livestock Theft with LinkVision's OneVision, WideVision, and FreeVision Solutions",
    overview: "Livestock theft (stock theft) remains one of the highest-value rural crimes in Australia. Nationally, losses are estimated in the millions annually, with cattle and sheep the most common targets. Many incidents go unreported, meaning the true scale is larger than official figures. Theft often involves moving cattle through saleyards or transport corridors, making recovery difficult. Fuel and machinery theft compound the problem, adding to farm losses. Central Queensland is the heart of Australia's beef industry, with Rockhampton recognised as the Beef Capital of Australia. The region holds a large share of Queensland's 13.3 million cattle. Cattle rustling remains a persistent issue, with losses impacting both small producers and large feedlots. Remote properties make oversight difficult, and trespassers can move stock quickly. Biosecurity risks arise when unauthorised access occurs, threatening herd health and compliance.",
    challenge: "Remote properties make oversight difficult, and trespassers can move stock quickly. Biosecurity risks arise when unauthorised access occurs, threatening herd health and compliance. Cattle rustling remains a persistent issue, with losses impacting both small producers and large feedlots. Fuel and machinery theft compound the problem, adding to farm losses. Many incidents go unreported, meaning the true scale of livestock theft is larger than official figures suggest.",
    solution: "LinkVision delivers a three-tier surveillance solution for agriculture and livestock protection. OneVision: Fixed surveillance units at entry gates, cattle yards, and loading ramps, ensuring access control and logging every vehicle and person entering. WideVision (180° Panoramic View): Panoramic coverage for feedlots, paddocks, and livestock enclosures, eliminating blind spots with a single unit covering 180°. Ideal for monitoring fuel depots, feed yards, and outdoor storage zones. FreeVision: 25× optical zoom with 500M+ clarity distance, long-range monitoring across paddocks, cattle yards, and transport corridors, with 100m IR and 30m white light night vision. Enables active tracking of vehicles, livestock movements, or trespassers across large properties. Unified System: All three solutions deploy together into a single cloud platform with Licence Plate Recognition (LPR) Analytics to track contractor, supplier, and transport vehicles. Smart deterrence with alarms, lighting, and voice-down features. Safety oversight monitoring machinery use to reduce accident risks. For large stations without reliable 4G coverage, LinkVision integrates Starlink satellite connectivity, ensuring continuous monitoring even in remote areas.",
    results: [
      "Reduced livestock theft incidents across monitored farms and feedlots",
      "Improved accountability with vehicle logs and unified reporting",
      "Operational continuity protected, avoiding costly herd losses",
      "Insurance confidence strengthened, with verifiable compliance and access records",
      "Enhanced safety oversight, reducing risks from unsafe vehicle use",
    ],
    metrics: {
      coverage: "500M+",
      panoramic: "180°",
      connectivity: "4G/Starlink",
    },
    keyTakeaways: [
      "Livestock theft costs Australian farmers millions annually, with Central QLD particularly exposed",
      "Rockhampton, as the Beef Capital of Australia, highlights the importance of securing cattle yards and feedlots",
      "LinkVision's OneVision, WideVision, and FreeVision deliver a layered, unified system that scales across farms, cattle stations, and depots",
      "Starlink integration ensures coverage for large, remote stations where 4G connectivity is limited",
    ],
    conclusion: "By combining OneVision, WideVision, and FreeVision, LinkVision delivers a comprehensive surveillance solution for agriculture and livestock protection. From entry gates to panoramic yard coverage to long-range monitoring, every angle is secured. This layered approach reduces theft, protects herds, improves safety oversight, and supports compliance — a proven solution for both Australia's national farming sector and the unique challenges of Central Queensland and Rockhampton.",
  };

  return (
    <div className="min-h-screen bg-[#182863] relative">
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${agricultureBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#182863]/70 via-[#182863]/80 to-[#182863]/95 pointer-events-none" />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center">
                <Tractor className="w-8 h-8 text-white" />
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
