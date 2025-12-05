import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Factory, Home, HardHat, Warehouse, Tractor, CheckCircle2 } from "lucide-react";
import constructionBg from "@assets/excavator_Case_Study4K_1764902546352.png";

export default function CaseStudies() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const cases = [
    {
      id: "residential-construction",
      icon: Home,
      industry: "Residential Construction",
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
    },
    {
      id: "commercial-construction",
      icon: Building2,
      industry: "Commercial Construction",
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
    },
    {
      id: "industrial-civil-construction",
      icon: HardHat,
      industry: "Industrial and Civil Construction",
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
    },
    {
      id: "mining-resources",
      icon: Factory,
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
    },
    {
      id: "warehouse-logistics",
      icon: Warehouse,
      industry: "Warehouse and Logistics",
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
    },
    {
      id: "agriculture-farming",
      icon: Tractor,
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
    },
  ];

  return (
    <div className="min-h-screen bg-[#182863] relative">
      <div 
        className="absolute inset-0 opacity-80 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${constructionBg})` }}
      />
      <section className="py-20 bg-gradient-to-b from-[#1a2f6f]/80 to-[#182863]/80 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Industry Case Studies
            </h1>
            <p className="text-xl text-white/80">
              What can LinkVision do for your industry? See Below for some of our most recent case studies.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {cases.map((caseStudy, index) => (
              <div key={index} id={caseStudy.id} className="scroll-mt-24">
                <Card
                  className="bg-[#1a2f6f] border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] hover-elevate transition-all duration-300"
                  data-testid={`card-case-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center flex-shrink-0">
                        <caseStudy.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-xl text-[#C800FF] font-bold mb-1">
                          {caseStudy.industry}
                        </div>
                        <CardTitle className="text-white font-display text-3xl">
                          {caseStudy.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {'overview' in caseStudy && (
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Overview</h4>
                        <p className="text-white/80">{caseStudy.overview}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-6 bg-[#182863] rounded-lg p-6">
                      {Object.entries(caseStudy.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-display font-bold text-white mb-1">
                            {value}
                          </div>
                          <div className="text-white/60 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">The Challenge</h4>
                      <p className="text-white/80">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {'overview' in caseStudy ? "LinkVision's Approach" : "Our Solution"}
                      </h4>
                      <p className="text-white/80">{caseStudy.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-lg mb-3">Results</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                            <span className="text-white/90">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {'keyTakeaways' in caseStudy && (
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-3">Key Takeaways</h4>
                        <ul className="space-y-2">
                          {(caseStudy as any).keyTakeaways.map((takeaway: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                              <span className="text-white/90">{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {'conclusion' in caseStudy && (
                      <div className="bg-[#182863] rounded-lg p-6 border-l-4 border-[#C800FF]">
                        <h4 className="text-white font-semibold text-lg mb-2">Conclusion</h4>
                        <p className="text-white/90">{(caseStudy as any).conclusion}</p>
                      </div>
                    )}

                    {'quote' in caseStudy && (
                      <div className="bg-[#182863] rounded-lg p-6 border-l-4 border-[#C800FF]">
                        <p className="text-white/90 text-lg italic mb-4">
                          "{(caseStudy as any).quote.text}"
                        </p>
                        <div className="text-white font-semibold">{(caseStudy as any).quote.author}</div>
                        <div className="text-white/60">{(caseStudy as any).quote.role}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]/80 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-[#1a2f6f] border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] hover-elevate transition-all duration-300">
              <CardContent className="p-12">
                <h2 className="font-display font-bold text-4xl text-white mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Join hundreds of satisfied customers who trust LinkVision to protect what matters most
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                    data-testid="button-start-case-study"
                  >
                    Start Your Project Today
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
