'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

  const pushGtmEvent = (eventName: string, payload?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;
    const dataLayer = (window as any).dataLayer ??= [];
    dataLayer.push({ event: eventName, ...payload });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('type', 'contact_inquiry');

    pushGtmEvent('lead_form_submission', { form_type: 'contact_inquiry' });

    await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: formData });
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-black text-white p-20 flex flex-col items-center">
      <h1 className="text-4xl font-black mb-8">Contact Procurement</h1>
      {sent ? (
        <p className="text-blue-500 font-bold">Message sent successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
          <input type="text" name="name" placeholder="Name" required className="w-full p-4 bg-gray-900 border border-white/10 rounded-xl" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-4 bg-gray-900 border border-white/10 rounded-xl" />
          <textarea name="message" placeholder="Message" required className="w-full p-4 bg-gray-900 border border-white/10 rounded-xl h-32" />
          <button className="w-full bg-blue-600 py-4 rounded-xl font-bold">Send Inquiry</button>
        </form>
      )}
    </main>
  );
}