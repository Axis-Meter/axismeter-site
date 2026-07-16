"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styles from "./PaySlipsClient.module.css";

const STORAGE_KEY = "axis-pay-slips-v1";
const PAYROLL_YEAR = 2026;
const MONTH_COUNT = 7;
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type PayBasis = "hourly" | "salary";
type VacationMode = "automatic" | "manual";

type PartyDetails = {
  legalName?: string;
  fullName?: string;
  businessNumber?: string;
  employeeId?: string;
  position?: string;
  address: string;
  cityProvincePostal: string;
};

type Profile = {
  employer: PartyDetails;
  employee: PartyDetails;
};

type LineItem = {
  id: string;
  label: string;
  amount: number;
};

type MonthRecord = {
  id: string;
  monthIndex: number;
  periodStart: string;
  periodEnd: string;
  payDate: string;
  payBasis: PayBasis;
  regularRate: number;
  regularHours: number;
  salaryAmount: number;
  overtimeHours: number;
  overtimeRate: number;
  publicHolidayPay: number;
  bonus: number;
  roomBoard: number;
  vacationPaidEachCheque: boolean;
  vacationPercent: 4 | 6;
  vacationMode: VacationMode;
  manualVacationPay: number;
  otherEarnings: LineItem[];
  cpp: number;
  ei: number;
  incomeTax: number;
  otherDeductions: LineItem[];
};

type PayrollData = {
  version: 1;
  selectedMonthId: string;
  profile: Profile;
  months: MonthRecord[];
};

type MonthCalculation = {
  regularPay: number;
  overtimePay: number;
  publicHolidayPay: number;
  bonus: number;
  roomBoard: number;
  vacationPay: number;
  otherEarnings: number;
  grossPay: number;
  cpp: number;
  ei: number;
  incomeTax: number;
  otherDeductions: number;
  totalDeductions: number;
  netPay: number;
};

type NumericCalculationKey = Exclude<keyof MonthCalculation, never>;

function roundMoney(value: number) {
  return Math.round((Number.isFinite(value) ? value : 0) * 100) / 100;
}

function money(value: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  }).format(roundMoney(value));
}

