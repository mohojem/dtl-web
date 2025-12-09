import { Clock, Coins, MessageCircle, Award, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: Coins,
    title: "Cost Effective",
    description: "Competitive rates with transparent pricing. We believe quality legal services should be accessible to everyone.",
  },
  {
    icon: Clock,
    title: "Responsive & Available",
    description: "Quick response times and availability when you need us. Your matters are handled with urgency and care.",
  },
  {
    icon: MessageCircle,
    title: "Personal Service",
    description: "Direct communication with your attorney. No bureaucracy, just straightforward legal guidance.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Our attorneys bring years of expertise across multiple practice areas to serve you better.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Advanced office technology and databases that maximize productivity and service delivery.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "We treat each case with sensitivity and dedication, understanding that every client's situation is unique.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 section-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="line-accent mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6">
              Why Choose DTL Law?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are large enough to deliver efficient and reliable services, yet small enough to provide attention to detail with personal and dedicated service.
            </p>
            
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <blockquote className="text-xl font-serif italic mb-4">
                "Our passion for what we do and our 'out of the box' thinking methods set us apart."
              </blockquote>
              <p className="text-primary-foreground/70 text-sm">
                — The DTL Law Team
              </p>
            </div>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
