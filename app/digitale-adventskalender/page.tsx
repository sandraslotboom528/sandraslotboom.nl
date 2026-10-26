import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import { KoopKnop, PrijsOverzicht } from './Prijs';

export const metadata: Metadata = {
  title: 'Digitale adventskalender 2026: 25 dagen aandacht voor jezelf',
  description: 'Van 30 november tot en met 24 december iedere dag een acupressuurpunt, een reflectievraag en een affirmatie. Inclusief drie digitale carddecks en een Inner Essence Godinnen Journey.',
};

export default function AdventskalenderPage() {
  return (
    <>
      <div className="hero-section hero-section-advent" style={{ backgroundImage: "url('/fotos/herosectie-advent.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Deze december mag jij ook op je eigen lijstje staan
          </h1>
          <p className="text-lg text-white/90 max-w-xl mt-4">
            25 dagen aandacht voor je lichaam, je gevoel en jezelf.
          </p>
        </div>
      </div>

      <div className="hero-cover">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
          <p className="text-lg font-bold text-primair/90 leading-relaxed mb-8 reveal">
            December kan heerlijk zijn. En vol.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Vol afspraken, cadeautjes, boodschappen en dingen die je nog even wilt afronden. Je denkt aan iedereen,
            zorgt dat alles geregeld is en schuift je eigen rust gemakkelijk door naar later.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Deze digitale adventskalender nodigt je uit om iedere dag even bij jezelf terug te komen.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Van 30 november tot en met 24 december ontvang je dagelijks een acupressuurpunt, een reflectievraag en
            een affirmatie. Daarbij mag je een kaart trekken uit één van de drie digitale carddecks die je erbij
            krijgt.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-8 reveal">
            Een klein dagelijks ritueel om te voelen hoe het met je gaat. En om jezelf aandacht te geven, juist in
            een maand waarin die aandacht vaak alle kanten op gaat.
          </p>
          <KoopKnop />
        </section>

        {/* Iedere dag een moment */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">Iedere dag een moment dat van jou is</h2>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Stel je voor: voordat je verdergaat met alles wat er moet gebeuren, neem je even tijd voor jezelf.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Je maakt contact met het acupressuurpunt van die dag. Je leest de reflectievraag en merkt op wat
                  die bij je oproept. Misschien schrijf je iets op. Misschien is even voelen voldoende.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  De affirmatie neem je mee je dag in.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Wil je je moment verder verdiepen? Dan trek je een kaart uit het godinnen carddeck, het elfjes
                  carddeck of het innerlijk kind carddeck. Je kijkt wat de afbeelding en boodschap bij je raken, en
                  hoe ze aansluiten bij wat je op dat moment bezighoudt.
                </p>
                <p className="text-tekst/80 leading-relaxed reveal">
                  Je hoeft er geen uitgebreid ritueel van te maken. Je mag iedere dag kiezen hoeveel aandacht je
                  eraan wilt geven.
                </p>
              </div>
              <div className="col-image">
                <img src="/fotos/website-advent-1.jpg" alt="Een acupressuurpunt in de handpalm wordt aangeraakt met een drukpen" />
              </div>
            </div>
          </div>
        </section>

        {/* Vijf elementen */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Een reis door de vijf elementen</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            In 25 dagen reizen we door de vijf elementen, met vijf dagen voor ieder element.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            We beginnen bij Metaal en volgen de voedende cyclus: Metaal → Water → Hout → Vuur → Aarde.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Ieder element brengt een andere uitnodiging met zich mee:
          </p>
          <ul id="elementen-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li><strong className="text-primair">Metaal:</strong> stilstaan bij wat waardevol is en waar je ademruimte nodig hebt.</li>
            <li><strong className="text-primair">Water:</strong> vertragen en luisteren naar wat dieper in je leeft.</li>
            <li><strong className="text-primair">Hout:</strong> onderzoeken waar je naartoe wilt en wat in beweging mag komen.</li>
            <li><strong className="text-primair">Vuur:</strong> aandacht geven aan contact, warmte en wat je hart raakt.</li>
            <li><strong className="text-primair">Aarde:</strong> landen bij jezelf en voelen wat jou voedt.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mt-8 reveal">
            Zo krijgt iedere dag een eigen thema, terwijl de kalender je stap voor stap door de vijf elementen
            meeneemt.
          </p>
        </section>

        {/* Dit ontvang je */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-8 reveal">Dit ontvang je</h2>
            <div id="ontvang-lijst" className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primair mb-2">25 acupressuurpunten</h3>
                <p className="text-tekst/80 leading-relaxed">
                  Iedere dag staat een ander punt centraal. Een uitnodiging om je aandacht naar je lichaam te
                  brengen en bewust contact te maken met jezelf.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primair mb-2">25 reflectievragen</h3>
                <p className="text-tekst/80 leading-relaxed">
                  Vragen die je helpen om even voorbij je dagelijkse taken te kijken. Wat merk je op? Wat speelt er
                  vanbinnen? Waar wil je aandacht aan geven?
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primair mb-2">25 affirmaties</h3>
                <p className="text-tekst/80 leading-relaxed">
                  Een zin om bij stil te staan en mee te nemen in je dag. Je kunt hem herhalen tijdens je
                  acupressuurmoment of opschrijven op een plek waar je hem later weer tegenkomt.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 pb-16">
            <div className="two-col flip">
              <div className="col-text">
                <h3 className="text-xl font-bold text-primair mb-2 reveal">3 digitale carddecks</h3>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Een speelse, beeldende manier om je dagelijkse moment te verdiepen. Kijk welke kaart je trekt en
                  wat die bij je oproept.
                </p>
                <ul id="decks-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5 mb-4">
                  <li>Een digitaal godinnen carddeck</li>
                  <li>Een digitaal elfjes carddeck</li>
                  <li>Een digitaal innerlijk kind carddeck</li>
                </ul>
                <p className="text-tekst/80 leading-relaxed reveal">
                  Je kiest zelf uit welk deck je een kaart wilt trekken. Laat je keuze aansluiten bij je stemming of
                  bij wat je die dag aanspreekt.
                </p>
              </div>
              <div className="col-image">
                <img src="/fotos/website-advent-2.jpg" alt="Kaart uit het elfjes carddeck: Het elfje van de moed, een elfje met een wolf en een lantaarn in de bergen" />
              </div>
            </div>
          </div>
        </section>

        {/* Bonus */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-wide text-accent mb-2 reveal">Extra bonus</p>
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Inner Essence Godinnen Journey</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Naast de adventskalender en de drie digitale carddecks ontvang je een Inner Essence Godinnen Journey.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Deze journey nodigt je uit om langer bij jezelf te blijven en contact te maken met de
            godinnenkwaliteiten in jou.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Misschien herken je een verlangen naar meer zachtheid. Misschien vraagt juist je kracht, je eigen stem
            of je vermogen om te ontvangen om aandacht.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Geef jezelf een moment om dat te verkennen, op een tijdstip dat voor jou past.
          </p>
        </section>

        {/* Voor wie */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Voor jou als je jezelf vaak als laatste meeneemt</h2>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">Deze adventskalender past bij je als je:</p>
            <ul id="voorwie-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>in december gemakkelijk opgaat in alles wat je voor anderen wilt regelen;</li>
              <li>behoefte hebt aan een eenvoudig dagelijks moment voor jezelf;</li>
              <li>nieuwsgierig bent naar acupressuur en de vijf elementen;</li>
              <li>graag reflecteert met vragen, affirmaties en kaarten;</li>
              <li>het jaar met meer aandacht voor jezelf wilt afronden.</li>
            </ul>
            <p className="text-tekst/80 leading-relaxed mt-8 reveal">
              Je hoeft geen ervaring te hebben met acupressuur of kaartendecks. Nieuwsgierigheid en de bereidheid
              om even stil te staan zijn genoeg om te beginnen.
            </p>
          </div>
        </section>

        {/* Voelen staat centraal */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Voelen staat centraal</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Bij deze adventskalender gaat het niet om de specifieke functie van het acupressuurpunt. Je hoeft niet
            te weten waarvoor het punt gebruikt wordt of welke klacht erbij hoort.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Het punt is een ingang om met aandacht te voelen wat er in je lichaam en/of gedachten gebeurt wanneer
            je het aanraakt. Merk je warmte, spanning of ontspanning? Komt er een gedachte, gevoel of herinnering
            naar boven?
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Je hoeft niets te veranderen of te verklaren. Ook als je weinig opmerkt, is dat helemaal goed. Geef
            jezelf de tijd om te ervaren wat er op dat moment is.
          </p>
        </section>

        {/* Praktisch */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Van 30 november tot en met 24 december</h2>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              We starten op 30 november 2026. Zo doorlopen we vijf keer vijf dagen en eindigen we op 24 december,
              vlak voor Kerst.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">Iedere dag ontvang je:</p>
            <p className="text-lg font-bold text-primair/90 leading-relaxed mb-6 reveal">
              Een acupressuurpunt + een reflectievraag + een affirmatie.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              De drie digitale carddecks gebruik je erbij wanneer je daar zin in hebt. De Inner Essence Godinnen
              Journey ontvang je als extra bonus.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-10 reveal">
              Alles is digitaal, zodat je je dagelijkse moment kunt beleven op een plek die prettig voor je is.
            </p>
            <h3 className="text-xl font-bold text-primair mb-4 reveal">Investering</h3>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Hoe eerder je instapt, hoe voordeliger:
            </p>
            <PrijsOverzicht />
          </div>
        </section>

        {/* Afsluitende oproep */}
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Geef jezelf ook iets om naar uit te kijken</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Je hoeft niet te wachten tot alle cadeautjes gekocht zijn, je huis opgeruimd is en iedereen tevreden is.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Je mag jezelf nu al een plek geven in deze maand.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Met een punt om aan te raken. Een vraag om bij stil te staan. Een zin om mee te nemen. En een kaart die
            je uitnodigt om verder te kijken.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Doe mee met de digitale adventskalender en maak van 30 november tot en met 24 december iedere dag even
            tijd voor jezelf.
          </p>
          <p className="text-sm text-tekst/60 leading-relaxed mb-8 reveal">
            Inclusief het digitale godinnen carddeck, het digitale elfjes carddeck, het digitale innerlijk kind
            carddeck én de Inner Essence Godinnen Journey.
          </p>
          <KoopKnop />
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#elementen-lijst', '#ontvang-lijst', '#decks-lijst', '#voorwie-lijst']} />
    </>
  );
}
