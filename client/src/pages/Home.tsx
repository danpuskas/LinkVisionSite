import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import {
  Shield,
  Sun,
  Brain,
  Cloud,
  CheckCircle2,
  Eye,
  Zap,
  Hammer,
  Volume2,
  Headphones,
  Signal,
} from "lucide-react";

import solarPoweredImg from "@assets/stock_images/solar_panel_energy_r_d5b1e442.jpg";
import aiDetectionImg from "@assets/AIChipset_1764746384026.png";
import cloudStorageImg from "@assets/stock_images/cloud_computing_stor_8c4901fe.jpg";
import ruggedisedImg from "@assets/RuggedTablet_1764736592557.png";
import resolution4kImg from "@assets/4KCompare_1764740879540.png";
import instantAlertsImg from "@assets/iphoneAlert3_1764744194316.png";
import twoWayAudioImg from "@assets/TwowayAudio_1764739561735.png";
import monitoringImg from "@assets/MonitoringStation_1764733453498.png";
import connectivity4gImg from "@assets/4GRouterIndustrial_1764733632211.png";

export default function Home() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const features = [
    {
      icon: Sun,
      title: "Solar Powered",
      description: "100% solar energy ensures 24/7 operation without grid dependency",
      image: solarPoweredImg,
      hoverTextWhite: true,
    },
    {
      icon: Brain,
      title: "AI Detection",
      description: "Advanced AI algorithms detect threats and unusual activity in real-time",
      image: aiDetectionImg,
      hoverTextWhite: true,
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure and encrypted cloud storage with instant access to footage from anywhere",
      image: cloudStorageImg,
      hoverTextWhite: true,
    },
    {
      icon: Hammer,
      title: "Ruggedised",
      description: "Designed and built rugged with quality components for harsh Australian conditions",
      image: ruggedisedImg,
      hoverTextWhite: true,
    },
    {
      icon: Eye,
      title: "4K Resolution",
      description: "Crystal clear 4K video captures every detail, day or night with colour night vision",
      image: resolution4kImg,
      hoverTextWhite: true,
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Real-time notifications sent directly to your mobile device",
      image: instantAlertsImg,
    },
    {
      icon: Volume2,
      title: "2-Way Audio",
      description: "Communicate directly through cameras with built-in speakers and microphones",
      image: twoWayAudioImg,
    },
    {
      icon: Headphones,
      title: "24/7 Back to Base Monitoring",
      description: "Professional monitoring centre watches over your property around the clock",
      image: monitoringImg,
      hoverTextWhite: true,
    },
    {
      icon: Signal,
      title: "4G Connectivity",
      description: "Reliable 4G cellular connection ensures coverage in remote locations",
      image: connectivity4gImg,
      hoverTextWhite: true,
    },
  ];

  const pricingTiers = [
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for businesses",
      features: [
        "4 Solar CCTV Cameras",
        "4K Ultra HD Resolution",
        "30 Days Cloud Storage",
        "Advanced AI Analytics",
        "Priority Support",
        "Custom Alerts",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/solar-camera-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-98"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#182863]/40 via-[#182863]/50 to-[#182863]/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#C800FF]/10 via-transparent to-[#B100FF]/10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <img 
                src="/linkvision-logo.png" 
                alt="LinkVision - AI Surveillance" 
                className="w-full max-w-xl h-auto px-4 drop-shadow-2xl"
              />
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Intelligent Security
              <br />
              <span className="bg-gradient-to-r from-[#C800FF] to-[#B100FF] bg-clip-text text-transparent">
                Powered by the Sun
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rapid Deployment AI-Ready Solar Surveillance & Security Systems built for Central Queensland.
              Protect what matters most with cutting-edge technology.
            </p>
            
            <div className="flex justify-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30 text-lg px-8 py-6"
                  data-testid="button-hero-cta"
                >
                  HIRE NOW
                </Button>
              </Link>
            </div>

         
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Advanced Features as Standard
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience next-generation surveillance with our AI-powered solar CCTV systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-[#1a2f6f]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] transition-colors duration-300"
                data-testid={`card-feature-${index}`}
              >
                <div 
                  className="absolute inset-0 opacity-30 group-hover:opacity-70 transition-opacity duration-300 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <div className="relative z-10">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className={`text-white font-bold font-display text-2xl transition-all duration-300 ${feature.hoverTextWhite ? 'group-hover:text-white' : 'group-hover:text-[#B100FF]'}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`text-white/80 font-bold text-base transition-all duration-300 ${feature.hoverTextWhite ? 'group-hover:text-white' : 'group-hover:text-[#B100FF]'}`}>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Why Choose LinkVision
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the perfect plan for your security needs
            </p>
          </div>

          <div className="flex justify-center max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f] border-2 border-[#C800FF] shadow-xl shadow-[#C800FF]/20 w-full max-w-xl"
                data-testid={`card-pricing-${tier.name.toLowerCase()}`}
              >
                <CardHeader>
                  <CardTitle className="text-white font-display text-2xl">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {tier.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-display font-bold text-white">
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="text-white/60 ml-2">AUD</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                      data-testid={`button-pricing-${tier.name.toLowerCase()}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-white/80">
                Ready to secure your property? Contact us today for a free consultation
              </p>
            </div>

            <Card className="bg-[#182863] border-2 border-[#C800FF]/30">
              <CardContent className="pt-6">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        {...form.register("name")}
                        placeholder="Your name"
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-contact-name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-red-400">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        placeholder="your@email.com"
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-contact-email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-400">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        {...form.register("phone")}
                        placeholder="+61 123 456 789"
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-contact-phone"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-red-400">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        {...form.register("company")}
                        placeholder="Your company"
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-contact-company"
                      />
                      {form.formState.errors.company && (
                        <p className="text-sm text-red-400">{form.formState.errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      placeholder="Tell us about your security needs..."
                      rows={4}
                      className="bg-white text-[#182863] border-white/20"
                      data-testid="input-contact-message"
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-400">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                    data-testid="button-contact-submit"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
