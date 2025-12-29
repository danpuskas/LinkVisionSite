import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, Camera, Clock, Shield } from "lucide-react";

export default function Timelapse() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const features = [
    {
      icon: Camera,
      title: "4K Ultra HD",
      description: "Crystal clear footage capturing every detail of your construction progress"
    },
    {
      icon: Clock,
      title: "Automated Capture",
      description: "Set it and forget it - our cameras automatically capture footage at your preferred intervals"
    },
    {
      icon: Shield,
      title: "Cloud Storage",
      description: "All timelapse footage is securely stored in the cloud with easy access anytime"
    },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-hero"
        >
          <source src="/timelapse-hero.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#182863]/60 via-[#182863]/40 to-[#182863]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#182863]/80 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#C800FF]/20 border border-[#C800FF]/40 rounded-full px-4 py-2 mb-6">
              <Play className="w-4 h-4 text-[#C800FF]" />
              <span className="text-white/90 text-sm font-medium">Construction Timelapse</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Watch Your Project Come to Life
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Our AI-powered surveillance cameras capture stunning timelapse footage of your construction site, documenting every milestone from groundbreaking to completion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30 text-lg px-8"
                  data-testid="button-get-started"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8"
                  data-testid="button-view-solutions"
                >
                  View Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Document Your Build Progress
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              LinkVision timelapse technology turns months of construction into captivating footage you can share with stakeholders, clients, and marketing teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] rounded-2xl p-8 text-center transition-all duration-300"
                data-testid={`card-feature-${index}`}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-linkvision flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#182863] to-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Capture Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch to learn how LinkVision can document your construction progress with stunning timelapse footage.
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
    </div>
  );
}
