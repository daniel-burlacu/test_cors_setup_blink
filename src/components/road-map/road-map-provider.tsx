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
      icon: '🏥',
    },
    {
      title: t.roadmap.step4Title,
      description: t.roadmap.step4Description,
      icon: '🔗',
    },
    {
      title: t.roadmap.step5Title,
      description: t.roadmap.step5Description,
      icon: '🤝',
    },
    {
      title: t.roadmap.step6Title,
      description: t.roadmap.step6Description,
      icon: '🎉',
    },
  ];
  return (
    <div>
         <div className="min-h-screen bg-gradient-to-r from-green-800 via-green-600 to-green-700 flex flex-col items-center justify-center py-6 sm:py-10 px-4 sm:px-6">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.roadmap.title}
      </motion.h1>

      <div className="w-full max-w-4xl px-2 sm:px-4">
        {roadmapSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {index === 0 && (
              <div className="absolute top-2 right-2 text-green-600 font-bold text-sm sm:text-base border-2 border-green-600 px-2 py-1 rounded-full transform rotate-12">
                ✓ DONE
              </div>
            )}
            <div className="text-3xl sm:text-4xl">{step.icon}</div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};
