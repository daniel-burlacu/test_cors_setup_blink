'use client'; // Add this line at the top to mark the file as a Client Component
import {AboutUsProvider} from '@/components/about-us/about-us-provider';

export default function DonatedPage() {
  return (
    <div>      
      <AboutUsProvider />
    </div>
  );
}
