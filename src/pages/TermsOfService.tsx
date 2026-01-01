import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 sm:px-6 max-w-4xl">
            <div className="line-accent mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                <strong>Effective Date:</strong> January 2024
              </p>
              
              <p>
                Welcome to the website of Du Toit Lambrechts Inc ("DTL Law", "we", "us", or "our"). By accessing or using our website, you agree to be bound by these Terms of Service.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                1. Legal Services
              </h2>
              <p>
                The information provided on this website is for general informational purposes only and does not constitute legal advice. An attorney-client relationship is only established through a formal engagement letter signed by both parties.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                2. No Legal Advice
              </h2>
              <p>
                The content on this website, including articles, guides, and other materials, is provided for informational purposes only and should not be relied upon as legal advice. Every legal situation is unique, and you should consult with a qualified attorney for advice specific to your circumstances.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                3. Use of Website
              </h2>
              <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infringe upon the rights of others</li>
                <li>Restrict or inhibit anyone else's use of the website</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
              </ul>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Du Toit Lambrechts Inc and is protected by South African and international copyright laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, DTL Law shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                6. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party websites. Visiting these links is at your own risk.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                7. Modifications
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                8. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the South African courts.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                9. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="font-medium text-foreground">
                Du Toit Lambrechts Inc<br />
                Email: infobfn@dtllaw.co.za<br />
                Phone: 051 433 1415
              </p>

              <div className="mt-12 pt-8 border-t border-border">
                <a 
                  href="#/" 
                  className="text-secondary hover:text-secondary/80 transition-colors"
                >
                  ← Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
