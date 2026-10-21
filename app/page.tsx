// ════════════════════════════════════════════════════════════
//  Homepagina — vervang de placeholder-tekst door jouw eigen
//  content. Beschrijf aan Claude Code wat hier moet komen.
// ════════════════════════════════════════════════════════════

import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      {/* Hero — mobiel: portret.jpg, desktop: portret-homepage.jpg (zie globals.css) */}
      <div className="hero-section hero-section-home">
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            Weer soepel en pijnvrij bewegen.
          </h1>
          <p className="text-white/80 max-w-xl text-lg leading-relaxed mb-2">
            Acupunctuur voor vrouwen met pijn aan spieren, pezen en gewrichten — om weer te kunnen sporten en te
            genieten van je dagelijks leven.
          </p>
          <a href="/contact" className="hero-btn">
            Maak een afspraak →
          </a>
        </div>
      </div>

      {/* Content — hero-cover laat deze sectie over de hero heen schuiven bij scrollen */}
      <div className="hero-cover">

        {/* Opening */}
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
          <p className="text-xl font-bold text-primair mb-4 reveal">
            Je wilt gewoon weer bewegen zonder dat je lichaam protesteert.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Die eerste stappen &apos;s ochtends met een pijnlijke hiel.<br />
            Een elleboog die zeurt als je een tas optilt.<br />
            Nek en schouders die de hele dag vastzitten.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Je hebt al zoveel geprobeerd. Rust. Oefeningen. Fysiotherapie. Massage.<br />
            Korte opluchting, dan weer hetzelfde verhaal.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Want niemand vraagt: waarom blijft jouw lichaam deze signalen geven?
          </p>
        </section>

        {/* Pijn zit zelden alleen op de plek waar je het voelt */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Pijn zit zelden alleen op de plek waar je het voelt</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Ik werk met vrouwen tussen de 40 en 75 die bij me komen met één vraag:{' '}
            <span className="italic">"Waarom gaat dit niet over?"</span>
          </p>
          <ul id="klachten-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>Hielspoor waar je &apos;s ochtends bijna niet op kunt staan.</li>
            <li>Een tenniselleboog die steeds terugkomt.</li>
            <li>Rug- en nekklachten die je overal mee naartoe neemt.</li>
            <li>Een schouder die niet meer soepel meebeweegt.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Hier is wat vaak wordt gemist: jouw lichaam werkt niet in vakjes.
            Je schouder bestaat niet los van de spanning in je nek. Je pezen en spieren bestaan niet los van de
            doorstroming van je bloed en energie. En je klachten bestaan niet los van alles wat je op je schouders
            draagt, letterlijk én figuurlijk.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Als de doorstroming in je lichaam stagneert, kunnen spieren moeilijk ontspannen en herstelt je lichaam
            trager, hoe braaf je ook je oefeningen doet.
          </p>
          <p className="font-bold text-primair reveal">
            De Chinese geneeskunde kijkt naar jouw lichaam als één geheel.
          </p>
        </section>

        {/* Waarom ik dit werk doe */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="two-col">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-1 reveal">Waarom ik dit werk doe</h2>
                <p className="italic text-primair/70 mb-6 reveal">
                  en waarom het anders is dan wat je tot nu toe hebt geprobeerd
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Ik werkte jarenlang als röntgenlaborant in het ziekenhuis. Elke dag zag ik tientallen vrouwen met
                  klachten. We maakten scans. En in heel veel gevallen vonden we... niks.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  <span className="italic">"Gelukkig, er is niks te zien!"</span> zei de arts dan.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Maar de vrouw had nog steeds pijn. Nog steeds vermoeidheid. Nog steeds het gevoel dat haar lichaam
                  haar in de steek liet.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Dat was mijn wake-up call. Er móest meer zijn. Een laag die we niet zagen op de scan. Een oorzaak die
                  dieper lag dan wat meetbaar was.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Ik begon als sportmasseur. Werk nog steeds met plezier in de voetbalwereld. Maar ik merkte: massage
                  helpt, maar lost niet altijd op. Ik wilde dieper.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Dat bracht me bij acupunctuur en Chinese geneeskunde. En daar viel alles op zijn plek. Eindelijk een
                  systeem dat naar de hele mens kijkt. Niet alleen naar de klacht, maar naar waarom die klacht er is.
                </p>
                <p className="font-bold text-primair leading-relaxed reveal">
                  Want jouw lichaam vertelt een verhaal. En als je leert luisteren, echt luisteren, dan kun je het ook
                  helen.
                </p>
              </div>
              <div className="col-image">
                <img src="/fotos/portret.jpg" alt="Salacia" />
              </div>
            </div>
          </div>
        </section>

        {/* Waarom pijn blijft terugkomen */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Waarom pijn blijft terugkomen</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            <span className="italic">"Maar ik heb al zoveel geprobeerd,"</span> hoor ik vaak.{' '}
            <span className="italic">"Waarom helpt het niet?"</span>
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Omdat behandelingen vaak alleen kijken naar de plek waar het pijn doet. Niet naar waarom je lichaam daar
            vastloopt. Niet naar de spanning die je onbewust vasthoudt. Niet naar de doorstroming van Qi en Bloed door
            je spieren, pezen en gewrichten.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            In de Chinese geneeskunde zeggen we: waar het vrij stroomt, is geen pijn. Spieren, pezen, botten en de
            doorstroming van Qi en Bloed horen bij verschillende elementen, en samen vormen ze je gewrichten. Daarom
            kijk ik niet alleen naar de plek van de pijn, maar naar het geheel.
          </p>
          <p className="font-bold text-primair mb-8 reveal">
            En dat is precies waar ik anders werk.
          </p>
          <div className="text-center">
            <a href="/acupunctuur"
              className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
              Lees hoe acupunctuur werkt →
            </a>
          </div>
        </section>

        {/* Slot-CTA */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Weer vrij bewegen begint met een gesprek</h2>
            <a href="/contact"
              className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
              Maak een afspraak →
            </a>
          </div>
        </section>

      </div>

      <ScrollReveal singles={['.reveal']} grids={['#klachten-lijst']} />
    </>
  );
}
