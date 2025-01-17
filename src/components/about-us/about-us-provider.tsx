import { motion } from "framer-motion";

export const AboutUsProvider: React.FC = () => {
  const projectSections = [
    {
      title: 'Project Description',
      description:
        'This project was born as part of the Turbin3 cohort, a program dedicated to advancing innovative Solana-based solutions. Our mission is to revolutionize how veterinary cabinets manage pet-related data by leveraging blockchain technology for transparency, security, and efficiency. With a focus on innovation and collaboration, this initiative strives to create seamless data-sharing solutions that are free and scalable.',
      icon: '🌍',
    },
    {
      title: 'The Visionaries',
      description: 'Meet the people driving this project forward.',
      icon: '👥',
      teamMembers: [
        {
          name: 'Ioana Irina',
          link: 'https://www.linkedin.com/in/ioanairina/',
          description:
            'With a PhD in Marketing and over a decade of experience in technology, Ioana thrives at the intersection of Marketing and Tech. Passionate about building high-performing teams, she empowers individuals to grow and drive innovation.',
        },
        {
          name: 'Daniel Burlacu',
          link: 'https://www.linkedin.com/in/daniel-burlacu-3879a689/',
          description:
            'Daniel is a Senior Fullstack Developer with 11+ years of experience building high-performance Web2 applications. Skilled in different programming languages and backend technologies, he is exploring Web3 to bring innovative, future-proof solutions to life.',
        },
      ],
    },
    {
      title: 'Documentation',
      description: 'Explore in-depth details about the project and its architecture.',
      icon: '📚',
      documentation: [
        {
          name: 'Full Project Description (PDF)',
          link: '/documentation/ProjectPlan.pdf', // Relative path for the PDF file
          description:
            'An overview of the Solana Ark Foundation, showcasing how blockchain empowers animal welfare and ecological impact.',
        },
        {
          name: 'System Architecture (Draw.IO)',
          link: '/documentation/SolanaArkFoundationDiagram.drawio', // Relative path for the Draw.IO file
          description:
            'A detailed architecture diagram illustrating how the system is designed and operates.',
        },
      ],
    }
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
          About Us
        </motion.h1>

        <div className="w-full max-w-4xl">
          {projectSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl">{section.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                {section.description && (
                  <p className="text-gray-600 whitespace-pre-line">{section.description}</p>
                )}
                {section.teamMembers && (
                  <ul className="mt-4 space-y-2">
                    {section.teamMembers.map((member, idx) => (
                      <li key={idx}>
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline font-semibold"
                        >
                          {member.name}
                        </a>
                        <p className="text-gray-600">{member.description}</p>
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
                          className="text-blue-500 hover:underline font-semibold"
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
