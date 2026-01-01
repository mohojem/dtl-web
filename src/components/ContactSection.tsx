import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  contactFormSchema,
  type ContactFormData,
  checkRateLimit,
  recordSubmission,
} from "@/lib/validation";

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
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check rate limiting
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setRateLimitError(
        `Too many submissions. Please wait ${rateCheck.remainingTime} seconds before trying again.`
      );
      return;
    }

    setRateLimitError(null);
    setIsSubmitting(true);

    try {
      // Create mailto link with sanitized data
      const mailtoSubject = encodeURIComponent(`Legal Enquiry: ${data.subject}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      
      // Open email client
      window.location.href = `mailto:infobfn@dtllaw.co.za?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Record submission for rate limiting
      recordSubmission();

      toast({
        title: "Email client opened",
        description: "Please send the pre-filled email to complete your enquiry.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or contact us directly by phone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 section-navy">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="w-12 h-1 bg-forest-light rounded-full mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground mb-4 md:mb-6">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80">
            Ready to discuss your legal needs? Contact us for a consultation at any of our offices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-primary-foreground/10">
            <h3 className="text-xl md:text-2xl font-serif font-medium text-primary-foreground mb-6">
              Send us a message
            </h3>

            {rateLimitError && (
              <div className="mb-6 p-4 bg-destructive/20 border border-destructive/50 rounded-lg flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <p className="text-sm text-primary-foreground">{rateLimitError}</p>
              </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground/70 text-sm">
                          Your Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John Smith"
                            maxLength={100}
                            autoComplete="name"
                            aria-describedby="name-error"
                            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-destructive" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground/70 text-sm">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="082 123 4567"
                            maxLength={20}
                            autoComplete="tel"
                            aria-describedby="phone-error"
                            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-destructive" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/70 text-sm">
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="john@example.com"
                          maxLength={255}
                          autoComplete="email"
                          aria-describedby="email-error"
                          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/70 text-sm">
                        Subject / Type of Legal Matter *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g., Property Transfer, Family Law Matter"
                          maxLength={200}
                          aria-describedby="subject-error"
                          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/70 text-sm">
                        Your Message *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Please provide a brief description of your legal matter..."
                          rows={5}
                          maxLength={2000}
                          aria-describedby="message-error"
                          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                      <p className="text-xs text-primary-foreground/50 mt-1">
                        {field.value?.length || 0}/2000 characters
                      </p>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Preparing Email...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-primary-foreground/50 text-center mt-4">
                  Your information is secure and will only be used to respond to your enquiry.
                </p>
              </form>
            </Form>
          </div>

          {/* Office Locations */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <Clock className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm md:text-base">Monday - Friday: 8:00 AM - 5:00 PM</span>
            </div>

            <div className="space-y-4 md:space-y-6">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-primary-foreground/5 rounded-xl p-5 md:p-6 border border-primary-foreground/10 hover:border-forest-light/50 transition-colors duration-300"
                >
                  <h4 className="text-lg md:text-xl font-serif font-medium text-primary-foreground mb-3 md:mb-4">
                    {office.city} Office
                  </h4>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-forest-light flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm md:text-base text-primary-foreground/80">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-forest-light flex-shrink-0" aria-hidden="true" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        aria-label={`Call ${office.city} office at ${office.phone}`}
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-forest-light flex-shrink-0" aria-hidden="true" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all"
                        aria-label={`Email ${office.city} office at ${office.email}`}
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
        <div className="mt-10 md:mt-16 rounded-2xl overflow-hidden border border-primary-foreground/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.0897046044556!2d26.195891476087997!3d-29.11858997545891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fc57e4a2e9c9d%3A0x8d8f0e9f9f9f9f9f!2sBloemfontein%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DTL Law Office Locations - Bloemfontein, South Africa"
            aria-label="Google Maps showing DTL Law office locations"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
