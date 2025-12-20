import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const toEmail = process.env.EMAILJS_TO_EMAIL;

    if (!toEmail) {
      return NextResponse.json(
        { success: false, message: 'Destination email is not configured.' },
        { status: 500 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        username: name,
        // Force destination to owner; include many common aliases used in EmailJS templates
        user_email: toEmail,
        to_email: toEmail,
        email: toEmail,
        to: toEmail,
        toEmail: toEmail,
        recipient: toEmail,
        recipient_email: toEmail,
        to_address: toEmail,
        // Preserve user email for reply/back-reference
        reply_to: email,
        from_email: email,
        sender_email: email,
        message,
      },
    };

    try {
      const redactedParams = { ...payload.template_params } as Record<string, unknown>;
      // Do not log secrets; just show destination-related fields
      const keys = [
        'user_email','to_email','email','to','toEmail','recipient','recipient_email','to_address','reply_to','from_email','sender_email'
      ];
      const debugOut: Record<string, unknown> = {};
      keys.forEach((k) => {
        if (k in redactedParams) debugOut[k] = (redactedParams as any)[k];
      });
      console.log('EmailJS template_params (dest + reply fields):', debugOut);
    } catch {}

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log('EmailJS Response:', responseText);

    if (!response.ok) {
      throw new Error(`EmailJS Error: ${response.statusText}`);
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}