import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Service Terms | Axis Meter Solutions",
  description: "Terms and conditions governing all services performed and products supplied by Axis Meter Solutions, including submetering installation, billing, and maintenance.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Terms and Conditions</h1>
          <p className="mt-2 text-gray-400 text-sm">Last updated: February 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            All services performed and products supplied by Axis Meter Solutions (&quot;Axis Meter&quot;) are subject to the
            following terms and conditions, whether detailed in a quote, proposal, purchase order, invoice, or any other
            form of communication or agreement (&quot;Proposals&quot;).
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">1. Precedence</h2>
          <p className="text-gray-600">
            In the event of any conflict or inconsistency between these terms and conditions and any other agreements,
            whether oral or written, these terms and conditions shall take precedence. This includes but is not limited
            to all previous Proposals, except where a duly executed agreement governing the delivery of the specific
            products and/or services is in force between the parties, in which case such agreement remains in place and
            in the event of any inconsistency or conflict, the duly signed agreement will prevail.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">2. Client Definition</h2>
          <p className="text-gray-600">
            The term &quot;Client&quot; shall include the Client named on the Proposal and/or any other entities, acting as a group,
            for which the intended services of these terms and conditions are provided. Any reference to the Client shall
            refer to all parties included in the group.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">3. Proposals</h2>
          <p className="text-gray-600">
            Any drawings, specifications, notes, or other data attached to any Proposal furnished by Axis Meter shall be
            deemed to be part hereof. Proposals furnished by Axis Meter are deemed accepted by the Client on the earlier
            of (i) receipt by Axis Meter of Client&apos;s written confirmation of the Proposal, based on all the terms and
            conditions stated herein, without qualification, and (ii) the date on which Axis Meter begins performance of
            and Client accepts the work.
          </p>
          <p className="text-gray-600 mt-3">
            All Proposals shall expire thirty (30) days from the date of issuance unless otherwise stated in the specific
            Proposal. All Proposals that include time or manpower support are presented only as an estimate of the amount
            of time required and are based upon information available to Axis Meter and provided by the Client at the time
            of the Proposal; such estimates do not constitute a guarantee that the required service or product will be
            delivered within the stated time period or at the stated cost. All prices and fees are quoted exclusive of any
            sales, use, or other taxes unless explicitly stated on the Proposal. Any such taxes are solely the responsibility
            of the Client.
          </p>
          <p className="text-gray-600 mt-3">
            Where the Proposal includes development by Axis Meter of a submetering design package, such package is intended
            to communicate high-level submetering requirements only and does not include preparing detailed engineering
            drawings for tender or construction unless expressly stated in the Proposal.
          </p>
          <p className="text-gray-600 mt-3">
            Any changes to the scope of work described in a Proposal must be agreed to in writing by both parties. Axis Meter
            reserves the right to adjust pricing and timelines for any changes to the original scope of work.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">4. Client Obligations</h2>
          <p className="text-gray-600">
            The Client shall cooperate with Axis Meter in order that Axis Meter may properly perform the work, including,
            without limitation, providing ready access to meter installations and providing up-to-date information regarding
            the meters and residents, as necessary. Client agrees that all installation locations and methods of installation
            will be at the sole discretion of Axis Meter technicians, if installation is included.
          </p>
          <p className="text-gray-600 mt-3">
            The Proposal assumes that electrical circuits/wiring, plumbing distribution, and HVAC distribution are as shown
            on any drawings provided by Client. Unless explicitly stated in the Proposal, the scope does not include tracing
            electrical circuits/wiring and/or pipes; if required, this work must be performed by Client&apos;s base building
            electrical and mechanical contractors.
          </p>
          <p className="text-gray-600 mt-3">
            All site work will be arranged with the primary contact at the property. If the prior arranged work is unable
            to be completed due to a lack of access or cooperation from those onsite, the visit will be rescheduled and
            Client will be charged for the same-day cancellation of services.
          </p>
          <p className="text-gray-600 mt-3">
            Costs for security escorts, if required, are excluded from quoted prices and will be billed separately. Unless
            explicitly included in the Proposal, individual meters shall be priced separately and billed to the Client for
            meter material, project management, and any labour.
          </p>
          <p className="text-gray-600 mt-3">
            For meter reading and billing services, the Client acknowledges that commencement and continuation of billing
            services is contingent upon Client providing certain data to Axis Meter, as Axis Meter requests. The Client
            further acknowledges that Axis Meter bases the calculation of tenant utility charges solely upon information
            provided by Client and the information readily apparent on the meter equipment, without investigation by Axis
            Meter. Axis Meter assumes no responsibility for inaccurate charges based upon (i) information provided by the
            owner of the property or (ii) meter information not readily observable.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">5. Standard of Care</h2>
          <p className="text-gray-600">
            For all services, Axis Meter&apos;s sole responsibility is to perform the services in a professional and workmanlike
            manner, consistent with services performed by other companies performing similar services, subject to Client
            budget and other factors which impact upon the services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">6. Subcontractors</h2>
          <p className="text-gray-600">
            Axis Meter may utilize appropriately trained and experienced subcontractors without any further specific consent
            by the Client, provided that such subcontractors remain under supervision of Axis Meter personnel.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">7. Payment</h2>
          <p className="text-gray-600">
            Unless otherwise stated on the applicable invoice, all invoices are due not later than 30 days from the date
            of the invoice. Unless otherwise stated on the invoice, overdue invoices bear interest at a rate of 2% per month,
            compounded monthly (equivalent to 26.8% per annum), from the date of invoice. Payment by credit card may incur
            an additional 3% surcharge to help offset merchant fees.
          </p>
          <p className="text-gray-600 mt-3">
            Title to the product (excluding any software components of the product or intellectual property rights) shall
            pass to the Client upon payment in full by Client for the product; provided, however, that title to any software
            components of the product and all intellectual property rights therein shall at all times remain with Axis Meter
            or its licensors.
          </p>
          <p className="text-gray-600 mt-3">
            Axis Meter may suspend performance of services if Client fails to make payment when due, and such suspension
            shall continue until all outstanding amounts are paid in full. Client shall be responsible for any additional
            costs incurred due to such suspension.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600">
            In no event shall Axis Meter, or its officers, directors, employees, or agents be liable to the Client or any
            other party for any lost profits or for any indirect, incidental, consequential, punitive, or other special
            damages suffered by Client arising out of or related to the services or products contemplated by these terms
            and conditions, even if Axis Meter or any of its respective officers, directors, employees, or agents has been
            advised of the possibility of such damages. In no event will the total liability to the Client exceed the sum
            paid to Axis Meter by the Client for the products or services which gave rise to the liability.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">9. Indemnification</h2>
          <p className="text-gray-600">
            Client agrees to indemnify and hold harmless Axis Meter and its officers, directors, employees, consultants,
            shareholders, contractors, successors, and assigns, from and against any and all liability, damages, costs, and
            expenses of any kind, including reasonable attorneys&apos; fees, resulting from acts of Client and/or residents,
            employees, or agents directly or indirectly arising out of, or in any way connected to, the work which are
            alleged or are found to be negligent, grossly negligent, reckless, and/or constitute fraud, which shall include
            any third-party claims.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">10. Disclaimer</h2>
          <p className="text-gray-600 uppercase text-sm">
            AXIS METER MAKES NO WARRANTY AND DISCLAIMS ALL REPRESENTATIONS AND CONDITIONS, EITHER EXPRESS OR IMPLIED, ORAL
            OR WRITTEN, IN FACT OR BY OPERATION OF LAW OR OTHERWISE, WITH RESPECT TO THE NON-INFRINGEMENT, MERCHANTABILITY,
            ACCURACY, RELIABILITY, OR FITNESS FOR ANY PARTICULAR PURPOSE OR USE OR OTHERWISE OF THE PRODUCTS OR SERVICES,
            OR ON ANY PARTS OR COMPONENTS OR LABOUR FURNISHED AS PART OF THE SALE AND/OR SERVICES. AXIS METER MAKES NO
            WARRANTY AND DISCLAIMS ALL REPRESENTATIONS AND CONDITIONS AS TO THE AVAILABILITY OR RESPONSE TIME OF THE SERVICE,
            THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE OR THAT THE SERVICE WILL MEET THE CLIENT&apos;S REQUIREMENTS.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">11. Force Majeure</h2>
          <p className="text-gray-600">
            Axis Meter shall not be liable for default or delay in performance if caused, directly or indirectly, by acts
            of God; war; fire; the elements; epidemic; pandemic; riot; labor disputes; sabotage; civil commotion; accidents;
            any governmental action, acts or omissions of third parties, prohibition or regulation; delay in transportation
            facilities; shortage or breakdown of or inability to obtain or non-arrival of any labor, material, or equipment
            used in the manufacture of the products; or from any cause whatsoever beyond Axis Meter&apos;s control, whether or
            not such cause be similar or dissimilar to those enumerated. Axis Meter shall use reasonable efforts to promptly
            notify the Client of any such contingency and of the contemplated effect thereof on the delivery of the products
            and services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">12. Successors and Assigns</h2>
          <p className="text-gray-600">
            These terms and conditions shall be binding upon and shall inure to the benefit of the parties hereto and their
            respective successors and assigns.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">13. Modification; Entire Agreement</h2>
          <p className="text-gray-600">
            These terms and conditions may not be modified, varied, supplemented, or amended in any respect except in writing
            executed by all parties hereto. These terms and conditions express the entire agreement and understanding between
            the parties with respect to the subject matter hereof.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">14. Severability</h2>
          <p className="text-gray-600">
            In the event that any word, phrase, clause, sentence, or other provision hereof shall violate any applicable
            statute, ordinance, or rule of law in any jurisdiction in which it is used, such provision shall be ineffective
            to the extent of such violation without invalidating any other provision hereof.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">15. Governing Law; Venue; Jurisdiction</h2>
          <p className="text-gray-600">
            These terms and conditions and the sale of any products and services hereunder shall be construed and enforced
            in accordance with the laws of the Province of Ontario and the laws of Canada applicable therein. The parties
            irrevocably submit to the exclusive jurisdiction of the courts of the Province of Ontario, Canada, for the
            resolution of any dispute, claim, or proceeding arising out of or relating to these terms and conditions.
          </p>
          <p className="text-gray-600 mt-3 uppercase text-sm">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, EACH PARTY HEREBY IRREVOCABLY AND UNCONDITIONALLY WAIVES
            ANY RIGHT THAT THEY MAY HAVE TO TRIAL BY JURY OF ANY SUCH SUIT, ACTION, OR PROCEEDING.
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
