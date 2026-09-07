import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Relaxweekend' };

export default function RelaxweekendPage() {
  return (
    <>
      {/* Hero — herosectie-relax.jpg als achtergrond */}
      <div className="hero-section hero-section-relax" style={{ backgroundImage: "url('/fotos/herosectie-relax.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Relaxweekend</h1>
        </div>
      </div>

      <div className="hero-cover">
      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="two-col">
          <div className="col-text">
            <p className="text-lg font-bold text-primair/90 leading-relaxed mb-8 reveal">
              Een weekend om te landen, los te laten en weer thuis te komen bij jezelf.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">Wanneer was de laatste keer dat je echt even niets hoefde?</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Geen to-do's.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Geen afspraken.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Geen verwachtingen.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">Geen rol die je hoefde te vervullen.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">Alleen jij.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              Een heel weekend waarin je mag vertragen. Waarin je uit je hoofd en terug in je lichaam mag komen.
              Waar je kunt luisteren naar wat er vanbinnen leeft en opnieuw kunt voelen wat jij nodig hebt.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">Welkom bij het Relaxweekend.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              Een weekend waarin de 5 elementen je meenemen op een reis naar binnen én weer naar buiten.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Van landen naar loslaten.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Van verstillen naar verdiepen.</p>
            <p className="text-tekst/80 leading-relaxed mb-1 reveal">Van voelen naar stromen.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">Van binnen naar buiten.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">Een weekend waarin je niets hoeft te bereiken.</p>
            <p className="font-bold text-primair reveal">Je mag er gewoon zijn.</p>
          </div>
          <div className="col-image">
            <img src="/fotos/relaxweekend-avondeten.jpg" alt="Samen aan tafel tijdens het Relaxweekend" />
          </div>
        </div>
      </section>

      {/* De 5 elementen als rode draad */}
      <section className="bg-wit">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">De 5 elementen als rode draad</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            De 5 elementen uit de Chinese geneeswijze dragen ieder een eigen beweging en kwaliteit.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Tijdens het Relaxweekend gebruiken we deze kwaliteiten als inspiratie voor vijf verschillende
            ervaringen.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Niet alleen om meer te leren over de elementen, maar vooral om ze te ervaren.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">In je lichaam.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">In je adem.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">In je stem.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">In je gevoel.</p>
          <p className="text-tekst/80 leading-relaxed reveal">In je aanwezigheid.</p>
        </div>
      </section>

      {/* Het programma */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="two-col mb-12">
          <div className="col-text">
            <h2 className="text-2xl font-bold text-primair mb-4 reveal">Het programma van het Relaxweekend</h2>
            <p className="text-tekst/80 leading-relaxed reveal">
              Vijf sessies, geïnspireerd op de vijf elementen, verspreid over een heel weekend in de yogazaal van
              Samaya.
            </p>
          </div>
          <div className="col-image">
            <img src="/fotos/relaxweekend-yogazaal.jpg" alt="De yogazaal van Samaya" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-primair mb-3 reveal">
          Zaterdagochtend: sessie voor het Aarde-element — Yoga &amp; acupressuur
        </h3>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">We beginnen bij Aarde. Bij landen. Bij voelen. Bij aanwezig zijn.</p>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">
          Aarde geeft ons bedding. Het is de plek waar je mag rusten en waar je jezelf niet hoeft te bewijzen.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Met zachte yoga en acupressuur brengen we de aandacht naar het lichaam. Uit je hoofd. Naar jezelf.
        </p>

        <h3 className="text-lg font-bold text-primair mb-3 reveal">
          Zaterdagmiddag: sessie voor het Metaalelement — Klank, stilte &amp; schrijfreis
        </h3>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">
          Wanneer je bent aangekomen, ontstaat er ruimte om te luisteren.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">
          Wat draag je met je mee? Wat is nog van waarde? En wat mag je misschien achterlaten?
        </p>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Met klank, stilte en schrijven onderzoeken we de kunst van het loslaten. Niet door iets weg te duwen.
          Maar door ruimte te maken. Want wanneer je loslaat wat niet meer nodig is, ontstaat er ruimte voor wat
          wél belangrijk is.
        </p>

        <h3 className="text-lg font-bold text-primair mb-3 reveal">
          Zaterdagavond: sessie voor het Waterelement — Inner Essence Journey
        </h3>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">
          Vanuit die ruimte kunnen we dieper zakken. Water brengt ons naar de stille laag onder het denken en
          doen.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">
          Tijdens de Inner Essence Journey maak je contact met je diepere essentie. Met dat deel in jou dat niet
          hoeft te worden veranderd of verbeterd. Dat er altijd al is.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Water nodigt je uit om te vertragen, te luisteren en te vertrouwen.
        </p>

        <h3 className="text-lg font-bold text-primair mb-3 reveal">
          Zondagochtend: sessie voor het Houtelement — Mantra zingen
        </h3>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">
          Vanuit de diepte mag er weer beweging ontstaan. Hout staat voor groei, beweging, richting en expressie.
          Met mantra zingen geven we ruimte aan wat in jou leeft.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Je hoeft niet mooi te zingen. Je hoeft niets te presteren. Je mag je stem laten klinken. Je mag voelen
          wat er wil bewegen.
        </p>

        <h3 className="text-lg font-bold text-primair mb-3 reveal">
          Zondagmiddag: sessie voor het Vuurelement — Yin yoga
        </h3>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">We eindigen bij Vuur.</p>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">Bij warmte. Bij verbinding. Bij vreugde.</p>
        <p className="text-tekst/80 leading-relaxed mb-2 reveal">
          Tijdens een zachte Yin Yogasessie mag alles wat je tijdens het weekend hebt ervaren rustig landen. Je
          hoeft niets meer te doen. Alleen voelen. Ademen. Ontvangen.
        </p>
        <p className="text-tekst/80 leading-relaxed reveal">
          Vuur herinnert ons aan de warmte die ontstaat wanneer we werkelijk aanwezig zijn. Bij onszelf én bij de
          ander.
        </p>
      </section>

      {/* Van Aarde naar Vuur */}
      <section className="bg-wit">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Van Aarde naar Vuur</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            De 5 elementen vormen samen een mooie beweging:
          </p>
          <p className="text-xl font-bold text-primair mb-6 reveal">Aarde → Metaal → Water → Hout → Vuur</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Je landt.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Je laat los.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Je verdiept.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Je gaat weer stromen.</p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">Je opent.</p>
          <p className="text-tekst/80 leading-relaxed reveal">
            En ondertussen ontstaat er iets wat misschien wel belangrijker is dan welke techniek of oefening dan
            ook: je komt weer thuis bij jezelf.
          </p>
        </div>
      </section>

      {/* Je hoeft even niets */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="two-col flip">
          <div className="col-text">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Je hoeft even niets</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Het Relaxweekend is geen weekend waarin je zoveel mogelijk activiteiten gaat doen. Het is juist een
              uitnodiging om te vertragen.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Om ruimte te laten tussen de sessies. Om te wandelen. Te rusten. Te slapen. Een boek te lezen. Te
              genieten. Of helemaal niets te doen.
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Want ontspanning ontstaat niet altijd door méér te doen. Soms ontstaat het wanneer je eindelijk even
              niets hoeft.
            </p>
          </div>
          <div className="col-image">
            <img src="/fotos/relaxweekend-slaapkamer.jpg" alt="Een rustig moment op de kamer" />
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="bg-wit">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Dit weekend is voor jou als je:</h2>
          <ul id="relaxweekend-voorwie-lijst" className="space-y-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>verlangt naar rust en ruimte;</li>
            <li>behoefte hebt om uit je hoofd en in je lichaam te komen;</li>
            <li>voelt dat je veel geeft en ook wilt ontvangen;</li>
            <li>nieuwsgierig bent naar de wijsheid van de vijf elementen;</li>
            <li>tijd wilt maken voor jezelf;</li>
            <li>wilt vertragen zonder dat je ergens aan hoeft te werken;</li>
            <li>of gewoon voelt: ik ben toe aan een weekend voor mezelf.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">
            Je hoeft geen ervaring te hebben met yoga, acupressuur, mantra's of de vijf elementen.
          </p>
          <p className="font-bold text-primair reveal">Je hoeft niets te kunnen. Je hoeft alleen maar te komen zoals je bent.</p>
        </div>
      </section>

      {/* Afsluiting */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Gun jezelf het Relaxweekend</h2>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Een weekend om te landen in Aarde.</p>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Om los te laten met Metaal.</p>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Om te verdiepen in Water.</p>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Om te stromen met Hout.</p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">En om je opnieuw te openen met Vuur.</p>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Een weekend om op adem te komen.</p>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Een weekend om te voelen.</p>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Een weekend om te ontspannen.</p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">Een weekend om weer thuis te komen bij jezelf.</p>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Je hoeft niets te worden.</p>
        <p className="text-tekst/80 leading-relaxed mb-1 reveal">Je hoeft niets te bereiken.</p>
        <p className="font-bold text-primair mb-10 reveal">Je mag er gewoon zijn.</p>
        <a href="https://laposta.nl/f/ssawazbpxrpg" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
          Ik wil mee →
        </a>
      </section>

      {/* Praktische info */}
      <section className="bg-wit">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="two-col mb-8">
            <div className="col-text">
              <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische info</h2>
              <div className="bg-achtergrond rounded-2xl p-8 space-y-2 text-tekst/80 leading-relaxed reveal">
                <p><strong className="text-primair">Datum:</strong> 13 en 14 februari 2027</p>
                <p><strong className="text-primair">Locatie:</strong> conferentiecentrum Samaya in Werkhoven</p>
                <p><strong className="text-primair">Investering:</strong> €455,- · early bird t/m 24 september: €428,-</p>
              </div>
            </div>
            <div className="col-image">
              <img src="/fotos/relaxweekend-samaya.jpg" alt="Conferentiecentrum Samaya in Werkhoven" />
            </div>
          </div>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">
            Er is ruimte voor maximaal 11 deelnemers, het weekend gaat door bij minimaal 8 deelnemers.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-10 reveal">
            De prijs is inclusief overnachting, 2x lunch, 1x ontbijt, 1x diner en de 5 sessies.
          </p>
          <p className="font-bold text-primair mb-8 reveal">Gun jezelf een weekend. Gewoon voor jou.</p>
          <a href="https://laposta.nl/f/ssawazbpxrpg" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Ik wil mee →
          </a>
        </div>
      </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#relaxweekend-voorwie-lijst']} />
    </>
  );
}