function compactNumber(value: number) {
  return new Intl.NumberFormat("en-CA", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function dateForMonth(year: number, monthIndex: number, day: number) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function lastDayOfMonth(year: number, monthIndex: number) {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

function formatDate(value: string) {
  if (!value) return "Not set";
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}

function createMonth(monthIndex: number): MonthRecord {
  const endDay = lastDayOfMonth(PAYROLL_YEAR, monthIndex);
  return {
    id: `${PAYROLL_YEAR}-${String(monthIndex + 1).padStart(2, "0")}`,
    monthIndex,
    periodStart: dateForMonth(PAYROLL_YEAR, monthIndex, 1),
    periodEnd: dateForMonth(PAYROLL_YEAR, monthIndex, endDay),
    payDate: dateForMonth(PAYROLL_YEAR, monthIndex, endDay),
    payBasis: "hourly",
    regularRate: 0,
    regularHours: 0,
    salaryAmount: 0,
    overtimeHours: 0,
    overtimeRate: 0,
    publicHolidayPay: 0,
    bonus: 0,
    roomBoard: 0,
    vacationPaidEachCheque: true,
    vacationPercent: 4,
    vacationMode: "automatic",
    manualVacationPay: 0,
    otherEarnings: [],
    cpp: 0,
    ei: 0,
    incomeTax: 0,
    otherDeductions: [],
  };
}

function createDefaultData(): PayrollData {
  const months = Array.from({ length: MONTH_COUNT }, (_, index) => createMonth(index));
  return {
    version: 1,
    selectedMonthId: months[months.length - 1].id,
    profile: {
      employer: {
        legalName: "",
        businessNumber: "",
        address: "",
        cityProvincePostal: "",
      },
      employee: {
        fullName: "",
        employeeId: "",
        position: "",
        address: "",
        cityProvincePostal: "",
      },
    },
    months,
  };
}

function sumLines(lines: LineItem[]) {
  return roundMoney(lines.reduce((total, line) => total + Number(line.amount || 0), 0));
}

function calculateMonth(record: MonthRecord): MonthCalculation {
  const regularPay = roundMoney(
    record.payBasis === "hourly"
      ? record.regularRate * record.regularHours
      : record.salaryAmount,
  );
  const overtimeRate =
    record.payBasis === "hourly" ? record.regularRate * 1.5 : record.overtimeRate;
  const overtimePay = roundMoney(overtimeRate * record.overtimeHours);
  const otherEarnings = sumLines(record.otherEarnings);
  const vacationBase = roundMoney(
    regularPay +
      overtimePay +
      record.publicHolidayPay +
      record.bonus +
      record.roomBoard +
      otherEarnings,
  );
  const vacationPay = record.vacationPaidEachCheque
    ? roundMoney(
        record.vacationMode === "automatic"
          ? vacationBase * (record.vacationPercent / 100)
          : record.manualVacationPay,
      )
    : 0;
  const grossPay = roundMoney(vacationBase + vacationPay);
  const otherDeductions = sumLines(record.otherDeductions);
  const totalDeductions = roundMoney(
    record.cpp + record.ei + record.incomeTax + otherDeductions,
  );

  return {
    regularPay,
    overtimePay,
    publicHolidayPay: roundMoney(record.publicHolidayPay),
    bonus: roundMoney(record.bonus),
    roomBoard: roundMoney(record.roomBoard),
    vacationPay,
    otherEarnings,
    grossPay,
    cpp: roundMoney(record.cpp),
    ei: roundMoney(record.ei),
    incomeTax: roundMoney(record.incomeTax),
    otherDeductions,
    totalDeductions,
    netPay: roundMoney(grossPay - totalDeductions),
  };
}

function ytdValue(
  calculations: MonthCalculation[],
  monthIndex: number,
  key: NumericCalculationKey,
) {
  let total = 0;
  for (let index = 0; index <= monthIndex; index += 1) {
    total += calculations[index][key];
  }
  return roundMoney(total);
}

function ytdLineValue(
  months: MonthRecord[],
  monthIndex: number,
  collection: "otherEarnings" | "otherDeductions",
  label: string,
) {
  const normalized = label.trim().toLocaleLowerCase();
  let total = 0;
  for (let index = 0; index <= monthIndex; index += 1) {
    for (const line of months[index][collection]) {
      if (line.label.trim().toLocaleLowerCase() === normalized) total += line.amount;
    }
  }
  return roundMoney(total);
}

function currentLineValue(lines: LineItem[], label: string) {
  const normalized = label.trim().toLocaleLowerCase();
  return roundMoney(
    lines.reduce(
      (total, line) =>
        line.label.trim().toLocaleLowerCase() === normalized ? total + line.amount : total,
      0,
    ),
  );
}

function lineLabels(
  months: MonthRecord[],
  monthIndex: number,
  collection: "otherEarnings" | "otherDeductions",
) {
  const labels = new Map<string, string>();
  for (let index = 0; index <= monthIndex; index += 1) {
    for (const line of months[index][collection]) {
      const label = line.label.trim();
      if (label) labels.set(label.toLocaleLowerCase(), label);
    }
  }
  return [...labels.values()];
}

function isMonthReady(profile: Profile, record: MonthRecord, calculation: MonthCalculation) {
  return Boolean(
    profile.employer.legalName?.trim() &&
      profile.employee.fullName?.trim() &&
      record.payDate &&
      calculation.grossPay > 0 &&
      calculation.netPay >= 0,
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
};

function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  autoComplete,
}: FieldProps) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </label>
  );
}

type MoneyFieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
};

function MoneyField({ id, label, value, onChange, suffix }: MoneyFieldProps) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span>{label}</span>
      <div className={styles.numberInputWrap}>
        <span aria-hidden="true">$</span>
        <input
          id={id}
          type="number"
          min="0"
          step="0.01"
          inputMode="decimal"
          value={value || ""}
          onChange={(event) => onChange(Number(event.target.value) || 0)}
        />
        {suffix ? <small>{suffix}</small> : null}
      </div>
    </label>
  );
}

type QuantityFieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
};

function QuantityField({ id, label, value, onChange }: QuantityFieldProps) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type="number"
        min="0"
        step="0.01"
        inputMode="decimal"
        value={value || ""}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
      />
    </label>
  );
}

function StatementRow({
  label,
  detail,
  current,
  ytd,
}: {
  label: string;
  detail?: string;
  current: number;
  ytd: number;
}) {
  return (
    <div className={styles.statementRow}>
      <div>
        <strong>{label}</strong>
        {detail ? <small>{detail}</small> : null}
      </div>
      <span>{money(current)}</span>
      <span>{money(ytd)}</span>
    </div>
  );
}

function PayStatement({
  profile,
  months,
  monthIndex,
}: {
  profile: Profile;
  months: MonthRecord[];
  monthIndex: number;
}) {
  const record = months[monthIndex];
  const calculations = months.map(calculateMonth);
  const calculation = calculations[monthIndex];
  const overtimeRate =
    record.payBasis === "hourly" ? record.regularRate * 1.5 : record.overtimeRate;
  const earningLabels = lineLabels(months, monthIndex, "otherEarnings");
  const deductionLabels = lineLabels(months, monthIndex, "otherDeductions");
  const regularDetail =
    record.payBasis === "hourly"
      ? `${compactNumber(record.regularHours)} hours × ${money(record.regularRate)}`
      : "Monthly salary";

  return (
    <article className={styles.statement} aria-label={`${MONTH_NAMES[record.monthIndex]} pay statement`}>
      <header className={styles.statementHeader}>
        <div>
          <Image
            src="/images/logo-green.png"
            alt="Axis Meter"
            width={184}
            height={42}
            className={styles.statementLogo}
          />
          <strong>{profile.employer.legalName || "Employer legal name"}</strong>
          <span>{profile.employer.address || "Employer address"}</span>
          <span>{profile.employer.cityProvincePostal || "City, province and postal code"}</span>
          {profile.employer.businessNumber ? (
            <span>Business no. {profile.employer.businessNumber}</span>
          ) : null}
        </div>
        <div className={styles.statementTitle}>
          <h2>Pay statement</h2>
          <dl>
            <div>
              <dt>Pay period</dt>
              <dd>{formatDate(record.periodStart)} – {formatDate(record.periodEnd)}</dd>
            </div>
            <div>
              <dt>Pay date</dt>
              <dd>{formatDate(record.payDate)}</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className={styles.statementEmployee}>
        <div>
          <span className={styles.eyebrow}>Employee</span>
          <strong>{profile.employee.fullName || "Employee name"}</strong>
          <span>{profile.employee.address || "Employee address"}</span>
          <span>{profile.employee.cityProvincePostal || "City, province and postal code"}</span>
        </div>
        <dl>
          {profile.employee.employeeId ? (
            <div><dt>Employee ID</dt><dd>{profile.employee.employeeId}</dd></div>
          ) : null}
          {profile.employee.position ? (
            <div><dt>Position</dt><dd>{profile.employee.position}</dd></div>
          ) : null}
          <div><dt>Pay frequency</dt><dd>Monthly</dd></div>
          <div>
            <dt>Wage basis</dt>
            <dd>{record.payBasis === "hourly" ? `${money(record.regularRate)} per hour` : "Monthly salary"}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.statementTable}>
        <div className={styles.statementTableHeading}>
          <h3>Earnings</h3>
          <span>Current</span>
          <span>Year to date</span>
        </div>
        <StatementRow
          label="Regular pay"
          detail={regularDetail}
          current={calculation.regularPay}
          ytd={ytdValue(calculations, monthIndex, "regularPay")}
        />
        {ytdValue(calculations, monthIndex, "overtimePay") > 0 ? (
          <StatementRow
            label="Overtime pay"
            detail={`${compactNumber(record.overtimeHours)} hours × ${money(overtimeRate)}`}
            current={calculation.overtimePay}
            ytd={ytdValue(calculations, monthIndex, "overtimePay")}
          />
        ) : null}
        {ytdValue(calculations, monthIndex, "vacationPay") > 0 ? (
          <StatementRow
            label={`Vacation pay (${record.vacationPercent}%)`}
            current={calculation.vacationPay}
            ytd={ytdValue(calculations, monthIndex, "vacationPay")}
          />
        ) : null}
        {ytdValue(calculations, monthIndex, "publicHolidayPay") > 0 ? (
          <StatementRow
            label="Public holiday pay"
            current={calculation.publicHolidayPay}
            ytd={ytdValue(calculations, monthIndex, "publicHolidayPay")}
          />
        ) : null}
        {ytdValue(calculations, monthIndex, "bonus") > 0 ? (
          <StatementRow
            label="Bonus"
            current={calculation.bonus}
            ytd={ytdValue(calculations, monthIndex, "bonus")}
          />
        ) : null}
        {ytdValue(calculations, monthIndex, "roomBoard") > 0 ? (
          <StatementRow
            label="Room / board allowance"
            current={calculation.roomBoard}
            ytd={ytdValue(calculations, monthIndex, "roomBoard")}
          />
        ) : null}
        {earningLabels.map((label) => (
          <StatementRow
            key={label}
            label={label}
            current={currentLineValue(record.otherEarnings, label)}
            ytd={ytdLineValue(months, monthIndex, "otherEarnings", label)}
          />
        ))}
        <div className={styles.statementTotal}>
          <strong>Gross pay</strong>
          <strong>{money(calculation.grossPay)}</strong>
          <strong>{money(ytdValue(calculations, monthIndex, "grossPay"))}</strong>
        </div>
      </section>

      <section className={styles.statementTable}>
        <div className={styles.statementTableHeading}>
          <h3>Deductions</h3>
          <span>Current</span>
          <span>Year to date</span>
        </div>
        <StatementRow label="Canada Pension Plan (CPP)" current={calculation.cpp} ytd={ytdValue(calculations, monthIndex, "cpp")} />
        <StatementRow label="Employment Insurance (EI)" current={calculation.ei} ytd={ytdValue(calculations, monthIndex, "ei")} />
        <StatementRow label="Income tax" current={calculation.incomeTax} ytd={ytdValue(calculations, monthIndex, "incomeTax")} />
        {deductionLabels.map((label) => (
          <StatementRow
            key={label}
            label={label}
            current={currentLineValue(record.otherDeductions, label)}
            ytd={ytdLineValue(months, monthIndex, "otherDeductions", label)}
          />
        ))}
        <div className={styles.statementTotal}>
          <strong>Total deductions</strong>
          <strong>{money(calculation.totalDeductions)}</strong>
          <strong>{money(ytdValue(calculations, monthIndex, "totalDeductions"))}</strong>
        </div>
      </section>

      <section className={styles.netPay}>
        <strong>Net pay</strong>
        <div><span>Current</span><strong>{money(calculation.netPay)}</strong></div>
        <div><span>Year to date</span><strong>{money(ytdValue(calculations, monthIndex, "netPay"))}</strong></div>
      </section>

      <footer className={styles.statementFooter}>
        <span>This statement was generated electronically and does not require a signature.</span>
        <span>Keep for your records.</span>
      </footer>
    </article>
  );
}

