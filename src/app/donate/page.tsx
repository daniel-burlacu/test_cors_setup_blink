'use client'; // Add this line at the top to mark the file as a Client Component
import { DonateProvider } from '@/components/donate/donate-provider';

export default function DonatedPage() {
  return (
    <div>      
      <DonateProvider />
    </div>
  );
}
