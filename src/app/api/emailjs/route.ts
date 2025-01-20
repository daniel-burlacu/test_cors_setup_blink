import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

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
        user_email: email,
        message: message,
      },
    };

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