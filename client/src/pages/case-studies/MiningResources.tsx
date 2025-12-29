import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, CheckCircle2 } from "lucide-react";
import miningBg from "@assets/stock_images/mining_operations_op_eb042ffe.jpg";

export default function MiningResourcesCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const caseStudy = {
    industry: "Mining & Resources",
    title: "Custom Surveillance Solutions for Mining & Resource Sites",
    overview: "Australia's mining operations are among the largest in the world, not just in pit dimensions but in lease size. Super Pit (Kalgoorlie, WA) spans ~3.5 km long, 1.5 km wide, with a lease area exceeding 40 km². Mount Whaleback (WA) features a ~5.5 km long pit, with leases spanning dozens of square kilometres. Boddington Gold Mine (WA) has a ~5 km² pit, but a lease area of over 60 km², including processing zones and tailings dams. These vast lease areas present major security challenges. While safety incidents are widely reported, theft and vandalism remain under-reported, despite contributing to losses in the hundreds of millions annually when downtime, stolen fuel, copper, and equipment are factored in.",
    challenge: "Scale: Mining leases extend far beyond pits, covering haul roads, fuel depots, and laydown yards. Connectivity gaps: Remote leases often lack reliable 4G coverage. Asset risk: Theft of copper, diesel, and machinery parts is significant but under-reported. Vehicle oversight: Hundreds of subcontractor, service, and delivery vehicles move across lease areas daily. Night coverage: Vast open leases require long-range visibility in low-light conditions. Cost: Conventional CCTV wireless links and manned patrols are expensive and logistically difficult across kilometre-scale leases.",
    solution: "LinkVision designs tailored surveillance deployments for mining and resource sites, adapting to each lease's geography, connectivity, and operational needs. Fleet deployment: Stand-alone solar-powered units scaled to cover lease-wide perimeters, haul roads, and processing zones. Custom connectivity: 4G networks where coverage exists, Starlink satellite integration for remote leases without 4G, and hybrid deployments combining both for seamless monitoring. Unified system: All units stream into one cloud platform, giving managers a single view of the entire lease. FreeVision optics: 25× optical zoom (~1.2 km effective clarity), 16× digital zoom (~19 km extended viewing), 100 m IR night vision and 30 m white light coverage. Licence Plate Recognition (LPR) Analytics: Tracks subcontractor, service, and delivery vehicles across the lease, logging entry/exit times and reducing unauthorised access. Smart deterrence: Alarms, lighting, and voice-down features to disrupt incidents. Patrol replacement: Continuous monitoring across the lease reduces or eliminates the need for manned security patrols, cutting costs and improving coverage.",
    results: [
      "60-70% reduction in theft and vandalism incidents across monitored mining leases",
      "Improved vehicle accountability, with LPR logs supporting chain-of-custody and contractor management",
      "Operational continuity protected, avoiding costly downtime from vandalism or unauthorised access",
      "Insurance confidence strengthened, with verifiable compliance and access records",
      "Connectivity assured, even in remote areas, through Starlink integration",
      "Security costs reduced, with fewer manned patrols required thanks to autonomous fleet coverage",
    ],
    metrics: {
      reduction: "60-70%",
      coverage: "40+ km²",
      connectivity: "4G/Starlink",
    },
    keyTakeaways: [
      "Mining leases often cover tens to hundreds of square kilometres, far larger than the pits themselves",
      "Theft and vandalism across leases are under-reported, but losses are substantial",
      "Conventional CCTV and manned patrols are costly and impractical for lease-wide coverage",
      "LinkVision's custom solutions — solar-powered fleets, 4G/Starlink connectivity, FreeVision optics, and LPR analytics — deliver unified, scalable protection and reduce reliance on manned patrols",
    ],
    conclusion: "Mining and resource sites demand scalable, autonomous surveillance. LinkVision's stand-alone solar-powered fleet with FreeVision optics, LPR analytics, and flexible connectivity (4G or Starlink) secures expansive lease areas, reduces losses, and ensures unified oversight across kilometres of terrain. By tailoring deployments to each site's unique challenges, LinkVision provides a proven, cost-effective solution that can replace or significantly reduce manned patrols across Australia's largest mines.",
  };

  return (
    <div className="min-h-screen bg-[#182863] relative">
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${miningBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#182863]/70 via-[#182863]/80 to-[#182863]/95 pointer-events-none" />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center">
                <Factory className="w-8 h-8 text-white" />
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
