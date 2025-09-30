import { AppHero } from '../ui/ui-layout'

export const ArchitectureProvider: React.FC = () => {
  return (
    <div>
      <AppHero
        title="Architecture Documentation"
        subtitle="This is the architecture of the project and how it works."
      />

      {/* Centered Diagram */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <iframe
          src="/SolanaArkFoundationDiagram.html" // Path to your draw.io exported HTML file
          title="Supporter Badge Diagram"
          width="150%" // instead of 150%, makes it responsive
          height="1200px"
          style={{ border: "none", maxWidth: "1200px" }} // cap max size
        ></iframe>
      </div>
    </div>
  )
}
