import { AppHero } from '../ui/ui-layout'
import { motion } from 'framer-motion';

export const ProjectDescriptionProvider: React.FC = () => {
  const projectSections = [
    {
      title: 'Overview',
      description:
        'This project aims to revolutionize the way veterinary cabinets manage pet-related data by leveraging blockchain technology to ensure transparency, security, and efficiency.',
      icon: '🌍',
    },
    {
      title: 'Problem Statement',
      description:
        'Veterinary cabinets face significant challenges with their current systems. The software they rely on is often expensive, both in terms of initial costs and ongoing maintenance fees. Additionally, there is a lack of seamless data sharing between veterinary cabinets and insurance companies, leading to inefficiencies. Cabinets are required to upload data to their own systems and then separately send it to insurance companies, resulting in redundant workflows and increased administrative overhead.',
      icon: '⚠️',
    },
    {
      title: 'Solution',
      description:
        'A decentralized Web3 platform built on Solana, where veterinary cabinets can securely store pet-related data on the blockchain, ensuring immutability and transparency. The platform provides free-of-charge software that simplifies data input for veterinary cabinets and enables seamless data sharing with insurance companies. Leveraging Solana offers high throughput, low transaction costs, scalability, and a secure, decentralized infrastructure, making it an efficient and sustainable solution.',
      icon: '💡',
    },
    {
      title: 'Key Features',
      description:
        '- Blockchain-backed data storage\n- Simplified pilot application for testing\n- Future DAO governance for collaborative decision-making\n- Transparent and secure fundraising mechanisms',
      icon: '🔑',
    },
    {
      title: 'Future Vision',
      description:
        'The long-term vision is to build a fully decentralized platform that empowers veterinary cabinets, pet owners, and other stakeholders with seamless access to secure and transparent data. Beyond this, the data inputted through our system can be leveraged to create valuable products, such as improving animal food formulations, conducting pharmaceutical studies, and tracking animal behavior using health monitoring devices. This approach opens the door to innovative solutions that enhance animal welfare and veterinary practices globally.',
      icon: '🚀',
    },
    
  ];
  
  return (
    <div>
         <div className="min-h-screen bg-gradient-to-r  bg-gradient-to-r from-blue-500 via-green-500 to-blue-700 flex flex-col items-center justify-center py-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Mission
      </motion.h1>
 {/* Embed YouTube Video */}
 <motion.div
  className="w-full max-w-5xl aspect-w-4 aspect-h-3 mb-10" // Increase max width and adjust aspect ratio
  style={{ height: '500px'}} // Explicitly set a larger height
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  <iframe
    src="https://www.youtube.com/embed/bCtLFob7t7M"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full rounded-lg shadow-lg"
  ></iframe>
</motion.div>



      <div className="w-full max-w-4xl">
        {projectSections.map((step, index) => (
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