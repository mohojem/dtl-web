import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 sm:px-6 max-w-4xl">
            <div className="line-accent mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                <strong>Effective Date:</strong> January 2024
              </p>
              
              <p>
                Du Toit Lambrechts Inc ("DTL Law", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our legal services.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fill out our contact form</li>
                <li>Request a consultation</li>
                <li>Engage our legal services</li>
                <li>Subscribe to our communications</li>
              </ul>
              <p>This information may include your name, email address, phone number, and details about your legal matter.</p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your enquiries and provide legal services</li>
                <li>Communicate with you about your matter</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                3. Attorney-Client Privilege
              </h2>
              <p>
                Information shared with us in the context of an attorney-client relationship is protected by legal professional privilege and will be treated with the strictest confidentiality in accordance with the Legal Practice Act and the rules of the Legal Practice Council.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                4. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights or the rights of others</li>
                <li>With service providers who assist in our operations</li>
              </ul>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                6. Your Rights Under POPIA
              </h2>
              <p>
                Under the Protection of Personal Information Act (POPIA), you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to the processing of your personal information</li>
              </ul>

              <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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

export default PrivacyPolicy;
