import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Camera, Cloud, Shield, Wifi, Battery, CheckCircle2 } from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "OneVision",
      category: "The New Standard for AI Surveillance",
      features: [
        "4K Ultra HD Resolution",
        "Wide Angle Lens",
        "Colour Night Vision",
        "AI-Powered Detection",
        "One Year Cloud Storage ",
        "Loud Siren Alarm and Strobe Light", 
        "24/7 back to base monitoring",
        "4G Connectivity",
        "100% Solar Powered",
        "Long Lasting Lithium Battery",
        "Built-in timelapse",
        "2 Way Audio",
      ],
    },
    {
      name: "WideVision",
      category: "Capture More",
      features: [
          "4K Ultra HD Resolution",
          "Dual Lenses providing a 180 Degree Panoramic View",
          "Colour Night Vision",
          "AI-Powered Detection",
          "One Year Cloud Storage ",
          "24/7 back to base monitoring",
          "4G Connectivity",
          "100% Solar Powered",
          "Long Lasting Lithium Battery",
          "Built-in timelapse",
          "2 Way Audio"
      ],
    },
    {
      name: "FreeVision",
      category: "Move and Zoom In on Whats Important",
      features: [
        "Advanced AI Object Detection",
        "PTZ (Pan-Tilt-Zoom) Capability",
        "Facial Recognition",
        "License Plate Recognition",
        "PPE Detection",
        "Behavioral Analytics",
        "Real-time Alerts",
        "Custom Alert Zones",
        "2 Way Audio",
      ],
    },
    {
      name: "Solar Powered or Locally Powered",
      category: "Custom Solutions",
      features: [
        "Unlimited Camera Support",
        "Centralized Management",
        "Ulimited Users",
        "Multi-site Monitoring",
        "Audit Logs",
        "License Plate Recognition",
        "People Counting",
        "PPE Analytics",
      ],
    },
  ];

  const accessories = [
    { icon: Battery, name: "License Plate Recognition" },
    { icon: Sun, name: "People Counting" },
    { icon: Wifi, name: "PPE Analytics" },
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
              Industry Solutions
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Cutting-edge solar-powered surveillance solutions designed for Australian conditions
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="flex gap-8">
                <Card
                  className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:bg-[#1a2f6f]/85 hover-elevate flex flex-col h-full flex-1 transition-colors duration-300"
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
                    <div className="flex gap-4 items-start">
                      <div className="flex-1">
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

                <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover-elevate flex-1 flex items-center justify-center transition-colors duration-300 relative overflow-hidden">
                  <img 
                    src="/camera-tower-cropped.jpg" 
                    alt={`${product.name} Camera Tower`} 
                    className="h-full w-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-white font-display text-3xl font-bold drop-shadow-lg">{product.name}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Analytics Add-ons
            </h2>
            <p className="text-xl text-white/80">
              Enhance your system with our premium Analytics Add-ons
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {accessories.map((accessory, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f]/50 border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:bg-[#1a2f6f]/85 hover-elevate text-center transition-colors duration-300 w-64"
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
