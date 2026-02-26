import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Target, Globe, Heart } from "lucide-react";
import SEO from "@/components/SEO";

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

  return (
    <>
      <SEO title="About LinkVision" description="LinkVision is an Australian company delivering solar-powered AI surveillance solutions to construction, mining, agriculture, and logistics industries. Learn about our mission." canonical="/about" />
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
                <div className="prose prose-invert max-w-none space-y-8">
                  <p className="text-white/90 text-lg leading-relaxed">
                    LinkVision was developed to solve a recurring problem seen across construction and remote sites: security solutions were either too slow to deploy, too fragmented (multiple vendors and platforms), or too expensive to run at scale once guard hours and ongoing site changes were factored in.
                  </p>

                  <div>
                    <h3 className="text-white font-display text-xl font-semibold mb-3">Why LinkVision exists</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      LinkVision was built to give builders and project teams a practical alternative to the "layered" model of separate cameras, separate monitoring, and separate response—especially on sites where the layout, access points, and risk areas change weekly.
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed mt-3">
                      The core idea was to make site security deployable in hours (not weeks), and movable as the job progresses, without needing a redesign every time the project shifts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-display text-xl font-semibold mb-3">The problem it targets</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Traditional site security often creates gaps because systems aren't integrated: footage is in one place, alerts in another, and accountability spread across different providers.
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed mt-3">
                      LinkVision was developed to reduce those gaps by centralising visibility (what happened), detection (what matters), and action (what to do next) into one operating workflow.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-display text-xl font-semibold mb-3">The design philosophy</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-4">
                      LinkVision was designed around three principles:
                    </p>
                    <ul className="space-y-3 text-white/90 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-[#C800FF] font-bold">1.</span>
                        <span>Rapid deployment and relocation as the site footprint evolves.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#C800FF] font-bold">2.</span>
                        <span>Remote visibility for project managers who can't be everywhere at once.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#C800FF] font-bold">3.</span>
                        <span>Smarter detection to reduce noise and improve response speed compared with "record-only" setups.</span>
                      </li>
                    </ul>
                  </div>
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
    </>
  );
}
