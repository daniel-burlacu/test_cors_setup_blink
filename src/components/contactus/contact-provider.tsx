'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactProvider() {
  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=your_site_key`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadRecaptcha();
  }, []);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaToken, setCaptchaToken] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Ensure reCAPTCHA is loaded before executing
      await new Promise((resolve) => {
        window.grecaptcha.ready(resolve);
      });
  
      // Execute reCAPTCHA to generate a token
      const token = await window.grecaptcha.execute('your_site_key', { action: 'submit' });
  
      // Send the token along with form data to the backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken: token }),
      });
  
      const data = await response.json();
      if (data.success) {
        setSuccessMessage('Message sent successfully!');
      } else {
        setSuccessMessage('CAPTCHA verification failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  };
  

  return (
    <>
    {/* Add the reCAPTCHA script to the head */}
    <Script
      src="https://www.google.com/recaptcha/api.js?render=your_site_key"
      strategy="afterInteractive" // Load after the page becomes interactive
    />
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        placeholder="Write your message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" disabled={isSending}>
        {isSending ? 'Sending...' : 'Submit'}
      </button>
    </form>
    </>
  );
}
