'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactProvider() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    console.log('Form data being sent:', formData);

    try {
      const response = await fetch('/api/emailjs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Pass `name`, `email`, `message`
      });
  
      const data = await response.json();

      if (data.success) {
        setSuccessMessage(t.contactUs.successMessage);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSuccessMessage(t.contactUs.errorMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage(t.contactUs.networkError);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-800 via-green-600 to-green-700 text-white px-4">
      <div className="w-full max-w-screen-2xl p-8">
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.contactUs.title}
          </motion.h1>
        </div>

        <motion.div
          className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-2">
                {t.contactUs.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t.contactUs.namePlaceholder}
                className="border border-gray-300 rounded-md p-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold mb-2">
                {t.contactUs.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t.contactUs.emailPlaceholder}
                className="border border-gray-300 rounded-md p-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold mb-2">
                {t.contactUs.messageLabel}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={t.contactUs.messagePlaceholder}
                className="border border-gray-300 rounded-md p-2"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-800 via-green-600 to-green-700 text-white font-semibold py-2 rounded-md hover:scale-105 transition-all duration-150"
              disabled={isSending}
            >
              {isSending ? t.contactUs.sendingButton : t.contactUs.submitButton}
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-center font-medium text-green-500">{successMessage}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
