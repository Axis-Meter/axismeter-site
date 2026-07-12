const OEB_REGISTER_URL =
  "https://www.oeb.ca/ontarios-energy-sector/list-licensed-companies";

export function OebLicenceTrust({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "bg-gray-50 py-10" : "bg-white py-16 sm:py-20"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-2xl"
            >
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
                Independently verifiable Ontario licence
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                OEB-Licensed Unit Sub-Meter Provider
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Axis Meter Solutions Inc. is licensed by the Ontario Energy Board to provide
                electricity unit sub-metering services in Ontario under licence ES-2022-0268.
                The licence applies to Ontario electricity submetering; requirements for water,
                gas, and projects outside Ontario are reviewed separately for each jurisdiction.
              </p>
              <a
                href={OEB_REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex font-semibold text-accent-dark hover:underline"
              >
                Verify Axis Meter on the OEB register →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
