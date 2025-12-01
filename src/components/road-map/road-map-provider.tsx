'use client';
import { AppHero } from '../ui/ui-layout'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext';

export const RoadMapProvider: React.FC = () => {
  const { t } = useLanguage();
  const roadmapSteps = [
    {
      title: t.roadmap.step1Title,
      description: t.roadmap.step1Description,
      icon: '🚀',
    },
    {
      title: t.roadmap.step2Title,
      description: t.roadmap.step2Description,
      icon: '💰',
    },
    {
      title: t.roadmap.step3Title,
      description: t.roadmap.step3Description,
      icon: '🤝',
    },
    {
      title: t.roadmap.step4Title,
      description: t.roadmap.step4Description,
      icon: '🎉',
    },
  ];
  return (
    <div>
         <div className="min-h-screen bg-gradient-to-r  bg-gradient-to-r from-green-800 via-green-600 to-green-700 flex flex-col items-center justify-center py-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.roadmap.title}
      </motion.h1>

      <div className="w-full max-w-4xl">
        {roadmapSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-start space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="text-4xl">{step.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {step.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};
