import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Inner Essence Journey' };

export default function InnerEssenceJourneyPage() {
  return (
    <>
      {/* Hero — herosectie-inner-essence-journey.jpg als achtergrond (nog toe te voegen) */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-inner-essence-journey.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Van een vol hoofd naar diepe rust en helderheid
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
            Een lichaamsgerichte behandeling voor vrouwen die altijd aan staan en klaar zijn om eindelijk te landen.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">Voel je dat je hoofd altijd "aan" staat?</p>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">Dat je lichaam moe is, maar je niet écht kunt ontspannen?</p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Je weet dat er iets vastzit, in je lichaam of ergens dieper.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Tijdens de inner essence journey mag je gewoon liggen, ontvangen en je lichaam het werk laten doen.
          </p>
          <p className="font-bold text-primair mb-8 reveal">
            De journey duurt 1,5 uur en kost €122,-, dit is inclusief voor- en nagesprek.
          </p>
          <Link href="/contact"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Ja, ik wil dat ervaren →
          </Link>
        </section>

        {/* Wat is een inner essence journey */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat is een inner essence journey?</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Een inner essence journey is een reis naar jouw interne wereld en is iedere keer weer anders. Het
              helpt je om patronen en overtuigingen te onderzoeken die in jouw onderbewuste zijn vastgezet en die
              jouw dagelijkse leven beïnvloeden.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Doordat elke journey anders is, geeft het je wat je op dat moment nodig hebt, het brengt je terug
              naar jouw essentie, jouw ware zelf.
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Elke sessie wordt afgestemd op datgene waar jij behoefte aan hebt, of dat nu lichamelijk is (spanning,
              pijn, vermoeidheid) of emotioneel (onrust, rouw, vastzitten).
            </p>
          </div>
        </section>

        {/* Wat kun je ervaren */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat kun je ervaren?</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Tijdens en na de sessie kun je onder andere het volgende voelen:
          </p>
          <ul id="ervaren-lijst" className="space-y-3 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li><strong className="text-primair">Uit je hoofd:</strong> het denken valt weg, je daalt af naar je lichaam.</li>
            <li><strong className="text-primair">Diepe ontspanning:</strong> zonder moeite, de muziek en de aanrakingen doen het werk.</li>
            <li><strong className="text-primair">Stroming:</strong> energie die weer mag bewegen, lichtheid waar zwaarte zat.</li>
            <li><strong className="text-primair">Helderheid:</strong> na de sessie weet je vaak precies wat je nodig hebt.</li>
            <li><strong className="text-primair">Loslaten:</strong> spanning, emoties of onrust die zachtjes mogen gaan.</li>
            <li><strong className="text-primair">Thuiskomen:</strong> bij jezelf, zoals je al een tijdje niet meer geweest bent.</li>
          </ul>
        </section>

        {/* Voor wie */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Voor wie is een inner essence journey?</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              De inner essence journey is er voor vrouwen die klaar zijn om even niets te moeten en te voelen wat
              er al die tijd al was.
            </p>
            <p className="font-bold text-primair mb-6 reveal">
              Je hoeft niet defect te zijn. Je hoeft niets te bewijzen. Misschien herken je dit:
            </p>
            <ul id="herkenbaar-lijst" className="space-y-3 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li><strong className="text-primair">Altijd "aan":</strong> jouw hoofd verwerkt, plant en piekert, ook als je wil rusten. Aanzetten lukt, uitzetten niet.</li>
              <li><strong className="text-primair">Moe maar niet opgeladen:</strong> je slaapt genoeg, maar wordt niet uitgerust wakker. Je tank raakt langzaam leeg.</li>
              <li><strong className="text-primair">Jezelf voorbijlopen:</strong> je doet veel voor anderen. Voor jezelf stoppen voelt haast onnatuurlijk.</li>
              <li><strong className="text-primair">Gevoelig voor prikkels:</strong> lawaai, drukte, verwachtingen, je raakt snel vol. Je verlangt naar stilte.</li>
              <li><strong className="text-primair">Klaar voor iets anders:</strong> praten helpt, maar je zoekt iets diepers, iets dat je lichaam bereikt.</li>
            </ul>
          </div>
        </section>

        {/* Praktische info */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische info</h2>
          <div className="bg-wit rounded-2xl p-8 space-y-2 text-tekst/80 leading-relaxed mb-8 reveal">
            <p><strong className="text-primair">Duur:</strong> 90 minuten</p>
            <p><strong className="text-primair">Locatie:</strong> Omanstraat 58 in Delft</p>
            <p><strong className="text-primair">Investering:</strong> €122,- per journey</p>
          </div>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">
            Wil je liever met zijn tweeën komen? Met je moeder, zus, vriendin...?
          </p>
          <p className="text-tekst/80 leading-relaxed mb-8 reveal">
            Dat kan ook, een duo inner essence journey kost €77,- per persoon.
          </p>
          <Link href="/contact"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Maak een afspraak →
          </Link>
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#ervaren-lijst', '#herkenbaar-lijst']} />
    </>
  );
}
