import { 
  Building2, 
  Scale, 
  Home, 
  FileText, 
  Users, 
  Shield, 
  Briefcase, 
  Car,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scale,
    title: "High Court Litigation",
    description: "Expert representation in complex legal disputes and appeals across all levels of court.",
  },
  {
    icon: Home,
    title: "Property Transactions",
    description: "Complete conveyancing services for buying, selling, and transferring property.",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Sensitive handling of divorce, custody, maintenance, and domestic matters.",
  },
  {
    icon: Building2,
    title: "Commercial Law",
    description: "Business contracts, company formations, and commercial dispute resolution.",
  },
  {
    icon: FileText,
    title: "Wills & Estates",
    description: "Estate planning, will drafting, and administration of deceased estates.",
  },
  {
    icon: Briefcase,
    title: "Labour Law",
    description: "Employment contracts, disciplinary hearings, and CCMA representation.",
  },
  {
    icon: Shield,
    title: "Criminal Law",
    description: "Defense representation and bail applications in criminal proceedings.",
  },
  {
    icon: Car,
    title: "MVA Claims",
    description: "Motor vehicle accident claims and personal injury compensation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="line-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6">
            Our Legal Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive legal solutions tailored to your needs. From property transactions to court litigation, we provide expert guidance every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-service group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            We also handle collections, debt review, antenuptial contracts, trusts, insolvencies, and more.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="#contact">
              Discuss Your Legal Needs
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
