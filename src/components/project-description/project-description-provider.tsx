import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const ProjectDescriptionProvider: React.FC = () => {
  const projectSections = [
    {
      title: (<Typography variant="h4" gutterBottom sx={{  fontWeight: "bold" }}> Overview </Typography>),
      description:
        (<><Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          Our mission is to provide veterinarians with a{" "}
          <strong>simple, secure platform</strong> to share pet health data.
        </Typography>

          <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            By bringing this knowledge together, we generate{" "}
            <strong>insights that improve treatments</strong> and{" "}
            <strong>advance research</strong> — always with{" "}
            <span style={{ color: "#0a4616ff", fontWeight: "bold" }}>pets</span> at the
            center of our purpose.
          </Typography>

          <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            We believe <strong>every pet deserves access to better care</strong>, and
            that <span style={{ color: "#055835ff", fontWeight: "bold" }}>open,
              collaborative data</span> is the key to making it happen.
          </Typography></>),
      icon: '🌍',
    },
    {
      title: (<Typography variant="h4" gutterBottom sx={{  fontWeight: "bold" }}>Problem Statement</Typography>),
      description:
        (
          <>
            <Typography paragraph>
              With <strong>over a billion cats and dogs worldwide</strong> — and
              little reliable data on other pets — the veterinary field faces a
              critical gap. There are <strong>600,000 veterinarians globally</strong>, yet
              most outside large clinics still rely on handwritten notes or fragmented
              systems.
            </Typography>
            <ul style={{ marginLeft: "1.2rem", marginBottom: "1rem" }}>
              <li>Nearly impossible to identify <strong>breed-specific patterns</strong></li>
              <li>Hard to track <strong>emerging diseases & wider health trends</strong></li>
              <li>Care remains <strong>inconsistent across regions</strong></li>
            </ul>
            <Typography paragraph>
              Research today is skewed toward small, specialized populations with
              advanced care, leaving the majority of pets <strong>underrepresented and underserved</strong>.
            </Typography>
            <Typography>
              👉 Our platform makes digital case logging effortless — creating both a
              <strong> reliable medical history for each pet</strong> and a{" "}
              <strong>global dataset</strong> that empowers better treatment
              decisions, stronger justifications for care, and{" "}
              <strong>healthier pets worldwide</strong>.
            </Typography>
          </>
        ),
      icon: '⚠️',
    },
    {
      title: (<Typography variant="h4" gutterBottom sx={{fontWeight: "bold" }}>Our Solution</Typography>),
      description:
        (<><Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          <strong>Veterinarians</strong> together with <strong>Animal Care Shelters</strong> securely enter{" "}
          <strong>anonymized case data</strong>, which our platform aggregates in full{" "}
          <span style={{ color: "#0a4616ff", fontWeight: "bold" }}>
            GDPR / AVG compliance
          </span>
          .
        </Typography>

          <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            This creates <strong>trusted insights and trends</strong> that empower
            veterinarians to deliver{" "}
            <span style={{ color: "#055835ff", fontWeight: "bold" }}>
              better treatments
            </span>{" "}
            and ensure{" "}
            <strong>healthier pets worldwide</strong>.
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
      title: (<Typography variant="h4" gutterBottom sx={{fontWeight: "bold" }}>Key Features</Typography>),
      description:
        (<Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          <ul style={{ marginLeft: "1.2rem", marginBottom: "1rem" }}>
          <li>- Blockchain-backed data storage</li>
          <li>- Simplified pilot application for testing</li>
          <li>- Future DAO governance for collaborative decision-making</li>
          <li>- Transparent and secure fundraising mechanisms</li>
          </ul>
          </Typography>),
      icon: '🔑',
    },
    {
      title: (<Typography variant="h4" gutterBottom sx={{fontWeight: "bold" }}>Future Vision</Typography>),
      description:
         (<Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          The long-term vision is to build a fully decentralized platform that empowers veterinary cabinets, pet owners, and other stakeholders with seamless access to secure and transparent data. Beyond this, the data inputted through our system can be leveraged to create valuable products, such as improving animal food formulations, conducting pharmaceutical studies, and tracking animal behavior using health monitoring devices. This approach opens the door to innovative solutions that enhance animal welfare and veterinary practices globally.</Typography>),
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
          Our Mission
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