'use client'; // Add this line at the top to mark the file as a Client Component
import {ArchitectureProvider}  from '@/components/architecture/architecture-provider';

export default function Architecture() {
  return (
    <div>      
      <ArchitectureProvider />
    </div>
  );
}

