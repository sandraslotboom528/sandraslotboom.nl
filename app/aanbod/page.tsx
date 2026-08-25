import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Aanbod' };

const diensten = [
  {
    naam: 'Acupunctuurbehandeling',
    beschrijving: '[Korte beschrijving van deze behandeling: voor wie, waarvoor en wat iemand kan verwachten.]',
  },
  {
    naam: 'Neuro Emotionele Integratie',
    beschrijving: '[Korte beschrijving van deze behandeling: voor wie, waarvoor en wat iemand kan verwachten.]',
  },
  {
    naam: 'Inner essence journey',
    beschrijving: '[Korte beschrijving van deze behandeling: voor wie, waarvoor en wat iemand kan verwachten.]',
  },
  {
    naam: 'Online acupressuur',
    beschrijving: '[Korte beschrijving van deze behandeling: voor wie, waarvoor en wat iemand kan verwachten.]',
  },
];

export default function AanbodPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-4">Mijn aanbod</h1>
      <p className="text-tekst/80 mb-12">
        [Korte introductie op jouw aanbod: waar mensen bij jou terecht kunnen en wat ze mogen verwachten.]
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {diensten.map(dienst => (
          <div key={dienst.naam} className="bg-wit rounded-2xl p-8 shadow-sm border border-primair/10">
            <h2 className="text-xl font-bold text-primair mb-2">{dienst.naam}</h2>
            <p className="text-tekst/70 leading-relaxed mb-4">{dienst.beschrijving}</p>
            <a href="/contact" className="font-bold text-accent hover:underline">Meer info →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
