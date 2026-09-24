'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const links = [
  {
    labelKey: 'linkedinLabel' as const,
    value: 'Daniel Burlacu',
    href: 'https://www.linkedin.com/in/daniel-burlacu-3879a689/',
  },
  {
    labelKey: 'discordLabel' as const,
    value: 'daniel.burlacu',
  },
  {
    labelKey: 'websiteLabel' as const,
    value: 'danielburlacu.xyz',
    href: 'https://danielburlacu.xyz',
  },
];

export default function ContactProvider() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-green-800 via-green-600 to-green-700 flex flex-1 flex-col items-center py-6 sm:py-10 px-4 sm:px-6">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t.contactUs.title}
      </motion.h1>
      <motion.p
        className="text-emerald-50/90 text-sm sm:text-base md:text-lg max-w-2xl text-center mb-6 sm:mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {t.contactUs.intro}
      </motion.p>

      <motion.ul
        className="w-full max-w-xl bg-white rounded-lg shadow-md divide-y divide-gray-100"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {links.map((item) => (
          <li key={item.labelKey} className="p-4 sm:p-6">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-green-700 font-semibold">
              {t.contactUs[item.labelKey]}
            </p>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-base sm:text-lg text-gray-800 font-medium underline decoration-green-700/40 underline-offset-4 hover:text-green-800"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-1 text-base sm:text-lg text-gray-800 font-medium">{item.value}</p>
            )}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
