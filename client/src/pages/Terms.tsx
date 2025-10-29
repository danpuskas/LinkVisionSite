import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using LinkVision's website, products, and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
        "We reserve the right to modify these terms at any time. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.",
      ],
    },
    {
      title: "Services Description",
      content: [
        "LinkVision provides solar-powered CCTV and surveillance systems, including hardware, software, cloud storage, AI analytics, installation services, and ongoing support. Our services are designed for commercial and residential security applications across Australia.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We will not be liable if we exercise these rights.",
      ],
    },
    {
      title: "Orders and Pricing",
      content: [
        "All prices are listed in Australian Dollars (AUD) and are subject to change without notice. Prices do not include applicable taxes unless otherwise stated.",
        "When you place an order, you are making an offer to purchase our products and services. We reserve the right to accept or decline your order for any reason. If we decline your order after payment has been made, we will issue a full refund.",
        "Quotes provided are valid for 30 days unless otherwise specified. Final pricing may vary based on site assessment and specific requirements.",
      ],
    },
    {
      title: "Installation and Service",
      content: [
        "Professional installation is included with all camera system purchases. Installation will be scheduled after site assessment and customer approval of the installation plan.",
        "You are responsible for ensuring safe access to installation locations and for obtaining any necessary permits or approvals from building owners, landlords, or relevant authorities.",
        "Installation times are estimates and may vary based on site conditions, weather, and other factors beyond our control.",
      ],
    },
    {
      title: "Warranties and Guarantees",
      content: [
        "Hardware products come with a 2-year manufacturer's warranty covering defects in materials and workmanship. This warranty does not cover damage from misuse, accidents, natural disasters, or unauthorized modifications.",
        "We guarantee 99.9% system uptime for our cloud services on an annual basis. Service credits may be available if we fail to meet this commitment, as detailed in our Service Level Agreement.",
        "Warranties are non-transferable and apply only to the original purchaser. To claim warranty service, you must provide proof of purchase and comply with our warranty procedures.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the maximum extent permitted by law, LinkVision shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
        "Our total liability for any claims arising from or related to our services shall not exceed the amount you paid to us for the services in the 12 months preceding the claim.",
        "We are not responsible for losses resulting from system failures, internet outages, power failures, unauthorized access by third parties, or events beyond our reasonable control.",
      ],
    },
    {
      title: "User Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
        "You agree to use our services in compliance with all applicable laws and regulations, including privacy laws, surveillance regulations, and data protection requirements.",
        "You must not use our services for any illegal or unauthorized purpose, including but not limited to invasion of privacy, harassment, or violation of others' rights.",
      ],
    },
    {
      title: "Data and Privacy",
      content: [
        "You retain ownership of all video footage and data captured by your surveillance system. LinkVision does not claim ownership of your content.",
        "You are responsible for complying with all applicable privacy laws and regulations in your use of the surveillance system, including providing appropriate notice to individuals who may be recorded.",
        "We may access your system data for the purposes of providing support, maintenance, and improving our services, as detailed in our Privacy Policy.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content, trademarks, logos, and intellectual property associated with LinkVision's services remain our exclusive property. You may not use our intellectual property without our prior written consent.",
        "You grant us a non-exclusive license to use feedback, suggestions, or ideas you provide to us for the purpose of improving our products and services.",
      ],
    },
    {
      title: "Termination",
      content: [
        "We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service.",
        "Upon termination, your right to use our services will immediately cease. You will remain liable for all charges incurred prior to termination.",
        "You may cancel your subscription services at any time by providing 30 days written notice. Refunds for prepaid services will be provided on a pro-rata basis for the unused portion.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These Terms of Service shall be governed by and construed in accordance with the laws of Victoria, Australia, without regard to its conflict of law provisions.",
        "Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Victoria, Australia.",
      ],
    },
    {
      title: "Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: legal@linkvision.au",
        "Phone: +61 3 9000 0000",
        "Address: Level 10, 123 Collins Street, Melbourne VIC 3000",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="py-20 bg-gradient-to-b from-[#1a2f6f] to-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-white/80">
                Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <Card className="bg-[#1a2f6f] border-2 border-[#C800FF]/30 mb-8">
              <CardContent className="p-8">
                <p className="text-white/90 text-lg leading-relaxed">
                  Please read these Terms of Service carefully before using LinkVision's website, products, or services. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <Card
                  key={index}
                  className="bg-[#1a2f6f] border-2 border-white/10"
                  data-testid={`terms-section-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white font-display text-2xl">
                      {index + 1}. {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-white/90 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
