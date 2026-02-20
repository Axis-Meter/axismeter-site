import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Services Agreement — Axis Meter Solutions",
  description: "Customer Services Agreement governing the use of utility submetering, billing, and account management services provided by Axis Meter Solutions.",
};

export default function CustomerServicesAgreementPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Customer Services Agreement</h1>
          <p className="mt-2 text-gray-400 text-sm">Last updated: February 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            The terms and conditions of this customer services agreement (&quot;Agreement&quot;) create a legally binding agreement
            between you (the &quot;Customer&quot;) and Axis Meter Solutions (&quot;Axis Meter&quot;) governing the Customer&apos;s use of the
            Services (as defined below). In the event of a conflict between the Agreement and any applicable laws, such
            applicable laws shall prevail. Please read the following terms and conditions carefully.
          </p>
          <p className="text-gray-600 mt-3">
            By opening an account with Axis Meter, the Customer acknowledges and agrees to the terms and conditions of
            this Agreement. Please visit our{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link> for more information
            about how we process your personal information and your data privacy rights.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 text-sm text-gray-600">
            <strong>Definitions:</strong>
            <ul className="mt-2 space-y-1">
              <li>&quot;Service Unit&quot; means the residential or commercial unit, and/or parking unit, as applicable, located at the Service Address.</li>
              <li>&quot;Premises&quot; means the building at the Service Address in which the Service Unit is located.</li>
              <li>&quot;Commodity&quot; means electricity, gas, water, and/or thermal energy, as applicable.</li>
              <li>&quot;Services&quot; means the meter reading, billing, account management, and related services provided by Axis Meter.</li>
              <li>&quot;Service Fees&quot; means the administration fee and other charges and fees for the Services provided by Axis Meter.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">1. Services Provided</h2>
          <p className="text-gray-600 mb-3">The Customer acknowledges that Axis Meter will provide the following Services to the Service Unit:</p>
          <ul className="space-y-2 text-gray-600">
            <li>(a) Axis Meter shall measure, read, record, and/or allocate the Commodity use for the Service Unit, as applicable.</li>
            <li>(b) If Axis Meter owns any submetering system located at the Premises, Axis Meter shall ensure such submetering system is operating properly.</li>
            <li>(c) Axis Meter shall, monthly, prepare invoices showing the amount of the Commodity consumed at or allocated to the Service Unit, as applicable, and the amount payable by the Customer for the Commodity consumed or allocated and the Services. In the event that consumption is measured by a submetering system and meter readings are not scheduled or available, Axis Meter reserves the right to issue invoices based on estimates.</li>
            <li>(d) Axis Meter shall issue monthly invoices by email, mail, or make monthly invoices available over the internet through the Customer portal at <a href="https://myaccount.axismeter.com" className="text-accent hover:underline">myaccount.axismeter.com</a>. Unless otherwise specified by the Customer, Axis Meter shall email the monthly invoices to the Customer at the email address provided by the Customer.</li>
            <li>(e) Axis Meter shall provide customer service in respect of general inquiries and records retrieval. Specific services may be provided on a fee-for-service basis in accordance with applicable laws.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">2. Consent to Services and Payment of Service Fees</h2>
          <p className="text-gray-600">
            The Customer consents to the provision of the Services and agrees to pay the Service Fees for the Services
            provided by Axis Meter under this Agreement as set forth in the invoices delivered by Axis Meter and in
            accordance with applicable laws.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">3. Property Owner Authorization</h2>
          <p className="text-gray-600">
            The Customer acknowledges that the developer, the owner, the condominium corporation, strata corporation,
            co-operative corporation, and/or the authorized agent, as applicable, of the Premises has contracted with
            Axis Meter for the provision of the Services, including meter reading, billing, and/or collection services.
            The Customer further acknowledges and consents to such parties sharing with Axis Meter information to establish
            an account for the Customer including, but not limited to, the Customer&apos;s contact information (name, unit
            number, address, email address, and telephone number) and the occupancy and/or tenancy date.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">4. Effective Date and Account Setup</h2>
          <p className="text-gray-600">
            The Customer agrees to pay the Service Fees and all costs and expenses relating to the supply of the Commodity
            to the Service Unit as of the effective date (which is the earlier of the interim occupancy date, closing date,
            occupancy date, or conversion date, as applicable, and/or the date when Axis Meter has installed any submetering
            system in respect of the Service Unit). In the event that the Customer does not have an account with Axis Meter,
            the Customer agrees to contact Axis Meter by telephone at <a href="tel:+12267025500" className="text-accent hover:underline">226-702-5500</a> or
            by email at <a href="mailto:info@axismeter.com" className="text-accent hover:underline">info@axismeter.com</a> to
            set up an account on or before the effective date.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">5. Owner Responsibility for Tenant Accounts</h2>
          <p className="text-gray-600">
            In the event the Customer is the purchaser/owner of the Service Unit and such Service Unit is rented out by
            the Customer and the costs and expenses relating to the supply of the Commodity are not included in the rent,
            the Customer may arrange for its tenant to establish an account with Axis Meter. The Customer acknowledges and
            agrees that they shall be responsible in the event that the tenant fails to pay any amount owing to Axis Meter
            relating to such Service Unit.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">6. Infrastructure Responsibility</h2>
          <p className="text-gray-600">
            The Customer acknowledges that Axis Meter is not the owner of, nor is it responsible for the operation or
            condition of the electrical, gas, water, and mechanical infrastructure at the Premises (other than any submetering
            system owned by Axis Meter), including but not limited to all wires, switches, valves, piping, regulators,
            outlets, electrical panels, or fixtures. Furthermore, Axis Meter is not in any way in control of or responsible
            for the supply of the Commodity to the property on which the Premises is situated.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">7. Modifications to Downstream Systems</h2>
          <p className="text-gray-600">
            The Customer shall not change or modify, or permit any other person to change or modify, any of the downstream
            piping or appliances from the submetering system, unless it has provided Axis Meter with at least sixty (60)
            days&apos; prior written notice of such change or modification, including any applicable drawings. Should the Customer
            become aware of any such change or modification by any person other than Axis Meter, the Customer shall notify
            Axis Meter forthwith. Axis Meter shall have the right to require reasonable modifications to accommodate the
            submetering system and/or ensure its safe and continued operation. In the event that such change or modification
            affects the operation of the submetering system, the Customer shall be responsible for all costs and expenses
            incurred by Axis Meter for any resulting work.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">8. Maintenance and Repair</h2>
          <p className="text-gray-600">
            If Axis Meter owns the submetering system, Axis Meter shall be responsible for the maintenance and repair of
            such submetering system. If, in response to a request by the Customer for an inspection, Axis Meter determines
            that the submetering system did not require any maintenance or repair, the Customer may be responsible for the
            cost of such inspection, in accordance with applicable laws. The Customer will not, directly or indirectly,
            interfere with the operation of, or remove, relocate, suspend, disconnect, alter, terminate, or damage Axis
            Meter&apos;s submetering system and agrees to indemnify Axis Meter in respect of any losses, costs, expenses, or
            damages caused thereby.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">9. Access to Submetering System</h2>
          <p className="text-gray-600">
            The Customer agrees to provide Axis Meter, its agents, contractors, and employees and any other persons
            authorized by Axis Meter with access to any submetering system and Service Unit at all reasonable times and
            with reasonable notice for purposes of inspection, maintenance, repair, or removal of the submetering system
            and the provision of the Services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">10. Charges for Commodity</h2>
          <p className="text-gray-600">
            The Customer agrees that the charges for the Commodity supplied to the Service Unit will comprise of: (i) in
            the event that consumption is measured by the submetering system, Commodity consumption charges based on
            measurements by the submetering system for the Service Unit, or in the event that Commodity charges are allocated
            to the Service Unit, such charges will be allocated based on square footage, occupancy, occupancy factor, number
            of bathrooms or plumbing fixtures, or as otherwise determined by the owner of the Premises; (ii) the Service
            Fees; and (iii) other charges which may be payable from time to time, including but not limited to a pass-through
            of all or a portion of a rental charge for equipment. The Customer acknowledges and agrees that these charges
            are based on rates which may change at any time in accordance with applicable laws.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">11. Payment Terms</h2>
          <p className="text-gray-600">
            The Customer agrees to pay on or before the due date the amounts owing under this Agreement in the manner
            specified on each invoice. Interest will be charged on any amount not received by the due date at the rate of
            1.5% compounded monthly (19.56% per annum) from the due date until receipt of such amount and all accrued
            interest. The Customer will be responsible for any collection costs. All dollar amounts referred to in this
            Agreement are in lawful money of Canada and are exclusive of applicable taxes, such as the Goods and Services
            Tax and the Provincial Sales Tax (which shall be paid by the Customer). Axis Meter shall have the right to
            report payment history about the Customer&apos;s account to credit reporting agencies to manage collections and
            business risks.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">12. Non-Payment and Disconnection</h2>
          <p className="text-gray-600">
            If the Customer fails to pay electricity or electricity-related charges due to Axis Meter under this Agreement,
            then Axis Meter, after lawful demand and notice to the Customer and subject to applicable laws, shall be entitled,
            in addition to any other remedies available to it at common law or pursuant to any statute, to take any action(s)
            based on such non-payment, including but not limited to disconnection, termination, or limitation of the delivery
            of electricity to the Service Unit until such time as such charges are paid in full.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">13. Security Deposit</h2>
          <p className="text-gray-600">
            The Customer agrees to be subject to the security deposit policy of Axis Meter (which, with respect to electricity
            submetering services in Ontario, is consistent with Ontario Energy Board requirements). A security deposit may
            be included in invoice(s) issued to the Customer, in accordance with applicable laws, if the Customer does not
            satisfy the conditions for waiver of a security deposit. Axis Meter may, at its own discretion, waive the
            requirement for a security deposit.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">14. Force Majeure</h2>
          <p className="text-gray-600">
            Axis Meter shall not be in default of the performance of any of its obligations or covenants contained in this
            Agreement during any period when Axis Meter is prevented from such performance by reason of a strike, lock-out,
            labour disruption, unavailability of materials, by operation of law, fire, civil insurrection, flood, epidemic,
            pandemic, act of God, act of terrorism, or any other condition which is beyond the control of Axis Meter, and
            any period stipulated for the performance of any such obligation shall be extended accordingly. For greater
            certainty, financial inability shall not constitute a force majeure event.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">15. Single Invoice and Payment Application</h2>
          <p className="text-gray-600">
            The Customer acknowledges that Axis Meter may issue a single invoice for the provision of the Services. In the
            event the Customer makes a partial payment of any such single invoice, Axis Meter shall, in accordance with
            applicable laws, apply such partial payment towards amounts owing in respect of electricity submetering services
            first, and then Axis Meter has the sole discretion to apply the balance towards amounts owing in respect of any
            water, gas, or thermal energy submetering services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">16. Limitation of Liability</h2>
          <p className="text-gray-600">
            Axis Meter shall not be liable under any circumstances whatsoever for any loss of profits or revenues, business
            interruption loss, loss of contract, or loss of goodwill, or for any direct, indirect, consequential, incidental,
            or special damages, including but not limited to punitive or exemplary damages, whether any of the said liabilities,
            losses, or damages arise in contract, tort, or otherwise, whether or not such damages were foreseeable, and even
            if the Customer has been advised of the possibility of such damages. In no event shall the aggregate liability
            of Axis Meter arising out of or related to this Agreement exceed the aggregate amount of Service Fees paid to
            Axis Meter during the twelve (12) month period prior to the date of any claim by the Customer for damages.
            This limitation of liability will apply to the fullest extent permitted by law and will survive the termination
            of this Agreement.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">17. Disclosure of Information</h2>
          <p className="text-gray-600">
            Consistent with the terms of Axis Meter&apos;s{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>, Axis Meter may
            disclose information about the Customer, the Service Unit, and Axis Meter&apos;s dealings with the Customer, including
            consumption, allocation, and payment information, to each of the landlord, property manager, developer, condominium
            corporation, and/or owner of the Premises (each an &quot;Information Recipient&quot;). The Customer hereby consents to
            such disclosure. Axis Meter is not responsible or liable for the use, disclosure, retention, or handling of the
            disclosed information by any Information Recipient.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">18. Governing Law</h2>
          <p className="text-gray-600">
            This Agreement shall be construed and enforced in accordance with the laws of the Province of Ontario and the
            laws of Canada applicable therein and shall be treated in all respects as an Ontario contract.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">19. Liability of Officers and Employees</h2>
          <p className="text-gray-600">
            No director, trustee, officer, shareholder, employee, agent, or other contractor of Axis Meter shall be liable
            at law to the Customer, an occupier of the Service Unit, or a visitor to the Premises or Service Unit for any
            claim for damages or other legal remedy which is based in any way on the consequences flowing from utility
            disconnection due to the Customer&apos;s failure to pay invoices or otherwise.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">20. Move-Out Procedure</h2>
          <p className="text-gray-600">
            The Customer shall provide written notice to Axis Meter of their intent to sell, rent, vacate, and/or assign
            the Service Unit and of their forwarding address. This notice must be provided to Axis Meter at least thirty
            (30) days prior to the Customer vacating the Service Unit and must also specify the date upon which the Customer
            intends to vacate. Upon the Customer vacating the Service Unit, Axis Meter will complete a final reading for
            billing purposes. The Customer will be mailed a final invoice within fifteen (15) days of the final reading and
            any deposit held by Axis Meter shall be applied towards payment of the invoice. Where there is a balance left
            to the credit of the Customer after payment of the invoice, the balance of the deposit shall be forwarded by
            Axis Meter to the Customer. Where the Customer fails to comply with this clause, the Customer&apos;s obligation to
            pay Axis Meter for the Services shall continue until Axis Meter has completed a final reading and the final
            invoice is paid.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">21. Termination</h2>
          <p className="text-gray-600">
            The Services provided under this Agreement may be terminated by Axis Meter by giving the Customer notice thereof,
            in which case Axis Meter may conduct a final reading on the termination date and render a final invoice in respect
            of the Services. The Customer may terminate this Agreement only in accordance with the move-out procedure set
            out in Section 20 above.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">22. Communications Consent</h2>
          <p className="text-gray-600">
            Consistent with the terms of Axis Meter&apos;s{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>, the Customer hereby
            consents to recurring account-related phone calls, text messages (SMS), emails, and/or mail from Axis Meter
            and its authorized service providers. For SMS campaigns: message and data rates may apply, reply STOP to opt-out,
            reply HELP for help.
          </p>
          <p className="text-gray-600 mt-3">
            From time to time, Axis Meter may provide the Customer with information about other services or products that
            may be of interest, and may also periodically provide information concerning utility cost savings and conservation
            measures to assist in reducing consumption and related costs. The Customer may, by giving Axis Meter sixty (60)
            days prior written notice, withdraw such consent as detailed in Axis Meter&apos;s Privacy Policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">23. Privacy</h2>
          <p className="text-gray-600">
            The Customer consents to Axis Meter&apos;s collection, use, disclosure, retention, handling, or other processing of
            the Customer&apos;s personal information in accordance with Axis Meter&apos;s{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link> and as otherwise
            permitted by applicable law.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">24. Severability</h2>
          <p className="text-gray-600">
            If any provision of this Agreement or the application thereof to any person or circumstance is held to be invalid
            or unenforceable, said provision shall be severed and the remainder of this Agreement shall continue to remain
            in full force and effect.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">25. Successors and Assigns</h2>
          <p className="text-gray-600">
            Everything contained in this Agreement shall extend to and be binding upon the respective heirs, executors,
            administrators, successors, and permitted assigns of each party hereto. Axis Meter may assign any of its rights
            and obligations under this Agreement and upon such assignment, Axis Meter is released from any further obligations
            to the Customer under this Agreement. All obligations of the Customers under this Agreement shall be deemed
            joint and several obligations and provisions of this Agreement relating to payment for the Services shall be
            binding on the Customer after the date the Customer vacates the Service Unit or terminates this Agreement and
            shall remain binding until such time as all payments required to be made under this Agreement have been paid.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">26. Entire Agreement</h2>
          <p className="text-gray-600">
            Subject to applicable laws, this Agreement constitutes the entire agreement between the parties, and the Customer
            acknowledges that there are no oral or written agreements, representations, or undertakings whatsoever, and no
            subsequent or concurrent alteration or waiver of the terms of this Agreement shall be valid unless it be in
            writing and signed by the parties or their authorized representatives; provided, however, the Customer acknowledges
            and agrees that Axis Meter reserves the right at any time to modify and change this Agreement without notice to
            the Customer by posting updated terms and conditions on its website and such amendments are effective as of the
            date of posting. The Customer&apos;s continued use of the Services will be deemed acceptance of the updated terms
            and conditions.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">27. Notices</h2>
          <p className="text-gray-600">
            Any notice required or permitted under this Agreement may be given by Axis Meter to the Customer by ordinary
            mail sent to the Premises (or the mailing address, in the event a mailing address is provided by the Customer),
            in which case the notice shall be deemed to have been received in accordance with applicable laws. The Customer
            shall give any notices to Axis Meter by email or ordinary mail to:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4">
            <p className="text-gray-700 font-semibold">Axis Meter Solutions</p>
            <p className="text-gray-600 mt-2">
              Email: <a href="mailto:info@axismeter.com" className="text-accent hover:underline">info@axismeter.com</a>
            </p>
            <p className="text-gray-600">
              Phone: <a href="tel:+12267025500" className="text-accent hover:underline">226-702-5500</a>
            </p>
            <p className="text-gray-600">
              Portal: <a href="https://myaccount.axismeter.com" className="text-accent hover:underline">myaccount.axismeter.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
