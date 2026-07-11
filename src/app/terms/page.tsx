import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Use — Axis Meter Solutions",
  description: "Terms of Use governing access to and use of the Axis Meter Solutions website and online services.",
  path: "/terms",
});

export default function TermsOfUsePage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Terms of Use</h1>
          <p className="mt-2 text-gray-400 text-sm">Last updated: February 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            This website (the &quot;Website&quot;) is owned and operated by Axis Meter Solutions (&quot;the Company&quot;, &quot;we&quot;, or &quot;us&quot;).
            The following terms and conditions, together with any documents they expressly incorporate by reference
            (collectively, the &quot;Terms and Conditions&quot;), govern your access to and use of the Website, including any content,
            functionality, and services offered on or through the Website.
          </p>
          <p className="text-gray-600 leading-relaxed font-semibold mt-4">
            BY USING THE WEBSITE, YOU ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS AND CONDITIONS AND OUR{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">PRIVACY POLICY</Link>, INCORPORATED
            HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS OR THE PRIVACY POLICY, YOU MUST NOT
            ACCESS OR USE THE WEBSITE.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Modifications to the Terms and Conditions and to the Website</h2>
          <p className="text-gray-600">
            We reserve the right in our sole discretion to revise and update these Terms and Conditions from time to time.
            Any and all such modifications are effective immediately upon posting and apply to all access to and continued
            use of the Website. You agree to periodically review the Terms and Conditions in order to be aware of any such
            modifications and your continued use shall be your acceptance of these Terms and Conditions.
          </p>
          <p className="text-gray-600 mt-3">
            The information and material on this Website, and the Website itself, may be changed, withdrawn, or terminated
            at any time in our sole discretion without notice. We will not be liable if, for any reason, all or any part
            of the Website is restricted to users or unavailable at any time or for any period.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Intellectual Property Rights, Ownership and Grant of Limited License</h2>
          <p className="text-gray-600">
            You understand and agree that the Website and its entire contents, features, and functionality, including but
            not limited to all information, software, code, text, displays, graphics, photographs, video, audio, design,
            presentation, selection, and arrangement (collectively, the &quot;Content&quot;), are owned by Axis Meter Solutions, its
            licensors, or other providers of such material. The Content is protected in all forms by intellectual property
            laws including without limitation, copyright, trademark, patent, trade secret, and any other proprietary rights.
          </p>
          <p className="text-gray-600 mt-3">
            The Company name (Axis Meter Solutions), logo, product and service names, designs, images, and slogans are
            trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written
            permission of the Company. Other names, logos, product and service names, designs, images, and slogans mentioned
            or which appear on this Website are the trademarks of their respective owners. Use of any such property, except
            as expressly authorized, shall constitute an infringement or violation of the rights of the property owner and
            may be a violation of federal or other laws.
          </p>
          <p className="text-gray-600 mt-3">
            You are hereby granted revocable permission to use the Content of the Website for personal, non-commercial,
            lawful viewing only. This is a limited license grant, not a title transfer, and under this license you may not
            modify the Content, delete or alter any copyright, trademark, or other proprietary rights notices from copies
            of the Content, nor mirror the Content onto any other server. You have no right, title, or interest in or to
            the Website or to the Content, and all rights not expressly granted are reserved by the Company. Any use of
            the Website not expressly permitted by these Terms and Conditions is a breach of these Terms and Conditions
            and may infringe or violate copyright, trademark, and other intellectual property or other proprietary laws.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Privacy and Cookies</h2>
          <p className="text-gray-600">
            By submitting your personal information and using our Website, you consent to the collection, use, reproduction,
            hosting, transmission, and disclosure of any such user content submissions in compliance with our{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>, as we deem necessary
            for use of the Website and provision of services.
          </p>
          <p className="text-gray-600 mt-3">
            By using this Website, you are consenting to the use of cookies and other automatic data collection technologies
            which allow a server to recall previous requests or registration and/or IP addresses to analyze website use
            patterns. You can set your browser to notify you before you receive a cookie, giving you the chance to decide
            whether to accept it. You can also set your browser to delete or disable cookies at any time. If you do, however,
            you will still be able to visit our Website but some of the functions may not work adequately.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Third-Party Websites</h2>
          <p className="text-gray-600">
            For your convenience, this Website may provide links or pointers to third-party sites. We make no representations
            about any other websites that may be accessed from this Website and Axis Meter Solutions is not, in any manner,
            disseminating or endorsing such third-party sites or their services or resources. If you choose to access any
            such third-party sites, you do so at your own risk. We have no control over the contents of any such third-party
            sites and accept no responsibility for such sites or for any loss or damage that may arise from your use of them.
            You are subject to any terms and conditions of such third-party sites.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Account Set-Up and Security</h2>
          <p className="text-gray-600">
            The security of your personal information is very important to us. We use physical, electronic, and administrative
            measures designed to secure your personal information from accidental loss and from unauthorized access, use,
            alteration, and disclosure. Unfortunately, the transmission of information via the Internet is not completely
            secure. Although we do our best to protect your personal information, we cannot guarantee the security of your
            personal information transmitted to our Website. Any transmission of personal information is at your own risk.
          </p>
          <p className="text-gray-600 mt-3">
            The Website, including the Content or areas of the Website, may require user registration. It is a condition
            of your use of the Website that all the information you provide on the Website is correct, current, and complete.
            You understand and agree that should you be provided an account, your account is personal to you and you agree
            not to provide any other person with access to this Website or portions of it using your username, password,
            or other security information. You agree to notify us immediately of any unauthorized access to or use of your
            username or password or any other breach of security.
          </p>
          <p className="text-gray-600 mt-3">
            We reserve the right at any time to disable or terminate your account, any username, password, or other identifier,
            whether chosen by you or provided by us, in our sole discretion for any or no reason, including any violation
            of any provision of these Terms and Conditions.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Disclaimer</h2>
          <p className="text-gray-600">
            You understand and agree that your use of the Website and the Content is at your own risk. The Website and the
            Content are provided on an &quot;as is&quot; and &quot;as available&quot; basis, and while reasonable efforts are made to ensure
            the quality, accuracy, and timeliness of the Content and the operation of this Website, Axis Meter Solutions
            makes no representations or warranties of any kind regarding this Website and/or the Content, including without
            limitation, any representations or warranties that: (i) the Website or the Content will be accurate, complete,
            current, reliable, timely, merchantable, or suitable for any particular purpose, (ii) the operation of the
            Website will be uninterrupted or error-free, (iii) defects or errors in the Website or Content will be corrected,
            (iv) the Website or the server that makes it available will be free of viruses or other harmful components, or
            (v) the Website or the Content will not infringe any third-party intellectual property.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 uppercase text-sm">
            EXCEPT WHERE SUCH EXCLUSIONS ARE PROHIBITED BY LAW, UNDER NO CIRCUMSTANCE WILL AXIS METER SOLUTIONS NOR ITS
            AFFILIATES OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS,
            LICENSEES, SUPPLIERS, OR SUCCESSORS BE LIABLE TO YOU OR ANY OTHER PARTY FOR NEGLIGENCE, GROSS NEGLIGENCE,
            NEGLIGENT MISREPRESENTATION, FUNDAMENTAL BREACH, DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, INCLUDING ANY
            DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT LIMITED TO,
            PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS
            OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING
            NEGLIGENCE), BREACH OF CONTRACT, BREACH OF PRIVACY, OR OTHERWISE, EVEN IF THE PARTY WAS ALLEGEDLY ADVISED OR
            HAD REASON TO KNOW, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, OR RELIANCE ON, THE
            WEBSITE, ANY LINKED WEBSITES OR SUCH OTHER THIRD-PARTY WEBSITES, NOR ANY WEBSITE CONTENT, MATERIALS, POSTING,
            OR INFORMATION THEREON.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Indemnification</h2>
          <p className="text-gray-600">
            To the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless Axis Meter
            Solutions, its affiliates, and their respective directors, officers, employees, agents, service providers,
            contractors, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages,
            judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or
            relating to your breach of these Terms and Conditions or your use of any aspect of this Website and/or its
            Content, including, but not limited to, third-party sites and any use of the Content, services, and products
            other than as expressly authorized in these Terms and Conditions.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Governing Law and Choice of Forum</h2>
          <p className="text-gray-600">
            <strong>Canadian Users:</strong> The Website and these Terms and Conditions will be governed by and construed
            in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without
            giving effect to any choice or conflict of law provision. Any action or proceeding arising out of or relating
            to this Website and under these Terms and Conditions will be instituted in the courts of the Province of Ontario
            and/or the Federal Court of Canada, and each party irrevocably submits to the exclusive jurisdiction of such courts.
          </p>
          <p className="text-gray-600 mt-3">
            <strong>U.S. Users:</strong> These Terms and Conditions shall be governed by and construed in accordance with
            the laws of the State of North Carolina. Each party hereby irrevocably consents and submits to the exclusive
            jurisdiction and venue of the state and federal courts sitting and having jurisdiction in Mecklenburg County,
            North Carolina over any and all actions or proceedings arising out of or related to these Terms and Conditions.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Waiver</h2>
          <p className="text-gray-600">
            No failure to exercise, or delay in exercising, any right, remedy, power, or privilege arising from these Terms
            and Conditions operates, or may be construed, as a waiver thereof. No single or partial exercise of any right,
            remedy, power, or privilege hereunder precludes any other or further exercise thereof or the exercise of any
            other right, remedy, power, or privilege.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Severability</h2>
          <p className="text-gray-600">
            If any term or provision of these Terms and Conditions is invalid, illegal, or unenforceable in any jurisdiction,
            such invalidity, illegality, or unenforceability shall not affect any other term or provision of these Terms
            and Conditions or invalidate or render unenforceable such term or provision in any other jurisdiction.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Contact</h2>
          <p className="text-gray-600">
            Any questions, comments, or notices regarding these Terms and Conditions should be directed to:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4">
            <p className="text-gray-700 font-semibold">Axis Meter Solutions</p>
            <p className="text-gray-600 mt-2">
              Email: <a href="mailto:info@axismeter.com" className="text-accent hover:underline">info@axismeter.com</a>
            </p>
            <p className="text-gray-600">
              Phone: <a href="tel:+12267025500" className="text-accent hover:underline">226-702-5500</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
