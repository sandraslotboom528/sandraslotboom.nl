import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'One Day Retreat',
  description:
    'One Day Retreat op zaterdag 19 december 2026 in Schipluiden: een dag voor jezelf, gedragen door de 5 elementen.',
};

const AANMELD_URL = 'https://laposta.nl/f/ssybx13cao99';

const elementen = [
  {
    element: 'Water',
    titel: 'Meditatie en soundhealing',
    tekst: 'We beginnen met vertragen. Je mag landen, luisteren en even loskomen van alles wat je aandacht vraagt.',
  },
  {
    element: 'Hout',
    titel: 'Een vision board voor 2027',
    tekst:
      'Vanuit die rust kijken we vooruit. Wat wil jij laten groeien in het nieuwe jaar? Je geeft jouw verlangens en ideeën een plek op een vision board.',
  },
  {
    element: 'Vuur',
    titel: 'Lunch',
    tekst: 'Tijd om te genieten van een vegetarische lunch, op te laden en samen aan tafel te zitten.',
  },
  {
    element: 'Aarde',
    titel: 'Yin yoga',
    tekst:
      'Met zachte, langere houdingen geef je je lichaam de ruimte om te ontspannen en weer bij jezelf te komen.',
  },
  {
    element: 'Metaal',
    titel: 'Inner Essence Journey',
    tekst:
      'We sluiten af met een innerlijke reis. Een moment om te voelen wat je wilt loslaten en wat je juist wilt meenemen.',
  },
];

