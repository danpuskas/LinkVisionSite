import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Camera, Cloud, Shield, Wifi, Battery, CheckCircle2 } from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "SolarCam Pro 4K",
      category: "Premium Solar CCTV",
      price: "$1,499",
      image: "🌞",
      features: [
        "4K Ultra HD Resolution",
        "100W Solar Panel",
        "AI-Powered Detection",
        "Night Vision up to 30m",
        "Weatherproof IP67 Rating",
        "2-Year Warranty",
      ],
      specs: {
        resolution: "4K (3840×2160)",
        power: "Solar + Battery Backup",
        storage: "Cloud + Local SD Card",
        connectivity: "4G LTE / WiFi",
      },
    },
    {
      name: "SolarCam Standard",
      category: "Affordable Solar CCTV",
      price: "$899",
      image: "📹",
      features: [
        "1080p Full HD Resolution",
        "60W Solar Panel",
        "Motion Detection",
        "Night Vision up to 20m",
        "Weatherproof IP65 Rating",
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
      name: "AI Analytics Suite",
      category: "Software & Services",
      price: "$299/mo",
      image: "🤖",
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
      price: "Custom",
      image: "🏢",
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
    { icon: Battery, name: "Extended Battery Pack", price: "$299" },
    { icon: Sun, name: "120W Solar Panel Upgrade", price: "$199" },
    { icon: Wifi, name: "4G LTE Module", price: "$149" },
    { icon: Shield, name: "Vandal-proof Housing", price: "$99" },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="py-20 bg-gradient-to-b from-[#1a2f6f] to-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-white/80">
              Cutting-edge solar-powered surveillance solutions designed for Australian conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f] border-2 border-[#C800FF]/30 hover-elevate"
                data-testid={`card-product-${index}`}
              >
                <CardHeader>
                  <div className="text-6xl mb-4">{product.image}</div>
                  <div className="text-sm text-[#C800FF] font-semibold mb-2">
                    {product.category}
                  </div>
                  <CardTitle className="text-white font-display text-3xl">
                    {product.name}
                  </CardTitle>
                  <div className="text-4xl font-display font-bold text-white mt-2">
                    {product.price}
                    {product.price !== "Custom" && product.price.includes("/") === false && (
                      <span className="text-lg text-white/60 ml-2">AUD</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
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

                  <div>
                    <h4 className="text-white font-semibold mb-3">Specifications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <div className="text-white/60 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="text-white font-medium">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button
                      className="w-full bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                      data-testid={`button-product-${index}`}
                    >
                      Request Quote
                    </Button>
                  </Link>
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
                  <div className="text-2xl font-display font-bold text-white mt-2">
                    {accessory.price}
                  </div>
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
