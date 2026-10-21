import type { Metadata } from 'next';

// Deze pagina is alleen bedoeld voor mensen die zich hebben aangemeld.
// De link staat alleen in de bevestigingsmail; de pagina wordt nergens op de site gelinkt
// en zoekmachines mogen hem niet indexeren.
export const metadata: Metadata = {
  title: 'Jouw e-book',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

const PDF_URL = '/downloads-6de23f6517/pijn-nek-schouders-onderrug.pdf';

export default function EbookDownloadPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-primair mb-6 leading-tight">
        Fijn dat je er bent!
      </h1>
      <p className="text-lg font-bold text-primair/90 leading-relaxed mb-6">
        Hier is jouw e-book over pijn in nek, schouders en onderrug.
      </p>
      <p className="text-tekst/80 leading-relaxed mb-10">
        Klik op de knop hieronder om het e-book te downloaden. Bewaar het op je computer of telefoon, zodat je
        het er altijd bij kunt pakken.
      </p>
      <a href={PDF_URL} download
        className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
        Download het e-book (PDF) →
      </a>
      <p className="text-sm text-tekst/60 leading-relaxed mt-10">
        Lukt het downloaden niet? Stuur me dan even een berichtje via de{' '}
        <a href="/contact" className="underline hover:text-primair">contactpagina</a>.
      </p>
    </section>
  );
}
