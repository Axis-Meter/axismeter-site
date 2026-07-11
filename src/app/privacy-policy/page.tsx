import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy — Axis Meter Solutions",
  description: "Privacy Policy for Axis Meter Solutions. How we collect, handle, and protect your personal information in accordance with Canadian and US privacy laws.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-gray-400 text-sm">Last reviewed: February 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            The privacy of individuals connected with Axis Meter Solutions (&quot;the Corporation&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
            including our customers, suppliers, contractors, employees, and website visitors is of great importance to us.
            Keeping Personal Information in strict confidence is a cornerstone of our business. Regardless of how the range
            of services we provide expands and the technology we use changes, we will always strive to protect the privacy
            of Personal Information in accordance with this Privacy Policy.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy describes how we collect, handle, and protect Personal Information under our control and sets
            out the principles and laws on which our privacy practices are based. This policy applies to{" "}
            <a href="https://www.axismeter.com" className="text-accent hover:underline">https://www.axismeter.com</a> and all
            related services provided by Axis Meter Solutions.
          </p>

          <nav className="bg-gray-50 rounded-xl p-6 my-8">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Contents</h2>
            <ul className="space-y-1 text-sm">
              <li><a href="#acceptance" className="text-accent hover:underline">Acceptance of Privacy Policy, Revisions and Rights to Opt Out</a></li>
              <li><a href="#what-is-pi" className="text-accent hover:underline">What is Personal Information?</a></li>
              <li><a href="#types" className="text-accent hover:underline">Types of Personal Information Collected and Processed</a></li>
              <li><a href="#how-why" className="text-accent hover:underline">How and Why We Collect Personal Information</a></li>
              <li><a href="#disclosure" className="text-accent hover:underline">Disclosure of Your Personal Information</a></li>
              <li><a href="#safeguards" className="text-accent hover:underline">How We Safeguard Your Personal Information</a></li>
              <li><a href="#accuracy" className="text-accent hover:underline">Accuracy and Access to Your Personal Information</a></li>
              <li><a href="#cookies" className="text-accent hover:underline">Cookies and Tracking Technologies</a></li>
              <li><a href="#us-users" className="text-accent hover:underline">Privacy Information for United States Users</a></li>
              <li><a href="#contact" className="text-accent hover:underline">Questions or Concerns</a></li>
            </ul>
          </nav>

          <h2 id="acceptance" className="text-xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Privacy Policy, Revisions and Rights to Opt Out</h2>
          <p className="text-gray-600">
            By providing Personal Information to us and visiting our website, engaging with our social media, or otherwise
            interacting with our services, you are consenting to our processing of your Personal Information in accordance
            with the terms of this Policy.
          </p>
          <p className="text-gray-600 mt-3">
            This Privacy Policy is effective as of the date &quot;Last reviewed&quot; above, and will remain in effect except with
            respect to any provisions that are changed in the future. We reserve the right to change this Policy at any time.
            Changes, modifications, additions, or deletions will be effective immediately upon their posting to our website
            or upon you being otherwise notified. Your continued provision of Personal Information to us and your continued
            use of our website after we post any such modifications will constitute your acknowledgement of the modified
            Privacy Policy and your agreement to abide and be bound by it going forward.
          </p>
          <p className="text-gray-600 mt-3">
            You may refuse to provide Personal Information to the Corporation and may, subject to legal or contractual
            restrictions and reasonable notice, withdraw consent at any time to our continued use and disclosure of
            Personal Information previously collected. Please note that refusing or withdrawing your consent may result
            in us being unable to provide you with certain products and services. You can withdraw your consent at any time
            by writing to the Privacy Officer at the address at the end of this Privacy Policy.
          </p>
          <p className="text-gray-600 mt-3">
            You may also opt out of continuing to receive communications from the Corporation in respect of products and
            services other than those which you have inquired about or are receiving. We may, however, collect, use, or
            disclose Personal Information without your knowledge or consent in exceptional circumstances where such
            collection, use, or disclosure is permitted or required by law.
          </p>
          <p className="text-gray-600 mt-3">
            The Corporation will not knowingly obtain consent from individuals who are minors under fourteen (14) years
            of age, seriously ill, or mentally incapacitated. Consent shall be obtained from a parent, legal guardian,
            or person having power of attorney in such cases. If you are under the age of fourteen (14) years, you must
            access or use our website only with the permission and involvement of your parent or guardian.
          </p>

          <h2 id="what-is-pi" className="text-xl font-bold text-gray-900 mt-10 mb-4">2. What is Personal Information?</h2>
          <p className="text-gray-600">
            &quot;Personal Information&quot; is any recorded information about an identifiable person. It includes such things as a
            person&apos;s name, home address, email address, telephone number, date of birth, social insurance number, and
            financial information. Personal Information does not include business contact information of an individual that
            the Corporation collects, uses, or discloses solely for the purpose of communicating or facilitating communication
            with the individual in relation to their employment, business, or profession.
          </p>
          <p className="text-gray-600 mt-3">
            Personal Information may be gathered from customers, tenants, property owners, and website visitors. In all cases,
            we are committed to protecting the privacy of individuals and the integrity of their Personal Information.
          </p>

          <h2 id="types" className="text-xl font-bold text-gray-900 mt-10 mb-4">3. Types of Personal Information Collected and Processed</h2>
          <p className="text-gray-600 mb-3">The Personal Information which the Corporation may collect includes, but is not limited to:</p>
          <ul className="space-y-3 text-gray-600">
            <li><strong>Contact and identifying information</strong> — including your name, mailing address, service address, email address, telephone number, and date of birth.</li>
            <li><strong>Commercial information</strong> — including details of products and services used related to meters and service agreements for billing, occupancy dates, whether your premises is rented or owned, utility consumption and meter reading data, and collection information.</li>
            <li><strong>Financial and payment information</strong> — including bank account information, credit card, debit card, and/or checking account information, credit reports, and payment or other information required when you make payments to the Corporation or its third-party service providers.</li>
            <li><strong>Utility consumption data</strong> — including electricity, water, gas, and thermal energy usage readings collected from installed metering equipment for the purpose of billing and account management.</li>
            <li><strong>User information</strong> — including messages and images uploaded or shared as part of account management portals, customer support interactions, and communications.</li>
            <li><strong>Login information</strong> — including username and password for our tenant portal and property management systems.</li>
            <li><strong>Marketing and communications information</strong> — including your preferences in receiving marketing from us and third parties, and your communication preferences.</li>
            <li><strong>Computer information</strong> — including device type, device identifiers, IP address, MAC address, location, browser type, operating system and platform, cookies, browser language, and domain name system requests.</li>
            <li><strong>Internet or other electronic network activity</strong> — including browsing history, session and interaction data, search history, duration of use, pages viewed, time and date of access, and other user behaviour related to our website, unless you opt out of such activity.</li>
            <li><strong>Other information</strong> — which you voluntarily provide to us, our employees, or our contractors.</li>
          </ul>
          <p className="text-gray-600 mt-3">
            In addition, if you contact us, we may keep a record of your communication, including telephone calls and emails,
            to help solve any issues you might be facing.
          </p>

          <h2 id="how-why" className="text-xl font-bold text-gray-900 mt-10 mb-4">4. How and Why We Collect Personal Information</h2>
          <p className="text-gray-600">
            Most of the Personal Information we handle is collected primarily in connection with products and services
            provided by or to the Corporation, and during the establishment of business relations. We also collect your
            Personal Information from building owners, condominium corporations, strata corporations, co-operative corporations,
            landlords, and/or property managers of your building, as well as from third-party service providers including
            payment processors, collection agencies, analytics providers, email service providers, customer service providers,
            and website hosting platforms.
          </p>
          <p className="text-gray-600 mt-3 mb-3">In the normal course of doing business, we use Personal Information for various purposes, including:</p>
          <ul className="space-y-2 text-gray-600">
            <li>Establishing, managing, and terminating business relations with you, including billing and collecting overdue amounts. We may also report payment history about accounts to credit reporting agencies to manage collections and business risks.</li>
            <li>Maintaining and improving our products and services and otherwise running and managing our business in the ordinary course, and keeping our records up to date.</li>
            <li>Fulfilling service agreements for submetering installation, billing, and utility management services.</li>
            <li>Reading meters, calculating consumption, generating tenant utility bills, and managing tenant accounts on behalf of property owners.</li>
            <li>Providing leak and flood detection monitoring and alerts.</li>
            <li>Reviewing the products and services that we provide to you.</li>
            <li>Informing you of our other products and services that we think may be of interest to you.</li>
            <li>Providing communications including email notifications, billing statements, account updates, and service announcements.</li>
            <li>Assisting you when you contact our customer support services, including directing your questions to appropriate individuals, investigating and addressing your concerns, and improving our customer support responses.</li>
            <li>Administering and protecting our business and website, including troubleshooting, data analysis, testing, system maintenance, support, reporting, and hosting of data.</li>
            <li>Using data for business development and market research to understand usage patterns and to track and analyze trends.</li>
            <li>Protecting us against error, fraud, theft, and damage to our goods and property.</li>
            <li>Enabling us to comply with applicable law or regulatory requirements, including Measurement Canada standards.</li>
            <li>Complying generally with all laws and applicable statutory requirements.</li>
          </ul>

          <h2 id="disclosure" className="text-xl font-bold text-gray-900 mt-10 mb-4">5. Disclosure of Your Personal Information</h2>
          <p className="text-gray-600 mb-3">
            In the course of providing products or services to you, we use and may disclose your Personal Information
            under certain limited circumstances, including:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>During an emergency situation or where necessary to protect the safety of a person or group of persons.</li>
            <li>To employees, contractors, consultants, and other parties who require the information to assist us in managing the business relationship or providing services, including for billing, account administration, servicing and installations, collections, and reporting.</li>
            <li>To property owners and property managers as necessary to fulfill our submetering service agreements. This sharing is limited to utility consumption data and account information required for billing, account management, and property operations.</li>
            <li>At the request of government regulators, including Measurement Canada.</li>
            <li>In response to a search warrant or other legally valid inquiry or order, or to an investigative body in the case of a breach of an agreement or contravention of law.</li>
            <li>Where necessary for the establishment, exercise, or defence of legal claims; or as otherwise required or permitted by law.</li>
          </ul>
          <p className="text-gray-600 mt-3">
            We disclose Personal Information to unaffiliated third parties only when necessary to provide products or services
            to our customers or as otherwise identified in this Privacy Policy. When we do disclose such information to
            third parties, we require them to protect Personal Information to the same standard as we use within the Corporation.
          </p>
          <p className="text-gray-600 mt-3">
            Personal Information provided to our service providers may be stored and processed outside of Canada. You
            acknowledge and agree that, as a result, your Personal Information may be processed, used, stored, or accessed
            in other jurisdictions and may be subject to the laws of those jurisdictions. For example, information may be
            disclosed in response to valid demands or requests from government authorities, courts, or law enforcement
            in other countries.
          </p>
          <p className="text-gray-600 mt-3">
            The Corporation may also disclose Personal Information in the context of an actual or possible corporate
            reorganization, merger, or amalgamation with another entity, or an actual or possible sale of all or a
            substantial portion of the Corporation&apos;s assets. In such circumstances, disclosure would occur on the condition
            that the information only be used for the purpose of evaluating the transaction, or on completion of the
            transaction, for the purposes outlined in this Privacy Policy.
          </p>
          <p className="text-gray-600 mt-3">
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
            All other categories exclude text messaging originator opt-in data and consent; this information will not be
            shared with any third parties.
          </p>

          <h2 id="safeguards" className="text-xl font-bold text-gray-900 mt-10 mb-4">6. How We Safeguard Your Personal Information</h2>
          <p className="text-gray-600">
            We take the responsibility of safeguarding Personal Information very seriously and employ various physical,
            electronic, and procedural safeguards to protect such information. We also limit access to Personal Information
            to those employees, agents, and service providers who need such information in connection with the purposes
            set forth in this Privacy Policy.
          </p>
          <p className="text-gray-600 mt-3">
            Despite using these safeguards, no methods are foolproof. If the Corporation suffers a breach of security
            safeguards, the risks include increased risk of phishing communications and identity theft. Consistent with
            good information practices, we encourage you to provide only the Personal Information you are comfortable with
            providing, keep watch for communications that are suspicious, and report any suspicious activity to us as soon
            as possible.
          </p>
          <p className="text-gray-600 mt-3">
            We only retain Personal Information for as long as is necessary to fulfill the purposes for which it was
            originally obtained, unless we are required or permitted by law to retain the information for a longer period.
            Utility consumption data is retained for the duration of the service agreement and for a reasonable period
            thereafter as required by applicable regulations. Once Personal Information is no longer needed or permitted
            to be retained, it is securely destroyed or made anonymous as appropriate.
          </p>

          <h2 id="accuracy" className="text-xl font-bold text-gray-900 mt-10 mb-4">7. Accuracy and Access to Your Personal Information</h2>
          <p className="text-gray-600">
            We strive to ensure that all Personal Information is accurate, correct, and up-to-date, and take all reasonable
            efforts to ensure that the integrity and accuracy of such information is protected.
          </p>
          <p className="text-gray-600 mt-3">
            You can ask to see the Personal Information that we hold about you. If you want to review, verify, or correct
            your Personal Information, or find out how it has been used or disclosed, please contact our Privacy Officer
            using the contact information set out below. Please note that any such communications must be in writing.
          </p>
          <p className="text-gray-600 mt-3">
            When making an access request, we require specific information from you to confirm your identity as well as
            to search for and provide you with the Personal Information that we hold about you. We may charge a reasonable
            fee to process access requests, but we will advise you of any fee in advance.
          </p>
          <p className="text-gray-600 mt-3 mb-3">
            There are limited circumstances under which we may not comply with your request for access, including:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>If doing so could reveal Personal Information about a third party.</li>
            <li>If the information is subject to legal privilege or was generated in the context of a formal dispute resolution process.</li>
            <li>If the information relates to the actual or suspected breach of an agreement or of applicable law.</li>
            <li>Where permitted or required by applicable law.</li>
          </ul>
          <p className="text-gray-600 mt-3">
            The Corporation will inform you of the reasons why, subject to any legal or regulatory restrictions, access
            has been denied.
          </p>

          <h2 id="cookies" className="text-xl font-bold text-gray-900 mt-10 mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600">
            Our website may use tracking software in the form of &quot;cookies&quot; — text files containing unique identification
            numbers that identify technical information about our website visitors, but not necessarily the identity of the
            visitor. This information is transmitted to us each time our website is visited, and these cookies allow us to
            collect and store information such as the type of internet browser and operating system a visitor uses; the date,
            time, and duration of the visit; the Internet protocol (IP) address used to connect their computer to the
            Internet; the internet address of the website from which they linked to our website; and the pages they visited
            while on our website.
          </p>
          <p className="text-gray-600 mt-3">
            Unless a visitor actively submits Personal Information while on our website, we will not normally be able to
            determine the identity of visitors to our website. You can control cookie settings through your browser
            preferences. Essential cookies required for website functionality cannot be disabled.
          </p>

          <h2 id="us-users" className="text-xl font-bold text-gray-900 mt-10 mb-4">9. Privacy Information for United States Users</h2>
          <p className="text-gray-600">
            If you are a resident of the United States, this Privacy Policy applies to you in full. In addition, certain
            state privacy laws may provide you with additional rights regarding your Personal Information. If you are a
            resident of California, Virginia, Colorado, Connecticut, or another state with comprehensive privacy legislation,
            you may have additional rights including the right to know what Personal Information is collected about you,
            the right to delete your Personal Information, and the right to opt out of the sale of your Personal Information.
            We do not sell Personal Information. To exercise any additional state-specific privacy rights, please contact
            our Privacy Officer.
          </p>

          <h2 id="contact" className="text-xl font-bold text-gray-900 mt-10 mb-4">10. Questions or Concerns</h2>
          <p className="text-gray-600">
            The Corporation&apos;s compliance with this Privacy Policy and with applicable privacy laws is overseen by our
            Privacy Officer. If you have any questions or concerns regarding this Privacy Policy or our privacy practices,
            please contact our Privacy Officer:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4">
            <p className="text-gray-700 font-semibold">Privacy Officer</p>
            <p className="text-gray-600">Axis Meter Solutions</p>
            <p className="text-gray-600 mt-2">
              Email: <a href="mailto:info@axismeter.com" className="text-accent hover:underline">info@axismeter.com</a>
            </p>
            <p className="text-gray-600">
              Phone: <a href="tel:+12267025500" className="text-accent hover:underline">226-702-5500</a>
            </p>
            <p className="text-gray-600">
              Website: <a href="https://www.axismeter.com/contact" className="text-accent hover:underline">www.axismeter.com/contact</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
