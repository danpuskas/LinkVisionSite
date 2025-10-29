import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, HelpCircle } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$2,499",
      period: "one-time",
      description: "Perfect for residential properties and small businesses",
      features: [
        "2 Solar CCTV Cameras",
        "720p HD Resolution",
        "7 Days Cloud Storage",
        "Basic AI Detection",
        "Mobile App Access",
        "Email Support",
        "Standard Installation",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "one-time",
      description: "Ideal for medium businesses and multi-property owners",
      popular: true,
      features: [
        "4 Solar CCTV Cameras",
        "4K Ultra HD Resolution",
        "30 Days Cloud Storage",
        "Advanced AI Analytics",
        "Mobile App Access",
        "Priority Email & Phone Support",
        "Professional Installation",
        "Custom Alert Zones",
        "Quarterly Maintenance",
      ],
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex security requirements",
      features: [
        "Unlimited Cameras",
        "4K Ultra HD Resolution",
        "90+ Days Cloud Storage",
        "Full AI Suite",
        "Mobile & Desktop Apps",
        "24/7 Dedicated Support",
        "White-glove Installation",
        "Custom Integration & API",
        "Monthly Maintenance",
        "Training & Onboarding",
        "SLA Guarantee",
      ],
      cta: "Contact Sales",
    },
  ];

  const addOns = [
    {
      name: "Extended Cloud Storage",
      description: "Increase your cloud storage retention period",
      options: [
        { duration: "60 Days", price: "$99/mo" },
        { duration: "180 Days", price: "$249/mo" },
        { duration: "365 Days", price: "$499/mo" },
      ],
    },
    {
      name: "AI Analytics Pro",
      description: "Advanced AI features including facial recognition and behavioral analysis",
      price: "$299/mo per site",
    },
    {
      name: "Additional Cameras",
      description: "Expand your system with more cameras",
      options: [
        { type: "1080p Camera", price: "$899 each" },
        { type: "4K Camera", price: "$1,499 each" },
      ],
    },
    {
      name: "Extended Warranty",
      description: "Extend your warranty coverage beyond the standard period",
      options: [
        { duration: "+1 Year", price: "$199" },
        { duration: "+3 Years", price: "$499" },
      ],
    },
  ];

  const faqs = [
    {
      question: "Is installation included?",
      answer: "Yes, professional installation is included with all packages. Our certified technicians will handle everything from site assessment to final configuration.",
    },
    {
      question: "What happens if there's no sun for several days?",
      answer: "Our solar systems include high-capacity battery backup that can power your cameras for up to 7 days without sunlight, ensuring continuous operation.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your plan at any time. Additional cameras and features can be added to your existing system seamlessly.",
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer flexible financing plans through our partners. Contact our sales team to discuss options that work for your budget.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="py-20 bg-gradient-to-b from-[#1a2f6f] to-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/80">
              Choose the perfect plan for your security needs. All plans include professional installation and lifetime support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "bg-[#1a2f6f] border-2 border-[#C800FF] shadow-xl shadow-[#C800FF]/20 scale-105"
                    : "bg-[#182863] border-2 border-white/10"
                }`}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-linkvision text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="pb-8">
                  <CardTitle className="text-white font-display text-2xl">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-white/70 text-base mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-display font-bold text-white">
                      {plan.price}
                    </span>
                    <div className="text-white/60 mt-1">{plan.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
                      data-testid={`button-plan-${plan.name.toLowerCase()}`}
                    >
                      {plan.cta}
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
              Add-ons & Extras
            </h2>
            <p className="text-xl text-white/80">
              Customize your package with additional features and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {addOns.map((addOn, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f] border-2 border-white/10"
                data-testid={`card-addon-${index}`}
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl">{addOn.name}</CardTitle>
                  <CardDescription className="text-white/70">
                    {addOn.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {addOn.options ? (
                    <div className="space-y-2">
                      {addOn.options.map((option, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-md"
                        >
                          <span className="text-white">
                            {option.duration || option.type}
                          </span>
                          <span className="text-[#C800FF] font-semibold">
                            {option.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-2xl font-display font-bold text-white">
                      {addOn.price}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-[#182863] border-2 border-white/10"
                data-testid={`card-faq-${index}`}
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C800FF] flex-shrink-0 mt-1" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 ml-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/80 mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button
                className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                data-testid="button-contact-pricing"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
