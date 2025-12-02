'use client';
import { motion } from 'framer-motion';
import logo from '../../../public/SAFLogo.png';
import modepranLogo from '../../../public/modepran.jpg';
import turbineLogo from '../../../public/turbine.png';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DashboardFeature() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative">
      <div className="text-center">
        {/* Gradient Big Text */}
        <motion.h1
         className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {t.general.brandName}
        </motion.h1>

        {/* Animated Logo */}
        <motion.img
          className="block mx-auto w-64 md:w-80 mb-6"
          alt="Logo"
          src={logo.src}
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: [0, -10, 0], // Smooth up-and-down motion
            opacity: [0.6, 1, 0.6], // fades in/out smoothly // stays at 80% transparent
          }}
          transition={{
            duration: 2, // Total time for one cycle
            repeat: Infinity, // Repeat forever
            ease: 'easeInOut', // Smooth easing
          }}
        />

        {/* Quote Text */}
        <motion.h1
          className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          "{t.general.tagline}"
        </motion.h1>
      </div>

      {/* Modepran Partnership Box - Rotated 45 degrees */}
      <motion.div
        className="absolute top-48 -left-32 md:top-56 md:-left-28"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ transformOrigin: 'center' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-64 h-64 border-2 border-green-600 flex flex-col items-center justify-center">
          <div style={{ transform: 'rotate(-45deg)' }} className="flex flex-col items-center">
            <a
              href="https://www.protectoramodepran.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-3"
            >
              <img
                src={modepranLogo.src}
                alt="Modepran Valencia"
                className="w-24 h-24 object-contain mx-auto rounded-xl hover:scale-110 transition-transform duration-300"
              />
            </a>
            <p className="text-xs text-gray-700 text-center leading-tight px-2">
              {t.general.partnershipText}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Turbin3 Box - Rotated 45 degrees on the right side */}
      <motion.div
        className="absolute top-48 -right-32 md:top-56 md:-right-28"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{ transformOrigin: 'center' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-64 h-64 border-2 border-green-600 flex flex-col items-center justify-center">
          <div style={{ transform: 'rotate(-45deg)' }} className="flex flex-col items-center">
            <a
              href="https://www.turbin3.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-3"
            >
              <img
                src={turbineLogo.src}
                alt="Turbin3"
                className="w-24 h-24 object-contain mx-auto rounded-xl hover:scale-110 transition-transform duration-300"
              />
            </a>
            <p className="text-xs text-gray-700 text-center leading-tight px-2 font-semibold">
              {t.general.turbineText}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
