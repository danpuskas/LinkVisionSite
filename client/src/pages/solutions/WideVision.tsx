import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sun, Camera, Cloud, Shield, Eye, Clock } from "lucide-react";

export default function WideVision() {
  const features = [
    "4K Ultra HD Resolution",
    "Dual Lenses providing a 180 Degree Panoramic View",
    "Colour Night Vision",
    "AI-Powered Detection",
    "One Year Cloud Storage",
    "24/7 back to base monitoring",
    "4G Connectivity",
    "100% Solar Powered",
    "Long Lasting Lithium Battery",
    "Built-in timelapse",
    "2 Way Audio",
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "180° Panoramic View",
      description: "Dual lens technology provides an unprecedented 180-degree field of view. Cover more ground with fewer units, reducing installation costs while maximizing coverage."
    },
    {
      icon: Camera,
      title: "Dual 4K Lenses",
      description: "Two synchronized 4K cameras work together to create a seamless panoramic image. No blind spots, no stitching artifacts - just crystal clear coverage."
    },
    {
      icon: Shield,
      title: "AI-Powered Detection",
      description: "Advanced AI algorithms monitor the entire panoramic view simultaneously. Detect and track multiple objects across the full 180-degree field."
    },
    {
      icon: Sun,
      title: "100% Solar Powered",
      description: "Completely off-grid operation with our high-efficiency solar panels. Perfect for large perimeters and wide-open spaces across Australia."
    },
    {
      icon: Cloud,
      title: "One Year Cloud Storage",
      description: "All panoramic footage is securely stored in the cloud for 12 months. Review any moment from any angle through our intuitive interface."
    },
    {
      icon: Clock,
      title: "Built-in Timelapse",
      description: "Capture stunning panoramic timelapses of your entire site. Perfect for documenting large-scale construction and infrastructure projects."
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
              <div className="text-[#C800FF] font-bold text-xl mb-4">Capture More</div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
                WideVision
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Our panoramic surveillance solution with dual 4K lenses providing 180-degree coverage. See everything with a single unit - perfect for perimeters, parking lots, and large open areas.
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
                alt="WideVision Panoramic Surveillance Tower"
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
              WideVision maximizes coverage with minimal infrastructure
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
              Ready to Expand Your Coverage?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get a customized quote for WideVision tailored to your site's specific requirements.
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
            <Link href="/solutions/freevision">
              <div className="bg-[#182863]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] rounded-xl p-6 text-center transition-all duration-300 cursor-pointer">
                <h4 className="text-white font-bold text-xl mb-2">FreeVision</h4>
                <p className="text-white/70">PTZ Precision Control</p>
              </div>
            </Link>
            <Link href="/solutions/custom">
              <div className="bg-[#182863]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] rounded-xl p-6 text-center transition-all duration-300 cursor-pointer">
                <h4 className="text-white font-bold text-xl mb-2">Custom Solutions</h4>
                <p className="text-white/70">On or Off Grid</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
