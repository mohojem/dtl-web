import { useState, useEffect } from "react";
import { Menu, X, Phone, Home, Info, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === "/" || location.pathname === "";

  const navLinks = [
    { href: isHomePage ? "#hero" : "#/", label: "Home", icon: Home },
    { href: isHomePage ? "#about" : "#/#about", label: "About Us", icon: Info },
    { href: isHomePage ? "#services" : "#/#services", label: "Legal Services", icon: Briefcase },
    { href: isHomePage ? "#contact" : "#/#contact", label: "Contact Us", icon: Mail },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle smooth scroll for hash links on home page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith("#") && !href.startsWith("#/")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#/" 
            className="flex-shrink-0"
            aria-label="DTL Law - Home"
          >
            <Logo className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:0514331415" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Call us at 051 433 1415"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="hidden xl:inline">051 433 1415</span>
            </a>
            <Button variant="hero" asChild>
              <a 
                href={isHomePage ? "#contact" : "#/#contact"}
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Free Consultation
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="lg:hidden py-4 border-t border-border animate-fade-in"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors py-3 px-2 rounded-lg"
                >
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <a 
                  href="tel:0514331415" 
                  className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground py-3 px-2"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  051 433 1415
                </a>
              </div>
              <Button variant="hero" className="mt-2 w-full" asChild>
                <a 
                  href={isHomePage ? "#contact" : "#/#contact"}
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Free Consultation
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
