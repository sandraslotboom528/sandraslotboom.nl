import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Voetreflexbehandeling',
  description: 'Voetreflexbehandeling met acupressuur bij pijn in je nek, rug of gewrichten. Een zachte behandeling vanuit de Chinese geneeskunde en de 5 elementen, in Delft.',
};

const vragen = [
  {
    vraag: 'Moet ik iets voorbereiden?',
    antwoord: 'Draag makkelijke kleding en kom liever niet met een volle maag. Je schoenen en sokken gaan uit tijdens de behandeling.',
  },
  {
    vraag: 'Doet het pijn?',
    antwoord: 'Sommige zones of punten kunnen gevoelig zijn, vooral waar spanning zit. Ik stem de druk altijd op jou af. Je kunt op elk moment aangeven wat prettig is.',
  },
  {
    vraag: 'Hoeveel behandelingen heb ik nodig?',
    antwoord: 'Dat verschilt per persoon en per klacht. Na de eerste behandeling bespreken we samen wat zinvol is.',
  },
  {
    vraag: 'Wordt de behandeling vergoed?',
    antwoord: 'Nee, de behandeling wordt niet vergoed door de zorgverzekeraar.',
  },
  {
    vraag: 'Kan ik mijn afspraak verzetten?',
    antwoord: 'Ja hoor, mits je dat minimaal 24 uur van tevoren doet.',
  },
];

function BoekKnop() {
  return (
    <Link href="/contact"
      className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
      Boek je behandeling →
    </Link>
  );
}

