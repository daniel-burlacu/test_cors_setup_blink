'use client'; // Add this line at the top to mark the file as a Client Component
import DashboardFeature  from '@/components/dashboard/dashboard-feature';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <DashboardFeature />
    </div>
  );
}
