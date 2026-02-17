import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Axis Meter Solutions",
  description: "Axis Meter Solutions privacy policy. Learn how we collect, use, and protect your personal information and meter data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: February 17, 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Axis Meter Solutions (&quot;Axis Meter,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy
              of our clients, residents, and website visitors. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website (axismeter.com), use our services,
              or interact with our metering systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
            <p className="mb-4">When you contact us, request a consultation, or become a client, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Property address and details</li>
              <li>Business information (company name, role)</li>
              <li>Billing and payment information</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">Meter Data</h3>
            <p className="mb-4">Our submetering systems collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Electricity consumption data (per unit)</li>
              <li>Water consumption data (per unit)</li>
              <li>Leak and flood detection sensor data</li>
              <li>Meter health and diagnostic information</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">Website Data</h3>
            <p className="mb-4">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website or search terms</li>
              <li>Device type and operating system</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our submetering services</li>
              <li>Generate accurate utility bills for residents</li>
              <li>Monitor meter performance and detect leaks</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send service-related communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="mb-4">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Property owners/managers:</strong> Consumption data and billing information for units in their buildings</li>
              <li><strong>Service providers:</strong> Third parties who assist with billing, data processing, and customer support</li>
              <li><strong>Regulatory authorities:</strong> When required by law or for meter inspection compliance</li>
              <li><strong>Legal requirements:</strong> When required by law, subpoena, or to protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              and meter data against unauthorized access, alteration, disclosure, or destruction. This includes
              encrypted data transmission, secure data storage, access controls, and regular security assessments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p>
              We retain personal information and meter data for as long as necessary to provide our services and
              comply with legal obligations. Consumption data is retained for the duration of the service agreement
              and for a reasonable period afterward for regulatory compliance purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
            <p>
              Our website uses cookies and similar technologies to improve your browsing experience, analyze website
              traffic, and understand how visitors interact with our site. You can control cookie preferences through
              your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an
              updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <p className="mt-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@axismeter.com" className="text-accent hover:underline">info@axismeter.com</a>
            </p>
            <p className="mt-2">
              <strong>Website:</strong>{" "}
              <a href="https://axismeter.com/contact" className="text-accent hover:underline">axismeter.com/contact</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
