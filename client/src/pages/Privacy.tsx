import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "When you use our services or contact us, we may collect personal information including your name, email address, phone number, company name, and property address. We collect this information when you fill out forms on our website, request a quote, or communicate with our team.",
        "We also collect technical information about your use of our website, including IP address, browser type, device information, and pages visited. This helps us improve our services and website performance.",
        "For customers using our surveillance systems, we may collect camera footage, system performance data, and alert logs as part of our service delivery.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use your personal information to provide our services, including quoting, installation, maintenance, and support of solar CCTV systems. Your information helps us respond to your inquiries, process orders, and deliver the products and services you request.",
        "We may use your information to send you important updates about our products, services, and security notifications. With your consent, we may also send marketing communications about new products and special offers.",
        "Technical data helps us analyze website usage, improve our services, detect and prevent fraud, and ensure the security of our systems.",
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as installation contractors, cloud service providers, and payment processors. These parties are contractually obligated to protect your information.",
        "We may disclose your information if required by law, court order, or government regulation, or if necessary to protect our rights, property, or safety, or that of our customers or the public.",
        "In the event of a business transfer, such as a merger or acquisition, your information may be transferred to the new entity, subject to the same privacy protections.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encryption of data in transit and at rest, secure data centers, and regular security audits.",
        "Camera footage from our surveillance systems is encrypted and stored securely in Australian data centers. Access to footage is restricted to authorized personnel and customers only.",
        "While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining the highest standards.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Under the Australian Privacy Act 1988, you have the right to access your personal information held by us. You may request a copy of your data at any time by contacting us.",
        "You have the right to correct any inaccurate or incomplete personal information. If you believe any information we hold about you is incorrect, please contact us to have it updated.",
        "You may request deletion of your personal information, subject to certain legal obligations that may require us to retain some information. You can also opt out of marketing communications at any time.",
      ],
    },
    {
      title: "Cookies and Tracking",
      content: [
        "Our website uses cookies to enhance your browsing experience, analyze website traffic, and personalize content. Cookies are small text files stored on your device that help us remember your preferences.",
        "You can control cookie settings through your browser. However, disabling cookies may limit your ability to use certain features of our website.",
        "We use analytics tools like Google Analytics to understand how visitors use our site. This information is anonymized and helps us improve our services.",
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will delete it.",
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or sending you an email.",
        "The latest version of this policy will always be available on our website with the effective date clearly indicated.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions about this privacy policy or how we handle your personal information, please contact us at:",
        "Email: privacy@linkvision.au",
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
                Privacy Policy
              </h1>
              <p className="text-xl text-white/80">
                Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <Card className="bg-[#1a2f6f] border-2 border-[#C800FF]/30 mb-8">
              <CardContent className="p-8">
                <p className="text-white/90 text-lg leading-relaxed">
                  At LinkVision, we are committed to protecting your privacy and handling your personal information with care and respect. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, products, and services.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <Card
                  key={index}
                  className="bg-[#1a2f6f] border-2 border-white/10"
                  data-testid={`privacy-section-${index}`}
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
