import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sun, Camera, Cloud, Shield, Volume2, Clock } from "lucide-react";
import oneVisionImage from "@assets/OneVisionOranePole_1764930426921.png";
import dayImage from "@assets/DayColoutImage_1767000632112.png";
import nightImage from "@assets/NightColourImage_1767000647165.png";
import ImageComparisonSlider from "@/components/ImageComparisonSlider";

export default function OneVision() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  const features = [
    "4K Ultra HD Resolution",
    "Wide Angle Lens",
    "Colour Night Vision",
    "AI-Powered Detection",
    "One Year Cloud Storage",
    "Loud Siren Alarm and Strobe Light",
    "24/7 back to base monitoring",
    "4G Connectivity",
    "100% Solar Powered",
    "Long Lasting Lithium Battery",
    "Built-in timelapse",
    "2-Way Audio",
  ];

  const capabilities = [
    {
      icon: Camera,
      title: "4K Ultra HD Vision",
      description: "Crystal clear 4K resolution captures every detail, day or night. Our advanced colour night vision technology ensures you never miss a thing, even in complete darkness."
    },
    {
      icon: Shield,
      title: "AI-Powered Intruder Detection",
      description: "Advanced AI algorithms detect and classify intruders in real-time. The moment someone crosses your perimeter, our 24/7 control room is alerted and ready to dispatch authorities."
    },
    {
      icon: Volume2,
      title: "Loud Siren & Strobe Light",
      description: "Built-in 110dB siren and bright strobe light deter intruders before they can cause damage. Often, the alarm alone is enough to send criminals running."
    },
    {
      icon: Sun,
      title: "100% Solar Powered",
      description: "Completely off-grid operation with our high-efficiency solar panels. No external power required - perfect for any construction site across Central QLD."
    },
    {
      icon: Cloud,
      title: "One Year Secure Cloud Storage",
      description: "All OneVision footage is securely stored in the cloud for 12 months. Review,access and export your recordings anytime, anywhere through our web and mobile applications."
    },
    {
      icon: Clock,
      title: "Built-in Timelapse",
      description: "Automatically generate professional-grade timelapse videos of your project. Perfect for construction sites and long-term monitoring."
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
              <div className="text-[#C800FF] font-bold text-xl mb-4">The New Standard for AI Surveillance</div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
                OneVision
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Our OneVision system does it all, AI intelligence to pickup any intrusion on your site, 4K Ultra HD video quality and built-in 4K timelapse. Perfect for temporary building sites, development and remote sites.
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
                src={oneVisionImage}
                alt="OneVision Solar Surveillance Tower"
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
              OneVision combines AI driven cutting-edge video technology with the features of an alarm system and monitoring service to provide you with the ultimate in security.
            </p>
          </div>

          {/* Colour Night Vision Comparison Slider */}
          <div className="mb-16">
            <h3 className="text-white font-bold text-2xl mb-6 text-center">
              Superior Colour Night Vision
            </h3>
            <div className="max-w-4xl mx-auto">
              <ImageComparisonSlider
                dayImage={dayImage}
                nightImage={nightImage}
                dayLabel="Day"
                nightLabel="Night"
              />
            </div>
            <p className="text-white/70 text-center mt-4 text-sm">
              Drag the slider to compare day and night vision quality
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
              Ready to Secure Your Site?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get a customized quote for OneVision tailored to your site's specific requirements.
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
            <Link href="/solutions/widevision">
              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] hover-elevate transition-all duration-300 relative overflow-hidden h-64 cursor-pointer">
                <img 
                  src="/camera-tower-cropped.jpg" 
                  alt="WideVision" 
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
                  src="/camera-tower-cropped.jpg" 
                  alt="FreeVision" 
                  className="h-full w-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-display text-2xl font-bold drop-shadow-lg">FreeVision</span>
                  <p className="text-white/80 text-sm drop-shadow-lg">PTZ Precision Control</p>
                </div>
              </Card>
            </Link>
            <Link href="/solutions/custom">
              <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] hover-elevate transition-all duration-300 relative overflow-hidden h-64 cursor-pointer">
                <img 
                  src="/camera-tower-cropped.jpg" 
                  alt="Custom Solutions" 
                  className="h-full w-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-display text-2xl font-bold drop-shadow-lg">Custom Solutions</span>
                  <p className="text-white/80 text-sm drop-shadow-lg">On or Off Grid</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
