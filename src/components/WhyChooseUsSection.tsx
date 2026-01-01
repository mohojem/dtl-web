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
    <section id="why-us" className="py-16 md:py-24 lg:py-32 section-cream">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="line-accent mb-4 md:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 md:mb-6">
              Why Choose DTL Law?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              We are large enough to deliver efficient and reliable services, yet small enough to provide attention to detail with personal and dedicated service.
            </p>
            
            <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground">
              <blockquote className="text-lg md:text-xl font-serif italic mb-3 md:mb-4">
                "Our passion for what we do and our 'out of the box' thinking methods set us apart."
              </blockquote>
              <p className="text-primary-foreground/70 text-xs md:text-sm">
                — The DTL Law Team
              </p>
            </div>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="bg-card rounded-xl p-5 md:p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 md:mb-4">
                  <reason.icon className="h-5 w-5 md:h-6 md:w-6 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="text-base md:text-lg font-medium text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
