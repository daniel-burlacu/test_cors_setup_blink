
import { AppHero } from '../ui/ui-layout'

export const ArchitectureProvider: React.FC = () => {
  
  return (
    <div>
        <AppHero
              title="Architecture Documentation"
              subtitle="This is the architecture of the project and how it works."
            >
            </AppHero>
             {/* Quote Text */}
              {/* Embed draw.io exported HTML */}
        <iframe
           src="/SolanaArkFoundationDiagram.html"// Path to your draw.io exported HTML file
          title="Supporter Badge Diagram"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        ></iframe>
    </div>
  );
};
