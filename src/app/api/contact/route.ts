import { NextRequest, NextResponse } from "next/server";

type Attribution = {
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  utmContent?: unknown;
  landingPage?: unknown;
  referrer?: unknown;
  isChatGptReferral?: unknown;
  contactSource?: unknown;
};

function text(value: unknown, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function tableRow(label: string, value: string) {
  if (!value) return "";
  return `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">${escapeHtml(label)}</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = text(body.name, 120);
    const email = text(body.email, 254);
    const phone = text(body.phone, 50);
    const propertyType = text(body.propertyType, 100);
    const units = text(body.units, 20);
    const message = text(body.message, 5000);
    const rawAttribution = (body.attribution ?? {}) as Attribution;
    const attribution = {
      utmSource: text(rawAttribution.utmSource, 100),
      utmMedium: text(rawAttribution.utmMedium, 100),
      utmCampaign: text(rawAttribution.utmCampaign, 200),
      utmContent: text(rawAttribution.utmContent, 200),
      landingPage: text(rawAttribution.landingPage, 1000),
      referrer: text(rawAttribution.referrer, 1000),
      isChatGptReferral: rawAttribution.isChatGptReferral === true,
      contactSource: text(rawAttribution.contactSource, 200),
    };

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Send via Resend (or fallback to console log if not configured)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Axis Meter Website <website@axismeter.com>",
          to: ["karthik@axismeter.com"],
          cc: ["info@axismeter.com"],
          subject: `${attribution.isChatGptReferral ? "[ChatGPT Lead] " : ""}New Contact Form: ${name} — ${propertyType || "General Inquiry"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse: collapse; width: 100%;">
              ${tableRow("Name", name)}
              ${tableRow("Email", email)}
              ${tableRow("Phone", phone)}
              ${tableRow("Property Type", propertyType)}
              ${tableRow("Units", units)}
            </table>
            ${message ? `<h3>Message</h3><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
            <h3>Lead Attribution</h3>
            <table style="border-collapse: collapse; width: 100%;">
              ${tableRow("ChatGPT Referral", attribution.isChatGptReferral ? "Yes" : "No")}
              ${tableRow("Contact Page Source", attribution.contactSource)}
              ${tableRow("UTM Source", attribution.utmSource)}
              ${tableRow("UTM Medium", attribution.utmMedium)}
              ${tableRow("UTM Campaign", attribution.utmCampaign)}
              ${tableRow("UTM Content", attribution.utmContent)}
              ${tableRow("Landing Page", attribution.landingPage)}
              ${tableRow("Referrer", attribution.referrer)}
            </table>
            <hr style="margin-top: 20px;">
            <p style="color: #999; font-size: 12px;">Sent from axismeter.com contact form</p>
          `,
          reply_to: email,
        }),
      });

      if (!res.ok) {
        const errorData = await res.text();
        console.error("Resend error:", errorData);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    } else {
      // No email service configured — log to console
      console.log("CONTACT FORM SUBMISSION (no email service configured):", { name, email, phone, propertyType, units, message, attribution });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
