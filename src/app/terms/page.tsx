import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Axis Meter Solutions",
  description: "Terms of use for the Axis Meter Solutions website. Website usage terms, disclaimers, and limitation of liability.",
};

export default function TermsPage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
        <p className="text-gray-500 mb-12">Last updated: February 17, 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Axis Meter Solutions website (axismeter.com), you accept and agree to be
              bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
              These terms apply to the website only and do not constitute a service agreement for submetering services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website</h2>
            <p className="mb-4">You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infringe the rights of or restrict the use of this website by any other person</li>
              <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
              <li>Introduce viruses, malware, or other harmful material</li>
              <li>Use automated tools to scrape, copy, or reproduce website content</li>
              <li>Misrepresent your identity or affiliation with any person or organization</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, images, and software — is the property
              of Axis Meter Solutions or its content suppliers and is protected by Canadian and international
              copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, or
              create derivative works from any content on this website without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Accuracy</h2>
            <p>
              We make reasonable efforts to ensure that information on this website is accurate and up to date.
              However, we do not warrant that the content is complete, reliable, or error-free. Information
              provided on this website is for general informational purposes only and should not be relied upon
              as professional advice. Specific savings, property value increases, and consumption reductions
              referenced on this website are based on industry data and averages — actual results may vary.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Agreement</h2>
            <p>
              These Terms of Use govern your use of the Axis Meter Solutions website only. Submetering services
              are governed by a separate service agreement between Axis Meter Solutions and the property owner.
              Nothing on this website constitutes a binding offer to provide services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. These links are provided for convenience only.
              We do not endorse or take responsibility for the content, privacy practices, or availability of
              third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Axis Meter Solutions shall not be liable for any direct,
              indirect, incidental, special, consequential, or punitive damages arising from your use of or
              inability to use this website, including but not limited to damages for loss of profits, data,
              or other intangible losses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p>
              This website is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either
              express or implied, including but not limited to implied warranties of merchantability, fitness
              for a particular purpose, or non-infringement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the Province
              of Ontario, Canada, without regard to its conflict of law provisions. Any disputes arising from
              these terms shall be subject to the exclusive jurisdiction of the courts of Ontario.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page
              with an updated &quot;Last updated&quot; date. Your continued use of the website after changes are posted
              constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
            <p>
              If you have questions about these Terms of Use, please contact us at{" "}
              <a href="mailto:info@axismeter.com" className="text-accent hover:underline">info@axismeter.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
