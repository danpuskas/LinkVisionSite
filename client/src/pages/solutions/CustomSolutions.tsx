import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Camera, Building, Users, Settings, Shield, Zap } from "lucide-react";
import SEO from "@/components/SEO";

export default function CustomSolutions() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  const features = [
    "Unlimited Camera Support",
    "Centralized Management",
    "Unlimited Users",
    "Multi-site Monitoring",
    "Audit Logs",
    "License Plate Recognition",
    "People Counting",
    "PPE Analytics",
  ];

  const capabilities = [
    {
      icon: Building,
      title: "Multi-Site Management",
      description: "Monitor multiple locations from a single dashboard. Perfect for organizations with sites spread across different geographical area. Real-time visibility across your entire operation."
    },
    {
      icon: Camera,
      title: "Unlimited Camera Support",
      description: "Scale your surveillance infrastructure without limits. Add as many cameras as your sites require - our platform grows with your all your sites."
    },
    {
      icon: Users,
      title: "Unlimited Users",
      description: "Give access to as many team members as needed. Role-based permissions ensure everyone has the right level of access to the system."
    },
    {
      icon: Zap,
      title: "On or Off Grid",
      description: "Flexible power options to suit any location. Full solar-powered operation for remote sites, or grid-connected for urban installations. We adapt to your needs."
    },
    {
      icon: Settings,
      title: "Centralized Control",
      description: "One platform to manage everything. Configure cameras, set alerts, review footage, and generate reports - all from our intuitive web and mobile applications."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols protect your data. Full audit logging tracks all system access and changes for compliance requirements."
    },
  ];

  return (
    <>
      <SEO
        title="Custom Surveillance Solutions"
        description="LinkVision designs custom solar surveillance systems combining OneVision, WideVision, and FreeVision for any site, industry, or operational requirement across Australia."
        canonical="/solutions/custom"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "LinkVision Custom Solar Surveillance System",
          "description": "Bespoke solar surveillance deployments combining OneVision, WideVision, and FreeVision units. Tailored to any Australian site, industry, or operational requirement.",
          "brand": { "@type": "Brand", "name": "LinkVision" },
          "url": "https://linkvision.com.au/solutions/custom",
          "category": "Security System",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "AUD",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "LinkVision" }
          }
        }}
      />
      <div className="min-h-screen bg-[#182863]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#182863]/40 via-[#182863]/60 to-[#182863]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#C800FF]/10 via-transparent to-[#B100FF]/10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#C800FF] font-bold text-xl mb-4">On or Off Grid</div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
                Custom Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Enterprise-grade surveillance tailored to your specific requirements. Whether you need a single camera or hundreds across multiple sites, we build solutions that fit your exact needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button
                  className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30 text-lg px-8 py-6"
                  data-testid="button-request-pricing"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C800FF]/20 to-[#B100FF]/20 rounded-2xl blur-3xl" />
              <img
                src="/camera-tower-cropped.webp"
                alt="Custom Surveillance Solutions"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl shadow-[#C800FF]/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Key Capabilities
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Flexible, scalable solutions for enterprises of any size
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] rounded-xl p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-linkvision flex items-center justify-center mb-4">
                  <capability.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{capability.title}</h3>
                <p className="text-white/80">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#182863] to-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Let's Build Your Solution
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our team will work with you to design a surveillance solution that meets your exact requirements.
            </p>
            <Link href="/contact">
              <Button
                className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30 text-lg px-8 py-6"
                data-testid="button-cta-contact"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-white font-bold text-2xl mb-8 text-center">Explore Other Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/solutions/onevision">
              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] hover-elevate transition-all duration-300 relative overflow-hidden h-64 cursor-pointer">
                <img 
                  src="/onevision-product.webp" 
                  alt="OneVision fixed solar surveillance tower by LinkVision" 
                  className="h-full w-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-display text-2xl font-bold drop-shadow-lg">OneVision</span>
                  <p className="text-white/80 text-sm drop-shadow-lg">The New Standard</p>
                </div>
              </Card>
            </Link>
            <Link href="/solutions/widevision">
              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] hover-elevate transition-all duration-300 relative overflow-hidden h-64 cursor-pointer">
                <img 
                  src="/camera-tower-cropped.webp" 
                  alt="WideVision 180-degree panoramic solar surveillance by LinkVision" 
                  className="h-full w-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-display text-2xl font-bold drop-shadow-lg">WideVision</span>
                  <p className="text-white/80 text-sm drop-shadow-lg">180° Panoramic Coverage</p>
                </div>
              </Card>
            </Link>
            <Link href="/solutions/freevision">
              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] hover-elevate transition-all duration-300 relative overflow-hidden h-64 cursor-pointer">
                <img 
                  src="/camera-tower-cropped.webp" 
                  alt="FreeVision PTZ long-range solar surveillance by LinkVision" 
                  className="h-full w-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-display text-2xl font-bold drop-shadow-lg">FreeVision</span>
                  <p className="text-white/80 text-sm drop-shadow-lg">PTZ Precision Control</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
