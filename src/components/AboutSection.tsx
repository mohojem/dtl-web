import { CheckCircle, Award, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: CheckCircle, label: "Accountability" },
    { icon: Award, label: "Integrity" },
    { icon: Heart, label: "Dedication" },
    { icon: Target, label: "Commitment" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 section-cream">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="line-accent mb-4 md:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 md:mb-6">
                About DTL Law
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Du Toit Lambrechts Inc is a modern, client-focused law firm with offices in Bloemfontein, Mossel Bay, and Cape Town. We believe that quality legal services should be accessible to everyone.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-card rounded-xl p-5 md:p-6 shadow-soft">
                <h3 className="text-lg md:text-xl font-serif font-medium text-foreground mb-2 md:mb-3">Our Mission</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  To deliver effective legal solutions by attending to the specific legal matters of our clients in the most cost-effective and time-efficient way. Our passion for our work drives us to go the extra mile.
                </p>
              </div>

              <div className="bg-card rounded-xl p-5 md:p-6 shadow-soft">
                <h3 className="text-lg md:text-xl font-serif font-medium text-foreground mb-2 md:mb-3">Our Promise</h3>
                <ul className="grid grid-cols-2 gap-2 md:gap-3">
                  {["Cost effective", "Personal service", "Availability", "Sensitivity to matters"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" aria-hidden="true" />
                      <span className="text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-primary rounded-2xl p-6 md:p-10 text-primary-foreground">
              <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 md:mb-6">Our Values</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {values.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 md:h-5 md:w-5 text-forest-light" aria-hidden="true" />
                    </div>
                    <span className="text-sm md:text-base font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-card rounded-xl p-4 md:p-6 shadow-soft text-center">
                <div className="text-2xl md:text-4xl font-serif font-bold text-secondary mb-1 md:mb-2">2016</div>
                <div className="text-xs md:text-sm text-muted-foreground">Established</div>
              </div>
              <div className="bg-card rounded-xl p-4 md:p-6 shadow-soft text-center">
                <div className="text-2xl md:text-4xl font-serif font-bold text-secondary mb-1 md:mb-2">3</div>
                <div className="text-xs md:text-sm text-muted-foreground">Offices Nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
