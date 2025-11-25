import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Camera, Cloud, Shield, Wifi, Battery, CheckCircle2 } from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "OneVision",
      category: "The new benchmark in standard in AI Surveillance",
      features: [
        "4K Ultra HD Resolution",
        "Colour Night Vision",
        "AI-Powered Detection",
        "One Year Cloud Storage ",
        "24/7 back to base monitoring",
        "4G Connectivity",
        "100% Solar Powered",
        "Long Lasting Lithium Battery",
        "Built-in timelapse",
      ],
      specs: {
        resolution: "4K (3840×2160)",
        power: "Solar + Battery Backup",
        storage: "Cloud Backup for one year",
        connectivity: "4G LTE / WiFi",
      },
    },
    {
      name: "UltraWide Vision",
      category: "Affordable Solar CCTV",
      features: [
        "1080p Full HD Resolution",
        "60W Solar Panel",
        "Motion Detection",
        "Night Vision up to 20m",
        "Weatherproof IP65 Rating",
        "Remote Mobile App Access",
        "1-Year Warranty",
      ],
      specs: {
        resolution: "1080p (1920×1080)",
        power: "Solar + Battery Backup",
        storage: "Cloud + Local SD Card",
        connectivity: "WiFi",
      },
    },
    {
      name: "Free Vision",
      category: "Premium",
      features: [
        "Advanced AI Object Detection",
        "Facial Recognition",
        "License Plate Recognition",
        "Behavioral Analytics",
        "Real-time Alerts",
        "Custom Alert Zones",
      ],
      specs: {
        deployment: "Cloud-based",
        integration: "All LinkVision Cameras",
        alerts: "Email, SMS, Push",
        storage: "Unlimited Cloud Storage",
      },
    },
    {
      name: "Enterprise Command Center",
      category: "Complete Solution",
      features: [
        "Unlimited Camera Support",
        "Centralized Management",
        "Multi-site Monitoring",
        "Advanced Reporting",
        "Dedicated Support Team",
        "Custom Integration",
      ],
      specs: {
        deployment: "On-premise or Cloud",
        support: "24/7 Dedicated Team",
        training: "Included",
        customization: "Full API Access",
      },
    },
  ];

  const accessories = [
    { icon: Battery, name: "Extended Battery Pack" },
    { icon: Sun, name: "120W Solar Panel Upgrade" },
    { icon: Wifi, name: "4G LTE Module" },
    { icon: Shield, name: "Vandal-proof Housing" },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/solutions-camera-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-98"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#182863]/40 via-[#182863]/50 to-[#182863]/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#C800FF]/10 via-transparent to-[#B100FF]/10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 drop-shadow-2xl">
              Solutions
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Cutting-edge solar-powered surveillance solutions designed for Australian conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto auto-rows-fr">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover-elevate flex flex-col h-full"
                data-testid={`card-product-${index}`}
              >
                <CardHeader>
                  <div className="text-sm text-[#C800FF] font-semibold mb-2">
                    {product.category}
                  </div>
                  <CardTitle className="text-white font-display text-3xl">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/10">
                    <Link href="/contact">
                      <Button
                        className="w-full bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                        data-testid={`button-product-${index}`}
                      >
                        Request Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Accessories & Add-ons
            </h2>
            <p className="text-xl text-white/80">
              Enhance your system with our premium accessories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {accessories.map((accessory, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f] border-2 border-white/10 hover-elevate text-center"
                data-testid={`card-accessory-${index}`}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-linkvision flex items-center justify-center mx-auto mb-4">
                    <accessory.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">
                    {accessory.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-white/20 bg-white/5 text-white"
                      data-testid={`button-accessory-${index}`}
                    >
                      Add to Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your security needs
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
              data-testid="button-contact-expert"
            >
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
