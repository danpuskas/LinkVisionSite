import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Warehouse, CheckCircle2 } from "lucide-react";
import warehouseBg from "@assets/stock_images/warehouse_logistics__d2e417c0.jpg";

export default function WarehouseLogisticsCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const caseStudy = {
    industry: "Warehouse & Logistics",
    title: "Securing Warehousing & Logistics with LinkVision's OneVision, WideVision, and FreeVision Solutions",
    overview: "Warehousing and logistics sites across Australia are facing rising theft, vandalism, and operational disruptions. In 2024, Australia recorded 595,660 theft incidents — the highest in 21 years. Retail and logistics accounted for 45% of thefts, with laydown yards and depots particularly vulnerable. Fuel, copper, and pallet theft are increasing in industrial zones, while labour shortages make manned patrols costly and difficult to sustain. Central Queensland serves as a logistics hub supporting mining, agriculture, and transport corridors through Rockhampton, Gladstone, Emerald, and Mackay, with warehouses and depots facing unique pressures including remote locations with limited 4G coverage, high-value assets stored in laydown yards, and rising theft incidents.",
    challenge: "Remote locations with limited 4G coverage and no fixed CCTV infrastructure. High-value assets such as mining spares, agricultural machinery, fuel, and bulk commodities stored in laydown yards. Hundreds of subcontractor, service, and delivery vehicles moving through sites daily. Rising theft incidents including fuel siphoning, copper cable theft, and machinery vandalism. Labour shortages make manned patrols difficult to sustain across multiple remote depots.",
    solution: "LinkVision delivers a three-tier surveillance solution. OneVision: Fixed surveillance units for continuous monitoring of entry points, gates, and choke zones, ensuring access control and logging every vehicle and person. WideVision (180° Panoramic View): Panoramic coverage for wide-open spaces such as laydown yards, container stacks, and warehouse perimeters, eliminating blind spots with a single unit covering 180°. FreeVision: 25× optical zoom with 500M+ clarity distance, long-range monitoring across depots and transport corridors, with 100m IR and 30m white light night vision. Unified System: All three solutions deploy together into a single cloud platform with Licence Plate Recognition (LPR) Analytics, smart deterrence (alarms, lighting, voice-down), and continuous monitoring that reduces or eliminates the need for manned patrols.",
    results: [
      "60-70% reduction in theft and vandalism incidents across monitored warehouses and depots",
      "Improved accountability with LPR logs and unified reporting",
      "Operational continuity protected, avoiding costly downtime",
      "Insurance confidence strengthened, with verifiable compliance and access records",
      "Lower labour costs, with reduced reliance on manned patrols",
    ],
    metrics: {
      reduction: "60-70%",
      coverage: "180°",
      range: "500M+",
    },
    keyTakeaways: [
      "Warehousing and logistics sites across Australia are prime targets for theft and vandalism",
      "Central QLD faces unique regional challenges: remote depots, high-value outdoor storage, and rising theft incidents",
      "Conventional CCTV and patrols are costly and impractical across multiple sites",
      "LinkVision's OneVision, WideVision, and FreeVision deliver a layered, unified system that scales across warehouses, depots, and logistics hubs",
    ],
    conclusion: "By combining OneVision, WideVision, and FreeVision, LinkVision delivers a comprehensive surveillance solution for warehousing and logistics. From entry gates to panoramic yard coverage to long-range monitoring, every angle is secured. This layered approach reduces theft, eliminates blind spots, and replaces costly patrols with autonomous, fleet-based oversight — a proven solution for both Australia's national logistics sector and the unique challenges of Central Queensland.",
  };

  return (
    <div className="min-h-screen bg-[#182863] relative">
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${warehouseBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#182863]/70 via-[#182863]/80 to-[#182863]/95 pointer-events-none" />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center">
                <Warehouse className="w-8 h-8 text-white" />
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
