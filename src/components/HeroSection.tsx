import { ArrowRight, Scale, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center section-navy pt-20">
      {/* Background Pattern - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-20 left-10 w-64 h-64 border border-primary-foreground/10 rounded-full" />
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div 
                className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-xs md:text-sm font-medium opacity-0 animate-fade-up"
                role="status"
              >
                <Scale className="h-3 w-3 md:h-4 md:w-4 text-forest-light" aria-hidden="true" />
                Trusted Legal Excellence Since 2016
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight opacity-0 animate-fade-up delay-100">
                Dynamic. Accessible.{" "}
                <span className="text-forest-light">Transparent.</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 max-w-xl opacity-0 animate-fade-up delay-200">
                Delivering effective legal solutions with personal attention. From Bloemfontein to Cape Town, we go the extra mile for every client.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 opacity-0 animate-fade-up delay-300">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-primary-foreground/10 opacity-0 animate-fade-up delay-400">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-forest-light">3</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Office Locations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-forest-light">8+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-forest-light">25+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Practice Areas</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features (hidden on mobile, visible lg+) */}
          <div className="hidden lg:grid gap-6 opacity-0 animate-fade-up delay-300">
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
              <Shield className="h-10 w-10 text-forest-light mb-4" aria-hidden="true" />
              <h3 className="text-xl font-serif font-medium mb-2">Integrity & Trust</h3>
              <p className="text-primary-foreground/70">
                We uphold the highest ethical standards, ensuring transparency in every matter we handle.
              </p>
            </div>
            
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
              <Users className="h-10 w-10 text-forest-light mb-4" aria-hidden="true" />
              <h3 className="text-xl font-serif font-medium mb-2">Personal Approach</h3>
              <p className="text-primary-foreground/70">
                Every client receives dedicated attention with sensitivity to their unique legal needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
