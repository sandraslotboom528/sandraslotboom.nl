import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Acupunctuur' };

export default function AcupunctuurPage() {
  return (
    <>
      {/* Hero — herosectie-acupunctuur.jpg als achtergrond */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-acupunctuur.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Acupunctuur: waarom werkt het waar andere behandelingen vastlopen?
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
          Het antwoord ligt niet in symptoombestrijding, maar in het herstellen van de balans die je lichaam in
          stand houdt.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Je hebt misschien wel eens van acupunctuur gehoord. Naaldjes. Meridianen. Qi. Klinkt allemaal een beetje
          mysterieus, misschien zelfs zweverig. Maar hier is wat je moet weten: acupunctuur werkt. Niet omdat het
          mystiek is, maar omdat het iets doet wat de meeste westerse behandelingen niet doen.
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
                Stel je voor: je voelt je al maanden vermoeid. Je huisarts vindt niks afwijkends in je
                bloedwaarden. "Gewoon even doorbijten," zeggen ze. Je probeert meer te sporten, gezonder te eten,
                eerder naar bed te gaan. Misschien wordt het iets minder erg. Maar de spanning blijft. De
                vermoeidheid komt terug. Je lichaam voelt alsof het niet meewerkt.
              </p>
              <p className="text-tekst/80 leading-relaxed mb-6 reveal">Waarom?</p>
              <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                Omdat er een diepere disbalans is die niet wordt aangepakt. Je levensstijl kan worden aangepast, je
                symptomen kunnen worden gedempt, maar als de energiestroom in je lichaam geblokkeerd is, blijven de
                signalen terugkomen.
              </p>
              <p className="font-bold text-primair mb-4 reveal">Denk aan een rivier die verstopt raakt.</p>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                Als er ergens een blokkade zit, kan het water niet goed stromen. Het stagneert. Er ontstaat druk.
                Sommige plekken krijgen te veel water, andere te weinig. Zo werkt het ook in je lichaam. In de
                Chinese geneeskunde noemen we die stroom Qi, je levensenergie, en die stroomt door meridianen, een
                netwerk van energiebanen door je hele lichaam.
              </p>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                Als die stroom ergens vastloopt, ontstaan signalen: vermoeidheid die maar niet weggaat, spanning
                die zich ophoopt in je lichaam, slaapproblemen of een gevoel dat je lichaam niet meer meewerkt.
              </p>
              <p className="font-bold text-primair mb-6 reveal">Klachten die niemand kan verklaren.</p>
              <p className="text-tekst/80 leading-relaxed reveal">
                Acupunctuur herstelt die stroom. Het verwijdert de blokkade. En zodra de energie weer kan stromen
                zoals het hoort, kan je lichaam zichzelf reguleren en herstellen.
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
          <li>Hoe slaap je? Word je vaak wakker? Kun je moeilijk in slaap komen?</li>
          <li>Hoe is je spijsvertering? Veel last van je maag? Opgeblazen gevoel?</li>
          <li>Ben je vaak moe, zelfs na een goede nachtrust?</li>
          <li>Heb je last van stress, overweldiging, of emotionele drukte?</li>
          <li>Wanneer begonnen de signalen, en wat gebeurde er in je leven rond die tijd?</li>
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
                De energie in je lichaam loopt ergens vast. Dat geeft spanning, onrust, een gevoel van vastzitten.
                Denk aan:
              </p>
              <ul id="stagnatie-lijst" className="space-y-2 mb-4 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
                <li>Spanning die zich ophoopt in je lijf</li>
                <li>Stress die je niet kunt loslaten</li>
                <li>Emoties die vastzitten</li>
                <li>Een gevoel van overweldiging</li>
                <li>Klachten die steeds terugkomen, hoe goed je ook zorgt voor jezelf</li>
              </ul>
              <p className="text-tekst/80 leading-relaxed mb-10 reveal">
                De behandeling is dan gericht op het opheffen van de stagnatie zodat de energie weer vrij kan
                stromen en je lichaam weer kan ontspannen.
              </p>

              <h3 className="text-lg font-bold text-primair mb-3 reveal">2. Tekort aan Qi</h3>
              <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                Er is simpelweg te weinig energie om door je lichaam te stromen. Dat herken je aan:
              </p>
              <ul id="tekort-lijst" className="space-y-2 mb-4 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
                <li>Chronische vermoeidheid, ook na genoeg slaap</li>
                <li>Slapeloosheid; je lichaam heeft niet genoeg kracht om je slaap te reguleren</li>
                <li>Een gevoel van uitputting</li>
                <li>Traag herstel na inspanning of ziekte</li>
                <li>Het gevoel dat je "op" bent</li>
              </ul>
              <p className="text-tekst/80 leading-relaxed reveal">
                Dan is de behandeling gericht op het versterken van je Qi. En wat gebeurt er? Niet alleen
                verdwijnen je signalen, je krijgt ook meer energie, meer veerkracht, meer kracht om je dag door te
                komen.
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
          Acupunctuur werkt bij chronische pijn, en zo veel meer
        </h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          De meeste mensen kennen acupunctuur als behandeling voor fysieke klachten. En ja, dat werkt. Maar
          acupunctuur kan zoveel meer.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Omdat het werkt op het niveau van je energiesysteem, heeft het invloed op je hele lichaam. Hier een
          kleine greep uit de signalen waar ik regelmatig mee werk:
        </p>
        <ul id="signalen-lijst" className="grid gap-x-8 gap-y-2 sm:grid-cols-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5 sm:border-l-0 sm:pl-0">
          <li>Chronische vermoeidheid</li>
          <li>Slapeloosheid</li>
          <li>Stress en overweldiging</li>
          <li>Emotionele disbalans</li>
          <li>Spanning die niet weggaat</li>
          <li>Hormonale klachten (overgang, menstruatie)</li>
          <li>Spijsverteringsproblemen</li>
          <li>Hoofdpijn en migraine</li>
          <li>Hooikoorts</li>
          <li>Klachten die niemand kan verklaren</li>
        </ul>
        <p className="text-tekst/80 leading-relaxed reveal">
          Zie je een rode draad? Chronische disbalans. Signalen die maar niet weggaan. Waar andere behandelingen
          vastlopen. Dat is precies waar acupunctuur zo effectief is, omdat het níet alleen naar het symptoom
          kijkt, maar naar het onderliggende patroon.
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
            terug in de seizoenen, in de natuur. En in jouw lichaam zijn ze verbonden met orgaansystemen:
          </p>
          <ul id="elementen-lijst" className="space-y-3 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li><strong className="text-primair">Hout</strong> (Lever &amp; Galblaas): gaat over soepele beweging, emotionele flow, flexibiliteit</li>
            <li><strong className="text-primair">Vuur</strong> (Hart &amp; Dunne Darm): gaat over vreugde, verbinding, mentale helderheid</li>
            <li><strong className="text-primair">Aarde</strong> (Milt &amp; Maag): gaat over spijsvertering, zorgen, grounding</li>
            <li><strong className="text-primair">Metaal</strong> (Long &amp; Dikke Darm): gaat over ademhaling, loslaten, verdriet</li>
            <li><strong className="text-primair">Water</strong> (Nier &amp; Blaas): gaat over wilskracht, angst, diepe reserves</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed reveal">
            Als er ergens in dit systeem een disbalans is, heeft dat gevolgen voor je hele lichaam. Dat is waarom
            ik tijdens de intake zo doorvraag, ik wil weten welk element, welk orgaansysteem uit balans is. En
            zodra ik dat weet, kan ik gericht behandelen.
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
            <strong className="text-primair">Na meerdere behandelingen:</strong> Meestal merk je na 3-5
            behandelingen duidelijke vooruitgang. Pijn vermindert. Je slaapt beter. Je hebt meer energie. De
            klachten die maanden of jaren bleven hangen, beginnen los te laten.
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
