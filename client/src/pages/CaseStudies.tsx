import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Factory, Home, ShoppingBag, TrendingUp, CheckCircle2 } from "lucide-react";
import constructionBg from "@assets/excavator_Case_Study2K_1764897374599.png";

export default function CaseStudies() {
  const cases = [
    {
      icon: Building2,
      industry: "Commercial Real Estate",
      title: "Melbourne CBD Office Complex",
      challenge: "A 12-story office building needed comprehensive security without expensive wiring across multiple floors and existing infrastructure.",
      solution: "Deployed 18 solar-powered 4K cameras with AI analytics across entrances, parking areas, and common spaces. Cloud-based management allowed security team to monitor all locations from a central dashboard.",
      results: [
        "95% reduction in unauthorized access incidents",
        "60% faster emergency response times",
        "$45,000 saved vs traditional wired system",
        "Zero electrical costs for surveillance",
      ],
      metrics: {
        cameras: 18,
        coverage: "100%",
        roi: "14 months",
      },
      quote: {
        text: "LinkVision transformed our security approach. The solar cameras work flawlessly, and the AI alerts have caught several potential issues before they escalated.",
        author: "James Patterson",
        role: "Facilities Manager",
      },
    },
    {
      icon: Factory,
      industry: "Mining & Resources",
      title: "Remote Mining Site in WA",
      challenge: "A remote mining operation 300km from the nearest town needed 24/7 surveillance with no grid power available.",
      solution: "Installed 24 ruggedized solar CCTV units with extended battery packs and 4G connectivity. AI detection configured for vehicle and personnel tracking across the 50-hectare site.",
      results: [
        "Prevented $200,000+ in equipment theft",
        "100% site coverage achieved",
        "Improved worker safety compliance",
        "Real-time incident reporting to HQ",
      ],
      metrics: {
        cameras: 24,
        area: "50 hectares",
        uptime: "99.9%",
      },
      quote: {
        text: "The solar cameras have been bulletproof. They handle the extreme heat, dust, and isolation without any issues. Best investment we've made in site security.",
        author: "Michelle Roberts",
        role: "Site Operations Manager",
      },
    },
    {
      icon: Home,
      industry: "Residential Construction",
      title: "Securing Residential Construction Sites Across Australia",
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
        coverage: "Nationwide",
      },
      keyTakeaways: [
        "Theft and vandalism remain a nationwide issue in residential construction, costing millions annually",
        "Proactive surveillance is not just a deterrent—it is a cost-saving investment",
        "LinkVision's solutions provide scalable protection that adapts to the dynamic nature of construction projects",
        "By reducing crime-related losses, builders can deliver homes on time, on budget, and with greater peace of mind",
      ],
      conclusion: "Australia's construction industry faces ongoing challenges from theft and vandalism. LinkVision's advanced surveillance solutions demonstrate how technology can transform site security, reduce losses, and protect investments. By addressing risks at a national level, LinkVision is helping builders and developers safeguard Australia's future homes.",
    },
    {
      icon: ShoppingBag,
      industry: "Retail",
      title: "Shopping Center Deployment",
      challenge: "Multi-tenant shopping center needed upgraded security across parking lots, entries, and common areas while minimizing disruption to tenants.",
      solution: "32 solar cameras with AI-powered people counting and behavioral analytics. Integrated with existing alarm systems for comprehensive security.",
      results: [
        "78% reduction in theft incidents",
        "Enhanced customer flow insights",
        "Faster parking violation response",
        "Improved tenant satisfaction",
      ],
      metrics: {
        cameras: 32,
        stores: 45,
        reduction: "78% theft",
      },
      quote: {
        text: "The installation was seamless, and the results speak for themselves. Our tenants feel safer, and we've seen a measurable drop in incidents.",
        author: "Robert Chen",
        role: "Property Manager",
      },
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
              Customer Success Stories
            </h1>
            <p className="text-xl text-white/80">
              Real results from real customers across Australia
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {cases.map((caseStudy, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f] border-2 border-[#C800FF]/30"
                data-testid={`card-case-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center flex-shrink-0">
                      <caseStudy.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#C800FF] font-semibold mb-1">
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]/80 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-5xl font-display font-bold text-white mb-2">500+</div>
                <div className="text-white/70">Success Stories</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold text-white mb-2">95%</div>
                <div className="text-white/70">Customer Retention</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold text-white mb-2">4.9/5</div>
                <div className="text-white/70">Average Rating</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold text-white mb-2">$5M+</div>
                <div className="text-white/70">Losses Prevented</div>
              </div>
            </div>

            <Card className="bg-[#1a2f6f] border-2 border-[#C800FF]/30">
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
