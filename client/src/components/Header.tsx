import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const solutionItems = [
    { path: "/solutions/onevision", label: "OneVision" },
    { path: "/solutions/widevision", label: "WideVision" },
    { path: "/solutions/freevision", label: "FreeVision" },
    { path: "/solutions/custom", label: "Custom Solutions" },
  ];

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/industry", label: "Industry" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/solutions", label: "Solutions", hasDropdown: true },
    { path: "/timelapse", label: "Timelapse" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#182863] border-b border-[#C800FF]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home" onClick={scrollToTop}>
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
              item.hasDropdown ? (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    href={item.path}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={scrollToTop}
                  >
                    <Button
                      variant="ghost"
                      className={`text-white hover:text-white hover:bg-gradient-linkvision transition-all duration-300 flex items-center gap-1 ${
                        location.startsWith("/solutions") ? "bg-[#C800FF]/20" : ""
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
                    </Button>
                  </Link>
                  
                  {solutionsOpen && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="bg-[#182863] border-2 border-[#C800FF]/30 rounded-lg shadow-[0_0_30px_rgba(200,0,255,0.3)] overflow-hidden">
                        {solutionItems.map((solution) => (
                          <Link
                            key={solution.path}
                            href={solution.path}
                            data-testid={`link-dropdown-${solution.label.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={scrollToTop}
                          >
                            <div className={`px-4 py-3 text-white hover:bg-gradient-linkvision hover:text-white transition-all duration-300 cursor-pointer border-b border-[#C800FF]/10 last:border-b-0 ${
                              location === solution.path ? "bg-[#C800FF]/20" : ""
                            }`}>
                              {solution.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={scrollToTop}
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
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://cctvconnect.com/sign-in" target="_blank" rel="noopener noreferrer" data-testid="link-login">
              <Button className="bg-gradient-linkvision text-white border-0 shadow-lg shadow-[#C800FF]/30">
                Login
              </Button>
            </a>
            <Link href="/contact" data-testid="link-cta-contact" onClick={scrollToTop}>
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
                item.hasDropdown ? (
                  <div key={item.path}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-between text-white hover:text-white hover:bg-gradient-linkvision transition-all duration-300 ${
                        location.startsWith("/solutions") ? "bg-[#C800FF]/20" : ""
                      }`}
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      data-testid="button-mobile-solutions-toggle"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                    </Button>
                    
                    {mobileSolutionsOpen && (
                      <div className="ml-4 mt-2 border-l-2 border-[#C800FF]/30 pl-4 space-y-1">
                        <Link
                          href="/solutions"
                          data-testid="link-mobile-solutions-all"
                          onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
                        >
                          <Button
                            variant="ghost"
                            className={`w-full justify-start text-white/80 hover:text-white hover:bg-gradient-linkvision transition-all duration-300 text-sm ${
                              location === "/solutions" ? "bg-[#C800FF]/20" : ""
                            }`}
                          >
                            All Solutions
                          </Button>
                        </Link>
                        {solutionItems.map((solution) => (
                          <Link
                            key={solution.path}
                            href={solution.path}
                            data-testid={`link-mobile-${solution.label.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
                          >
                            <Button
                              variant="ghost"
                              className={`w-full justify-start text-white/80 hover:text-white hover:bg-gradient-linkvision transition-all duration-300 text-sm ${
                                location === solution.path ? "bg-[#C800FF]/20" : ""
                              }`}
                            >
                              {solution.label}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    href={item.path}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-white hover:text-white hover:bg-gradient-linkvision transition-all duration-300 ${
                        location === item.path ? "bg-[#C800FF]/20" : ""
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )
              ))}
              <a href="https://cctvconnect.com/sign-in" target="_blank" rel="noopener noreferrer" data-testid="link-mobile-login">
                <Button
                  className="w-full bg-gradient-linkvision text-white border-0 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Button>
              </a>
              <Link href="/contact" data-testid="link-mobile-cta" onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}>
                <Button
                  className="w-full bg-gradient-linkvision text-white border-0 mt-2"
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
