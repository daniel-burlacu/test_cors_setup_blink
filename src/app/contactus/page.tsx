'use client'; // Add this line at the top to mark the file as a Client Component
import  ContactProvider  from '@/components/contactus/contact-provider';

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ContactProvider />
    </div>
  );
}
