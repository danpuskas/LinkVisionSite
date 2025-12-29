import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const solutionItems = [
    { path: "/solutions/onevision", label: "OneVision" },
    { path: "/solutions/widevision", label: "WideVision" },
    { path: "/solutions/freevision", label: "FreeVision" },
    { path: "/solutions/custom", label: "Custom Solutions" },
  ];

  const caseStudyItems = [
    { path: "/case-studies/residential", label: "Residential" },
    { path: "/case-studies/commercial", label: "Commercial" },
    { path: "/case-studies/industrial-civil", label: "Industrial & Civil" },
    { path: "/case-studies/mining-resources", label: "Mining & Resources" },
    { path: "/case-studies/warehouse-logistics", label: "Warehouse & Logistics" },
    { path: "/case-studies/agriculture-farming", label: "Agriculture & Farming" },
  ];

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/industry", label: "Industry" },
    { path: "/case-studies", label: "Case Studies", hasDropdown: true, dropdownType: "caseStudies" },
    { path: "/solutions", label: "Solutions", hasDropdown: true, dropdownType: "solutions" },
    { path: "/timelapse", label: "Timelapse" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const getDropdownItems = (type: string) => {
    if (type === "solutions") return solutionItems;
    if (type === "caseStudies") return caseStudyItems;
    return [];
  };

  const isDropdownOpen = (type: string) => {
    if (type === "solutions") return solutionsOpen;
    if (type === "caseStudies") return caseStudiesOpen;
    return false;
  };

  const setDropdownOpen = (type: string, open: boolean) => {
    if (type === "solutions") setSolutionsOpen(open);
    if (type === "caseStudies") setCaseStudiesOpen(open);
  };

  const isMobileDropdownOpen = (type: string) => {
    if (type === "solutions") return mobileSolutionsOpen;
    if (type === "caseStudies") return mobileCaseStudiesOpen;
    return false;
  };

  const toggleMobileDropdown = (type: string) => {
    if (type === "solutions") setMobileSolutionsOpen(!mobileSolutionsOpen);
    if (type === "caseStudies") setMobileCaseStudiesOpen(!mobileCaseStudiesOpen);
  };

  const isActiveDropdown = (type: string) => {
    if (type === "solutions") return location.startsWith("/solutions");
    if (type === "caseStudies") return location.startsWith("/case-studies");
    return false;
  };

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
                  onMouseEnter={() => setDropdownOpen(item.dropdownType!, true)}
                  onMouseLeave={() => setDropdownOpen(item.dropdownType!, false)}
                >
                  <Link
                    href={item.path}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={scrollToTop}
                  >
                    <Button
                      variant="ghost"
                      className={`text-white hover:text-white hover:bg-gradient-linkvision transition-all duration-300 flex items-center gap-1 ${
                        isActiveDropdown(item.dropdownType!) ? "bg-[#C800FF]/20" : ""
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen(item.dropdownType!) ? "rotate-180" : ""}`} />
                    </Button>
                  </Link>
                  
                  {isDropdownOpen(item.dropdownType!) && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="bg-[#182863] border-2 border-[#C800FF]/30 rounded-lg shadow-[0_0_30px_rgba(200,0,255,0.3)] overflow-hidden">
                        {getDropdownItems(item.dropdownType!).map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            href={dropdownItem.path}
                            data-testid={`link-dropdown-${dropdownItem.label.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={scrollToTop}
                          >
                            <div className={`px-4 py-3 text-white hover:bg-gradient-linkvision hover:text-white transition-all duration-300 cursor-pointer border-b border-[#C800FF]/10 last:border-b-0 ${
                              location === dropdownItem.path ? "bg-[#C800FF]/20" : ""
                            }`}>
                              {dropdownItem.label}
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
                        isActiveDropdown(item.dropdownType!) ? "bg-[#C800FF]/20" : ""
                      }`}
                      onClick={() => toggleMobileDropdown(item.dropdownType!)}
                      data-testid={`button-mobile-${item.dropdownType}-toggle`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen(item.dropdownType!) ? "rotate-180" : ""}`} />
                    </Button>
                    
                    {isMobileDropdownOpen(item.dropdownType!) && (
                      <div className="ml-4 mt-2 border-l-2 border-[#C800FF]/30 pl-4 space-y-1">
                        <Link
                          href={item.path}
                          data-testid={`link-mobile-${item.dropdownType}-all`}
                          onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
                        >
                          <Button
                            variant="ghost"
                            className={`w-full justify-start text-white/80 hover:text-white hover:bg-gradient-linkvision transition-all duration-300 text-sm ${
                              location === item.path ? "bg-[#C800FF]/20" : ""
                            }`}
                          >
                            All {item.label}
                          </Button>
                        </Link>
                        {getDropdownItems(item.dropdownType!).map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            href={dropdownItem.path}
                            data-testid={`link-mobile-${dropdownItem.label.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
                          >
                            <Button
                              variant="ghost"
                              className={`w-full justify-start text-white/80 hover:text-white hover:bg-gradient-linkvision transition-all duration-300 text-sm ${
                                location === dropdownItem.path ? "bg-[#C800FF]/20" : ""
                              }`}
                            >
                              {dropdownItem.label}
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
