import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Camera, Building, Users, Settings, Shield, Zap } from "lucide-react";

export default function CustomSolutions() {
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
      description: "Monitor multiple locations from a single dashboard. Perfect for organizations with sites spread across Australia. Real-time visibility across your entire operation."
    },
    {
      icon: Camera,
      title: "Unlimited Camera Support",
      description: "Scale your surveillance infrastructure without limits. Add as many cameras as your sites require - our platform grows with your business."
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
                  Request Pricing
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C800FF]/20 to-[#B100FF]/20 rounded-2xl blur-3xl" />
              <img
                src="/camera-tower-cropped.jpg"
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
              <div className="bg-[#182863]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] rounded-xl p-6 text-center transition-all duration-300 cursor-pointer">
                <h4 className="text-white font-bold text-xl mb-2">OneVision</h4>
                <p className="text-white/70">The New Standard</p>
              </div>
            </Link>
            <Link href="/solutions/widevision">
              <div className="bg-[#182863]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] rounded-xl p-6 text-center transition-all duration-300 cursor-pointer">
                <h4 className="text-white font-bold text-xl mb-2">WideVision</h4>
                <p className="text-white/70">180° Panoramic Coverage</p>
              </div>
            </Link>
            <Link href="/solutions/freevision">
              <div className="bg-[#182863]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] rounded-xl p-6 text-center transition-all duration-300 cursor-pointer">
                <h4 className="text-white font-bold text-xl mb-2">FreeVision</h4>
                <p className="text-white/70">PTZ Precision Control</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
