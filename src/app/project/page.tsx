'use client'; // Add this line at the top to mark the file as a Client Component
import { ProjectDescriptionProvider } from '@/components/project-description/project-description-provider';

export default function DonatedPage() {
  return (
    <div>      
      <ProjectDescriptionProvider />
    </div>
  );
}