export default function VoetreflexPage() {
  return (
    <>
      {/* Hero — herosectie-voetreflex.jpg als achtergrond */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-voetreflex.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Pijn in je nek, rug of gewrichten? Je voeten weten de weg terug.
          </h1>
          <p className="text-white/90 text-lg max-w-xl mt-4">
            Voetreflex en acupressuur bij klachten aan spieren, pezen en gewrichten
          </p>
          <Link href="/contact" className="hero-btn">Boek je behandeling →</Link>
        </div>
      </div>

      <div className="hero-cover">
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-4">
          <Link href="/aanbod" className="text-sm font-medium text-accent hover:underline reveal">
            ← Terug naar aanbod
          </Link>
        </section>

        {/* Opening */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <p className="text-2xl font-bold text-primair leading-snug mb-4 reveal">
            &ldquo;Anderen hebben het nodig. Ik red me wel.&rdquo;
          </p>
          <p className="font-bold text-primair/90 mb-6 reveal">Herken je die zin?</p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Je zorgt voor je kinderen. Voor je ouders. Je werk vraagt alles van je. En ergens tussendoor zou je ook
            nog moeten sporten.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Je lichaam doet lang mee. Maar het begint te seinen.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Een nek die vastzit als je wakker wordt. Schouders die richting je oren kruipen. Een onderrug die zeurt
            aan het eind van de dag. Een knie, een pols, een hiel die niet meer wil zoals vroeger.
          </p>
          <p className="font-bold text-primair reveal">
            En &apos;s avonds in bed maalt je hoofd gewoon door.
          </p>
        </section>

        {/* Wat je al geprobeerd hebt */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat je al geprobeerd hebt</h2>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Misschien neem je een pijnstiller. Dan wordt het even stiller.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Misschien heb je yoga geprobeerd. Maar er was nooit een vast moment voor. En zelfs op de mat bleef
                  je hoofd racen.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Misschien denk je: het gaat vanzelf wel weer over, als ik maar gewoon doorga.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                  Maar het gaat niet over. Het verplaatst zich. Of het komt steeds terug.
                </p>
                <p className="font-bold text-primair reveal">Want een klacht geeft je een boodschap.</p>
              </div>
              <div className="col-image">
                <img src="/fotos/website-voetreflex3.jpg" alt="Handen die een voet vasthouden tijdens een voetreflexbehandeling" />
              </div>
            </div>
          </div>
        </section>

        {/* Chinese geneeskunde */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Hoe de Chinese geneeskunde naar pijn kijkt</h2>
          <p className="font-bold text-primair mb-6 reveal">
            In de Chinese geneeskunde zeggen we: waar Qi vrij stroomt, is geen pijn. Waar Qi stokt, ontstaat pijn.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Qi is je levensenergie. Die stroomt door je lichaam via de meridianen. Stress, zorgen, overbelasting en te
            weinig rust zetten die stroom vast. Je spieren, pezen en gewrichten voelen dat vaak als eerste.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Daarom kijk ik niet alleen naar de plek waar het pijn doet. Ik kijk ook naar wat eronder ligt.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Volgens de vijf-elementenleer zorgt elk element voor een ander deel van je lichaam:
          </p>
          <ul id="elementen-lijst" className="space-y-3 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li><strong className="text-primair">Hout</strong> voor je pezen en banden, voor soepelheid en beweging</li>
            <li><strong className="text-primair">Aarde</strong> voor je spieren</li>
            <li><strong className="text-primair">Water</strong> voor je botten en gewrichten</li>
            <li><strong className="text-primair">Vuur</strong> voor je bloedsomloop en warmte, samen met Hout voor de doorstroming van Qi en Bloed</li>
            <li><strong className="text-primair">Metaal</strong> voor je ademhaling en ruimte, en het vrij houden van je meridianen</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed reveal">
            Je klacht vertelt me welk element aandacht vraagt. Zo wordt elke behandeling anders.
          </p>
        </section>

        {/* Twee methoden */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col flip">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">Twee methoden, één behandeling</h2>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Je voeten zijn een kaart van je hele lichaam. Elke reflexzone staat in verbinding met een orgaan,
                  een gewricht of een deel van je lichaam. Via je voeten werk ik op de plek van je klacht.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Daarnaast gebruik ik acupressuurpunten. Met zachte, gerichte druk help ik Qi en Bloed weer stromen.
                  Ik kies de punten die passen bij jouw klacht en bij het element dat uit balans is.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                  Zachte aanraking verbindt je met je lichaam. Het werkt via je lichaam, ook als je hoofd nog aan
                  staat.
                </p>
                <p className="font-bold text-primair reveal">
                  Je hoeft niet stil te worden. Je hoeft niets te kunnen. Je hoeft alleen te gaan liggen.
                </p>
              </div>
              <div className="col-image">
                <img src="/fotos/website-voetreflex2.jpg" alt="Sandra masseert een voet" />
              </div>
            </div>
          </div>
        </section>

        {/* Voor wie */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Voor wie is deze behandeling?</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">Voor jou als je last hebt van:</p>
          <ul id="klachten-lijst" className="grid gap-x-8 gap-y-2 sm:grid-cols-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5 sm:border-l-0 sm:pl-0">
            <li>Nek- en schouderklachten</li>
            <li>Rugpijn, hoog of laag</li>
            <li>Stijve of pijnlijke heupen en knieën</li>
            <li>Klachten aan ellebogen, polsen of handen</li>
            <li>Pijn in je voeten, hielen of achillespees</li>
            <li>Spierspanning door stress</li>
            <li>Pijn die steeds terugkomt of zich verplaatst</li>
          </ul>
          <p className="font-bold text-primair reveal">
            En vooral als je merkt dat je lichaam wil zakken, maar je hoofd dat niet toelaat.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
          <BoekKnop />
        </section>

        {/* Verloop */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Zo verloopt een behandeling</h2>
            <ol id="verloop-lijst" className="space-y-4 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>
                <strong className="text-primair">1. Korte intake.</strong> We beginnen met een gesprek over je klacht.
                Waar zit de pijn, hoe lang heb je er al last van, wanneer is het erger of minder?
              </li>
              <li>
                <strong className="text-primair">2. Een behandeling op maat.</strong> Op basis van de intake kies ik de
                acupressuurpunten en reflexzones die bij jou passen.
              </li>
              <li>
                <strong className="text-primair">3. Ontvangen.</strong> Je ligt comfortabel, je schoenen en sokken gaan
                uit. Jij doet niets. Je mag alleen voelen hoe je lichaam zakt.
              </li>
              <li>
                <strong className="text-primair">4. Afronding.</strong> We nemen kort door wat je hebt gemerkt.
              </li>
            </ol>
          </div>
        </section>

        {/* Wat het je kan brengen */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat het je kan brengen</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">Iedereen ervaart een behandeling anders.</p>
          <p className="text-tekst/80 leading-relaxed reveal">
            De een kan weer zonder pijn sporten, de ander merkt dat ze beter slaapt omdat de pijn haar niet meer
            wakker houdt.
          </p>
        </section>

        {/* Waarom ik dit werk doe */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">Waarom ik dit werk doe</h2>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Ik ben Sandra. Getrouwd, moeder van vier kinderen.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Jarenlang werkte ik als radiodiagnostisch laborant in het ziekenhuis. Ik maakte beelden van wat er
                  in het lichaam gebeurde. Maar ik miste iets. De mens achter het beeld. Het verhaal achter de klacht.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Daarom ging ik op zoek. Zo kwam ik bij de Chinese geneeskunde, acupunctuur en massage.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Daar leerde ik iets wat ik nu elke dag in mijn praktijk zie. Je lichaam weet meer dan je hoofd
                  bedenkt. Het draagt signalen. Het draagt herinneringen.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  In mijn behandelingen krijg je de ruimte om uit je hoofd te zakken en te voelen. Zonder oordeel.
                  Zonder druk.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                  Ik kom niet om iets te repareren. Maar om aanwezig te zijn bij wat er is. Daaruit kan ontspanning
                  ontstaan.
                </p>
                <p className="font-bold text-primair reveal">Je bent welkom, precies zoals je bent.</p>
              </div>
              <div className="col-image">
                <img src="/fotos/website-voetreflex1.jpg" alt="Sandra tijdens een voetreflexbehandeling" />
              </div>
            </div>
          </div>
        </section>

        {/* Geen tijd */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">&ldquo;Ik heb er geen tijd voor&rdquo;</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Misschien denk je dat nu. Of: het zal toch ook wel weer niet helpen.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Maar misschien zit er nog iets onder. Misschien gun je het jezelf gewoon niet.
          </p>
          <p className="font-bold text-primair mb-4 reveal">
            Een uur voor jezelf is geen luxe. Het is geen tijd die je van anderen afpakt.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Het is ruimte waarin je lichaam weer kan stromen. Zodat je er straks weer kunt zijn. Ook voor jezelf.
          </p>
        </section>

        {/* Praktisch */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische info</h2>
            <div className="bg-achtergrond rounded-2xl p-8 space-y-2 text-tekst/80 leading-relaxed mb-10 reveal">
              <p><strong className="text-primair">Duur:</strong> 60 minuten</p>
              <p><strong className="text-primair">Investering:</strong> €86,- per behandeling</p>
              <p><strong className="text-primair">Locatie:</strong> Omanstraat 58 in Delft</p>
            </div>
            <div className="text-center">
              <BoekKnop />
            </div>
          </div>
        </section>

        {/* Veelgestelde vragen */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-8 reveal">Veelgestelde vragen</h2>
          <ul id="faq-lijst" className="border-t border-primair/20">
            {vragen.map((v) => (
              <li key={v.vraag} className="border-b border-primair/20">
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-bold text-primair">
                    {v.vraag}
                    <span aria-hidden="true" className="text-2xl font-normal leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="text-tekst/80 leading-relaxed pb-5">{v.antwoord}</p>
                </details>
              </li>
            ))}
          </ul>
        </section>

        {/* Afsluiting */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">
              Je hoeft niet te wachten tot het niet meer gaat.
            </h2>
            <p className="text-tekst/80 leading-relaxed mb-8 reveal">
              Niet om nog harder door te kunnen. Maar om weer jezelf te worden.
            </p>
            <BoekKnop />
          </div>
        </section>
      </div>

      <ScrollReveal
        singles={['.reveal']}
        grids={['#elementen-lijst', '#klachten-lijst', '#verloop-lijst', '#faq-lijst']}
      />
    </>
  );
}
