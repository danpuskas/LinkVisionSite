import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Home,
  Factory,
  HardHat,
  Warehouse,
  Tractor,
  CheckCircle2,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Protect your build with AI Driven intelligent solar surveillance",
      benefits: [
        "Deter and reduce theft and vandalism",
        "Monitor deliveries",
        "Remotely monitor weather and ground conditions",
        "Reduce insurance premiums",
      ],
      caseStudyId: "residential-construction",
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Complete surveillance solutions for commercial construction sites",
      benefits: [
        "24/7 perimeter monitoring",
        "Arm and Disarm your site just like an Alarm System",
        "24/7 Control Room Monitored",
        "Reduce theft and vandalism",
      ],
      caseStudyId: "commercial-construction",
    },
    {
      icon: Factory,
      title: "Industrial & Civil Construction",
      description: "Protect and Monitor expansive areas all from the one screen",
      benefits: [
        "Protect industrial machinery and equipment",
        "Monitor entry and exit construction ramps",
        "Increase worker safety compliance",
        "Verify truck and vehicle number plates",
        "Monitor service vehicles and deliveries"
      ],
      caseStudyId: "industrial-civil-construction",
    },
    {
      icon: HardHat,
      title: "Mining & Resources",
      description: "Rugged surveillance for remote mining operations",
      benefits: [
        "Monitor remote mine sites 24/7",
        "Heavy equipment and asset protection",
        "Worker safety compliance",
        "Reduce or eliminate security patrols",
      ],
      caseStudyId: "mining-resources",
    },
    {
      icon: Warehouse,
      title: "Warehouses & Logistics",
      description: "Monitor large facilities with solar-powered coverage",
      benefits: [
        "Inventory and asset protection",
        "Loading dock monitoring",
        "Forklift safety compliance",
        "Perimeter breach detection",
        "Laydown area monitoring"
      ],
      caseStudyId: "warehouse-logistics",
    },
    {
      icon: Tractor,
      title: "Agriculture & Farming",
      description: "Protect livestock, machinery, and rural properties",
      benefits: [
        "Livestock theft prevention",
        "Machinery and fuel protection",
        "Biosecurity compliance monitoring",
        "Remote property oversight",
        "Starlink connectivity for remote stations"
      ],
      caseStudyId: "agriculture-farming",
    },
  ];

  const industries = [
    "Healthcare Facilities",
    "Hospitality & Hotels",
    "Transportation Hubs",
    "Government Buildings",
    "Sports & Recreation",
    "Education Facilities",
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/mining-excavator-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-98"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#182863]/40 via-[#182863]/50 to-[#182863]/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#C800FF]/10 via-transparent to-[#B100FF]/10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 drop-shadow-2xl">
              Whats Your Industry ?
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Tailored solar surveillance systems designed for your specific security challenges
            </p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.slice(0, 3).map((solution, index) => (
                <a key={index} href={`/case-studies#${solution.caseStudyId}`}>
                  <Card
                    className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:bg-[#1a2f6f]/85 hover-elevate transition-colors duration-300 cursor-pointer h-full"
                    data-testid={`card-solution-${index}`}
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center mb-4">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white font-display text-2xl">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 text-base">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                              <span className="text-white/90 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.slice(3).map((solution, index) => (
                <a key={index + 3} href={`/case-studies#${solution.caseStudyId}`}>
                  <Card
                    className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:bg-[#1a2f6f]/85 hover-elevate transition-colors duration-300 cursor-pointer h-full"
                    data-testid={`card-solution-${index + 3}`}
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center mb-4">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white font-display text-2xl">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 text-base">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                              <span className="text-white/90 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              More Industries We Serve
            </h2>
            <p className="text-xl text-white/80">
              Our versatile solar CCTV systems adapt to any environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-[#1a2f6f]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:bg-[#1a2f6f]/85 rounded-lg p-4 text-center hover-elevate transition-colors duration-300"
                data-testid={`industry-${index}`}
              >
                <span className="text-white font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1a2f6f]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:bg-[#1a2f6f]/85 transition-colors duration-300">
              <CardContent className="p-12 text-center">
                <h2 className="font-display font-bold text-4xl text-white mb-4">
                  Don't See Your Industry?
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  We've successfully deployed solar surveillance systems across hundreds of unique applications. Let's discuss your specific requirements.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                    data-testid="button-custom-solution"
                  >
                    Request Custom Solution
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Industries Served</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">10,000+</div>
              <div className="text-white/70">Cameras Deployed</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">99.9%</div>
              <div className="text-white/70">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
