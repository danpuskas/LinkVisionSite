import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Factory, Home, HardHat, Warehouse, Tractor, ArrowRight } from "lucide-react";
import residentialBg from "@assets/CaseStudyResidential_1767052634793.png";
import commercialBg from "@assets/CaseStudyCommercial_1767080113365.png";
import agricultureBg from "@assets/CaseStudyLivestock_1767080113365.png";
import warehouseBg from "@assets/CaseStudyLogistics_1767080113365.png";

export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const industries = [
    {
      id: "residential",
      icon: Home,
      title: "Residential",
      subtitle: "Construction Sites",
      description: "Protecting homes under construction from theft and vandalism across Central Queensland.",
      stat: "60%+ reduction",
      statLabel: "in incidents",
      link: "/case-studies/residential",
      image: residentialBg,
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial",
      subtitle: "Construction",
      description: "Dual protection: security surveillance and PPE compliance monitoring for commercial projects.",
      stat: "70%",
      statLabel: "reduction in theft",
      link: "/case-studies/commercial",
      image: commercialBg,
    },
    {
      id: "industrial-civil",
      icon: HardHat,
      title: "Industrial & Civil",
      subtitle: "Construction",
      description: "Scalable fleet deployment for large-scale projects with vehicle and PPE tracking.",
      stat: ">95%",
      statLabel: "PPE detection accuracy",
      link: "/case-studies/industrial-civil",
      image: null,
    },
    {
      id: "mining-resources",
      icon: Factory,
      title: "Mining & Resources",
      subtitle: "Operations",
      description: "Custom surveillance for vast mining leases with 4G/Starlink connectivity options.",
      stat: "40+ km²",
      statLabel: "coverage area",
      link: "/case-studies/mining-resources",
      image: null,
    },
    {
      id: "warehouse-logistics",
      icon: Warehouse,
      title: "Warehouse & Logistics",
      subtitle: "Facilities",
      description: "Three-tier surveillance combining OneVision, WideVision, and FreeVision solutions.",
      stat: "180°",
      statLabel: "panoramic coverage",
      link: "/case-studies/warehouse-logistics",
      image: warehouseBg,
    },
    {
      id: "agriculture-farming",
      icon: Tractor,
      title: "Agriculture & Farming",
      subtitle: "Properties",
      description: "Protecting livestock, machinery, and remote properties with long-range monitoring.",
      stat: "500M+",
      statLabel: "clarity distance",
      link: "/case-studies/agriculture-farming",
      image: agricultureBg,
    },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a2f6f] to-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Industry Case Studies
            </h1>
            <p className="text-xl text-white/80">
              See how LinkVision has transformed security across different industries. 
              Select an industry below to explore real-world results and solutions.
            </p>
          </div>

          {/* Interactive Industry Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Link key={industry.id} href={industry.link}>
                <Card
                  className="group bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300 cursor-pointer h-full overflow-hidden"
                  data-testid={`card-industry-${index}`}
                >
                  {/* Background Image (if available) */}
                  {industry.image && (
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 bg-cover bg-center"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    />
                  )}
                  
                  <CardContent className="p-6 relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-linkvision flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <industry.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-display text-xl font-bold">
                          {industry.title}
                        </h3>
                        <div className="text-[#C800FF] text-sm font-semibold">
                          {industry.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Stat Highlight */}
                    <div className="bg-[#182863]/80 rounded-lg p-3 mb-4">
                      <div className="text-2xl font-display font-bold text-white">
                        {industry.stat}
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wide">
                        {industry.statLabel}
                      </div>
                    </div>

                    {/* View Case Study Link */}
                    <div className="flex items-center gap-2 text-[#C800FF] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats Section */}
      <section className="py-16 bg-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">6</div>
              <div className="text-white/60">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">60-70%</div>
              <div className="text-white/60">Average Incident Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">&gt;95%</div>
              <div className="text-white/60">PPE Detection Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">24/7</div>
              <div className="text-white/60">Monitoring Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Secure Your Industry?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Every industry has unique security challenges. Let us design a custom solution for your specific needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30 text-lg px-8 py-6"
                data-testid="button-contact-cta"
              >
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
