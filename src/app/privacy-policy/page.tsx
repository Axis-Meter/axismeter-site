import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Axis Meter Solutions",
  description: "Privacy Policy for Axis Meter Solutions. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-gray-400 text-sm">V1.2 — Last updated February 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Axis Meter Solutions. We are committed to protecting your privacy and ensuring
            you have a positive experience on our website and in using our services. This Privacy Policy
            applies to <a href="https://axismeter.com" className="text-accent hover:underline">https://axismeter.com</a> and
            covers our data collection, processing, and usage practices.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          <ul className="space-y-3 text-gray-600">
            <li><strong>Personal Information:</strong> We collect information that personally identifies you, such as your name, email address, telephone number, property address, and other data that can be reasonably linked to such information by Axis Meter Solutions, when you sign up for our services, fill out a form, request a quote, or otherwise interact with us.</li>
            <li><strong>Usage Data:</strong> We automatically collect information when you use our website, such as your IP address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</li>
            <li><strong>Utility Data:</strong> For customers using our submetering services, we collect utility consumption data (electricity, water, gas, and thermal usage) from installed meters for the purpose of billing and account management.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <ul className="space-y-3 text-gray-600">
            <li><strong>To Provide and Maintain our Service:</strong> Your information helps us deliver submetering, billing, and utility management services, and to improve our offerings and personalize your experience.</li>
            <li><strong>Communication:</strong> We use your personal information to contact you with service updates, billing information, newsletters, marketing or promotional materials, and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.</li>
            <li><strong>Customer Support:</strong> We use your information to resolve technical issues, respond to your requests for assistance, and to improve our services.</li>
            <li><strong>Billing and Account Management:</strong> We use utility consumption data and personal information to generate accurate bills, manage tenant accounts, and provide usage reports to property owners.</li>
            <li><strong>Compliance and Enforcement:</strong> Comply with applicable legal requirements including Measurement Canada regulations, enforce our terms and conditions, and protect our users.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">3. Sharing of Your Information</h2>
          <p className="text-gray-600">
            We do not sell, rent, or lease our customer lists to third parties. We may share data with trusted partners
            to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries.
          </p>
          <p className="text-gray-600 mt-3">
            We may share utility consumption data with property owners and property managers as necessary to fulfill our
            submetering service agreements. This sharing is limited to data required for billing, account management, and
            property operations.
          </p>
          <p className="text-gray-600 mt-3">
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
            All other categories exclude text messaging originator opt-in data and consent; this information will not be
            shared with any third parties.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">4. Security of Your Information</h2>
          <p className="text-gray-600">
            We use commercially reasonable physical, technical, and administrative security measures to protect against
            the unauthorized access, destruction, or alteration of your information. This includes encryption of data
            in transit, secure data storage, and access controls limiting who can view personal and utility consumption data.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">5. Data Retention</h2>
          <p className="text-gray-600">
            We retain personal information we collect from you where we have an ongoing legitimate business need to do so
            (for example, to comply with applicable legal, tax, or accounting requirements, or to fulfill our service agreements).
            Utility consumption data is retained for the duration of the service agreement and for a reasonable period thereafter
            as required by applicable regulations.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">6. Your Privacy Rights</h2>
          <p className="text-gray-600">
            You have the right to access, correct, update, or request deletion of your personal information. You can also
            object to processing of your personal information, ask us to restrict processing of your personal information,
            or request portability of your personal information. To exercise any of these rights, please contact us using
            the information below.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">7. Cookies and Tracking</h2>
          <p className="text-gray-600">
            Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze
            website traffic. You can control cookie settings through your browser preferences. Essential cookies required
            for website functionality cannot be disabled.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">8. Updates to This Privacy Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time in response to changing legal, technical, or business
            developments. When we update our Privacy Policy, we will take appropriate measures to inform you, consistent
            with the significance of the changes we make. The date at the top of this policy indicates the last revision.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">9. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy or our treatment of the information you provide us, please contact us:
          </p>
          <ul className="text-gray-600 mt-3 space-y-1">
            <li><strong>Email:</strong> <a href="mailto:info@axismeter.com" className="text-accent hover:underline">info@axismeter.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+12267025500" className="text-accent hover:underline">226-702-5500</a></li>
            <li><strong>Website:</strong> <a href="https://axismeter.com/contact" className="text-accent hover:underline">axismeter.com/contact</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
