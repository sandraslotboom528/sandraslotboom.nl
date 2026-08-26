import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Aanbod' };

const diensten = [
  {
    naam: 'Acupunctuurbehandeling',
    beschrijving: 'Voor wie vastloopt in klachten die niemand kan verklaren — gericht op de oorzaak, niet alleen het symptoom.',
    link: '/acupunctuur',
  },
  {
    naam: 'Neuro Emotionele Integratie',
    beschrijving: 'Voor wie vastloopt in patronen die zich blijven herhalen — bevrijd wat onbewust vastzit, met de wijsheid van de 5 elementen.',
    link: '/neuro-emotionele-integratie',
  },
  {
    naam: 'Inner essence journey',
    beschrijving: '[Korte beschrijving van deze behandeling: voor wie, waarvoor en wat iemand kan verwachten.]',
    link: '/contact',
  },
  {
    naam: 'Online acupressuur',
    beschrijving: 'Wil je zelf aan de slag met de 5 elementen? Bekijk dan mijn aanbod in de Acupressuur Academy.',
    link: 'https://salacia.kennis.shop/',
    external: true,
  },
];

export default function AanbodPage() {
  return (
    <>
      {/* Hero — herosectie-aanbod.jpg als achtergrond */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-aanbod.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Mijn aanbod</h1>
        </div>
      </div>

      <div className="hero-cover">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-tekst/80 mb-12">
            Elke behandeling is een uitnodiging om weer te luisteren naar wat je lichaam je te vertellen heeft.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {diensten.map(dienst => (
              <div key={dienst.naam} className="bg-wit rounded-2xl p-8 shadow-sm border border-primair/10">
                <h2 className="text-xl font-bold text-primair mb-2">{dienst.naam}</h2>
                <p className="text-tekst/70 leading-relaxed mb-4">{dienst.beschrijving}</p>
                {dienst.external ? (
                  <a href={dienst.link} target="_blank" rel="noopener noreferrer"
                    className="font-bold text-accent hover:underline">Meer info →</a>
                ) : (
                  <Link href={dienst.link} className="font-bold text-accent hover:underline">Meer info →</Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-wit">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-8 text-center reveal">Wat cliënten zeggen</h2>
            <div id="reviews-grid" className="grid gap-6 sm:grid-cols-3">
              <img src="/fotos/review-1.jpg" alt="Review van een cliënt" className="w-full rounded-2xl shadow-sm" />
              <img src="/fotos/review-2.jpg" alt="Review van een cliënt" className="w-full rounded-2xl shadow-sm" />
              <img src="/fotos/review-3.jpg" alt="Review van een cliënt" className="w-full rounded-2xl shadow-sm" />
            </div>
          </div>
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#reviews-grid']} />
    </>
  );
}
