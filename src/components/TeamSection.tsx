import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Senior Attorney",
    role: "Managing Director",
    description: "Leads the firm with extensive experience in commercial law and high court litigation.",
    initials: "DT",
  },
  {
    name: "Associate Attorney",
    role: "Property & Conveyancing",
    description: "Specializes in property transactions and conveyancing matters across all offices.",
    initials: "LB",
  },
  {
    name: "Associate Attorney",
    role: "Family & Criminal Law",
    description: "Handles sensitive family matters and criminal proceedings with compassion.",
    initials: "JV",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="line-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6">
            Our Legal Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated professionals committed to providing you with exceptional legal services and personal attention.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.initials}
              className="group text-center"
            >
              {/* Avatar Placeholder */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl font-serif font-medium text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200">
                    <Mail className="h-4 w-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-serif font-medium text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-secondary font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
