import { CheckCircle, Award, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: CheckCircle, label: "Accountability" },
    { icon: Award, label: "Integrity" },
    { icon: Heart, label: "Dedication" },
    { icon: Target, label: "Commitment" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 section-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="line-accent mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6">
                About DTL Law
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Du Toit Lambrechts Inc is a modern, client-focused law firm with offices in Bloemfontein, Mossel Bay, and Cape Town. We believe that quality legal services should be accessible to everyone.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver effective legal solutions by attending to the specific legal matters of our clients in the most cost-effective and time-efficient way. Our passion for our work drives us to go the extra mile.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">Our Promise</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {["Cost effective", "Personal service", "Availability", "Sensitivity to matters"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="space-y-8">
            <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
              <h3 className="text-2xl font-serif font-medium mb-6">Our Values</h3>
              <div className="grid grid-cols-2 gap-6">
                {values.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-forest-light" />
                    </div>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="text-4xl font-serif font-bold text-secondary mb-2">2016</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="text-4xl font-serif font-bold text-secondary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Offices Nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
