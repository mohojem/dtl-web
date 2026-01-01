import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container py-12 md:py-16 px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="h-12 w-auto mb-6" light />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Du Toit Lambrechts Inc is a trusted law firm providing dynamic, accessible, and transparent legal services across South Africa.
            </p>
            <p className="text-sm text-primary-foreground/50">
              Reg nr: 2016/350606/21
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#why-us", label: "Why Choose Us" },
                { href: "#team", label: "Our Team" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-forest-light flex-shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/70">
                  <div>BFN: 051 433 1415</div>
                  <div>MSB: 044 690 3666</div>
                  <div>CPT: 081 618 9183</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-forest-light flex-shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/70">
                  <div>infobfn@dtllaw.co.za</div>
                  <div>infomsb@dtllaw.co.za</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-forest-light flex-shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/70">
                  Bloemfontein • Mossel Bay • Cape Town
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p className="text-center md:text-left">© {currentYear} Du Toit Lambrechts Inc. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a 
                href="#/privacy" 
                className="hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#/terms" 
                className="hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
