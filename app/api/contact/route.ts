import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    //  Send message to you (the site owner)
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    //  Send confirmation to the sender
    await transporter.sendMail({
      from: `"BC Security Solutions" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We've received your message!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>BC Security Solutions</strong>. We've received your message and will get back to you shortly.</p>
        <p><em>Your message:</em><br/>${message}</p>
        <br/>
        <p>Best regards,<br/>BC Security Solutions Team</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
