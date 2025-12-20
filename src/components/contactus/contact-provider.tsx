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
    <div>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-6 sm:py-10 px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.contactUs.title}
        </motion.h1>

        <div className="w-full">
          <motion.div
            className="bg-gradient-to-r from-green-800 via-green-600 to-green-700 text-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 w-full">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-3 text-base sm:text-lg md:text-xl">
                {t.contactUs.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t.contactUs.namePlaceholder}
                className="w-full bg-white border border-gray-300 rounded-md p-4 sm:p-5 text-base sm:text-lg text-gray-800"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold mb-3 text-base sm:text-lg md:text-xl">
                {t.contactUs.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t.contactUs.emailPlaceholder}
                className="w-full bg-white border border-gray-300 rounded-md p-4 sm:p-5 text-base sm:text-lg text-gray-800"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold mb-3 text-base sm:text-lg md:text-xl">
                {t.contactUs.messageLabel}
              </label>
              <textarea
                id="message"
                rows={8}
                placeholder={t.contactUs.messagePlaceholder}
                className="w-full bg-white border border-gray-300 rounded-md p-4 sm:p-5 text-base sm:text-lg text-gray-800"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-green-700 font-semibold py-4 sm:py-5 rounded-md hover:scale-105 transition-all duration-150 text-base sm:text-lg md:text-xl"
              disabled={isSending}
            >
              {isSending ? t.contactUs.sendingButton : t.contactUs.submitButton}
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-center font-medium text-green-500 text-sm sm:text-base">{successMessage}</p>
          )}
        </motion.div>
        </div>
      </div>
    </div>
  );
}
