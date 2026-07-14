import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  country?: string;
  company?: string;
  message?: string;
  product?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const country = body.country?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const product = body.product?.trim() ?? "";
  if (!name || !email || !message ) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      { message: "Email service is not configured on server." },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const toAddress = process.env.CONTACT_RECEIVER_EMAIL || smtpUser;
    const fromAddress = process.env.CONTACT_FROM_EMAIL || smtpUser;

    await transporter.sendMail({
      from: `"JD EXIM Website" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}
            Email: ${email}
            Country: ${country || "Not Specified"}
            Company: ${company || "Not Specified"}
            Product: ${product || "Not Specified"}
            Message:
            ${message}`,
                  html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Country:</strong> ${escapeHtml(country || "Not Specified")}</p>
                    <p><strong>Company:</strong> ${escapeHtml(company || "Not Specified")}</p>
                    <p><strong>Product:</strong> ${escapeHtml(product || "Not Specified")}</p>
                    <p><strong>Message:</strong></p>
                    <p>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
                  `,
                });

    return NextResponse.json({
      message: "Thanks! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact route send error:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
