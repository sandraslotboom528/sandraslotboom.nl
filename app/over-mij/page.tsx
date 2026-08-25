import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Over mij' };

export default function OverMijPage() {
  return (
    <>
      {/* Hero — portret.jpg als achtergrond */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/portret.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Over mij</h1>
        </div>
      </div>

      <div className="hero-cover">
        <section className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            [Vertel hier jouw verhaal. Wie ben je, wat drijft je, hoe ben je hier gekomen?
            Schrijf vanuit je hart.]
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            [Meer over jouw werkwijze, achtergrond of wat jou uniek maakt.]
          </p>
        </section>
      </div>
      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
