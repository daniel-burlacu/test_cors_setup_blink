'use client';
import { motion } from 'framer-motion';
import logo from '../../../public/SAFLogo.png';
import modepranLogo from '../../../public/modepran.jpg';
import turbineLogo from '../../../public/turbine.png';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DashboardFeature() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden px-4 py-8">
      <div className="text-center max-w-4xl w-full">
        {/* Gradient Big Text */}
        <motion.h1
         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-4 md:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {t.general.brandName}
        </motion.h1>

        {/* Animated Logo */}
        <motion.img
          className="block mx-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 mb-4 md:mb-6"
          alt="Logo"
          src={logo.src}
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Quote Text */}
        <motion.h1
          className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 px-4 mb-8 sm:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          "{t.general.tagline}"
        </motion.h1>

        {/* Mobile Partnership Boxes - Stacked below text */}
        <div className="sm:hidden flex flex-col items-center space-y-4 mt-8">
          {/* Modepran Mobile Box */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 45 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ transformOrigin: 'center' }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-3 w-32 h-32 border-2 border-green-600 flex flex-col items-center justify-center">
              <div style={{ transform: 'rotate(-45deg)' }} className="flex flex-col items-center">
                <a
                  href="https://www.protectoramodepran.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-1"
                >
                  <img
                    src={modepranLogo.src}
                    alt="Modepran Valencia"
                    className="w-16 h-16 object-contain mx-auto rounded-xl hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <p className="text-[8px] text-gray-700 text-center leading-tight px-1">
                  {t.general.partnershipText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Turbin3 Mobile Box */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 45 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ transformOrigin: 'center' }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-3 w-32 h-32 border-2 border-green-600 flex flex-col items-center justify-center">
              <div style={{ transform: 'rotate(-45deg)' }} className="flex flex-col items-center">
                <a
                  href="https://www.turbin3.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-1"
                >
                  <img
                    src={turbineLogo.src}
                    alt="Turbin3"
                    className="w-16 h-16 object-contain mx-auto rounded-xl hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <p className="text-[8px] text-gray-700 text-center leading-tight px-1 font-semibold">
                  {t.general.turbineText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modepran Partnership Box - Desktop positioning */}
      <motion.div
        className="hidden sm:block absolute top-8 left-4 sm:left-8 md:left-12 lg:left-16"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ transformOrigin: 'center' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-3 sm:p-4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-2 border-green-600 flex flex-col items-center justify-center">
          <div style={{ transform: 'rotate(-45deg)' }} className="flex flex-col items-center">
            <a
              href="https://www.protectoramodepran.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-1 sm:mb-2"
            >
              <img
                src={modepranLogo.src}
                alt="Modepran Valencia"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mx-auto rounded-xl hover:scale-110 transition-transform duration-300"
              />
            </a>
            <p className="text-[8px] sm:text-[9px] text-gray-700 text-center leading-tight px-1">
              {t.general.partnershipText}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Turbin3 Box - Responsive positioning */}
      <motion.div
        className="hidden sm:block absolute top-8 right-4 sm:right-8 md:right-12 lg:right-16"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{ transformOrigin: 'center' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-3 sm:p-4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-2 border-green-600 flex flex-col items-center justify-center">
          <div style={{ transform: 'rotate(-45deg)' }} className="flex flex-col items-center">
            <a
              href="https://www.turbin3.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-1 sm:mb-2"
            >
              <img
                src={turbineLogo.src}
                alt="Turbin3"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mx-auto rounded-xl hover:scale-110 transition-transform duration-300"
              />
            </a>
            <p className="text-[8px] sm:text-[9px] text-gray-700 text-center leading-tight px-1 font-semibold">
              {t.general.turbineText}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
