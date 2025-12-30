import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#182863] border-t border-[#C800FF]/20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/linkvision-logo.png" 
                alt="LinkVision - AI Surveillance" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 mb-4">
              AI-ready solar CCTV and surveillance systems built for Australia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-social-facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/onevision" data-testid="link-footer-onevision">
                  <span className="text-white/80 hover:text-[#C800FF] transition-colors cursor-pointer">
                    OneVision
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/widevision" data-testid="link-footer-widevision">
                  <span className="text-white/80 hover:text-[#C800FF] transition-colors cursor-pointer">
                    WideVision
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/freevision" data-testid="link-footer-freevision">
                  <span className="text-white/80 hover:text-[#C800FF] transition-colors cursor-pointer">
                    FreeVision
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/custom" data-testid="link-footer-custom">
                  <span className="text-white/80 hover:text-[#C800FF] transition-colors cursor-pointer">
                    Custom Solutions
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-white/80 hover:text-[#C800FF] transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies" data-testid="link-footer-case-studies">
                  <span className="text-white/80 hover:text-[#C800FF] transition-colors cursor-pointer">Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/timelapse" data-testid="link-footer-timelapse">
                  <span className="text-white/80 hover:text-[#C800FF] transition-colors cursor-pointer">Timelapse</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-white/80 hover:text-[#C800FF] transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={18} className="text-[#C800FF]" />
                <a href="mailto:info@linkvision.au" className="hover:text-[#C800FF] transition-colors" data-testid="link-email">
                  info@linkvision.com.au
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={18} className="text-[#C800FF]" />
                <a href="tel:0497 865 297" className="hover:text-[#C800FF] transition-colors" data-testid="link-phone">
                  0497 865 297
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={18} className="text-[#C800FF] mt-1 flex-shrink-0" />
                <span>Rockhampton, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} LinkVision. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            LinkVision: An{" "}
            <a
              href="https://www.ndpservices.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-[#C800FF] transition-colors"
              data-testid="link-ndp-services"
            >
              NDP Services Pty Ltd
            </a>{" "}
            Product.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/legal/privacy" data-testid="link-footer-privacy">
              <span className="text-white/60 hover:text-[#C800FF] transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/legal/terms" data-testid="link-footer-terms">
              <span className="text-white/60 hover:text-[#C800FF] transition-colors cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
