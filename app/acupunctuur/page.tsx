import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Acupunctuur',
  description: 'Acupunctuur bij pijn aan spieren, pezen en gewrichten, zoals hielspoor, tenniselleboog en rug-, nek- en schouderklachten — ontdek hoe het werkt en wat je kunt verwachten.',
};

export default function AcupunctuurPage() {
  return (
    <>
      {/* Hero — herosectie-acupunctuur.jpg als achtergrond */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-acupunctuur.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Acupunctuur bij pijn aan spieren, pezen en gewrichten
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
          Weer soepel en pijnvrij bewegen, om te sporten en in je dagelijkse bezigheden. Dat lukt niet door alleen
          de pijn te dempen, maar door te herstellen waarom je lichaam vastloopt.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Je hebt misschien wel eens van acupunctuur gehoord. Naaldjes. Meridianen. Qi. Klinkt allemaal een beetje
          mysterieus, misschien zelfs zweverig. Maar acupunctuur is een eeuwenoude behandeling die iets doet wat de
          meeste westerse behandelingen niet doen: ze kijkt naar de doorstroming in je hele lichaam, niet alleen
          naar de plek waar het pijn doet.
        </p>
        <p className="font-bold text-primair reveal">
          Het gaat naar de oorzaak van je klachten. Niet alleen naar het symptoom.
        </p>
      </section>

      {/* Waarom symptoombestrijding niet genoeg is */}
      <section className="bg-wit">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="two-col">
            <div className="col-text">
              <h2 className="text-2xl font-bold text-primair mb-6 reveal">
                Waarom symptoombestrijding vaak niet genoeg is
              </h2>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                Stel je voor: je hebt al maanden last van je hiel. Je rust, rekt, probeert zolen. Misschien wordt het
                iets minder erg. Maar de eerste stappen &apos;s ochtends blijven pijn doen. Of je tenniselleboog
                komt steeds terug zodra je weer begint met sporten of tuinieren. Je lichaam voelt alsof het niet
                meewerkt.
              </p>
              <p className="text-tekst/80 leading-relaxed mb-6 reveal">Waarom?</p>
              <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                Omdat er vaak een diepere disbalans is die niet wordt aangepakt. De pijn kan worden gedempt, de
                belasting kan worden aangepast, maar als de energiestroom in je lichaam vastloopt, blijven de
                signalen terugkomen.
              </p>
              <p className="font-bold text-primair mb-4 reveal">Denk aan een rivier die verstopt raakt.</p>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                Als er ergens een blokkade zit, kan het water niet goed stromen. Het stagneert. Er ontstaat druk.
                Sommige plekken krijgen te veel water, andere te weinig. Zo werkt het ook in je lichaam. In de
                Chinese geneeskunde noemen we die stroom Qi, je levensenergie, en die stroomt samen met je Bloed
                door meridianen, een netwerk van banen door je hele lichaam.
              </p>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                Als die stroom ergens vastloopt, ontstaan signalen: stijfheid, spanning in spieren en pezen, pijn
                die op één plek blijft zitten of gewrichten die niet meer soepel meebewegen. Er is een oud gezegde
                in de Chinese geneeskunde: waar het vrij stroomt, is geen pijn.
              </p>
              <p className="font-bold text-primair mb-6 reveal">Pijn die blijft, ook al rust je.</p>
              <p className="text-tekst/80 leading-relaxed reveal">
                Acupunctuur helpt die stroom te herstellen. Zodra de energie en het bloed weer vrij kunnen
                stromen, krijgt je lichaam de ruimte om spieren, pezen en gewrichten te laten ontspannen en
                herstellen.
              </p>
            </div>
            <div className="col-image">
              <img src="/fotos/website-acupunctuur-1.jpg" alt="Acupunctuurnaald" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <Link href="/contact"
          className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
          Maak een afspraak →
        </Link>
      </section>

      {/* Hoe werkt een behandeling */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <p className="uppercase tracking-widest text-sm font-bold text-primair/60 mb-2 reveal">Acupunctuurbehandeling</p>
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Hoe werkt een acupunctuurbehandeling bij mij?</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Ik werk met hele dunne naaldjes, zo dun dat je ze vaak nauwelijks voelt. Die plaats ik op specifieke
          punten op je lichaam, op de meridianen waar de Qi doorheen stroomt. Elk punt heeft een functie: het ene
          punt haalt een blokkade weg, het andere versterkt je energie, weer een ander kalmeert overactiviteit.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Maar voordat ik ook maar één naaldje plaats, neem ik de tijd om jouw verhaal te horen.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Tijdens de intake vraag ik niet alleen naar je klachten. Ik vraag ook:
        </p>
        <ul id="intake-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
          <li>Waar zit de pijn, en wanneer begon het? Wat gebeurde er rond die tijd?</li>
          <li>Wat maakt het erger of beter: beweging, rust, warmte of kou?</li>
          <li>Hoe sport en beweeg je? Hoe herstel je daarna?</li>
          <li>Hoe slaap je? Word je vaak wakker of kun je moeilijk in slaap komen?</li>
          <li>Ben je vaak moe, zelfs na een goede nachtrust?</li>
          <li>Heb je last van stress, spanning of emotionele drukte?</li>
        </ul>
      </section>

      {/* Stagnatie en tekort */}
      <section className="bg-wit">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="two-col">
            <div className="col-text">
              <h2 className="text-2xl font-bold text-primair mb-6 reveal">
                2 hoofdoorzaken van klachten: stagnatie en tekort
              </h2>
              <p className="text-tekst/80 leading-relaxed mb-8 reveal">
                In de Chinese geneeskunde zijn er vaak twee hoofdredenen waarom je lichaam signalen geeft:
              </p>

              <h3 className="text-lg font-bold text-primair mb-3 reveal">1. Stagnatie van Qi</h3>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                De energie en het bloed in je lichaam lopen ergens vast. Dat geeft spanning, pijn en een gevoel van
                vastzitten. Denk aan:
              </p>
              <ul id="stagnatie-lijst" className="space-y-2 mb-4 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
                <li>Spanning die zich ophoopt in nek, schouders of rug</li>
                <li>Stekende of vastzittende pijn op één plek</li>
                <li>Stijfheid in spieren, pezen of gewrichten</li>
                <li>Stress die je niet kunt loslaten</li>
                <li>Klachten die steeds terugkomen, hoe goed je ook zorgt voor jezelf</li>
              </ul>
              <p className="text-tekst/80 leading-relaxed mb-10 reveal">
                De behandeling is dan gericht op het opheffen van de stagnatie zodat de energie en het bloed weer
                vrij kunnen stromen en je lichaam weer kan ontspannen.
              </p>

              <h3 className="text-lg font-bold text-primair mb-3 reveal">2. Tekort aan Qi</h3>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                Er is simpelweg te weinig energie en voeding om je spieren, pezen en gewrichten goed te onderhouden.
                Dat herken je aan:
              </p>
              <ul id="tekort-lijst" className="space-y-2 mb-4 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
                <li>Traag herstel na sporten of inspanning</li>
                <li>Een doffe, zeurende pijn die bij rust vaak wat beter is</li>
                <li>Spieren die snel vermoeid raken</li>
                <li>Chronische vermoeidheid, ook na genoeg slaap</li>
                <li>Het gevoel dat je "op" bent</li>
              </ul>
              <p className="text-tekst/80 leading-relaxed reveal">
                Dan is de behandeling gericht op het versterken van je Qi. En wat gebeurt er? Niet alleen
                neemt de pijn af, je krijgt ook meer energie, meer veerkracht en meer kracht om weer te bewegen.
              </p>
            </div>
            <div className="col-image">
              <img src="/fotos/website-acupunctuur-2.jpg" alt="Acupunctuurbehandeling" />
            </div>
          </div>
        </div>
      </section>

      {/* Waar acupunctuur bij helpt */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">
          Waar ik acupunctuur bij inzet
        </h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Mensen komen bij mij vooral met pijn aan spieren, pezen en gewrichten. Hier een greep uit de klachten
          waar ik regelmatig mee werk:
        </p>
        <ul id="signalen-lijst" className="grid gap-x-8 gap-y-2 sm:grid-cols-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5 sm:border-l-0 sm:pl-0">
          <li>Hielspoor</li>
          <li>Tenniselleboog</li>
          <li>Rugklachten</li>
          <li>Nekklachten</li>
          <li>Schouderklachten</li>
          <li>Stijve of pijnlijke gewrichten</li>
          <li>Spierspanning en spierpijn</li>
          <li>Peesklachten</li>
          <li>Traag herstel na sporten</li>
          <li>Klachten die steeds terugkomen</li>
        </ul>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Omdat acupunctuur werkt op het niveau van je energiesysteem, kijk ik naar het onderliggende patroon en
          niet alleen naar de plek waar het pijn doet. Veel cliënten merken daardoor ook dat ze rustiger worden en
          beter slapen.
        </p>
        <p className="text-tekst/80 leading-relaxed reveal">
          Naast pijnklachten werk ik ook met signalen als vermoeidheid, stress, slapeloosheid en hormonale klachten
          in de overgang.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <Link href="/contact"
          className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
          Maak een afspraak →
        </Link>
      </section>

      {/* Yin Yang & 5 elementen */}
      <section className="bg-wit">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">De basis: Yin & Yang, Qi, en de 5 Elementen</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Misschien heb je wel eens gehoord van Yin en Yang. Twee krachten die elkaar in balans houden. Yin is
            rust, koelte, substantie. Yang is activiteit, warmte, beweging. Als die twee uit balans zijn, te veel
            Yang, te weinig Yin, ontstaan klachten.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Je lichaam werkt volgens de 5 elementen: Hout, Vuur, Aarde, Metaal, Water. Deze elementen zie je ook
            terug in de seizoenen, in de natuur. En in jouw lichaam zijn ze verbonden met Orgaansystemen. Ook je
            spieren, pezen, botten en gewrichten horen erbij:
          </p>
          <ul id="elementen-lijst" className="space-y-3 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li><strong className="text-primair">Hout</strong> (Lever &amp; Galblaas): de pezen, en samen met Vuur de doorstroming van Qi en Bloed</li>
            <li><strong className="text-primair">Vuur</strong> (Hart &amp; Dunne Darm): samen met Hout de doorstroming van Qi en Bloed</li>
            <li><strong className="text-primair">Aarde</strong> (Milt &amp; Maag): de spieren</li>
            <li><strong className="text-primair">Metaal</strong> (Long &amp; Dikke Darm): controleert de meridianen</li>
            <li><strong className="text-primair">Water</strong> (Nier &amp; Blaas): de botten</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Een gewricht is dus geen los onderdeel: botten, pezen, spieren en de doorstroming van Qi en Bloed komen
            er samen. Daarom heeft een klacht in je gewricht vaak te maken met meer dan één element.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Dat is waarom ik tijdens de intake zo doorvraag. Ik wil weten welk element, welk Orgaansysteem uit
            balans is. En zodra ik dat weet, kan ik gericht behandelen.
          </p>
        </div>
      </section>

      {/* Wat kun je verwachten */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat kun je verwachten tijdens en na een behandeling?</h2>
        <div className="space-y-4 text-tekst/80 leading-relaxed">
          <p className="reveal">
            <strong className="text-primair">Tijdens de behandeling:</strong> Na de intake en diagnostiek ga je
            ontspannen liggen. Ik plaats de naaldjes, meestal voel je dat nauwelijks. Soms een klein prikje, soms
            helemaal niks. De naaldjes blijven ongeveer 30 minuten zitten. Veel vrouwen vallen in slaap, zo
            ontspannend is het.
          </p>
          <p className="reveal">
            <strong className="text-primair">Direct na de behandeling:</strong> Veel mensen voelen direct een
            verschil. Een gevoel van ontspanning. Ruimte in je lichaam. Soms zelfs een soort lichte duizeligheid,
            dat is je lichaam dat de energie opnieuw verdeelt. Drink veel water, rust als je kunt.
          </p>
          <p className="reveal">
            <strong className="text-primair">De dagen erna:</strong> De eerste 24-48 uur kan je lichaam nog
            "nawerken". Soms voel je je extra moe, dat is goed, je lichaam is aan het herstellen. Soms voel je juist
            een boost aan energie. Beide zijn normaal.
          </p>
          <p className="reveal">
            <strong className="text-primair">Na meerdere behandelingen:</strong> Veel cliënten merken na 3-5
            behandelingen vooruitgang. De pijn neemt af, je beweegt soepeler en je herstelt sneller na het
            sporten. Je slaapt vaak beter en hebt meer energie. Klachten die maanden of jaren bleven hangen,
            beginnen los te laten. Hoe snel dit gaat, verschilt per persoon en per klacht.
          </p>
        </div>
      </section>

      {/* Praktische info */}
      <section className="bg-wit">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische info</h2>
          <div className="bg-achtergrond rounded-2xl p-8 space-y-2 text-tekst/80 leading-relaxed reveal">
            <p><strong className="text-primair">Duur:</strong> 60 minuten</p>
            <p><strong className="text-primair">Locatie:</strong> Omanstraat 58 in Delft</p>
            <p>
              <strong className="text-primair">Investering:</strong> €86,- per behandeling, een behandeling duurt
              60 minuten. (Mijn behandelingen worden niet vergoed door de zorgverzekeraar.)
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <Link href="/contact"
          className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
          Maak een afspraak →
        </Link>
      </section>
      </div>

      <ScrollReveal
        singles={['.reveal']}
        grids={['#intake-lijst', '#stagnatie-lijst', '#tekort-lijst', '#signalen-lijst', '#elementen-lijst']}
      />
    </>
  );
}
