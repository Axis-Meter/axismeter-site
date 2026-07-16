import type { Metadata } from "next";
import { PaySlipsClient } from "./PaySlipsClient";

export const metadata: Metadata = {
  title: "Pay slips 2026 | Axis Meter",
  description: "Private, browser-only Ontario pay-slip generator.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function PaySlipsPage() {
  return <PaySlipsClient />;
}
