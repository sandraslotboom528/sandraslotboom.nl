import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Herfstjourney',
  description: 'Gratis online Inner Essence Journey voor het Metaalelement — maandag 28 september, 20.00 uur.',
};

const AANMELD_URL = 'https://salacia.kennis.shop/pay/gratis';

export default function HerfstjourneyPage() {
  return (
    <>
      {/* Hero — herosectie-herfstjourney.jpg als achtergrond (nog toe te voegen) */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-herfstjourney.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Herfstjourney
          </h1>
        </div>
      </div>

      <div className="hero-cover">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 pt-16">
          <p className="text-lg font-bold text-primair/90 leading-relaxed mb-8 reveal">
            Gratis online Inner Essence Journey voor het Metaalelement.
          </p>
        </section>
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="two-col">
            <div className="col-text">
              <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                Wat blijft er over als je alle ruis even stil laat worden?
              </p>
              <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                Er is een laag in jou die niet harder hoeft te werken. Die niets hoeft op te lossen. Die niet bezig
                is met wat er morgen moet gebeuren, wat anderen van je verwachten of wat je allemaal nog zou moeten
                veranderen.
              </p>
              <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                Een laag die stiller is. Puurder. Dichter bij wie jij in essentie bent.
              </p>
              <p className="text-tekst/80 leading-relaxed mb-8 reveal">
                Tijdens de herfstjourney nodig ik je uit om naar die laag af te dalen. Niet door nog meer te
                bedenken. Maar juist door steeds minder te hoeven.
              </p>
              <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
                Reserveer jouw plek voor de herfstjourney →
              </a>
              <p className="text-tekst/60 text-sm mt-4 reveal">
                Gratis · online · maandag 28 september, 20.00 uur.
              </p>
            </div>
            <div className="col-image">
              <img src="/fotos/herfstjourney-2.jpg" alt="Deelnemers tijdens een eerdere Inner Essence Journey, 28 september om 20.00" />
            </div>
          </div>
        </section>

        {/* De energie van Metaal */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">De energie van Metaal</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Binnen de 5 elementen hoort Metaal bij de beweging naar binnen. Na de uitbundigheid en groei van
              eerdere seizoenen komt er een moment waarop de natuur verstilt.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Ze trekt zich terug. Wordt kaler. Eenvoudiger. Wat eerst verborgen zat achter bladeren, bloemen en
              groei, wordt ineens zichtbaar.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">De essentie komt tevoorschijn.</p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              En misschien herken je dat verlangen ook in jezelf. Om even weg te bewegen:
            </p>
            <ul id="metaal-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>van alles wat moet.</li>
              <li>van alle rollen die je vervult.</li>
              <li>van alle verhalen die je over jezelf hebt verzameld.</li>
            </ul>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Niet om ervan weg te vluchten. Maar om te ontdekken wat eronder ligt.
            </p>
            <p className="font-bold text-primair reveal">Wat blijft er over wanneer het stil wordt?</p>
          </div>
        </section>

        {/* Wanneer heb je voor het laatst naar binnen geluisterd */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">
            Wanneer heb jij voor het laatst echt naar binnen geluisterd?
          </h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            We zijn gewend om antwoorden te zoeken met ons hoofd.
          </p>
          <ul id="hoofd-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>Waarom voel ik dit?</li>
            <li>Wat moet ik hiermee?</li>
            <li>Wat moet er veranderen?</li>
            <li>Welke keuze moet ik maken?</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Maar niet ieder antwoord ontstaat door er langer over na te denken. Sommige antwoorden worden pas
            hoorbaar wanneer het denken zachter wordt.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Wanneer je niet langer probeert te zoeken.</p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">Wanneer je jezelf toestaat om te ervaren.</p>
          <p className="text-tekst/80 leading-relaxed reveal">Dat is waar deze Inner Essence Journey je naartoe brengt.</p>
        </section>

        {/* Een reis naar binnen */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col flip">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">Een reis naar binnen</h2>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Tijdens deze journey hoef je vooraf niets te weten. Je hoeft geen intentie te formuleren. Je
                  hoeft niet te bedenken waar je aan wilt werken. Je hoeft zelfs niets op te lossen.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Ik neem je stap voor stap mee in een ervaring rondom het Metaalelement.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-6 reveal">
                  Met meditatie, muziek, verstilling en momenten waarop je wordt uitgenodigd om dieper naar binnen
                  te zakken.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">Wat je daar tegenkomt, is van jou.</p>
                <ul id="misschien-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
                  <li>Misschien ontstaat er helderheid.</li>
                  <li>Misschien dient zich iets aan wat je al een tijdje niet wilde horen.</li>
                  <li>Misschien ervaar je ruimte.</li>
                  <li>Misschien raakt iets je onverwacht.</li>
                  <li>Of misschien wordt het vooral heel stil.</li>
                </ul>
                <p className="text-tekst/80 leading-relaxed mb-1 reveal">Er is geen juiste ervaring.</p>
                <p className="font-bold text-primair reveal">Je hoeft alleen maar te volgen.</p>
              </div>
              <div className="col-image">
                <img src="/fotos/herfstjourney-1.jpg" alt="Een moment van stilte met de handen op het hart tijdens een Inner Essence Journey" />
              </div>
            </div>
          </div>
        </section>

        {/* Wat is werkelijk van waarde */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat is werkelijk van waarde?</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Metaal wordt geassocieerd met verfijning en kostbaarheid. Met het vermogen om onderscheid te maken
            tussen wat ruis is en wat wezenlijk is.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            En dat maakt het misschien wel één van de mooiste elementen om een Inner Essence Journey mee te maken.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Want onder alles wat je doet…</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">onder alles wat je denkt…</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">onder alles wat je denkt te moeten zijn…</p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            ligt iets wat niet verdiend, bewezen of verbeterd hoeft te worden.
          </p>
          <p className="font-bold text-primair mb-6 reveal">Jouw essentie.</p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Misschien weet je precies wat dat voor jou betekent. Misschien heb je geen idee. Dan hoef je daar nu
            ook nog geen antwoord op te hebben. Dat is precies waarom we op reis gaan.
          </p>
        </section>

        {/* Inner Essence Journey - Metaal */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Inner Essence Journey – Metaal</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Dit is geen bijeenkomst waarin ik je een uur lang uitleg geef over het Metaalelement.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Het is een ervaring. Een reis waarin je uitgenodigd wordt om uit je hoofd en steeds verder naar
              binnen te zakken.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Meditatie en muziek nemen je mee.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">De rest hoef je vooraf niet te weten.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Sterker nog…</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">kom zonder verwachtingen.</p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Laat je verrassen door wat zich aandient wanneer je even niet bezig hoeft te zijn met het antwoord.
            </p>
          </div>
        </section>

        {/* Voor wie */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Misschien is dit jouw moment als…</h2>
          <ul id="voorwie-lijst" className="space-y-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>…je verlangt naar meer rust en ruimte.</li>
            <li>…je voelt dat je behoefte hebt aan verstilling.</li>
            <li>…je veel in je hoofd zit en verlangt naar een diepere laag.</li>
            <li>…je op een kruispunt staat en niet nóg harder over het antwoord wilt nadenken.</li>
            <li>…je nieuwsgierig bent naar de wijsheid van de 5 elementen.</li>
            <li>…of wanneer je simpelweg voelt: hier wil ik bij zijn.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">
            Je hoeft geen ervaring te hebben met meditatie, Chinese geneeskunde of de 5 elementen.
          </p>
          <p className="font-bold text-primair reveal">Je hoeft alleen jezelf mee te nemen.</p>
        </section>

        {/* Afsluiting */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">
              Durf jij te ontdekken wat er onder de oppervlakte ligt?
            </h2>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Misschien hoef je niet méér over jezelf te leren.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Misschien hoef je niet nóg een laag toe te voegen.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Misschien mag het juist eenvoudiger.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Stiller.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">Dichter bij de kern.</p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Tijdens de herfstjourney creëren we de ruimte om te ontdekken wat er verschijnt wanneer de
              buitenwereld even zachter wordt.
            </p>
          </div>
        </section>

        {/* Praktische informatie */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische informatie</h2>
          <div className="bg-wit rounded-2xl p-8 space-y-2 text-tekst/80 leading-relaxed mb-8 reveal">
            <p><strong className="text-primair">Datum:</strong> maandag 28 september</p>
            <p><strong className="text-primair">Tijd:</strong> 20.00 uur</p>
            <p><strong className="text-primair">Locatie:</strong> online</p>
            <p><strong className="text-primair">Investering:</strong> gratis</p>
          </div>
          <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Reserveer jouw plek voor de herfstjourney →
          </a>
          <p className="text-tekst/80 leading-relaxed mt-6 reveal">
            Kun je er niet live bij zijn? Meld je dan toch aan, de opname blijft 3 dagen beschikbaar. Wil je de
            journey vaker herhalen? Bestel dan de levenslange toegang mee. Of kies ook één van de andere elementen
            journey&apos;s, deze zijn tijdelijk beschikbaar voor slechts €23,- in plaats van €27,50.
          </p>
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#metaal-lijst', '#hoofd-lijst', '#misschien-lijst', '#voorwie-lijst']} />
    </>
  );
}