export default function OneDayRetreatPage() {
  return (
    <>
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-stiltemiddag.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            One Day Retreat
          </h1>
        </div>
      </div>

      <div className="hero-cover">
        {/* Intro */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="two-col">
            <div className="col-text">
              <p className="text-lg font-bold text-primair/90 leading-relaxed mb-2 reveal">
                Een dag voor jezelf, gedragen door de 5 elementen.
              </p>
              <p className="text-tekst/60 mb-8 reveal">Zaterdag 19 december 2026 · 10.00 – 16.30 uur · Yogazolder van Oker, Schipluiden</p>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                Het einde van het jaar komt eraan. De agenda loopt vol, de lijstjes worden langer en iedereen wil nog
                iets van je.
              </p>
              <p className="font-bold text-primair mb-4 reveal">
                Wanneer heb jij dit jaar eigenlijk stilgestaan bij jezelf?
              </p>
              <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                Bij wat er allemaal gebeurd is. Bij wat je hebt gedragen. En bij wat je volgend jaar anders wilt.
              </p>
              <p className="text-tekst/80 leading-relaxed mb-8 reveal">
                Op zaterdag 19 december nodig ik je uit om het jaar af te sluiten met aandacht voor jezelf. Tijdens dit
                One Day Retreat bewegen we door de 5 elementen. Elk onderdeel geeft je op een andere manier ruimte om
                stil te staan, vooruit te kijken en te voelen wat je mee wilt nemen naar 2027.
              </p>
              <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
                Meld je aan voor het One Day Retreat →
              </a>
            </div>
            <div className="col-image">
              <img src="/fotos/website-yogazolder.jpg" alt="De yogazolder van Oker in Schipluiden, klaargezet met yogamatten en kussens" />
            </div>
          </div>
        </section>

        {/* Een dag door de 5 elementen */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col flip">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-8 reveal">Een dag door de 5 elementen</h2>
                <ul id="elementen-lijst" className="space-y-6">
                  {elementen.map((e) => (
                    <li key={e.element} className="border-l-2 border-primair/20 pl-5">
                      <p className="font-bold text-primair mb-1">
                        {e.element} · {e.titel}
                      </p>
                      <p className="text-tekst/80 leading-relaxed">{e.tekst}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-image">
                <img src="/fotos/website-nei-1.jpg" alt="De 5 elementen: Water, Hout, Vuur, Aarde en Metaal" />
              </div>
            </div>
          </div>
        </section>

        {/* Van Water naar Metaal */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Van Water naar Metaal</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            De volgorde van de dag is niet toevallig. We volgen de voedingscyclus van de 5 elementen: ieder
            element voedt het volgende.
          </p>
          <p className="font-bold text-primair mb-6 reveal">Water → Hout → Vuur → Aarde → Metaal</p>
          <ul id="cyclus-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>Je vertraagt.</li>
            <li>Je kijkt vooruit.</li>
            <li>Je geniet.</li>
            <li>Je landt in je lichaam.</li>
            <li>En je voelt wat je wilt loslaten en wat je meeneemt.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed reveal">
            Zo beweeg je in één dag door de hele cyclus, precies zoals de natuur dat doet. Geen losse
            onderdelen, maar één doorgaande beweging van binnen naar buiten en weer terug naar jezelf.
          </p>
        </section>

        {/* Wat neem je mee naar huis */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat neem je mee naar huis?</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Deze dag stopt niet wanneer je naar huis gaat. Je neemt je eigen vision board voor 2027 mee.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-8 reveal">
              Hang het op een plek waar je het dagelijks ziet. Zo herinnert het je het hele jaar aan wat je op
              deze dag hebt gevoeld, en aan wat jij wilt laten groeien.
            </p>
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Je hoeft even niets</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Dit is geen dag waarop je iets hoeft te presteren. Je hoeft niet creatief te zijn om een vision board
              te maken. Je hoeft niet lenig te zijn voor yin yoga. En je hoeft niet te weten wat je wilt voordat
              je komt.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Je mag vertragen.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Je mag voelen.</p>
            <p className="font-bold text-primair reveal">En je mag ontdekken wat zich aandient.</p>
          </div>
        </section>

        {/* Voor wie */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Deze dag is voor jou als…</h2>
          <ul id="voorwie-lijst" className="space-y-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>…je vaak voor anderen klaarstaat en zelf achteraan sluit.</li>
            <li>…je het jaar niet ongemerkt voorbij wilt laten gaan.</li>
            <li>…je verlangt naar een moment van rust in de drukke decembermaand.</li>
            <li>…je met richting en vertrouwen het nieuwe jaar in wilt stappen.</li>
            <li>…je nieuwsgierig bent naar de wijsheid van de 5 elementen.</li>
            <li>…of wanneer je simpelweg voelt: deze dag is voor mij.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">
            Je hoeft geen ervaring te hebben met meditatie, yin yoga of de vijf elementen.
          </p>
          <p className="font-bold text-primair reveal">Je mag komen zoals je bent.</p>
        </section>

        {/* Praktische informatie */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische informatie</h2>
                <div className="bg-achtergrond rounded-2xl p-8 space-y-2 text-tekst/80 leading-relaxed mb-8 reveal">
                  <p><strong className="text-primair">Datum:</strong> zaterdag 19 december 2026</p>
                  <p><strong className="text-primair">Tijd:</strong> 10.00 – 16.30 uur</p>
                  <p><strong className="text-primair">Locatie:</strong> de yogazolder van Oker in Schipluiden</p>
                  <p><strong className="text-primair">Investering:</strong> € 158,-</p>
                  <p><strong className="text-primair">Snelle beslissersprijs:</strong> € 122,- (t/m 1 november)</p>
                  <p><strong className="text-primair">Groepsgrootte:</strong> maximaal 14 deelnemers</p>
                </div>
                <p className="font-bold text-primair mb-2 reveal">Inclusief:</p>
                <ul className="list-disc pl-5 space-y-1 mb-6 text-tekst/80 leading-relaxed reveal">
                  <li>meditatie en soundhealing</li>
                  <li>het maken van je vision board voor 2027</li>
                  <li>een vegetarische lunch</li>
                  <li>yin yoga</li>
                  <li>Inner Essence Journey</li>
                  <li>gebruik van alle yogamaterialen</li>
                </ul>
                <p className="font-bold text-primair mb-2 reveal">Wat neem je mee?</p>
                <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                  Comfortabele kleding en warme sokken. Voor je vision board mag je een schaar, lijm en tijdschriften meenemen.
                </p>
                <p className="text-tekst/80 leading-relaxed reveal">
                  Na het klikken op de aanmeldknop kom je in een scherm waar je je naam en mailadres invult. Daarna
                  ontvang je een mail met de betaalgegevens. Dat kan even duren, en de mail kan ook in je spam
                  terechtkomen.
                </p>
              </div>
              <div className="col-image">
                <img src="/fotos/website-lunch.jpg" alt="De lunchtafel met brood, dips en kleurrijke schaaltjes" />
              </div>
            </div>
          </div>
        </section>

        {/* Afsluiting */}
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-primair mb-8 reveal">
            Gun jezelf deze dag.
          </h2>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Een dag om te vertragen met Water.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Om vooruit te kijken met Hout.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Om te genieten met Vuur.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Om te landen met Aarde.</p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">En om los te laten met Metaal.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">
            Zodat je het nieuwe jaar niet haastig in rent,
          </p>
          <p className="font-bold text-primair mb-8 reveal">maar er bewust in stapt.</p>
          <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Meld je aan voor het One Day Retreat →
          </a>
          <p className="text-tekst/60 text-sm mt-4 reveal">
            Meld je uiterlijk 1 november aan voor de snelle beslissersprijs van € 122,-.
          </p>
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#elementen-lijst', '#cyclus-lijst', '#voorwie-lijst']} />
    </>
  );
}
