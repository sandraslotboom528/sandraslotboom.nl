import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primair mb-4">Contact</h1>
        <p className="text-tekst/80 leading-relaxed">
          Vul hieronder jouw gegevens in en ik neem binnen 24 uur contact met je op.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
