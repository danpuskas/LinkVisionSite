import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Target, Globe, Heart, User } from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We never compromise on the safety and security of our customers",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Constantly pushing boundaries with AI and solar technology",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our success. We're here for you 24/7",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Battle-tested systems for proven and consistent reliability",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Solar-powered solutions for a greener future",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent, and always doing what's right",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Founded",
      description: "LinkVision was born from a vision to make security accessible and sustainable",
    },
    {
      year: "2019",
      title: "First Solar CCTV",
      description: "Launched Australia's first fully solar-powered AI surveillance camera",
    },
    {
      year: "2021",
      title: "1,000 Installations",
      description: "Reached milestone of 1,000 installations across Australia",
    },
    {
      year: "2023",
      title: "AI Revolution",
      description: "Introduced advanced AI analytics and facial recognition",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Became Australia's #1 solar surveillance provider",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding to New Zealand and Southeast Asia",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former security consultant with 15 years of industry experience",
    },
    {
      name: "Michael O'Brien",
      role: "CTO",
      bio: "AI researcher and solar energy expert",
    },
    {
      name: "Jessica Martinez",
      role: "Head of Sales",
      bio: "Passionate about helping customers find the perfect solution",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Leading our product development and innovation efforts",
    },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="py-20 bg-gradient-to-b from-[#1a2f6f] to-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              About LinkVision
            </h1>
            <p className="text-xl text-white/80">
              LinkVision was developed to give commercial construction teams a simpler way to protect high-value sites—reducing complexity, improving real-time visibility, and delivering scalable security that moves as the project moves.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Founded in 2018, LinkVision emerged from a simple observation: traditional security systems were expensive, energy-intensive, and difficult to install in remote locations. We believed there had to be a better way.
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    By combining cutting-edge solar technology with advanced AI algorithms, we created Australia's first truly sustainable and intelligent surveillance platform. Today, we protect over 10,000 properties across the country, from family homes in suburban Melbourne to mining operations in the Outback.
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Our team of engineers, security experts, and AI researchers work tirelessly to push the boundaries of what's possible in surveillance technology—always with an eye toward sustainability, affordability, and exceptional customer service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-white/80">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300"
                data-testid={`card-value-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-linkvision flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-display text-xl font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/80">{value.description}</p>
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
              Our Journey
            </h2>
            <p className="text-xl text-white/80">
              From startup to industry leader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start"
                  data-testid={`timeline-${index}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-lg bg-gradient-linkvision flex items-center justify-center">
                      <span className="text-white font-display font-bold text-xl">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <Card className="flex-1 bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-white font-display text-2xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-white/80">
              Meet the people driving innovation at LinkVision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-[#1a2f6f]/50 backdrop-blur-sm border-2 border-[#C800FF]/30 hover:border-[#C800FF] hover:shadow-[0_0_30px_rgba(200,0,255,0.5)] transition-all duration-300 text-center"
                data-testid={`card-team-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-linkvision flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-display text-xl font-semibold mb-1">
                    {member.name}
                  </h3>
                  <div className="text-[#C800FF] font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-white/80 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a2f6f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for security and sustainability
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
              data-testid="button-careers"
            >
              Explore Careers
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
