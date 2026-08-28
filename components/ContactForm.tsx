'use client';
import { useState } from 'react';

// ← Vul hier jouw Web3Forms access key in. Vraag die gratis aan op
// https://web3forms.com/ (vul je e-mailadres in, je krijgt de sleutel per mail).
const WEB3FORMS_ACCESS_KEY = 'e999ca80-1196-4a7e-ab0f-f4d40b141b21';

const inputClass =
  'w-full rounded-lg border border-primair/20 bg-wit px-4 py-2.5 text-tekst focus:outline-none focus:ring-2 focus:ring-primair';
const labelClass = 'block text-sm font-medium text-tekst mb-1';

type Status = 'idle' | 'versturen' | 'gelukt' | 'mislukt';

export default function ContactForm() {
  const [voornaam, setVoornaam] = useState('');
  const [achternaam, setAchternaam] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [email, setEmail] = useState('');
  const [bericht, setBericht] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('versturen');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Contactformulier website — ${voornaam} ${achternaam}`,
          Voornaam: voornaam,
          Achternaam: achternaam,
          Telefoonnummer: telefoon || '-',
          'E-mailadres': email,
          Bericht: bericht,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus('gelukt');
        setVoornaam('');
        setAchternaam('');
        setTelefoon('');
        setEmail('');
        setBericht('');
      } else {
        setStatus('mislukt');
      }
    } catch {
      setStatus('mislukt');
    }
  }

  if (status === 'gelukt') {
    return (
      <p className="text-primair font-bold text-center py-8">
        Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
      </p>
    );
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
        <button type="submit" disabled={status === 'versturen'}
          className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60">
          {status === 'versturen' ? 'Versturen...' : 'Verstuur bericht →'}
        </button>
        {status === 'mislukt' && (
          <p className="text-red-600 text-sm mt-3">
            Er ging iets mis bij het versturen. Probeer het nog eens, of mail direct naar
            salacia.acupunctuur@gmail.com.
          </p>
        )}
      </div>
    </form>
  );
}
