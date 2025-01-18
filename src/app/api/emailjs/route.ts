import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message, captchaToken  } = await req.json();

      // Validate the required fields
      if (!name || !email || !message || !captchaToken) {
        return NextResponse.json(
          { success: false, message: 'All fields are required.' },
          { status: 400 }
        );
      }

      if (!captchaToken) {
        return NextResponse.json({ success: false, message: 'CAPTCHA token is missing.' }, { status: 400 });
      }
  
      // Verify reCAPTCHA token
      const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
      const verifyResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: secretKey,
          response: captchaToken,
        }),
      });
  
      const verifyResult = await verifyResponse.json();
      if (!verifyResult.success || verifyResult.score < 0.5) {
        return NextResponse.json({ success: false, message: 'CAPTCHA verification failed. Please try again.' }, { status: 400 });
      }
    // Replace these with your EmailJS credentials
    const serviceID = process.env.EMAILJS_SERVICE_ID!;
    const templateID = process.env.EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY!;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY!; // Optional unless strict mode is enabled

    // Prepare request payload
    const payload = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      accessToken: privateKey, // Optional, required in strict mode
      template_params: {
        username: name,
        user_email: email,
        message_content: message,
      },
    };

    // Make a POST request to the EmailJS API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Handle response
    if (!response.ok) {
      const errorText = await response.text(); // Get raw error text
      console.error('EmailJS API Error:', errorText);
      throw new Error(`EmailJS API returned an error: ${response.status} ${response.statusText}`);
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
