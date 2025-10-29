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
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
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
        description: "We'll get back to you within 24 hours.",
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@linkvision.au",
      link: "mailto:info@linkvision.au",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+61 3 9000 0000",
      link: "tel:+61390000000",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Level 10, 123 Collins Street\nMelbourne VIC 3000",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#182863]">
      <section className="py-20 bg-gradient-to-b from-[#1a2f6f] to-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80">
              Ready to secure your property? Our team is here to help you find the perfect solution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="bg-[#1a2f6f] border-2 border-[#C800FF]/30">
                <CardHeader>
                  <CardTitle className="text-white font-display text-2xl">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-white/70 text-base">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-white">
                        Name *
                      </Label>
                      <Input
                        id="contact-name"
                        {...form.register("name")}
                        placeholder="Your name"
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-red-400">{form.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        {...form.register("email")}
                        placeholder="your@email.com"
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-400">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone" className="text-white">
                        Phone
                      </Label>
                      <Input
                        id="contact-phone"
                        {...form.register("phone")}
                        placeholder="+61 123 456 789"
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-phone"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-company" className="text-white">
                        Company
                      </Label>
                      <Input
                        id="contact-company"
                        {...form.register("company")}
                        placeholder="Your company"
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="contact-message"
                        {...form.register("message")}
                        placeholder="Tell us about your security needs..."
                        rows={6}
                        className="bg-white text-[#182863] border-white/20"
                        data-testid="input-message"
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-red-400">{form.formState.errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#1a2f6f] border-2 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white font-display text-2xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4" data-testid={`contact-info-${index}`}>
                      <div className="w-12 h-12 rounded-lg bg-gradient-linkvision flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white font-medium hover:text-[#C800FF] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium whitespace-pre-line">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f6f] border-2 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white font-display text-2xl">
                    Why Choose LinkVision?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex gap-2">
                      <span className="text-[#C800FF]">✓</span>
                      Free consultation and site assessment
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C800FF]">✓</span>
                      Professional installation included
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C800FF]">✓</span>
                      2-year warranty on all equipment
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C800FF]">✓</span>
                      24/7 customer support
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C800FF]">✓</span>
                      Flexible financing options
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#182863]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display font-bold text-4xl text-white mb-6">
              Prefer to Talk?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Call us now for immediate assistance
            </p>
            <a href="tel:+61390000000">
              <Button
                size="lg"
                className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30"
                data-testid="button-call"
              >
                <Phone className="w-5 h-5 mr-2" />
                +61 3 9000 0000
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
