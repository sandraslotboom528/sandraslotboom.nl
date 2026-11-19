import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Aanbod',
  description: 'Bekijk het aanbod van Salacia: acupunctuur, Neuro Emotionele Integratie, de Inner Essence Journey en meer.',
};

const diensten: { naam: string; beschrijving: string; link: string; external?: boolean }[] = [
  {
    naam: 'Acupunctuurbehandeling',
    beschrijving: 'Voor wie pijn heeft aan spieren, pezen of gewrichten, gericht op de oorzaak, niet alleen het symptoom.',
    link: '/acupunctuur',
  },
  {
    naam: 'Voetreflexbehandeling',
    beschrijving: 'Voor wie pijn heeft in nek, rug of gewrichten, een zachte behandeling via je voeten en acupressuurpunten, zonder naalden.',
    link: '/voetreflex',
  },
  {
    naam: 'Neuro Emotionele Integratie',
    beschrijving: 'Voor wie pijn houdt die steeds terugkomt, zoek de onverwerkte emoties die onbewust vastzitten en laat ze los, met de wijsheid van de 5 elementen.',
    link: '/neuro-emotionele-integratie',
  },
  {
    naam: 'Inner essence journey',
    beschrijving: 'Voor vrouwen die altijd aan staan, een lichaamsgerichte reis naar diepe rust en helderheid.',
    link: '/inner-essence-journey',
  },
  {
    naam: 'Acupressuuropleiding',
    beschrijving: 'Voor wie zelf aan de slag wil met de 5 elementen, leer de signalen van je lichaam herkennen en stel je eigen acupressuurroutine samen van maximaal 10–15 minuten per dag.',
    link: '/opleiding-5-elementen-acupressuur',
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
