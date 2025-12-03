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
    },
    {
      icon: Brain,
      title: "AI Detection",
      description: "Advanced AI algorithms detect threats and unusual activity in real-time",
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure and encrypted cloud storage with instant access to footage from anywhere",
    },
    {
      icon: Hammer,
      title: "Ruggedised",
      description: "Designed and built rugged with quality components for harsh Australian conditions",
    },
    {
      icon: Eye,
      title: "4K Resolution",
      description: "Crystal clear 4K video captures every detail, day or night with colour night vision",
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Real-time notifications sent directly to your mobile device",
    },
    {
      icon: Volume2,
      title: "2-Way Audio",
      description: "Communicate directly through cameras with built-in speakers and microphones",
    },
    {
      icon: Headphones,
      title: "24/7 Back to Base Monitoring",
      description: "Professional monitoring centre watches over your property around the clock",
    },
    {
      icon: Signal,
      title: "4G Connectivity",
      description: "Reliable 4G cellular connection ensures coverage in remote locations",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,499",
      description: "Perfect for small properties",
      features: [
        "2 Solar CCTV Cameras",
        "720p HD Resolution",
        "7 Days Cloud Storage",
        "Basic AI Detection",
        "Mobile App Access",
      ],
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for businesses",
      popular: true,
      features: [
        "4 Solar CCTV Cameras",
        "4K Ultra HD Resolution",
        "30 Days Cloud Storage",
        "Advanced AI Analytics",
        "Priority Support",
        "Custom Alerts",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large installations",
      features: [
        "Unlimited Cameras",
        "4K Ultra HD Resolution",
        "90 Days Cloud Storage",
        "Full AI Suite",
        "Dedicated Support",
        "Custom Integration",
        "On-site Installation",
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
              AI-ready solar CCTV and surveillance systems built for Australia.
              Protect what matters most with cutting-edge technology.
            </p>
            
            <div className="flex justify-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30 text-lg px-8 py-6"
                  data-testid="button-hero-cta"
                >
                  Get Started Today
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
              Advanced Features
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience next-generation surveillance with our AI-powered solar CCTV systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:bg-[#182863]/90 hover-elevate transition-colors duration-300"
                data-testid={`card-feature-${index}`}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white font-display text-2xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the perfect plan for your security needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.popular
                    ? "bg-[#1a2f6f] border-2 border-[#C800FF] shadow-xl shadow-[#C800FF]/20"
                    : "bg-[#182863] border-2 border-white/10"
                }`}
                data-testid={`card-pricing-${tier.name.toLowerCase()}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-linkvision text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
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
                      className={`w-full ${
                        tier.popular
                          ? "bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
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
