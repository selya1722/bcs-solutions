import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message, serviceType } = await req.json();

  // Setup Gmail transporter (same as contact form)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 1. Send mail to yourself
    await transporter.sendMail({
      from: `"Quote Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    // 2. Send confirmation email to sender
    await transporter.sendMail({
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We’ve received your quote request",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for your interest in our <strong>${serviceType}</strong> services.</p>
        <p>We’ve received your quote request and will get back to you shortly.</p>
        <br />
        <p>Best regards,<br>Your Company Name</p>
      `,
    });

    return NextResponse.json({ message: "Quote request sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending quote emails:", error);
    return NextResponse.json({ message: "Failed to send quote request." }, { status: 500 });
  }
}
