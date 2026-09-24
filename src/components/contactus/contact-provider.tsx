'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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

    try {
      const response = await fetch('/api/emailjs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(t.contactUs.successMessage);
        setFormData({ name: '', email: '', message: '' });
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

  const isSuccess = successMessage === t.contactUs.successMessage;

  return (
    <div className="bg-gradient-to-r from-green-800 via-green-600 to-green-700 flex flex-1 flex-col items-center py-6 sm:py-10 px-4 sm:px-6">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t.contactUs.title}
      </motion.h1>

      <motion.div
        className="w-full max-w-3xl bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold mb-2 text-sm sm:text-base text-gray-800">
              {t.contactUs.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              placeholder={t.contactUs.namePlaceholder}
              className="w-full border border-gray-300 rounded-md p-3 sm:p-4 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold mb-2 text-sm sm:text-base text-gray-800">
              {t.contactUs.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t.contactUs.emailPlaceholder}
              className="w-full border border-gray-300 rounded-md p-3 sm:p-4 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold mb-2 text-sm sm:text-base text-gray-800">
              {t.contactUs.messageLabel}
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder={t.contactUs.messagePlaceholder}
              className="w-full border border-gray-300 rounded-md p-3 sm:p-4 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white font-semibold py-3 sm:py-4 rounded-md hover:bg-green-800 transition-colors duration-150 text-sm sm:text-base disabled:opacity-60"
            disabled={isSending}
          >
            {isSending ? t.contactUs.sendingButton : t.contactUs.submitButton}
          </button>
        </form>
        {successMessage && (
          <p className={`mt-4 text-center font-medium text-sm sm:text-base ${isSuccess ? 'text-green-700' : 'text-red-600'}`}>
            {successMessage}
          </p>
        )}
      </motion.div>
    </div>
  );
}
