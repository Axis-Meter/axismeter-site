import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, propertyType, units, message } = body;

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
          subject: `New Contact Form: ${name} — ${propertyType || "General Inquiry"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ""}
              ${propertyType ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Property Type</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${propertyType}</td></tr>` : ""}
              ${units ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Units</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${units}</td></tr>` : ""}
            </table>
            ${message ? `<h3>Message</h3><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
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
      console.log("CONTACT FORM SUBMISSION (no email service configured):", { name, email, phone, propertyType, units, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