export function PaySlipsClient() {
  const [data, setData] = useState<PayrollData>(createDefaultData);
  const [hydrated, setHydrated] = useState(false);
  const [saveState, setSaveState] = useState<"loading" | "saving" | "saved" | "unavailable">("loading");
  const [printMode, setPrintMode] = useState<"selected" | "all">("selected");

  useEffect(() => {
    document.body.classList.add("pay-slips-mode");
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as PayrollData;
        if (parsed.version === 1 && parsed.months?.length) setData(parsed);
      }
      setSaveState("saved");
    } catch {
      setSaveState("unavailable");
    } finally {
      setHydrated(true);
    }

    const resetPrintMode = () => setPrintMode("selected");
    window.addEventListener("afterprint", resetPrintMode);
    return () => {
      document.body.classList.remove("pay-slips-mode");
      window.removeEventListener("afterprint", resetPrintMode);
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    setSaveState("saving");
    const timeout = window.setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setSaveState("saved");
      } catch {
        setSaveState("unavailable");
      }
    }, 350);
    return () => window.clearTimeout(timeout);
  }, [data, hydrated]);

  const selectedIndex = Math.max(
    0,
    data.months.findIndex((month) => month.id === data.selectedMonthId),
  );
  const selectedMonth = data.months[selectedIndex];
  const calculations = useMemo(() => data.months.map(calculateMonth), [data.months]);
  const selectedCalculation = calculations[selectedIndex];
  const readyCount = data.months.reduce(
    (count, month, index) =>
      count + (isMonthReady(data.profile, month, calculations[index]) ? 1 : 0),
    0,
  );

  function updateParty(
    party: "employer" | "employee",
    field: keyof PartyDetails,
    value: string,
  ) {
    setData((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [party]: { ...current.profile[party], [field]: value },
      },
    }));
  }

  function updateSelectedMonth<K extends keyof MonthRecord>(field: K, value: MonthRecord[K]) {
    setData((current) => ({
      ...current,
      months: current.months.map((month) =>
        month.id === current.selectedMonthId ? { ...month, [field]: value } : month,
      ),
    }));
  }

  function updateLine(
    collection: "otherEarnings" | "otherDeductions",
    lineId: string,
    field: "label" | "amount",
    value: string | number,
  ) {
    setData((current) => ({
      ...current,
      months: current.months.map((month) =>
        month.id === current.selectedMonthId
          ? {
              ...month,
              [collection]: month[collection].map((line) =>
                line.id === lineId ? { ...line, [field]: value } : line,
              ),
            }
          : month,
      ),
    }));
  }

  function addLine(collection: "otherEarnings" | "otherDeductions") {
    const line: LineItem = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      label: "",
      amount: 0,
    };
    updateSelectedMonth(collection, [...selectedMonth[collection], line]);
  }

  function removeLine(collection: "otherEarnings" | "otherDeductions", lineId: string) {
    updateSelectedMonth(
      collection,
      selectedMonth[collection].filter((line) => line.id !== lineId),
    );
  }

  function requestPrint(mode: "selected" | "all") {
    setPrintMode(mode);
    window.setTimeout(() => window.print(), 100);
  }

  function resetLocalData() {
    if (!window.confirm("Clear all locally saved pay-slip information on this device?")) return;
    window.localStorage.removeItem(STORAGE_KEY);
    setData(createDefaultData());
  }

  return (
    <div className={`${styles.root} ${printMode === "all" ? styles.printAll : styles.printSelected}`}>
      <div className={styles.screenOnly}>
        <header className={styles.appHeader}>
          <div className={styles.brandBlock}>
            <Image src="/images/logo-green.png" alt="Axis Meter" width={194} height={46} priority />
            <span aria-hidden="true" className={styles.headerDivider} />
            <div>
              <strong>Pay slips {PAYROLL_YEAR}</strong>
              <span>Ontario monthly statements</span>
            </div>
          </div>
          <div className={styles.headerStatus} aria-live="polite">
            <strong>{saveState === "saving" ? "Saving locally" : saveState === "unavailable" ? "Local save unavailable" : "Saved on this device"}</strong>
            <span>Private · Local only</span>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.secondaryButton} type="button" onClick={() => requestPrint("selected")}>Print selected slip</button>
            <button className={styles.primaryButton} type="button" onClick={() => requestPrint("all")}>Print all {data.months.length} slips</button>
          </div>
        </header>

        <main className={styles.workspace}>
          <section className={styles.yearSummary} aria-label="2026 pay-slip progress">
            <div>
              <span>Year progress</span>
              <strong>{readyCount} of {data.months.length} slips ready</strong>
            </div>
            <button type="button" onClick={resetLocalData} className={styles.textButton}>Clear local data</button>
          </section>

          <nav className={styles.monthStrip} aria-label="Select pay month">
            {data.months.map((month, index) => {
              const ready = isMonthReady(data.profile, month, calculations[index]);
              const selected = month.id === data.selectedMonthId;
              return (
                <button
                  key={month.id}
                  type="button"
                  className={selected ? styles.selectedMonth : ""}
                  aria-current={selected ? "step" : undefined}
                  onClick={() => setData((current) => ({ ...current, selectedMonthId: month.id }))}
                >
                  <strong>{MONTH_NAMES[month.monthIndex].slice(0, 3)} {PAYROLL_YEAR}</strong>
                  <span>{ready ? "Ready" : "Needs info"}</span>
                </button>
              );
            })}
          </nav>

          <div className={styles.editorGrid}>
            <div className={styles.formColumn}>
              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <span>1</span>
                  <div><h2>Employer & employee</h2><p>These details carry across every monthly statement.</p></div>
                </div>
                <div className={styles.partyGrid}>
                  <fieldset>
                    <legend>Employer</legend>
                    <TextField id="employer-name" label="Legal name" value={data.profile.employer.legalName || ""} onChange={(value) => updateParty("employer", "legalName", value)} autoComplete="organization" />
                    <TextField id="employer-address" label="Street address" value={data.profile.employer.address} onChange={(value) => updateParty("employer", "address", value)} autoComplete="street-address" />
                    <TextField id="employer-city" label="City, province and postal code" value={data.profile.employer.cityProvincePostal} onChange={(value) => updateParty("employer", "cityProvincePostal", value)} placeholder="Toronto, ON M5V 2T6" />
                    <TextField id="business-number" label="CRA business number (optional)" value={data.profile.employer.businessNumber || ""} onChange={(value) => updateParty("employer", "businessNumber", value)} />
                  </fieldset>
                  <fieldset>
                    <legend>Employee</legend>
                    <TextField id="employee-name" label="Full name" value={data.profile.employee.fullName || ""} onChange={(value) => updateParty("employee", "fullName", value)} autoComplete="name" />
                    <TextField id="employee-address" label="Street address" value={data.profile.employee.address} onChange={(value) => updateParty("employee", "address", value)} autoComplete="street-address" />
                    <TextField id="employee-city" label="City, province and postal code" value={data.profile.employee.cityProvincePostal} onChange={(value) => updateParty("employee", "cityProvincePostal", value)} placeholder="Toronto, ON M5V 2T6" />
                    <div className={styles.splitFields}>
                      <TextField id="employee-id" label="Employee ID (optional)" value={data.profile.employee.employeeId || ""} onChange={(value) => updateParty("employee", "employeeId", value)} />
                      <TextField id="employee-position" label="Position (optional)" value={data.profile.employee.position || ""} onChange={(value) => updateParty("employee", "position", value)} />
                    </div>
                  </fieldset>
                </div>
                <p className={styles.privacyNote}>For privacy, this tool does not ask for or print the employee&apos;s SIN.</p>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <span>2</span>
                  <div><h2>{MONTH_NAMES[selectedMonth.monthIndex]} earnings</h2><p>Regular, overtime and vacation pay recalculate automatically.</p></div>
                </div>
                <div className={styles.dateGrid}>
                  <label className={styles.field} htmlFor="period-start"><span>Period start</span><input id="period-start" type="date" value={selectedMonth.periodStart} onChange={(event) => updateSelectedMonth("periodStart", event.target.value)} /></label>
                  <label className={styles.field} htmlFor="period-end"><span>Period end</span><input id="period-end" type="date" value={selectedMonth.periodEnd} onChange={(event) => updateSelectedMonth("periodEnd", event.target.value)} /></label>
                  <label className={styles.field} htmlFor="pay-date"><span>Pay date</span><input id="pay-date" type="date" value={selectedMonth.payDate} onChange={(event) => updateSelectedMonth("payDate", event.target.value)} /></label>
                </div>
                <div className={styles.payBasisRow}>
                  <label className={styles.field} htmlFor="pay-basis"><span>Pay basis</span><select id="pay-basis" value={selectedMonth.payBasis} onChange={(event) => updateSelectedMonth("payBasis", event.target.value as PayBasis)}><option value="hourly">Hourly</option><option value="salary">Monthly salary</option></select></label>
                  {selectedMonth.payBasis === "hourly" ? (
                    <>
                      <MoneyField id="regular-rate" label="Hourly rate" value={selectedMonth.regularRate} onChange={(value) => updateSelectedMonth("regularRate", value)} />
                      <QuantityField id="regular-hours" label="Regular hours" value={selectedMonth.regularHours} onChange={(value) => updateSelectedMonth("regularHours", value)} />
                    </>
                  ) : (
                    <MoneyField id="salary-amount" label="Monthly salary paid" value={selectedMonth.salaryAmount} onChange={(value) => updateSelectedMonth("salaryAmount", value)} />
                  )}
                </div>
                <div className={styles.earningsGrid}>
                  <QuantityField id="overtime-hours" label="Overtime hours" value={selectedMonth.overtimeHours} onChange={(value) => updateSelectedMonth("overtimeHours", value)} />
                  {selectedMonth.payBasis === "hourly" ? (
                    <div className={styles.calculatedField}><span>Overtime rate (1.5×)</span><strong>{money(selectedMonth.regularRate * 1.5)}</strong></div>
                  ) : (
                    <MoneyField id="overtime-rate" label="Overtime hourly rate" value={selectedMonth.overtimeRate} onChange={(value) => updateSelectedMonth("overtimeRate", value)} />
                  )}
                  <MoneyField id="holiday-pay" label="Public holiday pay" value={selectedMonth.publicHolidayPay} onChange={(value) => updateSelectedMonth("publicHolidayPay", value)} />
                  <MoneyField id="bonus" label="Bonus" value={selectedMonth.bonus} onChange={(value) => updateSelectedMonth("bonus", value)} />
                  <MoneyField id="room-board" label="Room / board allowance" value={selectedMonth.roomBoard} onChange={(value) => updateSelectedMonth("roomBoard", value)} />
                </div>

                <div className={styles.vacationPanel}>
                  <label className={styles.checkboxField}>
                    <input type="checkbox" checked={selectedMonth.vacationPaidEachCheque} onChange={(event) => updateSelectedMonth("vacationPaidEachCheque", event.target.checked)} />
                    <span>Pay vacation pay on this statement</span>
                  </label>
                  {selectedMonth.vacationPaidEachCheque ? (
                    <div className={styles.vacationControls}>
                      <label className={styles.field} htmlFor="vacation-percent"><span>Vacation rate</span><select id="vacation-percent" value={selectedMonth.vacationPercent} onChange={(event) => updateSelectedMonth("vacationPercent", Number(event.target.value) as 4 | 6)}><option value={4}>4%</option><option value={6}>6%</option></select></label>
                      <label className={styles.field} htmlFor="vacation-mode"><span>Calculation</span><select id="vacation-mode" value={selectedMonth.vacationMode} onChange={(event) => updateSelectedMonth("vacationMode", event.target.value as VacationMode)}><option value="automatic">Automatic</option><option value="manual">Manual override</option></select></label>
                      {selectedMonth.vacationMode === "manual" ? (
                        <MoneyField id="manual-vacation" label="Vacation pay" value={selectedMonth.manualVacationPay} onChange={(value) => updateSelectedMonth("manualVacationPay", value)} />
                      ) : (
                        <div className={styles.calculatedField}><span>Vacation pay</span><strong>{money(selectedCalculation.vacationPay)}</strong></div>
                      )}
                    </div>
                  ) : null}
                  <p>Automatic vacation pay uses all listed non-vacation earnings. Adjust manually if an earning is excluded under the employee&apos;s circumstances.</p>
                </div>

                <div className={styles.lineItems}>
                  <div className={styles.lineItemsHeading}><strong>Other earnings</strong><button type="button" className={styles.textButton} onClick={() => addLine("otherEarnings")}>Add earning</button></div>
                  {selectedMonth.otherEarnings.map((line) => (
                    <div className={styles.lineItem} key={line.id}>
                      <input aria-label="Earning purpose" value={line.label} placeholder="Commission or other earning" onChange={(event) => updateLine("otherEarnings", line.id, "label", event.target.value)} />
                      <div className={styles.numberInputWrap}><span aria-hidden="true">$</span><input aria-label={`${line.label || "Other earning"} amount`} type="number" min="0" step="0.01" value={line.amount || ""} onChange={(event) => updateLine("otherEarnings", line.id, "amount", Number(event.target.value) || 0)} /></div>
                      <button type="button" className={styles.removeButton} onClick={() => removeLine("otherEarnings", line.id)}>Remove</button>
                    </div>
                  ))}
                </div>
                <div className={styles.formTotal}><span>Gross pay</span><strong>{money(selectedCalculation.grossPay)}</strong></div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <span>3</span>
                  <div><h2>Deductions</h2><p>Enter statutory amounts from your CRA payroll calculation.</p></div>
                </div>
                <div className={styles.deductionsGrid}>
                  <MoneyField id="cpp" label="CPP" value={selectedMonth.cpp} onChange={(value) => updateSelectedMonth("cpp", value)} />
                  <MoneyField id="ei" label="EI" value={selectedMonth.ei} onChange={(value) => updateSelectedMonth("ei", value)} />
                  <MoneyField id="income-tax" label="Income tax" value={selectedMonth.incomeTax} onChange={(value) => updateSelectedMonth("incomeTax", value)} />
                </div>
                <div className={styles.lineItems}>
                  <div className={styles.lineItemsHeading}><strong>Other authorized deductions</strong><button type="button" className={styles.textButton} onClick={() => addLine("otherDeductions")}>Add deduction</button></div>
                  {selectedMonth.otherDeductions.map((line) => (
                    <div className={styles.lineItem} key={line.id}>
                      <input aria-label="Deduction purpose" value={line.label} placeholder="Purpose, such as union dues" onChange={(event) => updateLine("otherDeductions", line.id, "label", event.target.value)} />
                      <div className={styles.numberInputWrap}><span aria-hidden="true">$</span><input aria-label={`${line.label || "Other deduction"} amount`} type="number" min="0" step="0.01" value={line.amount || ""} onChange={(event) => updateLine("otherDeductions", line.id, "amount", Number(event.target.value) || 0)} /></div>
                      <button type="button" className={styles.removeButton} onClick={() => removeLine("otherDeductions", line.id)}>Remove</button>
                    </div>
                  ))}
                </div>
                <div className={styles.craNotice}>
                  <div><strong>CPP, EI and income tax are not estimated here.</strong><span>Use the CRA calculator, then enter the confirmed amounts above.</span></div>
                  <a href="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/payroll-deductions-online-calculator.html" target="_blank" rel="noopener noreferrer">Open CRA PDOC</a>
                </div>
                <div className={styles.formTotal}><span>Total deductions</span><strong>{money(selectedCalculation.totalDeductions)}</strong></div>
                {selectedCalculation.netPay < 0 ? <p className={styles.errorMessage}>Deductions exceed gross pay. Review the amounts before issuing this statement.</p> : null}
              </section>
            </div>

            <aside className={styles.previewColumn}>
              <div className={styles.previewHeading}>
                <div><span>Live preview</span><strong>{MONTH_NAMES[selectedMonth.monthIndex]} pay statement</strong></div>
                <span className={isMonthReady(data.profile, selectedMonth, selectedCalculation) ? styles.readyPill : styles.draftPill}>{isMonthReady(data.profile, selectedMonth, selectedCalculation) ? "Ready" : "Needs info"}</span>
              </div>
              <PayStatement profile={data.profile} months={data.months} monthIndex={selectedIndex} />
              <p className={styles.previewNote}>Review the pay-period dates, wage calculation and every deduction before printing.</p>
            </aside>
          </div>
        </main>
      </div>

      <div className={styles.printSelectedOnly}>
        <PayStatement profile={data.profile} months={data.months} monthIndex={selectedIndex} />
      </div>
      <div className={styles.printAllOnly}>
        {data.months.map((month, index) => (
          <PayStatement key={month.id} profile={data.profile} months={data.months} monthIndex={index} />
        ))}
      </div>
    </div>
  );
}
