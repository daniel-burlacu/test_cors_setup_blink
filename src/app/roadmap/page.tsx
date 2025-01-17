'use client'; // Add this line at the top to mark the file as a Client Component
import { RoadMapProvider } from '@/components/road-map/road-map-provider';

export default function DonatedPage() {
  return (
    <div>      
      <RoadMapProvider />
    </div>
  );
}
