'use client';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutUsProvider: React.FC = () => {
  const { t } = useLanguage();
  const projectSections = [
    {
      title: t.aboutUs.projectDescriptionTitle,
      description: t.aboutUs.projectDescriptionText,
      icon: '🌍',
    },
    {
      title: t.aboutUs.visionariesTitle,
      description: t.aboutUs.visionariesDescription,
      icon: '👥',
      teamMembers: [
        {
          name: 'Ioana Irina',
          link: 'https://www.linkedin.com/in/ioanairina/',
          description: t.aboutUs.ioanaDescription,
        },
        {
          name: 'Daniel Burlacu',
          link: 'https://www.linkedin.com/in/daniel-burlacu-3879a689/',
          description: t.aboutUs.danielDescription,
        },
      ],
    },
    {
      title: t.aboutUs.documentationTitle,
      description: t.aboutUs.documentationDescription,
      icon: '📚',
      documentation: [
        {
          name: t.aboutUs.fullProjectDescription,
          link: '/documentation/ProjectPlan.pdf',
          description: t.aboutUs.fullProjectDescriptionText,
        },
        {
          name: t.aboutUs.systemArchitecture,
          link: '/documentation/SolanaArkFoundationDiagram.drawio',
          description: t.aboutUs.systemArchitectureText,
        },
      ],
    }
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
          {t.aboutUs.title}
        </motion.h1>

        <div className="w-full max-w-4xl px-2 sm:px-4">
          {projectSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-3xl sm:text-4xl">{section.icon}</div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">{section.title}</h2>
                {section.description && (
                  <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{section.description}</p>
                )}
                {section.teamMembers && (
                  <ul className="mt-4 space-y-2">
                    {section.teamMembers.map((member, idx) => (
                      <li key={idx}>
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:underline font-semibold text-sm sm:text-base"
                        >
                          {member.name}
                        </a>
                        <p className="text-sm sm:text-base text-gray-600">{member.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {section.documentation && (
                  <ul className="mt-4 space-y-2">
                    {section.documentation.map((doc, idx) => (
                      <li key={idx}>
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:underline font-semibold"
                        >
                          {doc.name}
                        </a>
                        <p className="text-gray-600">{doc.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
