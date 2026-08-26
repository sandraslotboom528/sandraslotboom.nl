'use client';
import { useState } from 'react';

// ← Vul hier jouw eigen e-mailadres in. Het formulier opent bij versturen
// het e-mailprogramma van de bezoeker met een kant-en-klaar ingevuld bericht.
const CONTACT_EMAIL = 'salacia.acupunctuur@gmail.com';

const inputClass =
  'w-full rounded-lg border border-primair/20 bg-wit px-4 py-2.5 text-tekst focus:outline-none focus:ring-2 focus:ring-primair';
const labelClass = 'block text-sm font-medium text-tekst mb-1';

export default function ContactForm() {
  const [voornaam, setVoornaam] = useState('');
  const [achternaam, setAchternaam] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [email, setEmail] = useState('');
  const [bericht, setBericht] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const onderwerp = `Contactformulier website — ${voornaam} ${achternaam}`;
    const inhoud =
      `Naam: ${voornaam} ${achternaam}\n` +
      `Telefoonnummer: ${telefoon || '-'}\n` +
      `E-mailadres: ${email}\n\n` +
      `Bericht:\n${bericht}`;

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(inhoud)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="voornaam" className={labelClass}>Voornaam *</label>
          <input id="voornaam" name="voornaam" required
            value={voornaam} onChange={e => setVoornaam(e.target.value)}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="achternaam" className={labelClass}>Achternaam *</label>
          <input id="achternaam" name="achternaam" required
            value={achternaam} onChange={e => setAchternaam(e.target.value)}
            className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefoon" className={labelClass}>Telefoonnummer</label>
          <input id="telefoon" name="telefoon" type="tel"
            value={telefoon} onChange={e => setTelefoon(e.target.value)}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>E-mailadres *</label>
          <input id="email" name="email" type="email" required
            value={email} onChange={e => setEmail(e.target.value)}
            className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="bericht" className={labelClass}>Wat kan ik voor je doen? *</label>
        <textarea id="bericht" name="bericht" required rows={5}
          value={bericht} onChange={e => setBericht(e.target.value)}
          className={`${inputClass} resize-none`} />
      </div>

      <div>
        <button type="submit"
          className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
          Verstuur bericht →
        </button>
        <p className="text-tekst/60 text-sm mt-3">
          Je e-mailprogramma opent met dit bericht al ingevuld, klaar om te versturen.
        </p>
      </div>
    </form>
  );
}
