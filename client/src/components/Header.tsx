import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/industry", label: "Industry" },
    { path: "/solutions", label: "Solutions" },
    { path: "/pricing", label: "Pricing" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#182863] border-b border-[#C800FF]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer">
              <img
                src="/linkvision-logo.png"
                alt="LinkVision - AI Surveillance"
                className="h-[50px] md:h-[59px] w-auto"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Button
                  variant="ghost"
                  className={`text-white hover:text-white hover:bg-gradient-linkvision transition-all duration-300 ${
                    location === item.path ? "bg-[#C800FF]/20" : ""
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://cctvconnect.com/sign-in" target="_blank" rel="noopener noreferrer" data-testid="link-login">
              <Button className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30">
                Login
              </Button>
            </a>
            <Link href="/contact" data-testid="link-cta-contact">
              <Button className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#C800FF]/20">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-white hover:text-white hover:bg-gradient-linkvision transition-all duration-300 ${
                      location === item.path ? "bg-[#C800FF]/20" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <a href="https://cctvconnect.com/sign-in" target="_blank" rel="noopener noreferrer" data-testid="link-mobile-login">
                <Button
                  className="w-full bg-gradient-linkvision text-white border-0 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Button>
              </a>
              <Link href="/contact" data-testid="link-mobile-cta">
                <Button
                  className="w-full bg-gradient-linkvision text-white border-0 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
