'use client';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const ProjectDescriptionProvider: React.FC = () => {
  const { t } = useLanguage();
  const projectSections = [
    {
      title: (<Typography variant="h4" gutterBottom sx={{  fontWeight: "bold" }}>{t.project.overview}</Typography>),
      description:
        (<><Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          {t.project.overviewText1}
        </Typography>

          <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            {t.project.overviewText2}
          </Typography>

          <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            {t.project.overviewText3}
          </Typography></>),
      icon: '🌍',
    },
    {
      title: (<Typography variant="h4" gutterBottom sx={{  fontWeight: "bold" }}>{t.project.problemStatement}</Typography>),
      description:
        (
          <>
            <Typography paragraph>
              {t.project.problemText1}
            </Typography>
            <ul style={{ marginLeft: "1.2rem", marginBottom: "1rem" }}>
              <li>{t.project.problemBullet1}</li>
              <li>{t.project.problemBullet2}</li>
              <li>{t.project.problemBullet3}</li>
            </ul>
            <Typography paragraph>
              {t.project.problemText2}
            </Typography>
            <Typography>
              {t.project.problemText3}
            </Typography>
          </>
        ),
      icon: '⚠️',
    },
    {
      title: (<Typography variant="h4" gutterBottom sx={{fontWeight: "bold" }}>{t.project.ourSolution}</Typography>),
      description:
        (<><Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          {t.project.solutionText1}
        </Typography>

          <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            {t.project.solutionText2}
          </Typography></>),
      icon: '💡',
    },
    //Our Values

// Transparency – We communicate openly about how data is collected, anonymized, and used, so vets and pet owners can trust the process.
// Collaboration – We bring together veterinarians, researchers, and communities to create shared knowledge that benefits all pets.
// Innovation – We use secure, modern technology (blockchain) to simplify data sharing and unlock insights that traditional methods can’t provide.
// Animal Welfare – Every feature we build serves one purpose: to improve health outcomes and quality of life for pets worldwide.

    {
      title: (<Typography variant="h4" gutterBottom sx={{fontWeight: "bold" }}>Our Values</Typography>),
      description:
        (<Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          <ul style={{ marginLeft: "1.2rem", marginBottom: "1rem" }}>
            <li>- <strong>Privacy First:</strong> We prioritize data security and user privacy above all else.</li>
            <li>- <strong>Transparency</strong> We communicate openly about how data is collected, anonymized, and used, so vets and pet owners can trust the process.</li>
            <li>- <strong>Open Collaboration:</strong>  We bring together veterinarians, researchers, and communities to create shared knowledge that benefits all pets.</li>
            <li>- <strong>Innovation:</strong> We use secure, modern technology (blockchain) to simplify data sharing and unlock insights that traditional methods can’t provide.</li>
            <li>- <strong>Animal Welfare:</strong>  Every feature we build serves one purpose: to improve health outcomes and quality of life for pets worldwide.</li>
          </ul>
          </Typography>),
      icon: '❤️',

    },
    {
      title: (<Typography variant="h4" gutterBottom sx={{fontWeight: "bold" }}>{t.project.keyFeatures}</Typography>),
      description:
        (<Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          <ul style={{ marginLeft: "1.2rem", marginBottom: "1rem" }}>
          <li>- {t.project.feature1}</li>
          <li>- {t.project.feature2}</li>
          <li>- {t.project.feature3}</li>
          <li>- {t.project.feature4}</li>
          </ul>
          </Typography>),
      icon: '🔑',
    },
    {
      title: (<Typography variant="h4" gutterBottom sx={{fontWeight: "bold" }}>{t.project.futureVision}</Typography>),
      description:
         (<Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          {t.project.futureVisionText}</Typography>),
      icon: '🚀',
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
          {t.general.ourMission}
        </motion.h1>
        {/* Embed YouTube Video */}
        <motion.div
          className="w-full max-w-5xl aspect-w-4 aspect-h-3 mb-10" // Increase max width and adjust aspect ratio
          style={{ height: '500px' }} // Explicitly set a larger height
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
                {step.title}
                <p className="text-gray-600 whitespace-pre-line">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};