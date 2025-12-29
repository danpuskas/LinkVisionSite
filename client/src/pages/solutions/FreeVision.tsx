import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Move, UserCheck, Car, Shield, AlertTriangle, Volume2 } from "lucide-react";

export default function FreeVision() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  const features = [
    "Advanced AI Object Detection",
    "PTZ (Pan-Tilt-Zoom) Capability",
    "Facial Recognition",
    "License Plate Recognition",
    "PPE Detection",
    "Behavioral Analytics",
    "Real-time Alerts",
    "Custom Alert Zones",
    "2 Way Audio",
  ];

  const capabilities = [
    {
      icon: Move,
      title: "PTZ Control",
      description: "Full pan, tilt, and zoom capability allows you to track subjects across your site. Remote operators can follow activity in real-time or set up automated patrol patterns."
    },
    {
      icon: UserCheck,
      title: "Facial Recognition",
      description: "Advanced facial recognition technology identifies known individuals and flags unknown persons. Create allowlists for authorized personnel and alerts for restricted areas."
    },
    {
      icon: Car,
      title: "License Plate Recognition",
      description: "Automatically capture and log every vehicle entering or exiting your site. Export detailed reports of vehicle activity and set up alerts for specific plates."
    },
    {
      icon: Shield,
      title: "PPE Detection",
      description: "AI-powered detection ensures compliance with safety requirements. Automatically detect hard hats, hi-vis vests, and other PPE - alert managers when rules aren't met."
    },
    {
      icon: AlertTriangle,
      title: "Behavioral Analytics",
      description: "Advanced AI analyzes movement patterns and behavior. Detect loitering, unusual activity, and potential threats before they become incidents."
    },
    {
      icon: Volume2,
      title: "2-Way Audio",
      description: "Communicate directly with people on site through the camera's built-in speaker and microphone. Issue warnings, provide instructions, or deter intruders remotely."
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
              <div className="text-[#C800FF] font-bold text-xl mb-4">Move and Zoom In on What's Important</div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
                FreeVision
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Our most advanced PTZ surveillance solution with facial recognition, license plate detection, and behavioral analytics. Take complete control of your site security.
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
                alt="FreeVision PTZ Surveillance Tower"
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
              FreeVision gives you unprecedented control and intelligence
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
              Ready for Advanced Security?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get a customized quote for FreeVision tailored to your site's specific requirements.
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
