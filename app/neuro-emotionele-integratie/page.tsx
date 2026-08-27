import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Neuro Emotionele Integratie' };

export default function NeiPage() {
  return (
    <>
      {/* Hero — herosectie-nei.jpg als achtergrond (nog toe te voegen) */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-nei.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Neuro Emotionele Integratie (NEI)
          </h1>
        </div>
      </div>

      <div className="hero-cover">
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-4">
          <Link href="/aanbod" className="text-sm font-medium text-accent hover:underline reveal">
            ← Terug naar aanbod
          </Link>
        </section>

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <p className="text-lg font-bold text-primair/90 leading-relaxed mb-8 reveal">
            Bevrijd wat je niet kunt zien, maar wél voelt – met de wijsheid van de Chinese geneeskunde.
          </p>

          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Herken je dat?</h2>
          <ul id="herken-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>Je voelt dat er iets in de weg zit.</li>
            <li>Een terugkerend patroon.</li>
            <li>Een emotie die steeds opduikt.</li>
            <li>Een onverklaarbare blokkade in je lijf.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Je hebt er al over gepraat, misschien zelfs aan gewerkt… en tóch blijft het zich herhalen.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            NEI (Neuro Emotionele Integratie) helpt je om datgene wat onbewust vastzit, liefdevol los te laten. En
            wat deze methode extra krachtig maakt? We combineren het met de eeuwenoude wijsheid van de 5 elementen,
            waarin lichaam, geest en emotie één geheel vormen. Tijdens een NEI-sessie maak ik gebruik van een
            biotensor, een energetisch meetinstrument.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
          <Link href="/contact"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Contact opnemen →
          </Link>
        </section>

        {/* Wat is NEI precies */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat is NEI precies?</h2>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  NEI is een methode die helpt om onverwerkte emoties, overtuigingen of trauma&apos;s op te sporen
                  én los te laten.
                </p>
                <p className="font-bold text-primair mb-6 reveal">Zonder lange gesprekken of herbeleving.</p>
                <p className="text-tekst/80 leading-relaxed mb-8 reveal">
                  NEI maakt gebruik van een biotensor om contact te maken met het onderbewuste, daar waar oude
                  patronen worden opgeslagen. Dat kunnen emoties zijn, maar ook angsten, belemmerende overtuigingen
                  of gemiste basisbehoeften. Iedereen heeft dit in zijn onderbewuste opgeslagen en dit kan tot
                  allerlei klachten leiden.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">We kijken naar:</p>
                <ul id="nei-kijken-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
                  <li>Welke elementen (Hout, Vuur, Aarde, Metaal, Water) uit balans zijn</li>
                  <li>Welke emoties daar energetisch bij horen</li>
                  <li>En hoe we jouw energie weer kunnen laten stromen</li>
                </ul>
              </div>
              <div className="col-image">
                <img src="/fotos/website-nei-1.jpg" alt="De vijf elementen" />
              </div>
            </div>
          </div>
        </section>

        {/* De wijsheid van de vijf elementen */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">De wijsheid van de vijf elementen</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            In de Chinese geneeskunde worden emoties niet gezien als iets slechts, maar als boodschappers. Bij elk
            element hoort een bepaalde emotie:
          </p>
          <ul id="elementen-emoties-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li><strong className="text-primair">Hout</strong> – woede &amp; richting vinden</li>
            <li><strong className="text-primair">Vuur</strong> – vreugde &amp; verbinding</li>
            <li><strong className="text-primair">Aarde</strong> – piekeren &amp; zelfzorg</li>
            <li><strong className="text-primair">Metaal</strong> – verdriet &amp; loslaten</li>
            <li><strong className="text-primair">Water</strong> – angst &amp; vertrouwen</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed reveal">
            Tijdens een NEI-sessie onderzoeken we welke emotie-element-combinatie bij jou op de voorgrond staat.
            Door deze bewust te maken en los te koppelen, kan er diepe transformatie ontstaan, van binnenuit.
          </p>
        </section>

        {/* Voor wie is NEI geschikt */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Voor wie is NEI geschikt?</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">NEI is er voor jou als je:</p>
            <ul id="doelgroep-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>Steeds tegen dezelfde blokkades aanloopt</li>
              <li>Voelt dat er &apos;iets&apos; zit, maar het niet kunt benoemen</li>
              <li>Lichamelijke klachten hebt zonder duidelijke oorzaak</li>
              <li>Oude trauma&apos;s of familiethema&apos;s wilt helen</li>
              <li>Vanuit zachtheid en bewustzijn wilt groeien</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <Link href="/contact"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Contact opnemen →
          </Link>
        </section>

        {/* Praktische info */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische info</h2>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">
              Wil jij ontdekken wat jouw lichaam en onderbewuste je te vertellen hebben?
            </p>
            <p className="text-tekst/80 leading-relaxed mb-8 reveal">
              Ben je klaar om oude lading los te laten en je energie te bevrijden? Maak een afspraak voor een
              NEI-sessie!
            </p>
            <div className="bg-achtergrond rounded-2xl p-8 space-y-2 text-tekst/80 leading-relaxed reveal">
              <p><strong className="text-primair">Duur:</strong> 60 minuten</p>
              <p><strong className="text-primair">Locatie:</strong> Omanstraat 58 in Delft of online via Zoom</p>
              <p>
                <strong className="text-primair">Investering:</strong> €86,- per sessie. Mijn behandelingen worden
                niet vergoed door de zorgverzekeraar.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <Link href="/contact"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Neem contact op →
          </Link>
        </section>
      </div>

      <ScrollReveal
        singles={['.reveal']}
        grids={['#herken-lijst', '#nei-kijken-lijst', '#elementen-emoties-lijst', '#doelgroep-lijst']}
      />
    </>
  );
}
