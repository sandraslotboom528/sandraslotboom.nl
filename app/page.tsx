// ════════════════════════════════════════════════════════════
//  Homepagina — vervang de placeholder-tekst door jouw eigen
//  content. Beschrijf aan Claude Code wat hier moet komen.
// ════════════════════════════════════════════════════════════

import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      {/* Hero — portret.jpg uit /public/ als achtergrond.
          Ontbreekt de foto? Dan valt de achtergrond terug op --color-primair. */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/portret.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            Ruimte voor herstel, rust en heelheid.
          </h1>
          <p className="text-white/80 max-w-xl text-lg leading-relaxed mb-2">
            Acupunctuur en holistische begeleiding voor wie weer in balans wil komen — met lichaam, emotie en energie.
          </p>
          <a href="/aanbod" className="hero-btn">
            Bekijk mijn aanbod →
          </a>
        </div>
      </div>

      {/* Content — hero-cover laat deze sectie over de hero heen schuiven bij scrollen */}
      <div className="hero-cover">

        {/* Opening */}
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
          <p className="text-xl font-bold text-primair mb-4 reveal">
            Je hebt al zoveel geprobeerd.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Paracetamol. Fysiotherapie. Chiropractor. Massage.<br />
            Korte opluchting, dan weer hetzelfde verhaal.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Want niemand vraagt: waarom geeft jouw lichaam deze signalen?
          </p>
        </section>

        {/* Het probleem zit dieper dan de klacht */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Het probleem zit dieper dan de klacht</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Ik werk met vrouwen tussen de 40 en 75 die bij me komen met één vraag:{' '}
            <span className="italic">"Waarom luistert mijn lichaam niet meer?"</span>
          </p>
          <ul id="klachten-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>Rugpijn sinds de echtscheiding.</li>
            <li>Nekklachten na maanden mantelzorg.</li>
            <li>Vermoeidheid die niet weggaat, hoe goed je ook slaapt.</li>
            <li>Een lichaam dat vastloopt, terwijl niemand kan uitleggen waarom.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Hier is wat de meeste behandelaars missen: jouw lichaam werkt niet in vakjes.
            Je rug bestaat niet los van je stress. Je energie bestaat niet los van je emoties.
            Je klachten bestaan niet los van alles wat je op je schouders draagt, letterlijk én figuurlijk.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Als je energiesysteem uit balans is, kunnen spieren niet ontspannen. Kunnen ontstekingen niet genezen.
            Kan je lichaam niet herstellen, hoe braaf je ook je oefeningen doet.
          </p>
          <p className="font-bold text-primair reveal">
            De Chinese geneeskunde kijkt naar jouw lichaam als één geheel.
          </p>
        </section>

        {/* Disbalans tussen Yin en Yang */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Disbalans tussen Yin en Yang</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              <span className="italic">"Maar ik heb al zoveel geprobeerd,"</span> hoor ik vaak.{' '}
              <span className="italic">"Waarom helpt het niet?"</span>
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Omdat de meeste behandelingen alleen naar het symptoom kijken. Niet naar waarom je lichaam die klacht
              produceert. Niet naar de spanning die je onbewust vasthoudt. Niet naar de disbalans in je energiesysteem
              die ervoor zorgt dat je lichaam niet meer kan herstellen zoals het zou moeten.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              In de Chinese geneeskunde noemen we dat een disbalans tussen Yin en Yang. Klinkt misschien zweverig,
              maar het is heel concreet: als jouw energiesysteem uit balans is, kunnen spieren niet ontspannen.
              Kunnen ontstekingen niet genezen. Kan je lichaam niet herstellen, hoe goed je ook slaapt of hoe gezond
              je ook eet.
            </p>
            <p className="font-bold text-primair reveal">
              En dat is precies waar ik anders werk.
            </p>
          </div>
        </section>

        {/* Waarom ik dit werk doe */}
        <section className="max-w-5xl mx-auto px-6 py-20">
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
        </section>

        {/* Slot-CTA */}
        <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
          <a href="/aanbod"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Bekijk mijn aanbod →
          </a>
        </section>

      </div>

      <ScrollReveal singles={['.reveal']} grids={['#klachten-lijst']} />
    </>
  );
}
