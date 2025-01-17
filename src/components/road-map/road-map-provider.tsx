import { AppHero } from '../ui/ui-layout'
import { motion } from 'framer-motion'

export const RoadMapProvider: React.FC = () => {
  const roadmapSteps = [
    {
      title: 'Pilot Application',
      description:
        'Launch a simplified Web3 application for veterinary cabinets to test adding data to the blockchain.',
      icon: '🚀',
    },
    {
      title: 'Fundraising Stage',
      description:
        'Raise funds to support the full-scale development of the project.',
      icon: '💰',
    },
    {
      title: 'DAO Integration',
      description:
        'Introduce DAO governance functionality for decentralized decision-making.',
      icon: '🤝',
    },
    {
      title: 'Full Application Launch',
      description:
        'Deploy the complete application with all features for veterinary cabinets and stakeholders.',
      icon: '🎉',
    },
  ];
  return (
    <div>
         <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center py-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Roadmap
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
