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

        {/* Mijn achtergrond */}
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Mijn achtergrond</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Ik ben Sandra Slotboom, getrouwd en trotse moeder van vier prachtige kinderen. Mijn leven is rijk gevuld,
            met liefde, hectiek, groei en verbinding. Thuis én in mijn werk draait het voor mij om verbinding, met
            jezelf, met je lichaam, met wat er diep vanbinnen leeft.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Mijn pad begon ooit in de westerse geneeskunde. Jarenlang werkte ik als radiodiagnostisch laborant, waar
            ik leerde kijken naar het lichaam via beelden, structuren en systemen. Een waardevolle basis, maar ik
            voelde dat er iets ontbrak: de mens achter het beeld, het verhaal achter de klacht. Mijn nieuwsgierigheid
            naar die diepere lagen bracht me bij de Traditionele Chinese Geneeskunde, acupunctuur en massage. Een
            wereld waarin het lichaam niet alleen iets is om te onderzoeken, maar om mee samen te werken.
          </p>
        </section>

        {/* Je lichaam liegt niet */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Je lichaam liegt niet</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Ik geloof dat ons lichaam zoveel meer weet dan we met ons hoofd kunnen bedenken. Het fluistert, roept
              soms, en heeft altijd een verhaal te vertellen. Mijn rol is om ruimte te bieden waarin je mag zakken uit
              het denken en mag gaan voelen. Zonder oordeel. Zonder moeten.
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Mijn visie is simpel en diep tegelijk: het lichaam liegt nooit. Het draagt wijsheid, herinneringen en
              signalen die we soms zijn vergeten te voelen. In mijn werk nodig ik je uit om weer te luisteren. Om te
              zakken uit je hoofd, in je lijf. Niet om iets te "repareren", maar om aanwezig te zijn met wat er is.
              Van daaruit ontstaat ontspanning, ruimte en vaak ook heling.
            </p>
          </div>
        </section>

        {/* Citaat */}
        <section className="max-w-2xl mx-auto px-6 py-16 text-center">
          <p className="text-xl italic text-primair leading-relaxed mb-3 reveal">
            "Pijn doet een mens nadenken, gedachten maken een mens wijs, wijsheid maakt het leven draaglijk."
          </p>
          <p className="text-tekst/60 reveal">— John Patrick</p>
        </section>

        {/* Wees welkom */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wees welkom</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            In mijn praktijk nodig ik je uit om te zakken uit je hoofd, in je lijf. Om te luisteren naar de signalen
            van binnenuit. Niet om iets op te lossen of te "repareren", maar om aanwezig te zijn met wat er is. Van
            daaruit ontstaat beweging, soms letterlijk, soms op een dieper niveau.
          </p>
          <p className="font-bold text-primair mb-10 reveal">
            Je bent welkom, precies zoals je bent.
          </p>
          <div className="text-center">
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Wil je ook weer leren luisteren naar de signalen van jouw lichaam?
            </p>
            <a href="/contact"
              className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
              Neem contact op →
            </a>
          </div>
        </section>

      </div>
      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
