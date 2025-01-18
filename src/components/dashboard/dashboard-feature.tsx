'use client';
import { motion } from 'framer-motion';
import logo from '../../../public/SAFLogo.png';

export default function DashboardFeature() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="text-center">
        {/* Gradient Big Text */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-blue-700 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          SOLANA ARK FOUNDATION
        </motion.h1>

        {/* Animated Logo */}
        <motion.img
          className="block mx-auto w-64 md:w-80 mb-6"
          alt="Logo"
          src={logo.src}
          initial={{ y: -10 }}
          animate={{
            y: [0, -10, 0], // Smooth up-and-down motion
          }}
          transition={{
            duration: 2, // Total time for one cycle
            repeat: Infinity, // Repeat forever
            ease: 'easeInOut', // Smooth easing
          }}
        />

        {/* Quote Text */}
        <motion.h1
          className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-blue-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          "The time to act is now, before their silence becomes our legacy."
        </motion.h1>
      </div>
    </div>
  );
}
