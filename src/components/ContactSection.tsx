import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    city: "Bloemfontein",
    address: "15 Wilcocks Road, Noordhoek",
    phone: "051 433 1415",
    email: "infobfn@dtllaw.co.za",
  },
  {
    city: "Mossel Bay",
    address: "16 Marsh Street",
    phone: "044 690 3666",
    email: "infomsb@dtllaw.co.za",
  },
  {
    city: "Cape Town",
    address: "12 Melkboom Street, Bracken Heights, Brackenfell",
    phone: "081 618 9183",
    email: "infobfn@dtllaw.co.za",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 section-navy">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-12 h-1 bg-forest-light rounded-full mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Ready to discuss your legal needs? Contact us for a consultation at any of our offices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-primary-foreground/10">
            <h3 className="text-2xl font-serif font-medium text-primary-foreground mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              />
              <Input
                name="subject"
                placeholder="Subject / Type of Legal Matter"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              />
              <Textarea
                name="message"
                placeholder="Tell us about your legal matter..."
                rows={5}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
              />
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <Clock className="h-5 w-5" />
              <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
            </div>

            <div className="space-y-6">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10 hover:border-forest-light/50 transition-colors duration-300"
                >
                  <h4 className="text-xl font-serif font-medium text-primary-foreground mb-4">
                    {office.city} Office
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-forest-light flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/80">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-forest-light flex-shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-forest-light flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-primary-foreground/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.0897046044556!2d26.195891476087997!3d-29.11858997545891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fc57e4a2e9c9d%3A0x8d8f0e9f9f9f9f9f!2sBloemfontein%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DTL Law Office Locations"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
