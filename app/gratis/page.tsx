import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Gratis' };

const AANMELD_URL = 'https://laposta.nl/f/ssfrrowk5l22';

export default function GratisPage() {
  return (
    <>
      {/* Hero — herosectie-gratis.jpg als achtergrond */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/herosectie-gratis.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Gratis Emotie EHBO 5-daagse
          </h1>
        </div>
      </div>

      <div className="hero-cover">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
          <p className="text-lg font-bold text-primair/90 leading-relaxed mb-8 reveal">
            Ontdek wat jouw emoties je écht proberen te vertellen volgens de 5 elementen.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Heb je weleens het gevoel dat je emoties er zomaar ineens zijn? Je bent sneller geïrriteerd dan je zou
            willen. Je blijft maar piekeren, je voelt verdriet dat je niet goed kunt plaatsen of je maakt je
            voortdurend zorgen over de toekomst?
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Vaak proberen we die gevoelens weg te stoppen of op te lossen. Maar wat als je emoties juist een
            belangrijke boodschap voor je hebben?
          </p>
          <p className="text-tekst/80 leading-relaxed mb-8 reveal">
            Volgens de Traditionele Chinese Geneeskunde is elke emotie verbonden met één van de Vijf Elementen.
            Wanneer je begrijpt welk element om aandacht vraagt, ga je met heel andere ogen naar jezelf kijken.
            Niet vanuit oordeel, maar vanuit begrip.
          </p>
          <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Meld je aan voor de 5-daagse →
          </a>
        </section>

        {/* Wat je gaat ontdekken */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat je in deze 5-daagse gaat ontdekken</h2>
            <ul id="ontdekken-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>Welke emotie hoort bij elk van de Vijf Elementen.</li>
              <li>Wat frustratie, onrust, piekeren, verdriet en angst je proberen te vertellen.</li>
              <li>Waarom emoties geen vijanden zijn, maar waardevolle richtingaanwijzers.</li>
              <li>Praktische reflectievragen waarmee je direct meer inzicht krijgt in jezelf.</li>
            </ul>
          </div>
        </section>

        {/* Voor wie */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Deze 5-daagse is voor jou als...</h2>
          <ul id="voorwie-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>je beter wilt begrijpen waarom bepaalde emoties steeds terugkomen;</li>
            <li>je nieuwsgierig bent naar de 5 elementen;</li>
            <li>je verlangt naar meer rust en zelfinzicht;</li>
            <li>je op een zachte manier naar jezelf wilt leren kijken.</li>
          </ul>
        </section>

        {/* Aanmelden */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">
              Meld je gratis aan voor de Emotie EHBO 5-daagse
            </h2>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">Gun jezelf een nieuw perspectief op je emoties.</p>
            <p className="text-tekst/80 leading-relaxed mb-8 reveal">
              Vul hieronder je naam en e-mailadres in en ontvang dag 1 direct in je mailbox.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">Je ontdekt:</p>
            <ul id="ontdekt-lijst" className="inline-block text-left space-y-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>de vijf emoties en hun betekenis;</li>
              <li>welk element mogelijk uit balans is;</li>
              <li>eenvoudige reflectievragen die je meteen kunt toepassen.</li>
            </ul>
            <div>
              <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
                Meld je aan voor de 5-daagse →
              </a>
            </div>
          </div>
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#ontdekken-lijst', '#voorwie-lijst', '#ontdekt-lijst']} />
    </>
  );
}
